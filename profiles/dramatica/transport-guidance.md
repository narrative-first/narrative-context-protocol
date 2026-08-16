# Dramatica Storyform Profile 1.0.0-rc.1

The `dramatica:` profile is NCP's foundational profile. NCP originated as an interchange path for preserving and exchanging Dramatica Storyforms, and the profile remains the reference example of NCP's profile architecture.

Foundational does not mean mandatory. NCP Core can transport narrative context without a Dramatica payload, and other narrative systems participate through separate profiles.

The profile transports an existing Dramatica Storyform representation inside an NCP document. It defines the minimum envelope needed to preserve that representation across tools:

- the profile namespace and version;
- the semantic-model version declared by the producing system;
- a stable Storyform identifier; and
- opaque Storyform fields supplied by the producing system.

The profile is dependent on the Dramatica Semantic Model for the meaning of its Storyform fields. NCP Core remains independent of that model.

## Transport rules

1. Preserve supplied field names and values without semantic reinterpretation.
2. Do not infer missing fields from prose or other profile values.
3. Do not normalize, derive, complete, resolve, diagnose, or validate the Storyform during schema-only processing.
4. Record the producing tool and migration activity in Core provenance when available.
5. Carry external validation results as Core attestations referencing `dramatica:` and the applicable profile and semantic-model versions.
6. Place interactive, production, or alternative-framework data in separate namespaces.

The JSON transport schema is [`profile-schema.json`](profile-schema.json). It intentionally does not enumerate canonical terms or encode valid combinations and relationships.

## Namespace status

`dramatica:` is reserved for the Dramatica Storyform Profile and maintained by The Dramatica Co. Proposed changes go through the Dramatica profile-maintainer review path; third-party additions use a separate namespace.

## Licensed semantic capabilities

The public profile preserves Storyform data; licensed Dramatica services provide the intelligence that creates, completes, resolves, diagnoses, semantically validates, and certifies it. Active subscribers may use the [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). For certification, SDK, studio, or private-deployment access, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

The intended licensing boundary is described in [`governance/licensing.md`](../../governance/licensing.md). Exact prospective terms and marks remain pending counsel review.
