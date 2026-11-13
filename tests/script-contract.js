const fs = require('fs');
const path = require('path');
const Ajv2020 = require('ajv/dist/2020');

const namespace = 'ncp-script:';
const schema = JSON.parse(fs.readFileSync(path.join(__dirname, '../extensions/script/script-schema.json'), 'utf8'));
const ajv = new Ajv2020({ allErrors: true, strict: false });
ajv.addFormat('date-time', /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|[+-]\d{2}:\d{2})$/i);
ajv.addFormat('uri', /^[a-z][a-z0-9+.-]*:[^\s]*$/i);
const validate = ajv.compile(schema);

function scriptErrors(document) {
  const declaration = (document.extensions || []).filter(item => item.namespace === namespace);
  const payload = document.payloads && document.payloads[namespace];
  if (!declaration.length && payload === undefined) return [];
  if (declaration.length !== 1 || declaration[0].version !== '0.1.0-draft' || declaration[0].schema !== schema.$id) {
    return ['Script extension requires one supported version and schema declaration.'];
  }
  if (!validate(payload)) return (validate.errors || []).map(e => `${e.instancePath || '/'} ${e.message}`);
  const errors = [];
  const fail = message => errors.push(message);
  const index = (items, label) => {
    const result = new Map();
    for (const item of items) {
      if (result.has(item.id)) fail(`Duplicate ${label} ID: ${item.id}`);
      result.set(item.id, item);
    }
    return result;
  };
  const sources = index(payload.sources, 'source');
  const units = index(payload.units, 'unit');
  const blocks = index(payload.blocks, 'block');
  const entities = index(payload.entities, 'entity');
  index(payload.relations || [], 'relation');
  index(payload.structural_links || [], 'association');
  index(payload.review_issues || [], 'review issue');
  const position = p => [p.pdf_page || 0, p.paragraph || p.line];
  const checkSpan = span => {
    if (!sources.has(span.source_id)) fail(`Unknown anchor source: ${span.source_id}`);
    const start = position(span.start), end = position(span.end);
    if (start[0] > end[0] || start[0] === end[0] && start[1] > end[1]) fail('Source anchor ends before it starts.');
    if (('line' in span.start) !== ('line' in span.end) || ('paragraph' in span.start) !== ('paragraph' in span.end)) fail('Source anchor coordinate types must match.');
  };
  if (!sources.has(payload.scope.source_id)) fail('Unknown scope source.');
  for (const key of ['first_unit_id', 'last_unit_id']) {
    if (payload.scope[key] && !units.has(payload.scope[key])) fail(`Unknown scope ${key}.`);
  }
  let previous = 0;
  const assigned = new Set();
  for (const unit of payload.units) {
    if (unit.order <= previous) fail('Unit order must increase strictly in presentation order.');
    previous = unit.order;
    checkSpan(unit.source);
    if (unit.parent_unit_id && (!units.has(unit.parent_unit_id) || units.get(unit.parent_unit_id).order >= unit.order)) fail('Parent must reference an earlier unit.');
    if (unit.location_entity_id && !entities.has(unit.location_entity_id)) fail('Unknown location entity.');
    for (const id of unit.block_ids) {
      if (!blocks.has(id) || blocks.get(id).unit_id !== unit.id) fail(`Block ownership mismatch: ${id}`);
      if (assigned.has(id)) fail(`Block assigned more than once: ${id}`);
      assigned.add(id);
    }
    for (const observation of unit.observations || []) {
      if (!entities.has(observation.entity_id) || !blocks.has(observation.block_id) || blocks.get(observation.block_id).unit_id !== unit.id) fail('Observation references an unknown entity or a block outside its unit.');
    }
  }
  for (const block of payload.blocks) {
    if (!assigned.has(block.id) || !units.has(block.unit_id)) fail(`Unassigned block: ${block.id}`);
    checkSpan(block.source);
  }
  for (const relation of payload.relations || []) {
    if (!units.has(relation.from_unit_id) || !units.has(relation.to_unit_id)) fail('Relation references an unknown unit.');
    for (const id of relation.evidence_block_ids || []) if (!blocks.has(id)) fail('Relation references an unknown evidence block.');
  }
  for (const link of payload.structural_links || []) {
    if (!units.has(link.unit_id)) fail('Association references an unknown unit.');
    if (!link.evidence_block_ids.length) fail('Structural associations require source evidence.');
    for (const id of link.evidence_block_ids) {
      if (!blocks.has(id) || blocks.get(id).unit_id !== link.unit_id) fail('Association evidence must belong to its unit.');
    }
  }
  for (const issue of payload.review_issues || []) {
    for (const id of issue.unit_ids) if (!units.has(id)) fail('Review issue references an unknown unit.');
    if (issue.severity === 'gap' && payload.scope.capture_status === 'extracted_text_accounted_for') fail('Capture with known gaps must be incomplete.');
  }
  return errors;
}

module.exports = { scriptErrors };
