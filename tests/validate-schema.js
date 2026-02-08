const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');

const ajv = new Ajv({ allErrors: true, strict: false });
const schemaPath = path.join(__dirname, '../schema/ncp-schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const validate = ajv.compile(schema);

const validFixtures = [
  '../examples/example-story.json',
  '../examples/anora.json',
  '../examples/the-shawshank-redemption.json'
];

const invalidDir = path.join(__dirname, '../examples/invalid');
const invalidFixtures = fs.existsSync(invalidDir)
  ? fs.readdirSync(invalidDir).filter((name) => name.endsWith('.json')).map((name) => `../examples/invalid/${name}`)
  : [];

function readJson(relativePath) {
  const fullPath = path.join(__dirname, relativePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

function formatErrors(errors) {
  return (errors || []).map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ');
}

let failures = 0;

for (const fixture of validFixtures) {
  const data = readJson(fixture);
  const ok = validate(data);
  if (!ok) {
    failures += 1;
    console.error(`FAIL valid fixture ${fixture}: ${formatErrors(validate.errors)}`);
  } else {
    console.log(`PASS valid fixture ${fixture}`);
  }
}

for (const fixture of invalidFixtures) {
  const data = readJson(fixture);
  const ok = validate(data);
  if (ok) {
    failures += 1;
    console.error(`FAIL invalid fixture ${fixture}: expected schema validation to fail`);
  } else {
    console.log(`PASS invalid fixture ${fixture}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`Schema validation checks passed (${validFixtures.length} valid + ${invalidFixtures.length} invalid fixtures).`);
}
