# Proposal: Canonical top-level `locations` field for NCP

**Date:** 2026-04-24
**Author:** Paul Bennun (Narrative Management / Fuchsia Projects)
**Upstream repository:** [narrative-first/narrative-context-protocol](https://github.com/narrative-first/narrative-context-protocol)
**Local reference:** ADR-075 §5.6 (NCPKit 1.3 Canonical Catch-Up); ADR-040 (Location Schema and Enrichment); ADR-077 (Scene-Location Presence Graph)

---

## TL;DR

We would like to propose promoting `locations` from a producer-namespaced
extension (`x-nm-locations`) to a canonical top-level NCP field. Five fields:
`id`, `name`, `description`, and an optional `environment_hints` array. The
change is additive; absent producers and absent consumers behave unchanged.

A Swift reference implementation already exists in
[`paulbennun/NCPKit`](https://github.com/paulbennun/NCPKit)
(`NCPLocation` / `NCPStoryRoot.x-nm-locations`, shipping as of NCPKit 2.1.0),
and has been exercised through a 6-location working corpus (the "Gilly, Sniff
and Snively" demo used for our voice-storytelling runtime). The motivation
below is grounded in that implementation experience.

---

## 1. Motivation

### 1.1 Empirical use

Our authoring tool (MUM) and runtime (Creode Story Player) have been emitting
and consuming a `locations` array on `NCPStoryRoot` for about eighteen months,
initially as a plain top-level field, now namespaced as `x-nm-locations` to
conform with canonical NCP 1.3.0's closed-root policy
(`additionalProperties: false`).

A representative working corpus (Gilly, Sniff and Snively — six locations) uses
only the `id`, `name`, and `description` fields. Example entry:

```json
{
  "id": "07C09A13-6DA8-4F8D-93FE-D8E1F695DE4B",
  "name": "LouLou's Refuge",
  "description": "The deep pocket where LouLou has been surviving since the cave shift. Improvised survival measures, adapted equipment, and an intimate understanding of the crystal field's behavior. …"
}
```

Canonical NCP 1.3.0 has three nearby constructs — `moment.setting` (free-text
setting description), `moment.fabric` (structural space/time limits), and
`moment.audience_experiential_pov` — but no structured place entity with an
id that other narrative objects can reference. A canonical `locations[]` array
would formalise what multiple producers already want to express and would
remove a class of extension fields whose semantics aren't producer-specific.

### 1.2 Downstream linkage: scene-level location references

Consumers that process scene-grained data (e.g. 3D scenegraph rendering,
speaker-eligibility filtering at scene boundaries, and per-scene location
coverage analysis) need a stable foreign key from scene-like objects to a
place entity. With a canonical `locations[]` array, individual consumers can
add a `location_id: String` (or similar) to their own scene representations
and resolve it without string-matching against free-text `setting` fields.

In our implementation this is already in production: ADR-077 introduces an
optional `NCPScene.location_id` as a foreign key into the same list, and
NCPKit 2.1.0 validates the FK at load. That scene-side extension is
out of scope for this upstream proposal — what's in scope is the canonical
target those FKs can point at.

### 1.3 Acoustic / environment routing (background, not a required canonical
concept)

Our runtime uses `locations[].environment_hints` to drive acoustic routing:
a real-time voice storytelling engine routes dialogue through different
acoustic profiles depending on the place a character currently occupies.
That runtime concern is NM-specific and should *not* motivate upstream schema
surface of its own, but it does motivate keeping a small free-form hint array
on each location so producers can attach author-declared place characteristics
without having to fork the schema.

`environment_hints` is intentionally described as producer-defined free-form
tags — the upstream canonical semantics would be "opaque strings; consumers
may interpret or ignore them per their own conventions".

---

## 2. Proposed schema

Add a top-level optional `locations` array to `NCPStoryRoot`. Draft JSON
Schema snippet (in the draft-07 style used by `schema/ncp-schema.yaml`):

```yaml
locations:
    type: array
    description: |
        Optional place glossary for the story. Each entry is a stable,
        referenceable place entity. Producers that do not emit locations omit
        the field; consumers that do not consume locations ignore it.
    items:
        type: object
        properties:
            id:
                "$ref": "#/$defs/stable_id"
            name:
                type: string
                description: Short human-readable place name.
            description:
                type: string
                description: Optional longer place description.
            environment_hints:
                type: array
                description: |
                    Optional array of producer-defined free-form tags
                    describing the place. Semantics are producer-specific;
                    consumers may interpret or ignore these tags per their
                    own conventions (e.g. acoustic / atmospheric routing).
                items:
                    type: string
        required:
        - id
        - name
        additionalProperties: false
```

Four fields total, two required (`id`, `name`), two optional (`description`,
`environment_hints`). The field is itself optional on the root.

Equivalent JSON Schema snippet (matching the project's dual
YAML/JSON publication):

```json
{
  "locations": {
    "type": "array",
    "description": "Optional place glossary for the story.",
    "items": {
      "type": "object",
      "properties": {
        "id":               { "$ref": "#/$defs/stable_id" },
        "name":             { "type": "string" },
        "description":      { "type": "string" },
        "environment_hints":{ "type": "array", "items": { "type": "string" } }
      },
      "required": ["id", "name"],
      "additionalProperties": false
    }
  }
}
```

### Example fixture entry (to accompany `examples/` if accepted)

```json
{
  "schema_version": "1.4.0",
  "story": { "…": "…" },
  "locations": [
    {
      "id": "07C09A13-6DA8-4F8D-93FE-D8E1F695DE4B",
      "name": "LouLou's Refuge",
      "description": "The deep pocket where LouLou has been surviving since the cave shift.",
      "environment_hints": ["cave"]
    },
    {
      "id": "395B37AA-80C2-42D8-9955-CFEC7C18CB1F",
      "name": "WANGCH Orbital Station",
      "description": "Corporate command platform in orbit above Fuchsia 9.",
      "environment_hints": ["orbital", "station"]
    }
  ]
}
```

---

## 3. Backward compatibility

- **Additive.** The field is optional at the root; absent field means no
  structural place glossary, identical to current 1.3.0 behaviour.
- **Closed-root still honoured.** The addition is reflected in the root's
  `additionalProperties: false` allow-list — no broader loosening is required.
- **No existing field semantics change.** `moment.setting` (free-text),
  `moment.fabric`, and `moment.audience_experiential_pov` remain as-is. The
  `locations` glossary is orthogonal to `moment.setting`: producers that care
  about structured place identity emit both and link them by author
  convention; producers that only care about free-text setting carry on as
  they do today.
- **Schema version.** Could land as a 1.4.0 additive bump or inside any
  other 1.x minor release adding optional fields, whichever suits the
  project's release cadence.

---

## 4. Runtime concerns that *don't* belong upstream

To keep the proposal minimal, a few pieces of our implementation are
explicitly kept on the producer/consumer side and are **not** part of this
proposal:

- **Per-beat / per-moment presence graphs** (we build one at runtime from
  `moment.setting` bracket annotations; ADR-040). That's an NM-specific
  runtime derivation.
- **Scene-level `location_id` foreign keys** on scenes (ADR-077). A
  canonical `locations[]` makes this kind of extension cleaner for any
  producer who wants it, but the scene-side shape is out of scope here —
  scene-level location references can land as separate per-adopter
  extensions or as a follow-up proposal.
- **Acoustic routing semantics, including the vocabulary of
  `environment_hints`** (`cave`, `orbital`, `station`, etc. in our runtime).
  These are our conventions; we would expect `environment_hints` to be
  documented upstream as "producer-defined free-form tags" rather than a
  closed enum.
- **Adjacency / containment / navigation graphs**. Deliberately omitted;
  see §6 Alternatives.

---

## 5. Migration path

- **For producers currently emitting `x-nm-locations`** (our NM stack), or
  anyone else carrying a non-canonical `locations` variant: once the field
  lands canonically, the migration is a JSON key rename at serialisation
  time. No shape changes required if the fields already match the proposed
  schema.
- **For producers not currently emitting any place data**: no action; the
  field remains optional.
- **For consumers not expecting the field**: unchanged; the field is
  ignorable.

---

## 6. Alternatives considered

- **(a) Per-scene / per-moment inline location objects.** Rejected:
  duplicates place data across narrative objects, makes deduplication and
  rename operations harder, and doesn't allow locations that are referenced
  from multiple scenes/moments to share a single identity.
- **(b) Nested under `narrative.subtext.locations` or similar.** Rejected:
  a place glossary is a *story-level* concern (multiple narratives within a
  story can share the same place glossary), so placing it at
  `narrative.subtext` would push consumers into union-across-narratives
  computations for no gain.
- **(c) Keep as a producer-namespaced extension indefinitely.** This is
  the current state. It works, and NM carries `x-nm-locations` comfortably,
  but the per-producer namespacing produces drift: different adopters who
  reach for a place glossary will likely invent slightly different shapes
  under different `x-` prefixes. Converging on a minimal canonical shape
  avoids that drift.

---

## 7. Reference implementation

A Swift reference implementation exists in
[`paulbennun/NCPKit`](https://github.com/paulbennun/NCPKit):

- [`NCPLocation`](https://github.com/paulbennun/NCPKit/blob/main/Sources/NCPKit/NCPModels.swift)
  — `{ id, name, description?, environment_hints? }`, exactly matching the
  four fields proposed above.
- `NCPStoryRoot.xNmLocations: [NCPLocation]?` — currently serialised as
  `x-nm-locations`; would become `locations` canonically on adoption.
- Validator in NCPKit 2.1.0 checks scene-level foreign keys
  (`NCPScene.location_id`) against the location glossary on load, so we
  have live experience of the FK pattern at validation time.

Consumer touch-points in our stack include Multi-Universe Manager
(authoring), Storyformer (3D visualiser), Creode Story Player (runtime), and
the `NCPMCPServer` package exposing MCP tools `get_locations`, `add_location`,
`update_location`, `remove_location`.

---

## 8. Summary of the ask

Add a single optional top-level `locations` array, as specified in §2, to the
canonical NCP schema in a future additive release.

If this shape is the right direction but any of the specifics want
adjustment (field names, `environment_hints` inclusion, FK style for
downstream scene references), we're very happy to iterate. If there's
preference for this to land as an issue-first discussion before a schema PR,
we can restructure this document accordingly.

Thank you for stewarding NCP — the schema has been genuinely useful for us
as a cross-tool narrative interchange, and this proposal comes out of an
adopter's wish to be a good citizen with an extension we've been carrying
for a while.
