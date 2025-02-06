# Universal Narrative Model

The Universal Narrative Model (UNM) provides a standardized JSON format for structuring narrative elements, enabling consistency, interoperability, and adaptability across storytelling platforms. At its core, the model divides a story into two layers:
- **Subtext:** Deep structural meaning (e.g., perspectives, players, dynamics, storypoints, storybeats).
- **Storytelling:** The surface-level presentation (e.g., overviews, moments).

This dual-layer approach preserves the author's intent while allowing flexible presentation for diverse storytelling applications.

## Features
- **Structured Narrative Elements:** Clearly define key components.
- **Extensible & Customizable:** Support for custom mappings to integrate with frameworks like Dramatica, Hero’s Journey, and Save the Cat!
- **Interoperability:** Easily exchange narrative data between platforms.

## Repository Structure

universal-narrative-model/
├── README.md
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
├── tests/
│   └── validate-schema.js
└── .gitignore


## Getting Started
- **Schema:** Review [schema/unm-schema.json](schema/unm-schema.json) or its YAML version.
- **Examples:** See [examples/example-story.json](examples/example-story.json) for a full narrative example.
- **Validation:** Use the [validation guide](docs/validation-guide.md) and [test script](tests/validate-schema.js) to verify your JSON files.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy storytelling!