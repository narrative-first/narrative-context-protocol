const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const { scriptErrors } = require('./script-contract');
const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, '../examples/script', name), 'utf8'));
const fixtures = ['minimal-script.json', 'linked-script.json', 'shawshank-act-one.json'];
for (const fixture of fixtures) assert.deepEqual(scriptErrors(read(fixture)), [], fixture);
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
