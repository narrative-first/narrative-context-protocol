# NCP 3.0.0-rc.1 Release Candidate

NCP 3.0.0-rc.1 is available for public interoperability review. This release candidate introduces a layered architecture for exchanging narrative context while preserving the complete Dramatica Storyform representation established by earlier versions of NCP.

## Why NCP 3.0

Earlier NCP releases combined the protocol envelope with the NCP/Subtxt Storyform model. NCP 3.0 separates those responsibilities so that the protocol can support Dramatica and other narrative systems without treating any one system as a requirement for basic interchange.

[NCP Core](core/specification.md) defines the narrative-system-neutral envelope. Profiles describe narrative information from a particular system, while extensions and bindings connect NCP documents to specialized workflows. The [Dramatica Storyform Profile](profiles/dramatica/transport-guidance.md) remains NCP's foundational profile and preserves the previously published Storyform structure, terminology, definitions, and mappings.

This architecture allows an implementation to exchange narrative context through NCP Core without understanding Dramatica. Implementations that work with Dramatica can use the Dramatica Storyform Profile without changing the Core protocol.

```text
Narrative Context Protocol
    ├── NCP Core
    ├── Dramatica Storyform Profile
    ├── other narrative profiles
    ├── workflow extensions
    └── OMC and other bindings
```

NCP refers to the complete interoperability architecture. NCP Core is its narrative-system-neutral foundation. The Dramatica Storyform Profile is foundational, separately versioned, and optional for Core conformance.

## Open interchange and licensed Dramatica intelligence

The public Dramatica Storyform Profile defines how Dramatica information is represented, preserved, and transported. It does not reproduce the rules or intelligence that determine whether a collection of choices forms a valid Dramatica Storyform.

```text
Public Dramatica profile:
Transport structure + terminology + definitions + direct mappings

Licensed through Dramatica:
Creation + completion + resolution + diagnosis
+ semantic validation + certification
```

The licensed Dramatica Semantic Model provides Storyform creation, completion, resolution, diagnosis, semantic validation, and certification through Dramatica's MCP, API, SDK, and private services. Structural schema validation confirms that an NCP document is well formed; it does not certify the document as a valid Dramatica Storyform. See [Validation](VALIDATION.md) for the distinction.

Authors and studios retain their creative story information. The Dramatica Co. provides the authoritative licensed intelligence used to determine whether that information constitutes a valid Dramatica Storyform.

## Recommended terminology

| Context | Preferred term |
| --- | --- |
| The complete interoperability standard | Narrative Context Protocol or NCP |
| The narrative-neutral base envelope | NCP Core |
| A file exchanged between systems | NCP document |
| Dramatica information carried by NCP | Dramatica Storyform Profile |
| An author's structural argument | Dramatica Storyform or Storyform |
| The licensed rules and intelligence behind valid Storyforms | Dramatica Semantic Model or DSM |
| Licensed access to that intelligence | Dramatica MCP, API, SDK, or private service |
| The MovieLabs integration | NCP-OMC Binding |

The Dramatica platform should normally call the authoring object a **Storyform**. It should use **NCP document** at import, export, interchange, and integration boundaries. It should not use **DSM** as another name for the profile: the profile is the public representation, while the DSM is the licensed intelligence operating on that representation.

```text
Writer creates a Storyform
    -> licensed Dramatica intelligence creates or validates it
    -> Dramatica Storyform Profile represents it
    -> NCP document transports it
    -> OMC or another workflow embeds or references it
```

## What this release candidate includes

- the narrative-neutral NCP Core schema and specification;
- independent profile and extension architecture;
- Dramatica Storyform Profile 1.0.0-rc.1, including the complete previously published story structure, terminology dictionaries, direct mappings, and semantic-preservation guidance;
- generic validation-attestation transport;
- JSON serialization guidance;
- [NCP-OMC Binding 1.0.0-rc.1](bindings/omc/omc-binding.md);
- namespace, conformance, versioning, and migration guidance;
- documented boundaries between open interchange and licensed Dramatica intelligence;
- access routes for Dramatica MCP, validation, certification, SDK, studio, and private deployment;
- structural validators and synthetic examples; and
- frozen legacy artifacts for compatibility with earlier NCP documents.

## What NCP does not provide

NCP defines how narrative context is represented and exchanged. It does not include Dramatica's valid-combination logic, private structural matrices, generation algorithms, completion or resolution logic, diagnostic methods, semantic-validation technology, certification technology, or product implementation details.

The release candidate also does not grant rights to Dramatica trademarks, compatibility marks, certification marks, hosted services, SDKs, or private deployments. Those offerings have separate terms. See [Licensing and Commercial Access](governance/licensing.md) for the current public boundary.

Existing NCP releases and repository history remain unchanged.

## How to review the candidate

Reviewers may wish to consider whether:

1. a Core-only implementation can exchange narrative context without knowing Dramatica;
2. profile and extension payloads are cleanly isolated from Core;
3. the Dramatica profile preserves the existing representation and explains its terminology without recreating the licensed engine that determines valid Storyforms;
4. structural schema validation and Dramatica semantic validation are clearly distinguished;
5. OMC can embed or reference NCP without duplicating production data;
6. version and migration boundaries are clear enough for early implementers;
7. Dramatica's role as NCP's foundational profile is clear without making it a Core requirement; and
8. the path from open NCP interchange to licensed Dramatica validation and certification is understandable.

Please report feedback in a [GitHub issue](https://github.com/narrative-first/narrative-context-protocol/issues) and identify the affected layer, namespace, and release-candidate component version.

OMC means the MovieLabs Ontology for Media Creation.
