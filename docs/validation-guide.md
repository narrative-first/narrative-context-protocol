# Validation Guide for the Universal Narrative Model

This guide explains how to validate your narrative JSON files using the Universal Narrative Model schema.

## Tools & Prerequisites

- **JSON Schema Validator:** Use tools such as [AJV](https://ajv.js.org/) or [JSON Schema Lint](https://jsonschemalint.com/).
- **Node.js:** If using the provided JavaScript validation script.

## Validation Methods

### 1. Online Validation
- Use an online JSON Schema validator (e.g., [JSON Schema Lint](https://jsonschemalint.com/)).
- Paste the contents of `schema/unm-schema.json` into the schema section.
- Paste your narrative JSON (e.g., from `examples/example-story.json`) into the data section.
- Validate to check for any schema compliance errors.

### 2. Using the Provided Validation Script

A simple validation script is provided in `tests/validate-schema.js`.

1. **Install Dependencies:**
   ```bash
   npm install ajv
   ```
2. **Run the Script:**
    ```bash
    node tests/validate-schema.js
    ```

The script will output whether the narrative JSON is valid or list any validation errors.