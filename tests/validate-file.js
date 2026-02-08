const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node tests/validate-file.js <file1.json> [file2.json ...]');
  process.exit(1);
}

const repoRoot = path.join(__dirname, '..');
const schemaPath = path.join(repoRoot, 'schema/ncp-schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

function formatErrors(errors) {
  return (errors || [])
    .map((error) => `${error.instancePath || '/'} ${error.message}`)
    .join('; ');
}

let failures = 0;

for (const inputPath of args) {
  const targetPath = path.isAbsolute(inputPath)
    ? inputPath
    : path.resolve(process.cwd(), inputPath);

  let data;

  try {
    data = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${inputPath}: unable to parse JSON (${error.message})`);
    continue;
  }

  const ok = validate(data);

  if (ok) {
    console.log(`PASS ${inputPath}`);
  } else {
    failures += 1;
    console.error(`FAIL ${inputPath}: ${formatErrors(validate.errors)}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
}
