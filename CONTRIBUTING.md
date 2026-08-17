# Contributing to Narrative Context Protocol

Narrative Context Protocol welcomes focused improvements to open interchange, documentation, examples, bindings, validation tooling, and independently governed profiles or extensions.

Read the [Contribution Policy](governance/contribution-policy.md) and [Namespace Governance](governance/namespaces.md) before opening a pull request.

## Good contribution candidates

- corrections and clarifications to narrative-neutral Core transport;
- JSON serialization and structural-schema tooling;
- synthetic positive and negative examples;
- bindings that reference another standard without duplicating or redefining it;
- separately named third-party profiles and extensions; and
- accessibility, spelling, links, and non-semantic documentation improvements.

Changes to the official `dramatica:` profile require Dramatica profile-maintainer approval. Propose substantial or Dramatica-specific changes in a GitHub issue before preparing a pull request.

Do not submit confidential information, third-party material you cannot license, or proprietary Dramatica generation, valid-combination, completion, resolution, diagnosis, semantic-validation, certification, or product implementation logic.

## Pull-request checklist

1. Identify the affected layer, namespace, and component version.
2. Explain compatibility and migration impact.
3. Use synthetic fixtures with four-space JSON indentation.
4. Add positive and negative structural checks for schema changes.
5. Run `npm run validate:schema`.
6. Report successful checks as **NCP schema validation passed**, not **Storyform valid**.
7. Keep the pull request focused on one concern.

Open a [GitHub issue](https://github.com/narrative-first/narrative-context-protocol/issues) when the appropriate namespace, compatibility path, or maintainer is unclear.
