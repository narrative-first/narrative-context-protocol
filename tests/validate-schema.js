const Ajv = require('ajv');
const Ajv2020 = require('ajv/dist/2020');
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const structuralNotice = 'NOTICE: NCP schema validation is structural only. It does not determine whether a document contains a complete, coherent, or valid Dramatica Storyform.';

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
}

function formatErrors(errors) {
  return (errors || []).map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ');
}

function compile2020(relativePath) {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  ajv.addFormat('date-time', /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|[+-]\d{2}:\d{2})$/i);
  ajv.addFormat('uri', /^[a-z][a-z0-9+.-]*:[^\s]*$/i);
  return ajv.compile(readJson(relativePath));
}

console.log(structuralNotice);

const legacyAjv = new Ajv({ allErrors: true, strict: false });
const validateLegacy = legacyAjv.compile(readJson('schema/ncp-schema.json'));
const validateCore = compile2020('core/ncp-core-schema.json');
const validateDramaticaProfile = compile2020('profiles/dramatica/profile-schema.json');

const legacyValidFixtures = [
  'examples/example-story.json',
  'examples/story-settings.json',
  'examples/ideation-beginner.json',
  'examples/complete-space-adventure-storyform.json',
  'examples/complete-storyform-template.json',
  'examples/cross-narrative-moments.json',
  'examples/storypoint-throughline-empty-perspectives.json',
  'examples/storypoint-throughline-both-refs.json'
];

const invalidDir = path.join(repoRoot, 'examples/invalid');
const legacyInvalidFixtures = fs.readdirSync(invalidDir)
  .filter((name) => name.endsWith('.json'))
  .map((name) => `examples/invalid/${name}`);

const checks = [
  ...legacyValidFixtures.map((fixture) => ({ fixture, validate: validateLegacy, expected: true, layer: 'legacy schema' })),
  ...legacyInvalidFixtures.map((fixture) => ({ fixture, validate: validateLegacy, expected: false, layer: 'legacy schema' })),
  { fixture: 'examples/core/minimal-ncp.json', validate: validateCore, expected: true, layer: 'NCP Core schema' },
  { fixture: 'examples/core/portable-reference.json', validate: validateCore, expected: true, layer: 'NCP Core schema' },
  { fixture: 'examples/core/attested-profile.json', validate: validateCore, expected: true, layer: 'NCP Core schema' },
  { fixture: 'examples/core/invalid-missing-story.json', validate: validateCore, expected: false, layer: 'NCP Core schema' },
  { fixture: 'examples/core/invalid-reference-uri.json', validate: validateCore, expected: false, layer: 'NCP Core schema' },
  { fixture: 'examples/core/invalid-attestation.json', validate: validateCore, expected: false, layer: 'NCP Core schema' },
  { fixture: 'examples/core/invalid-version.json', validate: validateCore, expected: false, layer: 'NCP Core schema' },
  { fixture: 'examples/dramatica-profile/existing-storyform.json', validate: validateDramaticaProfile, expected: true, layer: 'Dramatica profile transport schema' },
  { fixture: 'examples/dramatica-profile/invalid-profile-version.json', validate: validateDramaticaProfile, expected: false, layer: 'Dramatica profile transport schema' }
];

let failures = 0;

for (const check of checks) {
  const ok = check.validate(readJson(check.fixture));

  if (ok !== check.expected) {
    failures += 1;
    const detail = check.expected ? formatErrors(check.validate.errors) : 'expected schema validation to fail';
    console.error(`FAIL ${check.layer} ${check.fixture}: ${detail}`);
  } else {
    console.log(`PASS ${check.layer} ${check.fixture}`);
  }
}

const embeddedOmc = readJson('bindings/omc/examples/embedded-ncp.json');
if (embeddedOmc.domain !== 'narrativecontextprotocol.com' || embeddedOmc.namespace !== 'ncp:' || !validateCore(embeddedOmc.value)) {
  failures += 1;
  console.error(`FAIL NCP-OMC binding embedded fragment: ${formatErrors(validateCore.errors)}`);
} else {
  console.log('PASS NCP-OMC binding embedded fragment');
}

const externalOmc = readJson('bindings/omc/examples/external-reference.json');
const externalReference = externalOmc.value && externalOmc.value.ncp_document;
if (externalOmc.domain !== 'narrativecontextprotocol.com' || externalOmc.namespace !== 'ncp:' || !externalReference || !externalReference.id || !/^[a-z][a-z0-9+.-]*:\/\//i.test(externalReference.uri || '')) {
  failures += 1;
  console.error('FAIL NCP-OMC binding external-reference fragment');
} else {
  console.log('PASS NCP-OMC binding external-reference fragment');
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`NCP schema validation passed (${checks.length + 2} structural fixture checks).`);
}

console.log(structuralNotice);
