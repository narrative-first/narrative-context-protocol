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
- Canonical story-level `moments` that can reference Storybeats and Storypoints across narratives.
- Closed canonical narrative shapes, so extra keys are rejected unless a shape explicitly allows extensions.
- Canonical enums for `appreciation`, `narrative_function`, `dynamic`, and `vector`.
- Optional custom mapping fields that preserve canonical meaning.

## Validation Quickstart

```bash
npm install ajv
node tests/validate-schema.js
```

The test runner validates:

- Valid fixtures: `/examples/example-story.json`, `/examples/ideation-beginner.json`, `/examples/complete-space-adventure-storyform.json`, `/examples/complete-storyform-template.json`
- Invalid fixtures: `/examples/invalid/*.json`

Legacy exports are not part of canonical validation.

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
        "moments": [],
        "narratives": []
    }
}
```

Required top-level fields:

- `schema_version` (semver string)
- `story`

Required `story` fields:

- `id`, `title`, `logline`, `created_at`, `moments`, `narratives`

Optional `story` fields:

- `genre` (concise story label)
- `ideation` (pre-narrative beginner/exploratory concept threads)

## Story Moments

`story.moments[]` is the canonical home for audience-facing storytelling units such as scenes, acts, chapters, sequences, or levels. Moments belong to the story because storytelling units often carry structural material from more than one formal narrative.

For example, one scene might advance a public evacuation narrative while also turning a mentor-student relationship narrative. Keeping that scene in `story.moments[]` lets the Moment reference both narratives without duplicating the scene or forcing one narrative to own it.

Required keys per item:

- `summary`, `synopsis`, `setting`, `timing`, `imperatives`, `storybeats`, `storypoints`

Optional keys:

- `id`, `setting_id`, `act`, `order`, `maximum_steps`, `fabric`, `audience_experiential_pov`

`storybeats` is an ordered list of narrative-qualified Storybeat references:

```json
"storybeats": [
    {
        "sequence": 0,
        "narrative_id": "narrative_evacuation",
        "storybeat_id": "beat_evac_signpost_2"
    },
    {
        "sequence": 1,
        "narrative_id": "narrative_mentor_student",
        "storybeat_id": "beat_mentor_signpost_2"
    }
]
```

`storypoints` is an ordered list of narrative-qualified Storypoint references:

```json
"storypoints": [
    {
        "sequence": 0,
        "narrative_id": "narrative_evacuation",
        "storypoint_id": "storypoint_evac_goal"
    },
    {
        "sequence": 1,
        "narrative_id": "narrative_mentor_student",
        "storypoint_id": "storypoint_mentor_issue"
    }
]
```

`setting` remains the Moment-specific free-text description. `setting_id` may reference a `story.settings[]` entry when the Moment occurs in a reusable story-level setting.

Canonical payloads should not contain `narratives[].storytelling.moments[]`. Moments have one home: `story.moments[]`.

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

## Story Settings

`story.settings[]` is an optional story-level glossary for reusable places or environments. Each setting requires an `id` and `name`, with an optional `description`. Moments may keep their local free-text `setting` prose while also pointing at a shared setting with `setting_id`.

Use this when multiple Moments occur in the same place and producers want a stable reference instead of repeating or string-matching setting descriptions.

```json
"settings": [
    {
        "id": "setting_precinct_archive",
        "name": "Precinct Archive",
        "description": "A dimly lit archive room where old case files preserve institutional memory."
    }
]
```

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

IDs are opaque strings. Plain UUIDs are fine; type prefixes are optional.
Perspectives are closed authorial POV records; do not place role, conflict, or character identity fields here.

### Players

Required keys per item:

- `id`, `name`, `role`, `visual`, `audio`, `summary`, `bio`, `storytelling`, `motivations`, `perspectives`

`perspectives` must be an array of objects, each with required `perspective_id`.
`motivations` must be an array of closed objects with required `narrative_function`, `illustration`, and `storytelling`.
Player identity belongs here, not on `perspectives`.
IDs are opaque strings. Plain UUIDs are fine; type prefixes are optional.

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
- `initial_story_driver`
- `second_story_driver`
- `midpoint_story_driver`
- `fourth_story_driver`
- `concluding_story_driver`
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

Canonical appreciation names for storypoints include the lane, such as:

- `Objective Story Problem`
- `Main Character Symptom`
- `Influence Character Issue`
- `Relationship Story Catalyst`

Optional canonical key:

- `throughline` for structural bookkeeping/grouping and round-trip stability when `perspectives` refs are not yet available.

Allowed canonical `throughline` values:

- `Objective Story`
- `Main Character`
- `Influence Character`
- `Relationship Story`

Canonical outputs should use only full labels. Importers may still normalize shorthand input before persistence.

Example canonical storypoint (lane retained without a perspective link yet):

```json
{
  "id": "point_x",
  "throughline": "Main Character",
  "appreciation": "Main Character Problem",
  "narrative_function": "Control",
  "illustration": "",
  "summary": "A structural placeholder while links are being built.",
  "storytelling": "Lane can persist before POV linkage exists.",
  "perspectives": []
}
```

Optional canonical key:

- `narrative_function` (validated against canonical enum when provided)

`subtext.perspectives[]` are POV framing/setup nodes rather than a restatement of Dramatica storyform throughline labels. They should carry meaningful `summary` and `storytelling` content for framing perspective context.

Custom extension fields:

- `custom_appreciation`, `custom_appreciation_namespace`
- `custom_narrative_function`, `custom_narrative_function_namespace`

### Storybeats

Required keys per item:

- `id`, `scope`, `sequence`, `summary`, `storytelling`, `perspectives`

Optional keys:

- `appreciation` (derived structural label such as `Objective Story Signpost 1`)
- `throughline`
- `narrative_function` (validated against canonical enum when provided)
- `custom_narrative_function`, `custom_narrative_function_namespace`

`scope` controls allowed `sequence` range (enforced in schema):

- `signpost`: `1-4`
- `progression`: `1-16`
- `event`: `1-64`

When `appreciation` is present on a Storybeat, it should restate the structural slot implied by `throughline + scope + sequence`. Canonical Storybeats do not expose a `signpost` key; consumers should derive any internal grouping from structure or parent relationships when the field is omitted.

## Storytelling Model

`storytelling` contains one required array:

- `overviews`

### Overviews

Required keys per item:

- `id`, `label`, `summary`, `storytelling`

IDs are opaque strings. Plain UUIDs are fine; type prefixes are optional.
`label` must be exactly one of:

- `Logline`
- `Genre`
- `Blended Throughlines`

Canonical exporters should emit those exact Title Case values.
Importers/normalizers may accept legacy inputs such as `logline`, `genre`, `blended_throughlines`, `Premise Overview`, and `Four Throughlines Extraction`, but they should normalize those values before schema validation or export.

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
        { "perspective_id": "123e4567-e89b-12d3-a456-426614174000" }
    ]
}
```

## Legacy Data and Migration

Historical exports may predate the current interchange contract.
Normalize those payloads against the current schema before treating them as canonical NCP.

For migration strategy, see:

- `/docs/terminology/10.dramatica-translation.md`
- `/examples/example-mapping.json`
