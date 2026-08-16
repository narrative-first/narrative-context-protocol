# Dramatica Semantic Boundary

The public Dramatica Storyform Profile describes transport, not Dramatica intelligence.

## Included in the profile

- stable envelope field names;
- identifiers and basic data types;
- declared profile and semantic-model versions;
- opaque preservation of an existing Storyform representation; and
- references to external validation attestations.

## Outside NCP and the public profile

- Storyform generation and valid-combination logic;
- semantic relationships, structural matrices, and algorithms;
- diagnosis, disambiguation, completion, and resolution logic;
- transformation or derivation rules;
- corpus-backed interpretation and advanced coaching; and
- product implementation details.

Systems that need semantic operations use a service or engine outside this repository. Candidate interface operations may be described as:

- `validate_storyform`
- `certify_storyform`
- `complete_storyform`
- `resolve_storyform`
- `diagnose_storyform`
- `explain_storyform_conflict`

These operation names document the interoperability boundary for review. They are not Core commands, are not implemented here, and are not required for NCP schema conformance.

An external result can be represented by a Core attestation containing a profile namespace and version, semantic-model version, Storyform hash, timestamp, issuer, opaque status values, and optional signed record. The open schema transports that record but does not generate it or determine whether it is authoritative.

Service availability, deployment models, commercial terms, certification authority, and compatibility claims are outside this release candidate and remain pending review.
