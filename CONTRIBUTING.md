# Contributing to Narrative Context Protocol

Narrative Context Protocol is an open, application-independent interchange standard. This release candidate welcomes technical review of Core transport, JSON serialization, bindings, examples, documentation, and separately named extensions.

Read the [candidate contribution policy](governance/contribution-policy.md) and [namespace policy](governance/namespaces.md) before opening a change.

## Current scope freeze

During the 3.0.0-rc.1 review, do not submit:

- new Dramatica relationships, algorithms, structural rules, model logic, diagnostics, or semantic mappings;
- changes to the meaning of canonical Dramatica fields;
- interactive, game-engine, production, or alternative-framework concepts inside the Dramatica profile;
- changes to existing license notices; or
- Storyform generation, valid-combination, completion, resolution, diagnosis, or semantic-validation logic.

Substantial or Dramatica-specific contribution handling remains pending review. Open an issue before submitting such material.

## Appropriate review contributions

- corrections and clarifications to narrative-neutral Core transport;
- JSON serialization and structural-schema tooling;
- simple synthetic examples;
- separately named third-party profiles and extensions;
- bindings that reference another standard without duplicating or redefining it; and
- accessibility, spelling, link, and non-semantic documentation improvements.

## Pull-request process

1. Identify the affected layer and namespace.
2. Explain backward-compatibility and migration impact.
3. Use synthetic fixtures and four-space JSON indentation.
4. Add positive and negative structural checks for schema changes.
5. Run `npm run validate:schema`.
6. Report the result as **NCP schema validation**, not semantic validation.

This candidate does not define new contributor license or agreement terms. See [Pending Review Topics](PENDING_REVIEW.md).
