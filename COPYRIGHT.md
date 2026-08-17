# Authorship, Provenance, and Rights

Narrative Context Protocol helps systems preserve who contributed narrative information, when a document changed, and where imported material came from. These records support attribution, audit, and collaboration as stories move among people, applications, AI systems, and production workflows.

NCP does not determine copyright ownership, work-for-hire status, originality, permission, or eligibility for legal protection. Those questions depend on applicable law, contracts, organizational policy, and evidence outside the protocol.

## What NCP can record

NCP Core provides separate structures for:

- document authorship;
- contribution history;
- timestamped provenance events;
- references to source systems and external records; and
- attestations issued by identified external authorities.

The Core schema defines the transport shape of these records. It does not verify a person's identity, decide whether a contribution is original, or establish that an attribution or rights claim is legally valid.

## Implementer guidance

An implementation should:

1. use stable identifiers for authors and contributors;
2. preserve supplied names, roles, timestamps, and source references without silently reassigning them;
3. record transformations, migrations, imports, and AI-assisted operations as provenance events when they change the document representation;
4. distinguish a contributor record from a claim of copyright ownership;
5. reference an authoritative rights-management system instead of copying its complete data model into NCP; and
6. retain unknown provenance and contribution records when forwarding a document.

Do not infer legal ownership from edit count, commit order, tool usage, or the presence of an authorship entry. If a workflow requires verified identity, consent, licensing, or rights clearance, connect the NCP document to the system responsible for that decision.

## Minimal authorship example

```json
{
    "document": {
        "id": "ncp_document_001",
        "created_at": "2026-08-15T12:00:00Z",
        "authorship": [
            {
                "id": "author_001",
                "name": "Example Author",
                "role": "author"
            }
        ]
    }
}
```

See the [NCP Core specification](core/specification.md), [Core JSON Schema](core/ncp-core-schema.json), and [minimal Core example](examples/core/minimal-ncp.json) for the complete transport contract.
