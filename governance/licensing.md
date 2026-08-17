# Licensing and Commercial Access

This page describes the public boundary between open NCP interchange material and separately licensed Dramatica capabilities. The [NCP license](../LICENSE.md) is authoritative for repository material covered by that notice.

## Open NCP material

NCP Core defines the narrative-system-neutral envelope, declarations, references, provenance, attestations, packaging, and interchange rules. Public reference code can read, write, and structurally validate NCP data.

The repository's validators perform schema validation only. They do not implement or license Dramatica semantic validation.

## Dramatica Storyform Profile

The Dramatica Storyform Profile is NCP's foundational profile and remains optional for Core conformance. It preserves the published story, narrative, `subtext`, `storytelling`, and Story-level Moment representation, including transport fields, identifiers, data types, term lists, definitions, direct mappings, and semantic-preservation guidance.

Publishing or implementing that transport contract does not reproduce the Dramatica intelligence needed to determine valid combinations, create or complete a Storyform, resolve conflicts, diagnose structure, perform semantic validation, or issue certification.

## Dramatica Semantic Model

The Dramatica Semantic Model includes the relationships, constraints, valid structural combinations, private matrices, algorithms, diagnosis, completion, resolution, and validation technology that give a Dramatica Storyform its authoritative semantic meaning. It is maintained separately from NCP and is not implemented by NCP Core or the public profile.

Authors and studios retain their creative story information subject to their applicable agreements. Transporting that information through NCP does not transfer ownership to NCP or make Core the source of Dramatica semantic meaning.

## Licensed Dramatica capabilities

NCP schema validation is open and structural. The following Dramatica capabilities are provided separately:

- semantic Storyform validation;
- signed or officially recognized Storyform certification;
- Storyform creation, completion, resolution, and diagnosis;
- Dramatica MCP and SDK integration;
- studio and enterprise integration; and
- secure private deployment.

Active subscribers can connect through the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). For other licensed access, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

NCP may transport a versioned attestation or signed record produced by an external authority. It does not generate that result or turn schema conformance into Dramatica certification.

## Names and marks

The `dramatica:` namespace and official Dramatica Storyform Profile are maintained by The Dramatica Co. Third parties use separate namespaces and may publish mappings without redefining the official profile.

The NCP license does not grant service access or permission to use official, certified, compatibility, or certification marks. Service contracts, SDK agreements, enterprise deployments, trademark permissions, and certification-mark permissions are governed by their applicable terms and policies.
