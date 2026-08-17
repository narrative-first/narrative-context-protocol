# Contribution Policy

NCP welcomes proposals that improve interoperable transport while preserving clear ownership of Core, profiles, extensions, serializations, and bindings.

## Accepted scope

Contributions may address:

- narrative-system-neutral Core transport;
- JSON serialization;
- structural schemas and validation tooling;
- synthetic examples and negative fixtures;
- bindings to external standards and workflows;
- independently named profiles and extensions; and
- documentation, accessibility, and migration guidance.

## Maintained and third-party namespaces

Changes to NCP Core and maintained namespaces must identify compatibility impact, migration behavior, and structural validation coverage. Changes to the official `dramatica:` profile require approval from its maintainer, The Dramatica Co.

Third-party narrative systems and workflows should define their own namespaces. A mapping may reference another system, but it must not silently redefine fields or semantics owned by that system.

## Material that cannot be accepted

Do not submit:

- proprietary Dramatica generation, valid-combination, completion, resolution, diagnosis, semantic-validation, or certification logic;
- private structural matrices, algorithms, corpora, or product implementation details;
- interactive, production, or alternative-framework concepts placed directly inside the Dramatica Storyform Profile;
- confidential, personal, or restricted production information; or
- third-party material without permission to contribute it.

## Proposal and review process

1. Open an issue for a new namespace, substantial schema change, or Dramatica-specific proposal.
2. Identify the affected layer, namespace, and component version.
3. Explain compatibility and migration impact.
4. Use synthetic examples.
5. Add positive and negative structural coverage for schema changes.
6. Run `npm run validate:schema`.
7. Report success as **NCP schema validation passed**.

Maintainers may request a separate namespace, narrower scope, migration plan, or additional interoperability evidence before accepting a proposal.
