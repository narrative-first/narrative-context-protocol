# NCP Core 3.0.0-rc.1

NCP Core is the narrative-system-neutral envelope of Narrative Context Protocol. It transports narrative context, authorial intent, provenance, references, declared profiles and extensions, Storytelling Moments, contribution history, and opaque attestations.

Core does not define a narrative theory and does not assume that every story uses Dramatica.

## Minimal document

```json
{
    "ncp_version": "3.0.0-rc.1",
    "document": {
        "id": "ncp_document_001",
        "created_at": "2026-08-16T12:00:00Z"
    },
    "story": {
        "id": "story_001"
    }
}
```

The normative JSON shape is [`ncp-core-schema.json`](ncp-core-schema.json).

## Core fields

- `ncp_version` selects the Core protocol version.
- `document` identifies the interchange document and records authorship and provenance.
- `story` identifies the creative work and may reference records held by other systems.
- `profiles` declares narrative-system profiles used by the document.
- `extensions` declares application or workflow extensions.
- `storytelling_moments` carries narrative-neutral moments with resolvable references.
- `contributions` records contribution provenance.
- `attestations` carries opaque validation or certification records issued outside Core.
- `payloads` holds data keyed by a declared profile or extension namespace.

## Profiles and payloads

Each profile declaration supplies a namespace, profile version, and schema URI. Each extension declaration supplies a namespace, version, and schema URI. Profile and extension payloads are stored under their declared namespace in `payloads`.

Core processors may validate a payload with its declared schema, but must not reinterpret unknown profile data. Consumers should preserve unknown declared payloads when reading and writing a document.

## References instead of duplication

Core references use `system`, `value`, and optional `uri` and `entity_type` fields. A workflow should reference authoritative production, asset, schedule, identity, or rights records rather than copying an entire external model into NCP.

## Attestations

An attestation records:

- an identifier and issuer-defined `kind`;
- the hash of the exact subject representation;
- issue time and issuer reference;
- optional profile and semantic-model versions;
- opaque status fields; and
- an optional signed record.

Core checks only this transport shape. It does not verify a signature, endorse an issuer, define a profile's status vocabulary, or determine semantic validity.

## Structural conformance

A Core JSON document conforms structurally when it passes the selected Core JSON Schema. This does not prove completeness, coherence, narrative quality, or profile-specific semantic validity.

## Migration

A legacy combined NCP document must not be relabeled as Core-only. Migration creates a Core envelope, declares each profile or extension, places system-specific fields under the matching payload, preserves identifiers and provenance, and records the migration event.

Migration must not infer, normalize, complete, or semantically reinterpret Dramatica values.
