# NCP 3.0.0-rc.1 Review Guide

This candidate is intended for public interoperability review before a final NCP 3.0.0 release.

## Why NCP 3.0

NCP 3.0 takes the previously combined NCP/Subtext story model and establishes it as the foundational Dramatica Storyform Profile within a broader, narrative-system-neutral interoperability architecture.

The public Dramatica profile preserves the complete Storyform-oriented interchange structure, terminology, definitions, and mappings. NCP Core provides the independent envelope around it, allowing narrative context to move through OMC and other workflows and to support additional profiles and extensions without altering or requiring Dramatica.

Dramatica is foundational to NCP's history and profile architecture, but it is not mandatory for every NCP document. Other narrative systems can participate through separately governed profiles.

The public profile explains how existing Dramatica information is represented and transported. The licensed Dramatica Semantic Model and its intelligence create, complete, resolve, diagnose, semantically validate, and certify a Storyform. Those capabilities are obtained through Dramatica's MCP, API, SDK, or licensed private services.

Authors and studios retain their creative story information. The Dramatica Co. provides the authoritative licensed intelligence that determines whether that information constitutes a valid Dramatica Storyform.

## Architecture progression

```text
Previously:
Combined NCP/Subtext Storyform model

NCP 3.0:
Narrative Context Protocol
    ├── NCP Core
    ├── Dramatica Storyform Profile
    ├── other narrative profiles
    ├── workflow extensions
    └── OMC and other bindings
```

NCP is the complete interoperability architecture. NCP Core is its narrative-system-neutral foundation. The Dramatica Storyform Profile is foundational, separately versioned, and optional for Core conformance.

## Public and licensed boundary

```text
Public Dramatica profile:
Transport structure + terminology + definitions + direct mappings

Licensed through Dramatica:
Creation + completion + resolution + diagnosis
+ semantic validation + certification
```

The public material shows implementers what information exists and how to preserve it. Licensed Dramatica intelligence answers how those choices form a valid Storyform.

## Product language

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

The Dramatica platform should normally call the authoring object a **Storyform**. It should use **NCP document** at import, export, interchange, and integration boundaries. It should never use **DSM** as another name for the profile: the profile is the public representation, while the DSM is the licensed intelligence operating on that representation.

```text
Writer creates a Storyform
    -> licensed Dramatica intelligence creates or validates it
    -> Dramatica Storyform Profile represents it
    -> NCP document transports it
    -> OMC or another workflow embeds or references it
```

## Included for review

- narrative-neutral NCP Core schema and specification;
- independent profile and extension architecture;
- Dramatica Storyform Profile 1.0.0-rc.1 with the complete previously published story structure, terminology dictionaries, direct mappings, and semantic-preservation guidance;
- generic validation-attestation transport;
- JSON serialization guidance;
- NCP-OMC Binding 1.0.0-rc.1;
- namespace, conformance, versioning, and migration mechanics;
- the intended open-Core, foundational-profile, and licensed-Dramatica commercial boundary;
- access routes for Dramatica MCP, validation, certification, SDK, studio, and private deployment;
- structural validators and synthetic examples; and
- frozen-legacy compatibility artifacts and a clear public-profile-versus-licensed-intelligence boundary.

## Intentionally excluded

- contributor-agreement terms;
- final service, SDK, profile, trademark, compatibility-mark, and certification terms;
- Dramatica valid-combination logic, private structural matrices, generation algorithms, completion and resolution logic, diagnosis, semantic-validation technology, certification technology, or product implementation details.

The current license preamble is updated to reflect the layered interoperability architecture while preserving the MIT grant text. Existing releases and repository history are unchanged.

## Review questions

1. Can a Core-only implementation exchange narrative context without knowing Dramatica?
2. Are profile and extension payloads cleanly isolated from Core?
3. Does the Dramatica profile preserve the complete existing representation and make its terminology understandable without recreating the engine that determines valid Storyforms?
4. Are schema and semantic validation results impossible to confuse?
5. Can OMC embed or reference NCP without duplicating production data?
6. Are version and migration boundaries explicit enough for early implementers?
7. Is it clear that Dramatica is NCP's foundational profile without being required by Core?
8. Is the route from open NCP transport to licensed Dramatica validation and certification clear?

Report feedback in a GitHub issue and identify the affected layer, namespace, and candidate component version.

OMC means the MovieLabs Ontology for Media Creation.
