# History

Narrative Context Protocol grew from early iterations involving **Paul Bennun, George Gerba, Hank Gerba, Chris Huntley, and Jim Hull**, with support from the Entertainment Technology Center at the University of Southern California. Together, they helped establish the central question that continues to guide NCP: how can a story carry its underlying narrative context and authorial intent from one tool, system, or production workflow to another?

Hank Gerba's white paper, [*“Narrative Context Protocol: An Author-Centric Storytelling Framework for Generative AI,”*](https://arxiv.org/pdf/2503.04844) documented the importance of preserving authorial intent as narrative work moves through generative systems. Paul Bennun and George Gerba helped shape the original initiative and its practical industry ambitions. Chris Huntley contributed to earlier iterations of the work, and Jim Hull connected the developing protocol to a complete, working Storyform representation drawn from Subtxt and the Dramatica platform.

## From UCM to NCP

The project began under the working name **Universal Character Model (UCM)**. Its scope soon expanded beyond characters, and early public repository material used **Universal Narrative Model (UNM)** to describe a portable model for story structure, storytelling, authorship, and contribution history.

When Jim Hull joined the effort, he saw that the larger opportunity was not another universal theory or application-specific model. The industry needed a protocol capable of making the underlying structure and intent of a narrative apparent across otherwise unrelated systems.

In spring 2025, Jim reframed and renamed the project **Narrative Context Protocol (NCP)**. The name was a deliberate, tongue-in-cheek nod to the rapid rise of Model Context Protocol at the time, but it also described the real purpose of the work: narrative systems needed a common way to exchange context, not merely another JSON file or closed application model.

## The combined NCP and Subtxt model

The first public NCP releases combined the interchange protocol with the Storyform-oriented data model used by Subtxt. NCP represented both the structural material beneath a story—called `subtext` in the schema—and the Storytelling through which that structure was expressed. It also carried multiple narratives, Storytelling Moments, authorial intent, provenance, and contribution history.

With **NCP 2.0**, Jim sought to make the properties of a Storyform, as conveyed by Subtxt, openly available for interchange. The complete NCP schema corresponded directly to how stories and Storyforms were persisted within the application at that time. Subtxt has since become an essential part of the Dramatica Narrative Platform.

That decision gave implementers a concrete and unusually complete narrative interchange model. It also meant that the public protocol and its foundational Dramatica representation appeared to be a single layer. As adoption and interest grew, that coupling made it difficult to extend NCP for other narrative systems and workflows without implying that every NCP document was a Dramatica Storyform—or that NCP itself implemented Dramatica intelligence.

## NCP 3.0: protocol, profiles, and bindings

NCP 3.0 separates those responsibilities while preserving the complete public interchange structure introduced by earlier releases:

```text
Narrative Context Protocol
    ├── NCP Core
    ├── Dramatica Storyform Profile
    ├── other narrative profiles
    ├── workflow extensions
    ├── JSON and other serializations
    └── OMC and other bindings
```

**NCP Core** is the narrative-system-neutral envelope for identity, provenance, authorial intent, profile declarations, Storytelling Moments, attestations, and interchange. **Profiles** describe how information from a particular narrative system is represented. **Extensions** add separately governed workflow information. **Bindings** describe how NCP travels through standards such as the MovieLabs Ontology for Media Creation (OMC).

The **Dramatica Storyform Profile** is NCP's foundational profile because NCP grew from a working Storyform representation and because that representation demonstrates the value of preserving a strong underlying narrative structure. The public profile retains the complete story, narratives, `subtext`, `storytelling`, Moments, terminology, definitions, and direct mappings needed to understand and transport existing information.

Foundational does not mean mandatory. NCP Core does not require Dramatica, and other narrative systems can participate through their own separately governed profiles without changing either Core or the meaning of the Dramatica profile.

## Structural validation and Storyform validation

NCP 3.0 makes an important distinction between two kinds of trust.

**NCP and profile schema validation** are public and available in this repository. They verify that a document is structurally well-formed: its JSON is valid, required fields are present, identifiers and references are shaped correctly, and a declared profile follows its published transport schema.

**Dramatica semantic validation** determines whether the transported choices constitute a complete, coherent, and valid Dramatica Storyform. Creation, completion, resolution, diagnosis, semantic validation, and certification depend on the licensed Dramatica Semantic Model and remain outside NCP itself. They are available through Dramatica's MCP, API, SDK, hosted services, and licensed private deployments. Visit [Dramatica.com](https://dramatica.com/) or contact **support@dramatica.com** to obtain access.

Keeping those capabilities separate:

- keeps NCP Core open, portable, and independent of any one narrative system;
- lets implementers preserve and exchange Storyform information without having to reproduce the Dramatica engine;
- prevents a structurally valid JSON document from being mistaken for a semantically valid Storyform;
- gives applications a versioned and authoritative source for validation, completion, diagnosis, and certification;
- allows the Dramatica Semantic Model to evolve without forcing unrelated NCP implementations to embed its private rules or algorithms;
- protects the stable meaning of the Dramatica profile from incompatible third-party changes;
- supports hosted, studio, enterprise, secure, and walled-garden deployment requirements; and
- sustains the specialist research, engineering, and stewardship required to keep Dramatica intelligence consistent and trustworthy.

Authors and studios retain their creative story information. NCP makes that information portable. Licensed Dramatica intelligence determines whether a represented structure is a valid Dramatica Storyform and can return an attestation that NCP transports to other systems.

## Dramatica's foundation

The Dramatica® Theory of Story was developed by Chris Huntley and Melanie Anne Phillips in the early 1990s and documented in their 1994 book, *Dramatica: A New Theory of Story*. Its model of a story as a structured argument observed through multiple perspectives provides the intellectual and practical foundation for the Dramatica Storyform Profile.

The public profile documents the representation used for interchange. The licensed Dramatica Semantic Model supplies the relationships, constraints, valid structural combinations, algorithms, and semantic intelligence that make a Storyform authoritative.

## Stewardship today

As of February 2026, **Jim Hull and Narrative First steward the Narrative Context Protocol**. Narrative First operates the Dramatica platform through **The Dramatica Company LLC**, bringing the open interoperability work of NCP and the authoritative commercial intelligence of Dramatica into a clear, sustainable relationship.

This current stewardship builds on the project's collaborative origins and continues its enduring goal: preserving the author's narrative intent as stories move across tools, technologies, and production workflows.

## Release chronology

### 3.0.0-rc.1 — Layered interoperability release candidate

- Separates narrative-neutral NCP Core from narrative-system profiles, extensions, serializations, and bindings.
- Establishes the complete public Dramatica Storyform Profile as NCP's foundational, but optional, narrative-system profile.
- Preserves the previously published story, narratives, `subtext`, `storytelling`, Moments, terminology, definitions, and direct interoperability mappings without publishing Storyform-generation, valid-combination, completion, diagnosis, or semantic-validation logic.
- Adds generic attestation transport while keeping the meaning and production of semantic results outside Core.
- Adds the NCP-OMC 1.0.0-rc.1 binding for OMC 2.8 Custom Data Blocks and resolvable references.
- Distinguishes open structural validation from licensed Dramatica semantic validation and certification.
- Freezes the legacy combined schema for compatibility and documents migration from NCP 2.x.
- Publishes the boundary between open Core, the foundational Dramatica profile, separately licensed Dramatica capabilities, and mark permissions.

This candidate introduces the layered NCP architecture and updates the current license preamble to describe NCP as an interchange standard. The MIT grant text, prior releases, and repository history remain unchanged.

### 2.0.0 — Complete combined Storyform interchange model

- Published the complete story and Storyform persistence structure used by Subtxt as a combined NCP schema.
- Supported multiple narratives and story-level Storytelling Moments with narrative-qualified Storybeat and Storypoint references.
- Added reusable story settings, ideation domains, narrative status, and richer structural templates.
- Published Dramatica-oriented terminology, definitions, Dynamics, Vectors, direct mappings, and semantic-preservation guidance.
- Tightened structural validation for canonical fields, labels, references, and closed narrative shapes.

The 2.0 schema remains available as a frozen compatibility artifact. NCP 3 preserves its Storyform-oriented transport structure through the Dramatica Storyform Profile rather than treating it as NCP Core.

For the current architecture, see the [NCP 3.0 release-candidate overview](RELEASE_CANDIDATE.md). For current public Dramatica terminology, see [`profiles/dramatica/terminology/`](profiles/dramatica/terminology/). For the validation boundary and licensed access routes, see [Validation](VALIDATION.md) and [Licensing and Commercial Access](governance/licensing.md).
