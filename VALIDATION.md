# Validation

NCP 3 separates structural schema validation from narrative-system semantic validation.

## NCP schema validation

Open, self-service schema validation answers questions such as:

- Is the input valid JSON?
- Are required NCP fields present?
- Are identifiers and timestamps formatted correctly?
- Does the document conform to the selected Core or profile transport schema?

> NCP schema validation confirms that a document is structurally well-formed. It does not determine whether the document represents a complete, coherent, or valid Dramatica Storyform.

Run the repository checks:

```bash
npm install
npm run validate:schema
npm run validate:file -- examples/core/minimal-ncp.json
```

The validator selects the NCP Core schema for documents with `ncp_version`, the Dramatica profile transport schema for standalone `dramatica:` profile payloads, and the frozen legacy schema for documents with `schema_version`. When a Core document carries a recognized `dramatica:` payload, the validator reports Core and profile structural results separately.

The Dramatica profile schema checks the published story, narrative, Subtext, Storytelling, and Moment field names; required nesting; basic types; canonical enum membership; references; and sequence bounds. Those are transport constraints, not proof that the selected values form a valid Storyform.

## Dramatica semantic validation

Dramatica semantic validation answers different questions, including whether a Storyform is complete, internally consistent, or valid for a particular semantic-model version, and whether a partial Storyform can be completed or resolved.

Those questions require a licensed Dramatica semantic system outside NCP Core and the public profile. This repository contains no generation, valid-combination, completion, resolution, diagnosis, certification, or semantic-validation engine.

Candidate external service operations are documented non-normatively in the [Dramatica semantic boundary](profiles/dramatica/semantic-boundary.md). They are not required for NCP schema conformance.

Active Dramatica subscribers can use the authenticated [Dramatica MCP](https://platform.dramatica.com/docs/resources/connect-chatgpt-mcp). To obtain or discuss licensed semantic validation, signed Storyform certification, SDK access, studio integration, or secure private deployment, visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

## Transported attestations

An external validator can issue an attestation containing a profile namespace and version, semantic-model version, subject hash, timestamp, issuer, opaque status values, and optional signed record.

NCP Core validates only the attestation's transport shape. It does not verify the signature, endorse the issuer, interpret status fields, or establish semantic validity.

## Required result language

Validator pages, command-line output, CI logs, and pull requests should say **“NCP schema validation passed.”** They must not abbreviate a schema-only result to “Storyform valid.”

The service boundary and access route are part of `3.0.0-rc.1`. Exact commercial terms, certification-mark rules, and compatibility claims remain subject to counsel review.
