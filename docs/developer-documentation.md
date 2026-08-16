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

The validator selects a schema by document shape and labels the selected layer. For a Core document carrying a recognized Dramatica payload, it validates and reports the Core and profile layers separately. Every result includes the warning that schema validation is structural only.

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

Do not add third-party or workflow concepts to the `dramatica:` profile. The public profile includes its complete transport structure, terminology, definitions, and approved direct mappings. Do not add Storyform inference or generation algorithms, valid-combination logic, private structural matrices, diagnosis, completion, resolution, or semantic-validation technology.

The Dramatica Storyform Profile is NCP's foundational profile but is not required by Core. Developers who need licensed Dramatica semantic validation, certification, MCP, SDK, studio integration, or private deployment should start at [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

## Name the layers precisely

- Use **NCP** for the complete interoperability architecture.
- Use **NCP Core** for the narrative-system-neutral envelope.
- Use **NCP document** for an exchanged file or serialized package.
- Use **Dramatica Storyform Profile** for the public Dramatica representation carried by NCP.
- Use **Storyform** for the author's structural argument in an authoring experience.
- Use **Dramatica Semantic Model** or **DSM** for the licensed intelligence behind Storyform creation and semantic validity; do not use DSM as another name for the profile.

In a Dramatica application, prefer **Export NCP Document** and describe the result as including a Dramatica Storyform Profile. Label structural results **NCP schema validation** or **Dramatica profile schema validation**. Reserve **valid Storyform** and **certified Storyform** for results issued by licensed Dramatica intelligence.

## Bind NCP to another workflow

A binding identifies whether NCP is embedded or externally referenced, how its schema and version are declared, which system remains authoritative for external objects, and which validation layers apply.

See the [NCP-OMC Binding](../bindings/omc/omc-binding.md) for the first candidate.
