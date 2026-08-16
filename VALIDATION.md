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

The validator selects the NCP Core schema for documents with `ncp_version`, the Dramatica profile transport schema for standalone `dramatica:` profile payloads, and the frozen legacy schema for documents with `schema_version`.

## Dramatica semantic validation

Dramatica semantic validation answers different questions, including whether a Storyform is complete, internally consistent, or valid for a particular semantic-model version, and whether a partial Storyform can be completed or resolved.

Those questions require a Dramatica semantic system outside NCP Core and the public profile. This repository contains no generation, valid-combination, completion, resolution, diagnosis, or semantic-validation engine.

Candidate external service operations are documented non-normatively in the [Dramatica semantic boundary](profiles/dramatica/semantic-boundary.md). They are not required for NCP schema conformance.

## Transported attestations

An external validator can issue an attestation containing a profile namespace and version, semantic-model version, subject hash, timestamp, issuer, opaque status values, and optional signed record.

NCP Core validates only the attestation's transport shape. It does not verify the signature, endorse the issuer, interpret status fields, or establish semantic validity.

## Required result language

Validator pages, command-line output, CI logs, and pull requests should say **“NCP schema validation passed.”** They must not abbreviate a schema-only result to “Storyform valid.”

Service availability, deployment models, commercial terms, certification authority, and compatibility claims remain outside `3.0.0-rc.1` pending review.
