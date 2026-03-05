---
title: Narrative Context Protocol Schema Reference
description: Practical implementation guide for validating and exchanging NCP storyforms.
---

# Narrative Context Protocol Schema Reference

This document explains the canonical schema at `/schema/ncp-schema.json` and `/schema/ncp-schema.yaml`.
Use this page when implementing import/export, validation, and cross-tool interchange.

## What This Schema Guarantees

- A shared envelope for transporting narrative context (`schema_version` + `story`).
- A consistent separation of `subtext` and `storytelling` per narrative.
- Canonical enums for `appreciation`, `narrative_function`, `dynamic`, and `vector`.
- Optional custom mapping fields that preserve canonical meaning.

## Validation Quickstart

```bash
npm install ajv
node tests/validate-schema.js
```

The test runner validates:

- Valid fixtures: `/examples/example-story.json`, `/examples/ideation-beginner.json`, `/examples/anora.json`, `/examples/the-shawshank-redemption.json`
- Invalid fixtures: `/examples/invalid/*.json`

Legacy exports are kept in `/examples/legacy/` for migration reference only.

## Top-Level Shape

```json
{
    "schema_version": "1.3.0",
    "story": {
        "id": "story_123e4567-e89b-12d3-a456-426614174000",
        "title": "Echoes of the Past",
        "genre": "Mystery Thriller",
        "logline": "A hardened detective uncovers clues linking a cold case to his own haunting history.",
        "created_at": "2025-12-01T12:34:56Z",
        "ideation": {
            "character": [],
            "theme": [],
            "plot": [],
            "genre": []
        },
        "narratives": []
    }
}
```

Required top-level fields:

- `schema_version` (semver string)
- `story`

Required `story` fields:

- `id`, `title`, `logline`, `created_at`, `narratives`

Optional `story` fields:

- `genre` (concise story label)
- `ideation` (pre-narrative beginner/exploratory concept threads)

## Ideation Model (Optional Beginner Layer)

`story.ideation` is optional. If present, it must contain all four arrays:

- `character`
- `theme`
- `plot`
- `genre`

Each ideation array item is a lightweight node with required:

- `id`
- `summary`

Documented optional keys:

- `title`
- `notes`
- `tags` (array of strings)

Additional metadata is allowed on ideation nodes to support free-flowing ideation and tool-specific enrichment.

### Human-Readable Difference: Character vs Theme vs Plot vs Genre

Use the four ideation domains as different lenses on the same early concept:

- `character`: Who this is about. Capture people, roles, motivations, contradictions, relationships, and potential arcs.
- `theme`: What this means. Capture the central argument, moral tension, philosophical question, or value conflict.
- `plot`: What happens. Capture causally linked events, conflicts, turning points, and possible outcomes.
- `genre`: How it should feel. Capture audience expectation, tone, pacing language, and style conventions.

Quick heuristic:

- If it is a person or point-of-view carrier, put it in `character`.
- If it is a meaning claim or tension of values, put it in `theme`.
- If it is an event chain or conflict progression, put it in `plot`.
- If it is a framing/experience contract with the audience, put it in `genre`.

## Narrative Layers

Each item in `story.narratives[]` is a Dramatica storyform: a single, complete argument structure within the story, expressed through `subtext` and `storytelling` layers.

Each item in `story.narratives[]` contains:

- `id`
- `title`
- `status` (optional: `candidate`, `draft`, `complete`)
- `subtext`
- `storytelling`

Both objects are required.
If `status` is omitted, consumers may treat the narrative as `complete`.

## Subtext Model

`subtext` contains five required arrays:

- `perspectives`
- `players`
- `dynamics`
- `storypoints`
- `storybeats`

### Perspectives

Required keys per item:

- `id`
- `author_structural_pov` (`i`, `you`, `we`, `they`)
- `summary`
- `storytelling`

### Players

Required keys per item:

- `id`, `name`, `role`, `visual`, `audio`, `summary`, `storytelling`, `perspectives`

`perspectives` must be an array of objects, each with required `perspective_id`.

### Dynamics

Required keys per item:

- `id`, `dynamic`, `vector`, `summary`, `storytelling`

Canonical `dynamic` values:

- `main_character_resolve`
- `influence_character_resolve`
- `main_character_growth`
- `main_character_approach`
- `problem_solving_style`
- `story_limit`
- `story_driver`
- `story_outcome`
- `story_judgment`

Canonical `vector` values:

- `change`, `steadfast`
- `stop`, `start`
- `do_er`, `be_er`
- `linear`, `holistic`
- `optionlock`, `timelock`
- `action`, `decision`
- `success`, `failure`
- `good`, `bad`

Custom extension fields:

- `custom_dynamic`, `custom_dynamic_namespace`
- `custom_vector`, `custom_vector_namespace`

### Storypoints

Required keys per item:

- `id`, `appreciation`, `illustration`, `summary`, `storytelling`, `perspectives`

Optional canonical key:

- `narrative_function` (validated against canonical enum when provided)

Custom extension fields:

- `custom_appreciation`, `custom_appreciation_namespace`
- `custom_narrative_function`, `custom_narrative_function_namespace`

### Storybeats

Required keys per item:

- `id`, `scope`, `sequence`, `summary`, `storytelling`, `perspectives`

Optional keys:

- `signpost` (1-4)
- `throughline`
- `narrative_function` (validated against canonical enum when provided)
- `custom_narrative_function`, `custom_narrative_function_namespace`

`scope` controls allowed `sequence` range (enforced in schema):

- `signpost`: `1-4`
- `progression`: `1-16`
- `event`: `1-64`

## Storytelling Model

`storytelling` contains two required arrays:

- `overviews`
- `moments`

### Overviews

Required keys per item:

- `label`, `summary`, `storytelling`

`label` must be normalized snake_case (`^[a-z][a-z0-9_]*$`), e.g. `logline`, `genre_dynamics`.

### Moments

Required keys per item:

- `summary`, `synopsis`, `setting`, `timing`, `imperatives`, `storybeats`

Optional keys:

- `id`, `act`, `order`, `maximum_steps`, `fabric`, `audience_experiential_pov`

`storybeats` inside a moment is an ordered reference list:

```json
"storybeats": [
    { "sequence": 0, "storybeat_id": "beat_abc123" },
    { "sequence": 1, "storybeat_id": "beat_def456" }
]
```

## Canonical Terminology Sources

Canonical sets are versioned in two places:

- Enforced by schema enums in `/schema/ncp-schema.json`
- Documented in:
  - `/docs/terminology/02.appreciations-of-narrative.md`
  - `/docs/terminology/03.narrative-functions.md`
  - `/docs/terminology/04.dynamics.md`
  - `/docs/terminology/05.vectors.md`

## Custom Mapping Guidance

Use custom fields to map alternate terminology while preserving canonical keys.

Example (storypoint):

```json
{
    "id": "storypoint_2345abcd",
    "appreciation": "Main Character Symptom",
    "narrative_function": "Disbelief",
    "custom_appreciation": "Alternative Viewpoint",
    "custom_appreciation_namespace": {
        "Dramatica": "Main Character Symptom",
        "Hero's Journey": "Call to Adventure",
        "Save the Cat!": "Debate"
    },
    "illustration": "the character distrusts obvious evidence",
    "summary": "A recurring refusal to accept what is in front of them.",
    "storytelling": "The protagonist keeps dismissing direct warnings.",
    "perspectives": [
        { "perspective_id": "perspective_ab12cd34" }
    ]
}
```

## Legacy Data and Migration

Some historical exports in `/examples/legacy/` predate the current interchange contract.
They are useful references but are not guaranteed to validate against the canonical schema.

For migration strategy, see:

- `/docs/terminology/10.dramatica-translation.md`
- `/examples/example-mapping.json`
