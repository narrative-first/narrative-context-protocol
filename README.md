# Narrative Context Protocol (NCP)

**An open, application-independent interchange standard for narrative context**

Narrative Context Protocol transports narrative context, authorial intent, provenance, and structured story information across writing tools, production systems, archives, AI workflows, and industry standards.

NCP Core is narrative-system-neutral. Narrative systems participate through separately governed profiles, while workflow-specific information belongs in extensions or bindings. NCP's foundational profile is the [Dramatica Storyform Profile](profiles/dramatica/transport-guidance.md), maintained by The Dramatica Co. and optional for Core conformance.

## Release candidate

NCP 3.0.0-rc.1 introduces the layered Core, profile, extension, serialization, and binding architecture. Read the [release-candidate overview](RELEASE_CANDIDATE.md) for the rationale and the [release status](RELEASE_STATUS.md) for component stability and feedback guidance.

## Developer quickstart

```bash
npm install
npm run validate:schema
npm run validate:file -- examples/core/minimal-ncp.json
```

Every validation command reports structural conformance only. Schema validation does not determine whether a document represents a complete, coherent, or valid Dramatica Storyform.

See the [Developer Documentation](docs/developer-documentation.md) for implementation guidance.

## Architecture

| Layer | Responsibility |
| --- | --- |
| [NCP Core](core/specification.md) | Narrative-system-neutral identifiers, authorship, provenance, versions, declarations, references, contributions, attestations, and interchange rules |
| [Profiles](profiles/README.md) | Separately versioned transport contracts for information produced by a narrative system |
| [Extensions](extensions/README.md) | Separately named application or workflow data that does not alter Core or another profile |
| [Dramatica Storyform Profile](profiles/dramatica/transport-guidance.md) | Public transport structure, terminology, and preservation guidance for Dramatica-oriented story information |
| [JSON serialization](serialization/json/README.md) | The machine-readable JSON representation of NCP data |
| [Bindings](bindings/README.md) | Ways to embed or reference NCP in another standard or workflow |

JSON is a serialization of NCP. It is not the protocol itself, a Dramatica Storyform, or the Dramatica Semantic Model.

## Dramatica Storyform Profile

The Dramatica Storyform Profile preserves the published story, narrative, `subtext`, `storytelling`, and Story-level Moment representation together with the terminology needed for lossless interchange.

The profile does not implement Dramatica's valid-combination logic, Storyform engine, private structural matrices, diagnostic processes, or semantic-validation technology. Licensed Dramatica intelligence creates, completes, resolves, diagnoses, semantically validates, and certifies Storyforms outside NCP.

Foundational does not mean mandatory. An NCP document may use the Dramatica profile, another declared profile, extensions only, or Core alone.

## Validation is layer-specific

NCP schema validation checks JSON structure, required fields, identifier formats, references, and conformance to the selected Core or profile schema.

> NCP schema validation confirms that a document is structurally well formed. It does not determine whether the document represents a complete, coherent, or valid Dramatica Storyform.

NCP can transport an attestation from an external semantic authority, but Core does not create, interpret, or endorse that semantic result. See [Validation](VALIDATION.md) and [Conformance](governance/conformance.md).

## Dramatica access

Active Dramatica subscribers can connect through the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). For semantic validation, Storyform certification, SDK access, studio integration, or private deployment, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

See [Licensing and Commercial Access](governance/licensing.md) for the boundary between open NCP interchange and separately licensed Dramatica capabilities.

## NCP-OMC Binding

The [NCP-OMC Binding](bindings/omc/omc-binding.md) supports two integration patterns:

- embed an NCP document in an OMC Custom Data Block; or
- carry a resolvable reference to an external NCP document.

Production objects, breakdowns, schedules, assets, and workflow state remain in OMC. NCP carries narrative context and references those objects when needed.

## Repository structure

```text
core/                         NCP Core schema and specification
profiles/dramatica/           Dramatica profile, terminology, and semantic boundary
extensions/                   Separately governed extension namespaces
bindings/omc/                 NCP-OMC transport binding and examples
serialization/json/           JSON serialization documentation
governance/                   Namespace, conformance, versioning, and licensing policies
examples/core/                Narrative-neutral Core examples
examples/dramatica-profile/   Dramatica profile examples and negative fixtures
examples/omc-binding/         OMC binding example index
schema/                       Frozen legacy combined schema for compatibility
docs/terminology/             Compatibility pointers to profile terminology
tests/                        Open structural validation tools
```

The files in `schema/` preserve the earlier combined format for existing integrations. They are not the NCP 3 layered architecture.

## Project resources

- [Architecture specification](SPECIFICATION.md)
- [Validation](VALIDATION.md)
- [Versioning and migration](governance/versioning.md)
- [Repository publication policy](governance/publication-policy.md)
- [Authorship, provenance, and rights](COPYRIGHT.md)
- [Contributing](CONTRIBUTING.md)
- [License](LICENSE.md)
- [History](HISTORY.md)

For questions, contact **support@dramatica.com**.
