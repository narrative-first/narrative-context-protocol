# Dramatica Profile and Intelligence Boundary

The public Dramatica Storyform Profile describes the complete interchange representation and the terminology needed to understand and preserve it. Licensed Dramatica intelligence determines how to create, combine, resolve, evaluate, and certify that information.

## Included in the profile

- the complete published story, narratives, `subtext`, `storytelling`, and Story-level Moment structure;
- stable field names, identifiers, basic data types, enums, and transport constraints;
- Perspectives, Appreciations, Narrative Functions, Dynamics, Vectors, and their public definitions;
- direct Holistic/Linear, character-framed, and legacy terminology mappings used for interoperability;
- semantic-preservation guidance for consuming tools;
- declared profile and semantic-model versions; and
- references to external validation attestations.

## Outside NCP and the public profile

- Storyform generation and valid-combination logic;
- private structural matrices, resolution rules, and algorithms that determine valid configurations;
- diagnosis, disambiguation, completion, and resolution logic;
- automated inference, transformation, or derivation logic that creates or changes a Storyform;
- corpus-backed interpretation and advanced coaching;
- semantic validation and certification technology; and
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

Service access, certification-mark permissions, and compatibility claims are governed separately from the public profile. See [Licensing and Commercial Access](../../governance/licensing.md).
