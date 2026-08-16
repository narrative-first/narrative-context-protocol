# Contribution Policy for 3.0.0-rc.1

NCP welcomes review and proposals for narrative-system-neutral Core transport, JSON serialization, examples, bindings, documentation, and independently named extensions.

## Scope freeze

During this release-candidate review:

- do not add or change canonical Dramatica terms, definitions, mappings, structural constraints, or field meanings without Dramatica profile-maintainer approval;
- do not add Storyform generation, valid-combination, completion, resolution, diagnosis, semantic-validation, or certification logic;
- do not add interactive, game-engine, production, or alternative-framework concepts directly to the Dramatica Storyform Profile;
- do not change or remove previously published license notices; and
- preserve repository history and existing releases.

Appropriate RC feedback includes structural-schema defects, unclear layer boundaries, portability concerns, versioning and migration issues, JSON serialization problems, and OMC binding interoperability questions.

Substantial or Dramatica-specific contribution handling remains under review for this release candidate. Open an issue before submitting such material. Do not include proprietary, confidential, or third-party material in a proposal.

## Pull requests

1. Identify the affected layer and namespace.
2. Explain compatibility and migration impact.
3. Use synthetic examples.
4. Add positive and negative structural validation coverage when changing a schema.
5. Report successful checks as “NCP schema validation passed.”

Legal contributor terms are outside this technical candidate. See [`PENDING_REVIEW.md`](../PENDING_REVIEW.md).
