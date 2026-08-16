# Narrative Context Protocol (NCP)

**An open, application-independent interchange standard for narrative context**

Narrative Context Protocol is an open format for transporting narrative context, authorial intent, provenance, and structured story information across tools and workflows.

NCP can carry information produced by multiple narrative systems through separately governed profiles. Its foundational profile is the [Dramatica Storyform Profile](profiles/dramatica/transport-guidance.md), maintained by The Dramatica Co. and the original narrative-system profile around which NCP interoperability was developed. The public profile preserves the complete previously published story, narratives, Subtext, Storytelling, and Moment representation together with the terminology needed to understand it. It does not implement the semantic intelligence that creates, completes, resolves, validates, or certifies a Storyform.

Foundational does not mean mandatory. NCP Core is narrative-system-neutral, and an NCP document may use Dramatica, another declared profile, extensions only, or Core alone.

NCP does not implement the Dramatica Semantic Model's valid-combination logic, Storyform engine, private structural matrices, diagnostic processes, or semantic validation technology. It is not a replacement for Dramatica software, analysis, or validation.

## 3.0.0-rc.1 review candidate

This candidate defines the proposed layered NCP 3 architecture for public technical review. The release candidate covers Core, JSON serialization, profiles, extensions, bindings, structural validation, and migration behavior.

This candidate publishes the intended [licensing and commercial-access boundary](governance/licensing.md), including how adopters obtain licensed Dramatica validation and certification capabilities. Exact prospective license, contributor-agreement, trademark, and certification-mark terms remain [pending counsel review](PENDING_REVIEW.md). The `LICENSE.md` preamble now describes NCP as an interchange standard while preserving the MIT grant text; existing releases and repository history remain unchanged.

Read [Why NCP 3.0](RELEASE_CANDIDATE.md#why-ncp-30) for the release narrative, architecture progression, public-versus-licensed boundary, and recommended product language.

## Architecture

| Layer | Responsibility |
| --- | --- |
| [NCP Core](core/specification.md) | Narrative-system-neutral identifiers, authorship, provenance, versions, profile references, Storytelling Moments, contributions, opaque attestations, and interchange rules |
| [Profiles](profiles/README.md) | Separately versioned transport contracts for information produced by a narrative system |
| [Extensions](extensions/README.md) | Separately named workflow or application data that does not alter Core or another profile |
| [Dramatica Storyform Profile](profiles/dramatica/transport-guidance.md) | The complete public transport structure, terminology, and preservation guidance for Dramatica-oriented story information |
| [JSON serialization](serialization/json/README.md) | The current machine-readable representation of NCP data |
| [Bindings](bindings/README.md) | Ways to embed or reference NCP in another standard or workflow |

JSON is only a serialization. It is not NCP itself, a Dramatica Storyform, or the Dramatica Semantic Model.

## Interoperability first

NCP is designed so narrative context remains portable and attributable as a project moves among writing tools, production systems, archives, AI workflows, and industry standards. Consumers can preserve unknown declared namespaces without understanding their semantics.

Third-party narrative systems and workflow concepts belong in separately named profiles or extensions. They do not change NCP Core or the meaning of `dramatica:` fields.

## Validation is layer-specific

NCP schema validation checks JSON structure, required fields, identifier formats, and conformance to a selected schema version.

> NCP schema validation confirms that a document is structurally well-formed. It does not determine whether the document represents a complete, coherent, or valid Dramatica Storyform.

The Dramatica profile schema validates its published field names, nesting, required values, enums, references, and basic transport constraints. Dramatica semantic validation and certification are licensed capabilities supplied outside this repository through Dramatica. NCP can transport the resulting attestation, but the public schema does not create, resolve, diagnose, certify, or semantically validate a Storyform.

## Dramatica licensing and certification

Active Dramatica subscribers can connect to the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). To obtain or discuss licensed semantic validation, Storyform certification, SDK access, studio integration, or secure private deployment, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

See the [Licensing and Commercial Access](governance/licensing.md) page for the full NCP-to-Dramatica boundary.

See [Validation](VALIDATION.md), [Conformance](governance/conformance.md), and the [Dramatica semantic boundary](profiles/dramatica/semantic-boundary.md).

## NCP-OMC Binding

The [NCP-OMC Binding](bindings/omc/omc-binding.md) describes two integration patterns:

- embed an NCP document in an OMC Custom Data Block; or
- carry a resolvable reference to an external NCP document.

Production objects, breakdowns, schedules, assets, and workflow state remain in OMC. NCP carries narrative context and references those objects when needed.

```text
Dramatica Semantic Model
    -> Dramatica Storyform
    -> Dramatica Storyform Profile
    -> NCP document
    -> OMC workflow
```

This sequence describes transport dependencies, not a transfer of semantic definitions.

## Developer quickstart

```bash
npm install
npm run validate:schema
npm run validate:file -- examples/core/minimal-ncp.json
```

Every validation command reports that its result is structural only.

See the [Developer Documentation](docs/developer-documentation.md) for implementation guidance.

## Repository structure

```text
core/                         NCP Core schema and specification
profiles/dramatica/           Complete public Dramatica profile, terminology, and semantic boundary
extensions/                   Separately governed extension placeholders
bindings/omc/                 NCP-OMC transport binding and examples
serialization/json/           JSON serialization documentation
governance/                   Namespace, conformance, versioning, and licensing boundary
examples/core/                Narrative-neutral Core examples
examples/dramatica-profile/   Full and negative Dramatica profile examples
examples/omc-binding/         OMC binding example index
schema/                       Frozen legacy combined schema for compatibility
docs/terminology/             Compatibility pointers to Dramatica profile terminology
tests/                        Open structural validation tools
```

The files in `schema/` are the frozen legacy combined schema. They remain available for existing integrations and release-history preservation, but they are not the NCP 3 layered architecture.

For questions about this review candidate, contact **support@dramatica.com**.
