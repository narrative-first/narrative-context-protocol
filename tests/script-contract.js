const fs = require('fs');
const path = require('path');
const Ajv2020 = require('ajv/dist/2020');

const namespace = 'ncp-script:';
const schemas = new Map([
  ['0.1.0-draft', '../extensions/script/0.1.0-draft/script-schema.json'],
  ['1.0.0', '../extensions/script/1.0.0/script-schema.json']
].map(([version, relative]) => {
  const schema = JSON.parse(fs.readFileSync(path.join(__dirname, relative), 'utf8'));
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  ajv.addFormat('date-time', /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|[+-]\d{2}:\d{2})$/i);
  ajv.addFormat('uri', /^[a-z][a-z0-9+.-]*:[^\s]*$/i);
  return [version, { schema, validate: ajv.compile(schema) }];
}));

function scriptErrors(document) {
  const declaration = (document.extensions || []).filter(item => item.namespace === namespace);
  const payload = document.payloads && document.payloads[namespace];
  if (!declaration.length && payload === undefined) return [];
  const selected = declaration.length === 1 && schemas.get(declaration[0].version);
  if (!selected || declaration[0].schema !== selected.schema.$id) {
    return ['Script extension requires one supported version and schema declaration.'];
  }
  if (!selected.validate(payload)) return (selected.validate.errors || []).map(e => `${e.instancePath || '/'} ${e.message}`);
  return scriptReferenceErrors(payload);
}

function scriptReferenceErrors(payload) {
  const stable = payload.version === '1.0.0';
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
  if (stable) {
    for (const source of sources.values()) {
      const range = source.covered_pdf_pages;
      if (range && (range[0] > range[1] || source.pdf_page_count !== undefined && range[1] > source.pdf_page_count)) fail('Invalid covered physical PDF page range.');
    }
  }
  const position = p => [p.pdf_page || 0, p.paragraph || p.line];
  const checkSpan = span => {
    if (!sources.has(span.source_id)) fail(`Unknown anchor source: ${span.source_id}`);
    const start = position(span.start), end = position(span.end);
    if (start[0] > end[0] || start[0] === end[0] && start[1] > end[1]) fail('Source anchor ends before it starts.');
    if (('line' in span.start) !== ('line' in span.end) || ('paragraph' in span.start) !== ('paragraph' in span.end)) fail('Source anchor coordinate types must match.');
    if (!stable) return;
    for (const point of [span.start, span.end]) {
      const line = 'line' in point, paragraph = 'paragraph' in point, page = 'pdf_page' in point;
      if (line === paragraph) fail('Source anchors require exactly one coordinate type.');
      if (page && !line) fail('PDF page anchors require line coordinates.');
      if (span.coordinate_system === 'pdf-layout-lines-v1' && (!line || !page)) fail('PDF layout anchors require a physical page and line.');
      if (span.coordinate_system === 'text-lines-v1' && (!line || page)) fail('Text anchors require lines without PDF pages.');
      if (span.coordinate_system === 'fdx-paragraphs-v1' && (!paragraph || page)) fail('FDX anchors require paragraphs without PDF pages.');
      const count = sources.get(span.source_id)?.pdf_page_count;
      if (count !== undefined && page && point.pdf_page > count) fail('Source anchor exceeds the PDF page count.');
      const range = sources.get(span.source_id)?.covered_pdf_pages;
      if (range && page && (point.pdf_page < range[0] || point.pdf_page > range[1])) fail('Source anchor falls outside the captured PDF page range.');
    }
    if (('pdf_page' in span.start) !== ('pdf_page' in span.end)) fail('Source anchors must pair physical PDF pages.');
  };
  if (!sources.has(payload.scope.source_id)) fail('Unknown scope source.');
  for (const key of ['first_unit_id', 'last_unit_id']) {
    if (payload.scope[key] && !units.has(payload.scope[key])) fail(`Unknown scope ${key}.`);
  }
  if (stable && units.has(payload.scope.first_unit_id) && units.has(payload.scope.last_unit_id)
      && units.get(payload.scope.first_unit_id).order > units.get(payload.scope.last_unit_id).order) fail('Scope endpoints are reversed.');
  let previous = 0;
  const assigned = new Set();
  for (const unit of payload.units) {
    if (unit.order <= previous) fail('Unit order must increase strictly in presentation order.');
    previous = unit.order;
    checkSpan(unit.source);
    if (unit.parent_unit_id && (!units.has(unit.parent_unit_id) || units.get(unit.parent_unit_id).order >= unit.order)) fail('Parent must reference an earlier unit.');
    if (unit.location_entity_id && (!entities.has(unit.location_entity_id) || stable && entities.get(unit.location_entity_id).kind !== 'location')) fail('Unknown or non-location entity.');
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
    if (stable && units.has(block.unit_id) && units.get(block.unit_id).source.source_id !== block.source.source_id) fail('Block source differs from its owning unit.');
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

module.exports = { scriptErrors, scriptReferenceErrors };
