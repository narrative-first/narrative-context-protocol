const Ajv = require('ajv');
const Ajv2020 = require('ajv/dist/2020');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const repoRoot = path.join(__dirname, '..');
const structuralNotice = 'NOTICE: NCP schema validation is structural only. It does not determine whether a document contains a complete, coherent, or valid Dramatica Storyform.';

console.log(structuralNotice);

if (args.length === 0) {
  console.error('Usage: node tests/validate-file.js <file1.json> [file2.json ...]');
  process.exit(1);
}

function readSchema(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
}

const legacyAjv = new Ajv({ allErrors: true, strict: false });
const validateLegacy = legacyAjv.compile(readSchema('schema/ncp-schema.json'));

const modernAjv = new Ajv2020({ allErrors: true, strict: false });
modernAjv.addFormat('date-time', /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|[+-]\d{2}:\d{2})$/i);
modernAjv.addFormat('uri', /^[a-z][a-z0-9+.-]*:[^\s]*$/i);
const validateCore = modernAjv.compile(readSchema('core/ncp-core-schema.json'));
const validateDramaticaProfile = modernAjv.compile(readSchema('profiles/dramatica/profile-schema.json'));

function validateExternalOmc(data) {
  const reference = data && data.value && data.value.ncp_document;
  return Boolean(
    data &&
    data.domain === 'narrativecontextprotocol.com' &&
    data.namespace === 'ncp:' &&
    reference &&
    reference.id &&
    /^[a-z][a-z0-9+.-]*:\/\//i.test(reference.uri || '')
  );
}

function formatErrors(errors) {
  return (errors || [])
    .map((error) => `${error.instancePath || '/'} ${error.message}`)
    .join('; ');
}

function validatorFor(data) {
  if (data && typeof data === 'object' && data.ncp_version) {
    return { name: 'NCP Core schema', validate: validateCore };
  }

  if (data && data.namespace === 'dramatica:' && data.profile_version) {
    return { name: 'Dramatica profile transport schema', validate: validateDramaticaProfile };
  }

  if (data && data.domain === 'narrativecontextprotocol.com' && data.namespace === 'ncp:' && data.value && data.value.ncp_version) {
    return { name: 'NCP-OMC embedded fragment', validate: validateCore, value: data.value };
  }

  if (data && data.domain === 'narrativecontextprotocol.com' && data.namespace === 'ncp:' && data.value && data.value.ncp_document) {
    return { name: 'NCP-OMC external-reference fragment', validate: validateExternalOmc };
  }

  if (data && typeof data === 'object' && data.schema_version) {
    return { name: 'frozen legacy NCP schema', validate: validateLegacy };
  }

  return null;
}

let failures = 0;

for (const inputPath of args) {
  const targetPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath);
  let data;

  try {
    data = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${inputPath}: unable to parse JSON (${error.message})`);
    continue;
  }

  const selected = validatorFor(data);

  if (!selected) {
    failures += 1;
    console.error(`FAIL ${inputPath}: unable to select a schema; expected ncp_version, schema_version, a dramatica: profile payload, or an NCP-OMC fragment`);
    continue;
  }

  if (selected.validate(selected.value || data)) {
    console.log(`PASS ${selected.name} ${inputPath}`);
  } else {
    failures += 1;
    console.error(`FAIL ${selected.name} ${inputPath}: ${formatErrors(selected.validate.errors)}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log('NCP schema validation passed.');
}

console.log(structuralNotice);
