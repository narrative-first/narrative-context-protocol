# Public Dramatica Material Review

Review date: 2026-08-16.

This inventory classifies Dramatica-related public material for the NCP 3.0.0-rc.1 normative path. “Requires Review” does not revoke permissions already granted; it marks material that is frozen or replaced by a notice while semantic and legal review continues. Repository history and existing releases are preserved.

| File or group | Classification | RC1 disposition |
| --- | --- | --- |
| `schema/ncp-schema.json` | Requires Review | Frozen legacy combined schema; retained for compatibility and not extended. |
| `schema/ncp-schema.yaml` | Requires Review | Frozen YAML twin of the legacy combined schema. |
| `docs/narrative-context-protocol-schema.md` | Requires Review | Replaced with a compatibility notice routing new work to Core and profiles. |
| `NCP_SEMANTIC_GROUNDING.md` | Requires Review | Replaced with a boundary notice; detailed mappings and inference guidance are not normative in RC1. |
| `docs/terminology/01.perspectives.md` | Requires Review | Detailed definitions replaced with a review notice. |
| `docs/terminology/02.appreciations-of-narrative.md` | Requires Review | Canonical lists and structural mappings replaced with a review notice. |
| `docs/terminology/03.narrative-functions.md` | Requires Review | Full term definitions replaced with a review notice. |
| `docs/terminology/04.dynamics.md` | Requires Review | Structural classifications replaced with a review notice. |
| `docs/terminology/05.vectors.md` | Requires Review | Structural classifications replaced with a review notice. |
| `docs/terminology/10.dramatica-translation.md` | Requires Review | Translation and normalization instructions replaced with a review notice. |
| `examples/example-story.json` | Appropriate for legacy exchange | Retained unchanged as a synthetic legacy fixture. |
| `examples/example-mapping.json` | Requires Review | Retained as legacy material; future mappings use separate namespaces. |
| `examples/complete-space-adventure-storyform.json` | Requires Review | Retained as a frozen legacy fixture; not a model for new public profile examples. |
| `examples/complete-storyform-template.json` | Requires Review | Retained as a frozen legacy fixture; not a model for new public profile examples. |
| `examples/storypoint-throughline-*.json` | Requires Review | Retained for legacy compatibility checks; not extended. |
| `examples/invalid/*storypoint*.json` | Requires Review | Retained for legacy compatibility checks; not extended. |
| `examples/invalid/signpost-sequence-out-of-range.json` | Product-side or proprietary | Retained only as a frozen legacy negative fixture; no additional rule is published. |
| `COPYRIGHT.md` | Requires Review | Retained unchanged as a previously published legal-adjacent document; outside the RC1 normative path. |
| `core/` | Appropriate for public Core | Narrative-neutral transport only. |
| `profiles/dramatica/` | Appropriate for public profile | Minimal opaque transport and boundary documentation only. |
| `bindings/omc/` | Appropriate for a public binding | Embeds or references NCP without importing profile semantics into OMC. |
| `tests/validate-schema.js`, `tests/validate-file.js` | Appropriate for public tooling | Structural validation only; every result includes the semantic disclaimer. |
| `LICENSE.md` | Existing legal notice | Preserved unchanged in RC1 pending counsel review; its legacy architecture description is not normative for NCP 3. |
| `governance/licensing.md` | Appropriate as an RC policy boundary | Publishes the intended open-Core, foundational-profile, and licensed-Dramatica access boundary; operative terms remain subject to counsel review. |
| `governance/contributor-agreement-template.md` | Requires counsel review | Draft intentionally excluded from RC1. |

## Do not publish in NCP

Do not add Storyform generation, valid-combination logic, dynamic relationships, quads or structural matrices, algorithms, diagnosis and disambiguation, completion and resolution logic, corpus-backed interpretation, transformation rules, advanced coaching, or product implementation details to the public NCP repository.
