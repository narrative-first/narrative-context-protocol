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

Official Dramatica intelligence is accessed through licensed Dramatica services or engines outside this repository. Service interfaces may expose operations such as:

- `validate_storyform`
- `certify_storyform`
- `complete_storyform`
- `resolve_storyform`
- `diagnose_storyform`
- `explain_storyform_conflict`

These operation names document the interoperability boundary. They are not Core commands, are not implemented here, and are not required for NCP schema conformance.

An external result can be represented by a Core attestation containing a profile namespace and version, semantic-model version, Storyform hash, timestamp, issuer, opaque status values, and optional signed record. The open schema transports that record but does not generate it or determine whether it is authoritative.

Active subscribers may access Dramatica through the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). Hosted access, SDKs, Storyform certification, studio integration, and secure private deployments are licensed Dramatica capabilities. Visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com** to obtain or discuss access.

Exact commercial terms, certification-mark rules, and compatibility claims remain subject to counsel review.
