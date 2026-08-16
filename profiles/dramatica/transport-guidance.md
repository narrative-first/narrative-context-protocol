# Dramatica Storyform Profile 1.0.0-rc.1

The `dramatica:` profile transports an existing Dramatica Storyform representation inside an NCP document. It defines the minimum envelope needed to preserve that representation across tools:

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

`dramatica:` is reserved for the Dramatica Storyform Profile in this candidate. Proposed changes go through the profile-maintainer review path; third-party additions use a separate namespace.

This technical reservation does not establish ownership, license, trademark, compatibility-mark, or certification-authority terms. Those topics remain [pending review](../../PENDING_REVIEW.md).
