# Dramatica Storyform Profile 1.0.0-rc.1

The `dramatica:` profile is NCP's foundational profile. NCP originated as an interchange path for preserving and exchanging Dramatica Storyforms, and the profile remains the reference example of NCP's profile architecture.

Foundational does not mean mandatory. NCP Core can transport narrative context without a Dramatica payload, and other narrative systems participate through separate profiles.

The profile transports the complete previously published Dramatica-oriented story representation inside an NCP document. The representation preserves:

- the profile namespace and version;
- the semantic-model version declared by the producing system;
- story identity, title, logline, settings, and optional ideation;
- one or more narratives, each representing a Dramatica Storyform through distinct `subtext` and `storytelling` layers;
- Perspectives, Players, Dynamics, Storypoints, Storybeats, and Overviews;
- Story-level Moments that may reference structural material from multiple narratives; and
- the published identifiers, term lists, basic definitions, direct mappings, data types, and structural constraints needed for lossless interchange.

The public profile explains what its transported fields and values mean. It remains dependent on licensed Dramatica intelligence to determine valid combinations, create or complete a Storyform, resolve conflicts, diagnose structure, perform semantic validation, or issue certification. NCP Core remains independent of Dramatica.

## Transport rules

1. Preserve supplied story, narrative, `subtext`, `storytelling`, Moment, field, and value information without unrequested reinterpretation.
2. Do not infer missing fields from prose or other profile values.
3. Do not normalize, derive, complete, resolve, diagnose, or validate the Storyform during schema-only processing.
4. Record the producing tool and migration activity in Core provenance when available.
5. Carry external validation results as Core attestations referencing `dramatica:` and the applicable profile and semantic-model versions.
6. Place interactive, production, or alternative-framework data in separate namespaces.

The JSON transport schema is [`profile-schema.json`](profile-schema.json). Its `storyform` object preserves the complete `story` shape of the previously published combined schema, including canonical transport enums and record relationships. The profile wrapper supplies `namespace`, `profile_version`, and the producing system's `dsm_version`.

The [schema reference](schema-reference.md), [terminology dictionaries](terminology/README.md), and [semantic-interoperability guide](semantic-interoperability.md) document the public representation. They are part of the Dramatica profile, not NCP Core.

Profile schema validation checks the published field names, nesting, required values, basic types, enums, references, and sequence bounds. It does not determine whether those choices form a complete, coherent, or valid Dramatica Storyform.

## Namespace status

`dramatica:` is reserved for the Dramatica Storyform Profile and maintained by The Dramatica Co. Proposed changes go through the Dramatica profile-maintainer review path; third-party additions use a separate namespace.

## Licensed semantic capabilities

The public profile preserves Storyform data; licensed Dramatica services provide the intelligence that creates, completes, resolves, diagnoses, semantically validates, and certifies it. Active subscribers may use the [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). For certification, SDK, studio, or private-deployment access, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

The boundary between open profile material, licensed Dramatica capabilities, and mark permissions is described in [Licensing and Commercial Access](../../governance/licensing.md).
