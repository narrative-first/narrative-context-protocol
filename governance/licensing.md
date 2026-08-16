# Licensing and Commercial Access

Status: NCP 3.0.0-rc.1 policy boundary for public review. This page explains what is open, what is separate Dramatica technology, and where to obtain licensed Dramatica capabilities. Exact prospective license text, contribution terms, certification marks, and trademark language require counsel review before the final 3.0.0 release.

## NCP Core

NCP Core is intended to remain an openly adoptable interoperability standard. It defines the narrative-system-neutral envelope, declarations, references, provenance, attestations, packaging, and interchange rules.

The repository's existing license notice and previously published releases remain unchanged. Counsel will confirm the final prospective license notice for new NCP 3 Core specifications and schemas.

## Reference serialization and validation code

Reference code that reads, writes, or structurally validates open NCP data is separate from narrative-system semantic technology. The NCP validators in this repository perform schema validation only; they do not implement or license Dramatica semantic validation.

## Foundational Dramatica profile

The Dramatica Storyform Profile is NCP's foundational profile and the original narrative-system profile around which NCP interoperability was developed. It demonstrates how an existing Storyform is preserved and exchanged through NCP.

Foundational does not mean required. NCP Core remains narrative-system-neutral, and documents may use other profiles, extensions, or Core alone.

The public profile defines transport fields, identifiers, basic data types, and an opaque Storyform payload. Publishing or implementing that transport contract does not grant access to the Dramatica Semantic Model or reproduce the intelligence needed to create, complete, resolve, diagnose, semantically validate, or certify a Storyform.

## Dramatica Semantic Model

The intended NCP 3 boundary recognizes the Dramatica Semantic Model—including its semantic relationships, constraints, valid combinations, algorithms, diagnosis, completion, resolution, and validation technology—as proprietary Dramatica technology maintained by The Dramatica Co. It is not part of open NCP Core.

An author or studio retains its creative story information. Transporting that information in NCP does not make NCP Core the source of Dramatica semantic meaning.

## Licensed validation, certification, MCP, and SDK access

NCP schema validation is open and structural. Dramatica semantic validation and Storyform certification are licensed capabilities provided through Dramatica.

Active Dramatica subscribers can connect to the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). To obtain or discuss any of the following, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**:

- Dramatica semantic validation;
- signed or officially recognized Storyform certification;
- Storyform completion, resolution, and diagnosis;
- Dramatica MCP or SDK integration;
- studio and enterprise deployment; and
- secure or walled-garden private deployment.

NCP may transport the resulting versioned attestation and signed record. It does not generate the result or turn schema conformance into Dramatica certification.

## Namespace and conformance

The `dramatica:` namespace and official Dramatica Storyform Profile are maintained by The Dramatica Co. Third parties use separate namespaces and may map to Dramatica without redefining it.

Use of “official,” “certified,” “Dramatica-compatible,” and related marks is subject to the final trademark and conformance policy. Schema validation alone does not authorize those claims.

## Counsel review status

This page states the intended technical and commercial boundary for RC review. It is not a replacement for a service agreement, SDK license, enterprise agreement, profile license, trademark policy, or contributor agreement. Counsel must approve those operative terms before final release or legal reliance.
