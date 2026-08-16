# Developer Documentation for 3.0.0-rc.1

## Install and validate

```bash
npm install
npm run validate:schema
```

Validate one or more documents:

```bash
npm run validate:file -- examples/core/minimal-ncp.json
npm run validate:file -- examples/dramatica-profile/existing-storyform.json
npm run validate:file -- bindings/omc/examples/embedded-ncp.json
```

The validator selects a schema by document shape and labels the selected layer. Every result includes the warning that schema validation is structural only.

## Implement Core

1. Read the [architecture specification](../SPECIFICATION.md).
2. Implement the [Core JSON Schema](../core/ncp-core-schema.json).
3. Preserve declared profile and extension payloads you do not understand.
4. Keep external production data behind Core references instead of copying its full model.
5. Record transformations and migrations in provenance.

## Implement a profile or extension

- choose a distinct namespace;
- publish a version and transport schema;
- keep narrative-system semantics outside Core;
- provide synthetic positive and negative fixtures;
- document compatibility and migration behavior; and
- label schema conformance separately from semantic conformance.

Do not add third-party or workflow concepts to the `dramatica:` profile. Do not publish Dramatica inference, generation, relationship, diagnosis, completion, resolution, or semantic-validation logic.

The Dramatica Storyform Profile is NCP's foundational profile but is not required by Core. Developers who need licensed Dramatica semantic validation, certification, MCP, SDK, studio integration, or private deployment should start at [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

## Bind NCP to another workflow

A binding identifies whether NCP is embedded or externally referenced, how its schema and version are declared, which system remains authoritative for external objects, and which validation layers apply.

See the [NCP-OMC Binding](../bindings/omc/omc-binding.md) for the first candidate.
