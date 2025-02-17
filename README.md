# Universal Narrative Model (UNM)  

## Overview  
The **Universal Narrative Model (UNM)** is an **open-source framework** for structuring and analyzing complete narratives across film, television, gaming, interactive fiction, and AI-assisted storytelling. Designed as an **evolving industry standard**, the UNM provides a scalable, structured approach to narrative development while remaining **open for adoption, modification, and refinement**.  

UNM is maintained as an **open standard** to ensure accessibility, innovation, and industry-wide collaboration. It is **not affiliated with, endorsed by, or derived from any proprietary software or system** but has been **independently developed** with a focus on **narrative scalability, computational modeling, and AI-integrated storytelling applications**.

The UNM provides a standard format for structuring narrative elements, enabling consistency, interoperability, and adaptability across storytelling platforms. At its core, the model divides a story into two layers:
- **Subtext:** Deep structural meaning (e.g., perspectives, players, dynamics, storypoints, storybeats).
- **Storytelling:** The surface-level presentation (e.g., overviews, moments).

This dual-layer approach preserves the author's intent while allowing flexible presentation for diverse storytelling applications.

## Key Features  
✅ **Open-Source Standard** – Available for use, modification, and integration into various storytelling platforms.  
✅ **Scalable Narrative Structure** – A flexible yet structured approach to narrative construction, complete with clearly defined key components.  
✅ **Industry-Wide Adoption** – Designed for use across film, gaming, AI, and interactive fiction. 
✅ **Justification-Based Framework** – UNM allows for a structured approach to story construction, but the specific implementation of its **Justification process** is left to individual adopters.     
✅ **Writer Protections** – Captures authorial intent, ensuring clear attribution and rights tracking.  
✅ **Computational Refinements** – Incorporates algorithmic improvements for more accurate event sequencing.  
✅ **Extensible & Customizable:** Support for custom mappings to integrate with frameworks like Dramatica, Hero’s Journey, and Save the Cat!  
✅ **Interoperability:** Easily exchange narrative data between platforms.

## Getting Started
- **Schema:** Review [schema/unm-schema.json](schema/unm-schema.json) or its YAML version.
- **Examples:** See [examples/example-story.json](examples/example-story.json) for a full narrative example.
- **Validation:** Use the [validation guide](docs/validation-guide.md) and [test script](tests/validate-schema.js) to verify your JSON files.

## Repository Structure
```
universal-narrative-model/
├── README.md
├── SPECIFICATION.md
├── CONTRIBUTING.md
├── LICENSE
├── schema/
│   ├── unm-schema.json
│   └── unm-schema.yaml
├── examples/
│   ├── example-story.json
│   └── example-mapping.json
├── docs/
│   ├── getting-started.md
│   ├── universal-narrative-model-schema.md
│   ├── api-integration.md
│   └── validation-guide.md
│   └── history.md
├── tests/
│   └── validate-schema.js
└── .gitignore
```

## Licensing & Governance  
The UNM is released under the **MIT License** (see [LICENSE.md](LICENSE.md)) to maintain openness while ensuring proper attribution.  

The development and refinement of UNM are **stewarded by Narrative First**, ensuring continuous innovation and industry alignment. Contributions and modifications are encouraged, and governance policies are outlined in [CONTRIBUTING.md](CONTRIBUTING.md).  

## Acknowledgment of Influences  
The UNM **draws upon foundational principles of narrative theory**, including prior research in thematic relationships and story structure. Some of these concepts have roots in early narrative modeling efforts, including theories introduced in the 1990s. While early discussions involved contributors familiar with prior models, the **UNM has evolved independently** through new methodologies, computational modeling, and AI-compatible refinements. 

## Development & Stewardship  

The Universal Narrative Model (UNM) was initially developed in collaboration with the **Entertainment Technology Center (ETC) at USC** as part of an effort to establish a modern, scalable narrative framework. While ETC provided early contributions and support in shaping the model, **Narrative First serves as the primary steward of UNM**, ensuring its continued evolution, refinement, and industry adoption.  

Narrative First is responsible for:  
- Maintaining the **open-source repository** and governing model updates.  
- Overseeing **industry adoption and API integration** for storytelling applications.  
- Expanding the framework through **AI-driven research and computational refinements**.  

ETC remains an academic partner, providing foundational insights and alignment with emerging storytelling technologies, while Narrative First leads its implementation in real-world applications.

## How to Contribute  
We welcome contributions to refine and expand UNM! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting improvements, engaging in governance, and shaping the future of narrative structure.  

## Contact  
For inquiries, industry partnerships, or licensing discussions, reach out to [Narrative First](https://narrativefirst.com).  

Happy storytelling!
