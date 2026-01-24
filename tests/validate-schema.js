const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');

const ajv = new Ajv();
const schemaPath = path.join(__dirname, '../schema/ncp-schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Load the example narrative file
const dataPath = path.join(__dirname, '../examples/example-story.json');
const narrativeData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const validate = ajv.compile(schema);
const valid = validate(narrativeData);

if (valid) {
  console.log('Narrative JSON is valid!');
} else {
  console.error('Validation errors:', validate.errors);
}
