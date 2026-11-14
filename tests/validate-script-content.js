const assert = require('assert/strict');
const { fountain, scriptContentErrors } = require('../tools/script-content');
const fixture = require('../examples/script-content/minimal-script.json');
assert.deepEqual(scriptContentErrors(fixture), []);
assert.equal(fountain(fixture.payloads['ncp-script-content:']), 'INT. STATION - NIGHT\n\nRain tracks across the empty platform.\nA clock stops.\n\nMARA\n(quietly)\nWe still have time.\n\nMARA\nRun!\n\nSOL ^\nWait!\n\nCUT TO:\n');
for (const [name, mutate] of [
    ['duplicate ID', p => { p.scenes[0].blocks[1].id = 'heading'; }],
    ['reversed order', p => { p.scenes[0].blocks[1].order = 1; }],
    ['layout metadata', p => { p.scenes[0].blocks[0].source = { line: 1 }; }],
    ['invalid dual speech', p => { p.scenes[0].blocks[5].right[0].type = 'action'; }],
    ['nested duplicate ID', p => { p.scenes[0].blocks[5].right[0].id = 'cue'; }],
    ['missing words', p => { delete p.scenes[0].blocks[0].text; }],
    ['unsupported version', p => { p.version = '99.0.0'; }]
]) {
    const document = structuredClone(fixture); mutate(document.payloads['ncp-script-content:']);
    assert.ok(scriptContentErrors(document).length, name);
}
const dangling = structuredClone(fixture);
dangling.storytelling_moments = [{ id: 'moment', references: [{ system: 'ncp-script-content:', value: 'absent', entity_type: 'script_scene' }] }];
assert.ok(scriptContentErrors(dangling).some(e => e.includes('Unknown script content reference')));
for (const mutate of [d => { d.extensions = []; }, d => { delete d.payloads['ncp-script-content:']; }, d => { d.extensions.push(d.extensions[0]); }]) {
    const d = structuredClone(fixture); mutate(d); assert.ok(scriptContentErrors(d).length);
}
assert.deepEqual(scriptContentErrors({}), []);
console.log('NCP Script Content schema validation passed: content rendering, IDs, order, dual dialogue, references and version compatibility.');
