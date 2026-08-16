# NCP-OMC Binding 1.0.0-rc.1

Status: public technical review candidate.

This binding describes how a MovieLabs Ontology for Media Creation (OMC) workflow can embed or reference an NCP document without importing the semantics of any NCP profile into OMC.

MovieLabs OMC 2.8 defines Custom Data Blocks with `domain`, optional `namespace`, optional `schema`, and a value that may contain any serialization supported by the implementation. OMC also permits linked identifiers to reference externally held Custom Data. See the official [OMC Utilities Ontology 2.8](https://mc.movielabs.com/omc/Utilities/ML_Ontology_Pt9_Utilities_v2.8.pdf), section 3.5.3.

## Conceptual relationship

```text
Dramatica Semantic Model
    -> Dramatica Storyform
    -> Dramatica Storyform Profile
    -> NCP document
    -> OMC workflow
```

The arrows describe production and transport dependencies. OMC transports or references the NCP document; NCP transports the declared profile representation. Neither envelope redefines the semantic system used to produce the profile payload.

## Embedded document

For OMC 2.8 or later, an implementation may place an NCP JSON document in a Custom Data Block using:

- `domain`: `narrativecontextprotocol.com`
- `namespace`: `ncp:`
- `schema`: `https://narrativecontextprotocol.com/core/3.0.0-rc.1/ncp-core-schema.json`
- `value`: the NCP JSON object, or a serialized string when the implementation requires strings

See [`examples/embedded-ncp.json`](examples/embedded-ncp.json).

OMC 2.7 and earlier expose a free-form Custom Data field. Implementers using that surface should preserve an unambiguous NCP domain and schema reference according to their workflow contract.

## External document

An OMC workflow may instead carry a resolvable identifier or URI for an NCP document. The referenced resource should identify its NCP version and integrity information through the surrounding workflow when required.

See [`examples/external-reference.json`](examples/external-reference.json).

## Responsibility boundaries

- OMC remains authoritative for the production objects and workflow relationships represented in the OMC graph.
- NCP carries the portable narrative-context envelope and namespace declarations represented in the NCP document.
- A declared NCP profile supplies the meaning of its own payload.
- OMC consumers may inspect an NCP attestation as transported metadata, but NCP Core does not establish its authority or semantic correctness.
- Applications requiring Storyform creation, resolution, diagnosis, completion, semantic validation, or certification use licensed Dramatica capabilities. Visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com**.

Broken-down scripts, production objects, schedules, tasks, participants, assets, and workflow data should remain in OMC. NCP references those objects using Core external references rather than duplicating the production model.

## Example status

The files in `examples/` are illustrative Custom Data Block fragments. The test suite validates the embedded NCP value and the binding-specific fragment shape; it does not claim that the fragments are complete OMC documents or substitutes for MovieLabs' OMC validator.
