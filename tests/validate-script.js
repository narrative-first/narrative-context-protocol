const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const { scriptErrors } = require('./script-contract');
const Ajv2020 = require('ajv/dist/2020');
const coreAjv = new Ajv2020({ allErrors: true, strict: false });
coreAjv.addFormat('date-time', /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|[+-]\d{2}:\d{2})$/i);
coreAjv.addFormat('uri', /^[a-z][a-z0-9+.-]*:[^\s]*$/i);
const validateCore = coreAjv.compile(JSON.parse(fs.readFileSync(path.join(__dirname, '../core/ncp-core-schema.json'), 'utf8')));
const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, '../examples/script', name), 'utf8'));
const fixtures = ['minimal-script.json', 'linked-script.json', 'shawshank-act-one.json', 'legacy-draft-script.json'];
for (const fixture of fixtures) {
  const document = read(fixture);
  assert.equal(validateCore(document), true, `${fixture}: ${JSON.stringify(validateCore.errors)}`);
  assert.deepEqual(scriptErrors(document), [], fixture);
}
assert.equal(fs.readFileSync(path.join(__dirname, '../extensions/script/script-schema.json'), 'utf8'), fs.readFileSync(path.join(__dirname, '../extensions/script/1.0.0/script-schema.json'), 'utf8'), 'Latest schema alias must match the versioned contract.');
const cases = [
  ['unknown unit', p => { p.structural_links[0].unit_id = 'missing'; }],
  ['missing evidence', p => { p.structural_links[0].evidence_block_ids = []; }],
  ['unknown evidence', p => { p.structural_links[0].evidence_block_ids = ['missing']; }],
  ['duplicate ID', p => { p.units.push({ ...p.units[0] }); }],
  ['unassigned block', p => { p.units[0].block_ids.pop(); }],
  ['reversed anchor', p => { p.blocks[0].source.end.line = 0; }],
  ['unknown source', p => { p.units[0].source.source_id = 'missing'; }],
  ['mixed coordinates', p => { p.blocks[0].source.end = { paragraph: 1 }; }],
  ['source text omitted', p => { delete p.blocks[0].text; }],
  ['unsupported unit kind', p => { p.units[0].kind = 'storybeat'; }],
  ['gap reported complete', p => { p.review_issues = [{id:'gap',severity:'gap',unit_ids:[],description:'Unreadable page'}]; }]
];
for (const [name, mutate] of cases) {
  const document = read('linked-script.json');
  mutate(document.payloads['ncp-script:']);
  assert.ok(scriptErrors(document).length, name);
}
for (const mutate of [d => { d.extensions = []; }, d => { delete d.payloads['ncp-script:']; }, d => { d.extensions[0].version = '99.0'; }]) {
  const document = read('minimal-script.json');
  mutate(document);
  assert.ok(scriptErrors(document).length);
}
assert.deepEqual(scriptErrors({ ncp_version:'3.0.0-rc.1' }), []);
console.log(`NCP Script schema validation passed (${fixtures.length} positive and ${cases.length + 3} negative cases).`);

const stableCases = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/script-stable-reference-cases.json'), 'utf8'));
for (const scenario of stableCases) {
  for (const version of ['1.0.0', '0.1.0-draft']) {
    const document = read(version === '1.0.0' ? 'minimal-script.json' : 'legacy-draft-script.json');
    for (const [key, value] of Object.entries(scenario.changes)) {
      const keys = key.split('.');
      const target = keys.slice(0, -1).reduce((target, segment) => target[segment], document.payloads['ncp-script:']);
      target[keys.at(-1)] = structuredClone(value);
    }
    assert.equal(scriptErrors(document).length === 0, version === '0.1.0-draft', `${version}: ${scenario.name}`);
  }
}
const empty = read('minimal-script.json');
empty.payloads['ncp-script:'].scope.capture_status = 'incomplete';
empty.payloads['ncp-script:'].units = [];
empty.payloads['ncp-script:'].blocks = [];
assert.deepEqual(scriptErrors(empty), []);
const labels = read('minimal-script.json');
labels.payloads['ncp-script:'].units[0].interior_exterior = 'INT/EXT';
labels.payloads['ncp-script:'].units[0].source.start.printed_page = 'A1';
assert.deepEqual(scriptErrors(labels), []);
console.log(`PASS ${stableCases.length} stable reference regressions with frozen-draft compatibility, incomplete capture and revision labels.`);
