# NCP Script Content 1.0.0

Script Content is the default content-oriented screenplay interchange extension. It is independent of NCP Core, Storyforms, and the existing source-oriented Script extension. Declare namespace `ncp-script-content:`, version `1.0.0`, and schema `https://narrativecontextprotocol.com/extensions/script-content/1.0.0/script-content-schema.json`.

## Why another extension

A screenplay is writing in a deliberate order. Most writing workflows need scene headings, action, character cues, dialogue, and their stable identities—not PDF coordinates, page numbers, extraction hashes, or a production breakdown. These details change when the same script is repaginated and obscure the content the writer wants to exchange.

This extension makes the writing itself the transport. Existing `ncp-script:` documents retain their original meaning and remain useful for source provenance, extraction review, and page-level evidence. They are not silently relabeled or removed. Consumers select the content extension for ordinary script exchange and preserve legacy extensions when reading older documents. Core, Dramatica profile semantics, and Storyform validation are unchanged.

## Content contract

The payload has only `namespace`, `version`, and `scenes`. Each scene has `id`, `order`, and `blocks`. Each ordinary block has `id`, `order`, `type`, and `text`. IDs are unique across the entire script and stay stable when content moves or is edited. Positive orders increase strictly within each array; they represent presentation order, not story chronology. Gaps in order numbers are allowed.

Types follow [Fountain's syntax](https://fountain.io/syntax/): `scene_heading`, `action`, `character`, `dialogue`, `parenthetical`, `dual_dialogue`, `transition`, `lyrics`, `section`, `synopsis`, `note`, `boneyard`, and `title_page`. Emphasis stays in text. A scene heading is a content block, not duplicated scene metadata. An opening or unheaded passage can use a scene container without a heading.

A `dual_dialogue` block has `left` and `right` ordered block arrays instead of `text`. Each starts with a character and includes dialogue; remaining blocks are dialogue or parentheticals. Their IDs remain globally unique. Centering and page breaks are presentation details and are not required nodes.

The [versioned schema](1.0.0/script-content-schema.json) validates shape. `tools/script-content.js` additionally checks unique IDs, array order, dual speech structure, and local Core Moment references. Schema validation establishes transport conformance, not transcription accuracy or a valid Storyform.

## Linking to writing

A Core Storytelling Moment can reference a scene without page coordinates:

```json
{"system":"ncp-script-content:","value":"scene-station","entity_type":"script_scene"}
```

For a precise passage, use `script_block` and its ID. Resolve local references in the owning document. Do not reuse IDs from a different script draft without verified correspondence. No one-to-one relationship between a scene and a Storytelling Moment is implied.

## Fountain import and export

The companion Fountain file is a readable rendering of the nodes, not a duplicate editable source inside the payload. Importers should parse Fountain into typed nodes; renderers should use those types to display action, speakers, dialogue, and simultaneous speech. They must not print Fountain control markers as screenplay text.

The reference exporter does not prepend forced `!` action markers, `@` character markers, `.` scene markers, or `>` transition markers. It preserves the words and emits natural Fountain syntax. Meaningful syntax such as simultaneous-dialogue `^`, lyric `~`, section `#`, synopsis `=`, notes, and boneyards is retained.

Without forcing, some unusual mixed-case character names, uppercase action, and nonstandard headings are ambiguous to a generic Fountain parser. The JSON node types remain authoritative; a plain Fountain export alone is not a guarantee of lossless type round-trip. Do not alter the writer's words to disguise that limitation.

```sh
node tests/validate-script-content.js
node tools/script-content.js examples/script-content/minimal-script.json /tmp/script-content.fountain
```

The exporter refuses to overwrite an existing file. It validates this extension locally without fetching a schema supplied by an upload.

## Migration

A conversion from `ncp-script:` or the earlier Script 2 experiment is an explicit content projection. Preserve scene IDs and content block IDs where possible; if PDF-wrapped lines become one block, keep the first ID and record the old-to-new mapping outside the payload. Exclude whitespace-only records, physical page labels, and continuation furniture. Preserve real text and reject unsupported content rather than silently discarding it. Retain the original source separately when provenance is needed. Update references to the new namespace and mapped content IDs only when their correspondence is known. Do not rewrite unrelated profile payloads or transfer review/completeness claims automatically.

## Version history

- `1.0.0`: independent content-oriented extension with ordered scenes, typed content blocks, stable links, and a force-free Fountain renderer. The source-oriented Script extension remains compatible and separately governed.
