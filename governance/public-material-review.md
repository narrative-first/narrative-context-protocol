# Public Dramatica Material Review

Review date: 2026-08-16.

This inventory classifies Dramatica-related public material for the NCP 3.0.0-rc.1 normative path. The public profile intentionally preserves the complete previously published interchange structure and the reference material needed to understand it. Repository history, existing releases, and prior permissions are preserved.

| File or group | Classification | RC1 disposition |
| --- | --- | --- |
| `schema/ncp-schema.json` | Requires Review | Frozen legacy combined schema; retained for compatibility and not extended. |
| `schema/ncp-schema.yaml` | Requires Review | Frozen YAML twin of the legacy combined schema. |
| `docs/narrative-context-protocol-schema.md` | Appropriate compatibility pointer | Routes existing links to the current profile schema reference. |
| `NCP_SEMANTIC_GROUNDING.md` | Appropriate compatibility pointer | Routes existing links to the current profile semantic-interoperability guide. |
| `profiles/dramatica/schema-reference.md` | Appropriate for public profile | Documents the complete published story, narrative, Subtext, Storytelling, and Moment transport structure. |
| `profiles/dramatica/semantic-interoperability.md` | Appropriate for public profile | Documents preservation rules, distinctions, direct mappings, and safe interchange behavior without implementing Storyform generation or validation. |
| `profiles/dramatica/terminology/` | Appropriate for public profile | Publishes Perspectives, Appreciations, Narrative Functions, Dynamics, Vectors, definitions, and approved terminology mappings. |
| `docs/terminology/*` | Appropriate compatibility pointers | Preserve existing documentation URLs and route them to profile-owned references. |
| `examples/example-story.json` | Appropriate for profile compatibility | Retained unchanged and validated through both the frozen schema and the public profile. |
| `examples/example-mapping.json` | Appropriate for profile interoperability | Documents a previously published direct mapping while third-party systems remain separately namespaced. |
| `examples/complete-space-adventure-storyform.json` | Appropriate synthetic profile fixture | Proves complete structural transport parity without certifying semantic validity. |
| `examples/complete-storyform-template.json` | Appropriate synthetic profile fixture | Proves blank-template structural transport parity without generating a Storyform. |
| `examples/storypoint-throughline-*.json` | Appropriate profile fixtures | Verify published transport choices and round-trip behavior. |
| `examples/invalid/*` | Appropriate negative structural fixtures | Verify open schema constraints; failure does not constitute Dramatica semantic analysis. |
| `COPYRIGHT.md` | Requires Review | Retained unchanged as a previously published legal-adjacent document; outside the RC1 normative path. |
| `core/` | Appropriate for public Core | Narrative-neutral transport only. |
| `profiles/dramatica/` | Appropriate for public profile | Complete transport structure, terminology, definitions, direct mappings, preservation guidance, and boundary documentation. |
| `bindings/omc/` | Appropriate for a public binding | Embeds or references NCP without importing profile semantics into OMC. |
| `tests/validate-schema.js`, `tests/validate-file.js` | Appropriate for public tooling | Structural validation only; every result includes the semantic disclaimer. |
| `LICENSE.md` | Current legal notice | Descriptive preamble updated for the layered NCP architecture; MIT grant text preserved. |
| `governance/licensing.md` | Appropriate as an RC policy boundary | Publishes the intended open-Core, foundational-profile, and licensed-Dramatica access boundary; operative terms remain subject to counsel review. |
| `governance/contributor-agreement-template.md` | Requires counsel review | Draft intentionally excluded from RC1. |

## Do not publish in NCP

Do not add Storyform generation algorithms, valid-combination logic, private quads or structural matrices, diagnosis and disambiguation engines, completion and resolution logic, automated semantic derivation, corpus-backed interpretation, semantic-validation or certification technology, advanced coaching, or product implementation details to the public NCP repository.

Published term definitions, Dynamic/value pairs, Holistic/Linear mappings, character-framed mappings, and preservation guidance are profile reference material. They explain the available information; they do not determine how to assemble a valid Storyform.
