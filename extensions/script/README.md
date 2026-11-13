# NCP Script Extension 0.1.0-draft

Status: draft for technical review; independently versioned and optional. This is not part of NCP Core or a Dramatica profile requirement.

The Script extension preserves the storytelling represented by a particular screenplay source, including scenes that have no structural association. It transports a source record and proposed or reviewed interpretations; it does not generate or certify a Storyform.

## Declaration

Use namespace `ncp-script:`, version `0.1.0-draft`, and schema `https://narrativecontextprotocol.com/extensions/script/0.1.0-draft/script-schema.json`. The corresponding payload has `namespace`, `version`, `scope`, `sources`, `units`, `blocks`, and `entities`. Relations, structural associations and review issues are optional.

The repository schema is authoritative for this draft. The schema URI is an identifier, not a requirement to fetch it during validation. Consumers should pin the reviewed schema locally and must not download schemas supplied by untrusted uploads.

## Source and coverage

Each source identifies an exact edition by SHA-256 and records its extractor. Extraction hashes identify the text derivative separately. The source can include inline block text or resolvable external content references. References identify material; they do not prove that the consumer has obtained or verified it.

`scope.kind` distinguishes `full_work` from `partial_work`. `capture_status: extracted_text_accounted_for` means the declared extracted text is accounted for, including unresolved blocks. It is not proof of an accurate PDF transcription, a complete released-film representation, structural completeness, or human approval. Known missing pages or source content require `incomplete` and a `gap` review issue. A consumer unable to resolve external source content must report that limit and must not claim it read the source.

`human_review_status`, `transcription_status`, `structural_links_status` and `boundary_status` record separate claims. No analysis step automatically upgrades a human-review state.

## Units, blocks and entities

Units appear in strictly increasing, unique presentation order. A unit may be a headed scene, a subscene or a montage container. A montage is not necessarily one physical scene. An optional parent must identify an earlier unit; implicit location changes may remain unresolved until review.

Each block belongs to exactly one unit, whose ordered `block_ids` retain its position. Preserve headings, action, character cues, dialogue, parentheticals, transitions, unattributed text and layout artifacts. Unsupported text must remain represented rather than silently disappearing. Inline `text` preserves the selected extractor's text; an external `content_reference` must resolve with its source anchor. Unit anchors describe the content extent; layout artifacts assigned to the unit can extend outside that extent.

Anchors identify a source, coordinate-system version, and matching start/end coordinates. Examples use `pdf-layout-lines-v1`, `text-lines-v1`, and `fdx-paragraphs-v1`; paragraph coordinates are one-based. Line coordinates are one-based within the identified PDF page or plain text. PDF page numbers are physical one-based pages, independently of printed labels. Extraction or edition changes require new anchors or verified reattachment. Do not silently transfer reviewed evidence to a new source hash.

Entities are characters, groups, locations, objects or animals. Observations distinguish textual mentions and speaker cues from proposed on-screen or off-screen occurrences. `voiceover` and `offscreen` delivery never establish physical presence in a location. Identity resolution and location normalization can remain proposed; a lexical mention is not a verified production breakdown.

## Storytelling and structure

Optional relations describe proposed or reviewed causality, reported consequences, explanation, setup/payoff or visual echoes. Presentation adjacency alone must not be interpreted as causation or story chronology.

Structural associations contain a generic target reference, a relation label, status, rationale and evidence blocks from the associated unit. They are many-to-many; a unit can have zero associations. Target namespaces retain authority over their own semantics. This extension defines no Dramatica rules or mappings. A link to an external record does not certify that record or imply that its system accepted the link.

Core Storytelling Moments can reference script units. Do not require one Moment per physical scene: summaries and narrative events can span or subdivide scenes. Profile payloads retain ownership of structural data; do not copy profile semantics into script entities.

## Responsibility boundaries

NCP may carry a source-anchored storytelling snapshot. MovieLabs OMC remains authoritative for its production graph, including production breakdown records, schedules, casting, assets, departments and operational workflow. Link to those records through identifiers rather than replacing that graph with script observations.

Upload handling, source storage, inference providers, background jobs, cancellation, budgets and interactive check-ins are application responsibilities. They are not conformance requirements of this extension.

## Conformance and compatibility

Validate the Core envelope, this extension's schema, and these reference invariants separately:

- IDs are unique within each collection; declared source and unit references resolve locally.
- Every block is listed once by its owning unit; observation and association evidence belongs to the referenced unit.
- Unit order strictly increases; parent references point backwards; anchors do not reverse or mix coordinate types.
- Relation endpoints and evidence, scope endpoints and review-issue units resolve.
- Structural associations have evidence; a known gap cannot be labeled fully accounted for.

`tests/script-contract.js` provides reference checks for these invariants. These checks validate transport and local references, not semantic correctness, chronology, causal truth, hash authenticity, or externally referenced content.

Existing Core, profile and legacy combined documents remain unchanged and do not need this extension. Unknown declared namespaces should be preserved without reinterpretation. This draft can change before stabilization; consumers must reject unsupported recognized versions rather than treating them as this version.

## Examples

- [Minimal source with no Storyform](../../examples/script/minimal-script.json)
- [Generic proposed structural association](../../examples/script/linked-script.json)
- [Shawshank first-Act scene inventory](../../examples/script/shawshank-act-one.json)

The Shawshank example describes the February 22, 1993 Final Draft from the opening through the rooftop beer scene, before checkers on printed page 37. It includes 51 scene headings, one montage and one roof subheading. Its Act boundary, summaries and entity inventory remain proposed. The example references the supplied source by hash and coordinates; it does not redistribute the screenplay or private production analysis. It is a screenplay-revision example, not a transcript of the released film.

## Change history

- `0.1.0-draft`: initial optional Script transport, separate capture/review states, evidence-backed associations, examples and reference checks. No Core or frozen legacy schema changes.
