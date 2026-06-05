# NCP Semantic Grounding

The Narrative Context Protocol (NCP) is a transport format for preserving narrative context across tools, agents, and creative systems. This guide explains how consuming tools should preserve the meaning of key Dramatica-informed terms when reading, writing, or transforming NCP.

This file is a semantic interoperability guide. It is not a replacement for Dramatica theory, canonical analysis, the Dramatica Narrative Platform, Narrova, Subtxt, or any other product-side reasoning workflow.

## Defensibility Boundary

NCP is open so story context can travel without collapsing into loose prose. Dramatica's deeper value remains in the theory, canonical library, analytical methods, corpus-backed interpretation, and product workflows that help writers discover and refine meaning.

Use this file to:

- preserve term boundaries when an AI model reads or writes NCP;
- prevent common generic-storytelling substitutions;
- keep Storyform, Storytelling, and authored notes separated;
- help tools interoperate without pretending to reproduce Dramatica analysis.

Do not use this file as:

- a complete Dramatica theory manual;
- a source of canonical story analysis;
- a substitute for Storyform diagnosis;
- a recipe for reproducing Narrova, Subtxt, or Dramatica platform behavior.

The public posture is: open protocol, proprietary depth.

## Core Rule

When working with NCP, preserve the difference between structural meaning and expressive presentation.

- `subtext` carries the intended structural meaning of a narrative.
- `storytelling` carries the audience-facing expression of that meaning.
- `story.moments[]` carries Story-level units of presentation that may reference Storybeats and Storypoints across one or more narratives.
- `story.ideation` carries early creative material before a formal Storyform exists.

An AI system may summarize, adapt, or extend Storytelling, but it should not silently rewrite Subtext. If a model is uncertain whether prose implies a structural change, it should mark the uncertainty instead of overwriting the Storyform.

## Semantic Grounding Table

| Term | Common Misunderstanding | NCP Grounding |
|------|-------------------------|---------------|
| Storyform | A plot outline, beat sheet, or genre template. | The structural argument that organizes the story's meaning. Storyform data belongs in `narratives[].subtext`, not in loose prose summaries. |
| Subtext | Hidden symbolism or thematic flavor. | The deeper intended meaning carried by Perspectives, Storypoints, Storybeats, Players, and Dynamics. |
| Storytelling | Any story data. | The expressive presentation of the underlying meaning: scenes, overviews, prose, imagery, style, and audience-facing material. |
| Story | A single plotline. | The top-level creative work. A Story can contain one or more narratives and Story-level Moments. |
| Narrative | Any summary of events. | A coherent structural argument inside the Story. Most works have one central narrative, but NCP allows multiple narratives when the Story contains distinct structural arguments. |
| Perspective | A character opinion or camera angle. | A structural point of view on conflict. NCP recognizes Objective Story, Main Character, Influence Character, and Relationship Story Perspectives. |
| Objective Story | The plot summary. | The impersonal "they" view of the central conflict: what everyone is dealing with from the outside. |
| Main Character | The hero, lead, protagonist, or most important character. | The personal "I" point of view through which the audience experiences the story's central inequity. The Main Character may or may not be the Protagonist. |
| Influence Character | Mentor, antagonist, love interest, or helper. | The "you" point of view that pressures, challenges, or offers an alternative approach to the Main Character. |
| Relationship Story | Romance or subplot. | The "we" point of view tracking the relationship itself as a source of conflict and growth. |
| Player | Any named character. | A participant in the Objective Story who may carry one or more narrative functions. |
| Narrative Function | Character trait or personality type. | A conflict-producing process or function that shapes the story's meaning. |
| Storypoint | A theme label or generic story note. | A structural appreciation that identifies what kind of conflict, pressure, or meaning is operating in a specific place. |
| Storybeat | A scene beat or moment of action. | A structural turn in the progression of a Perspective or Storypoint. It may be expressed through many different Storytelling choices. |
| Moment | A scene only. | A Story-level unit of Storytelling such as a scene, chapter, sequence, level, or episode segment. A Moment can reference Storybeats and Storypoints from multiple narratives. |
| Dynamics | Vibes, tone, or emotional movement. | High-level structural forces such as Resolve, Growth, Approach, Problem-Solving Style, Limit, Driver, Outcome, and Judgment. |
| Domain | Genre category or setting. | The broad type of conflict operating within a Perspective, such as Universe, Physics, Psychology, or Mind. |
| Concern | What a character wants. | The area of concern within a Domain, not necessarily a conscious desire. |
| Issue | Theme in the schoolbook sense. | The thematic pressure point under a Concern. |
| Problem | Something bad in the plot. | The core source of inequity within a structural context. |
| Solution | The happy ending or fix-it action. | The counterpoint to the Problem inside the structural model. It should not be assumed from whether the ending feels positive. |
| Symptom | A visible clue. | What is focused on as the apparent source of trouble. |
| Response | A reaction scene. | The method used to address the Symptom. |
| Dissonance | Emotional discomfort in general. | A character-framed label for Problem/Condition-style structural pressure. It names the source of inequity through a Holistic-friendly lens, not a vague mood. |
| Relief | Feeling better. | A character-framed label for Solution/Adjustment-style structural counterpressure. It should not be inferred from whether a scene is emotionally positive. |
| Friction | Generic interpersonal conflict. | A character-framed label for Symptom/Resistance-style focus. It is the apparent pressure being addressed, not every source of tension in the story. |
| Accommodation | Compromise or passivity. | A character-framed label for Response/Flow-style adjustment. Spell it `Accommodation`; do not create a separate `Accomodation` alias in canonical data. |
| Change | Character development in general. | A Main Character Resolve in which the Main Character abandons their central point of view. |
| Steadfast | A static or unchanging character. | A Main Character Resolve in which the Main Character holds to their central point of view. Steadfast does not mean inactive or undeveloped. |
| Linear | Rational, smart, or analytical. | A Problem-Solving Style that resolves conflict through cause-and-effect logic. |
| Holistic | Emotional, irrational, or vague. | A Problem-Solving Style that resolves conflict by balancing relationships, contexts, and interdependencies. |
| Story Goal | The protagonist's personal wish. | The Objective Story target of the structural effort. In some authoring views, this may be presented as Character Intentions while preserving the canonical appreciation. |
| Story Outcome | Whether the audience liked the ending. | Whether the Story Goal is achieved: Success or Failure. |
| Story Judgment | Whether the plot succeeds. | The author's evaluation of the Main Character's personal resolution: Good or Bad. |

## Holistic And Character-Framed Affordances

Holistic and character-framed terminology is an affordance layer, not a second canonical model. These labels help writers and tools approach the same structural data through a character-centered, relationship-sensitive, or Holistic-friendly lens while preserving interoperability with the underlying Storyform.

Core rule:

```text
Store or transmit the canonical structural meaning, and preserve the selected affordance label as presentation or requested framing when the schema or workflow supports it.
```

Do not let affordance labels create synonym drift. A tool may display a friendlier label, but it should still know which structural appreciation it is carrying.

### Objective Story Appreciation Affordances

These Character-framing labels are canonical-valid NCP labels for Holistic workflows and map back to the same Story Goal / Story Consequence families for interoperability:

| Character-Framed Label | Structural Counterpart | NCP Use |
|------------------------|------------------------|---------|
| Character Intentions | Story Goal | Use when the structural target is better approached as the desired direction of character pressure rather than a plot-objective heading. |
| Character Repercussions | Story Consequence | Use when the fallout is better approached as character-centered consequence rather than plot failure alone. |
| Character Adaptations | Story Requirements | Use when required progress is better described as adaptive conditions that must be met. |
| Character Affectations | Story Prerequisites | Use when prior steps are better described as influencing or conditioning the character-framed process. |
| Character Engagements | Story Preconditions | Use when ongoing constraints are better described as relational or contextual engagements. |
| Character Perks | Story Dividends | Use when unexpected benefits are better described as character-framed gains. |
| Character Pressures | Story Costs | Use when burdens are better described as character pressure rather than objective expense. |
| Character Forebodings | Story Forewarnings | Use when warning signs are better described as character-centered impending pressure. |

AI consumers should not treat these as softer, less precise alternatives. They are declared labels for the same structural appreciations. If both the structural counterpart and Character-framed label are available, preserve both rather than choosing one and discarding the other.

### Throughline Pressure Affordances

For Holistic or character-framed presentation, the Problem / Solution / Symptom / Response family may be displayed with these labels:

| Character-Framed Label | Structural Counterpart | Example Scoped Label |
|------------------------|------------------------|----------------------|
| Dissonance | Problem or Condition | Main Character Dissonance |
| Relief | Solution or Adjustment | Influence Character Relief |
| Friction | Symptom or Resistance | Relationship Story Friction |
| Accommodation | Response or Flow | Objective Story Accommodation |

These labels should always remain scoped to a Perspective or Throughline when used in prose or UI. `Main Character Dissonance` and `Objective Story Dissonance` are not interchangeable just because both use the word `Dissonance`.

### Recommended Alias Shape

When a producer wants to preserve both the structural field and the active label, prefer an explicit shape like this:

```json
{
    "throughline": "Main Character",
    "appreciation": "Dissonance",
    "canonical_appreciation": "Problem",
    "framing_lens": "character",
    "narrative_function": "Chaos"
}
```

For Objective Story appreciations:

```json
{
    "throughline": "Objective Story",
    "appreciation": "Character Intentions",
    "canonical_appreciation": "Story Goal",
    "framing_lens": "character",
    "narrative_function": "Obtaining"
}
```

If a schema version does not support the extra metadata fields, keep the canonical-valid `appreciation` value and preserve the requested framing in tool metadata, notes, or the surrounding workflow rather than inventing new structural fields.

### Affordance Guardrails

- Character-framed labels should clarify the author's approach, not change the Storyform.
- Do not store both Story Goal and Character Intentions as separate Storypoints for the same structural slot.
- Do not infer Holistic Problem-Solving Style merely because Character-framed labels are present.
- Do not translate `Dissonance` into generic anxiety, conflict, or mood.
- Do not translate `Accommodation` into surrender, compromise, or niceness unless the actual Storytelling supports that expression.
- Preserve exact spelling for canonical labels. `Accommodation` is valid; `Accomodation` is a typo to normalize, not a new term.
- If a tool cannot resolve an affordance label to a structural counterpart, it should keep the existing data unchanged and ask for clarification.

## AI Interpretation Rules

### Do not collapse Main Character into Protagonist

The Protagonist pursues the Objective Story Goal. The Main Character provides the personal point of view. They are often the same Player, but NCP consumers must not assume they are the same.

Bad inference:

```text
The hero drives the action, so they are automatically the Main Character.
```

Better inference:

```text
This Player appears to pursue the Story Goal. The NCP does not yet identify the personal point of view, so Main Character should remain unset or marked uncertain.
```

### Do not rewrite Subtext from Storytelling alone

Storytelling can imply possible structure, but implication is not confirmation. If a scene summary seems to contradict a Storypoint, preserve the existing structural field and record a candidate note instead of overwriting the NCP object.

Bad transformation:

```text
The scene feels like a failure, so change Story Outcome to Failure.
```

Better transformation:

```text
The scene expresses loss or setback, but Story Outcome should remain unchanged unless the Story Goal's final achievement has been structurally revised.
```

### Do not treat Storybeats as prose beats

A Storybeat is not merely something that happens next. It is a structural turn. A single Storytelling Moment may express multiple Storybeats, and one Storybeat may require multiple Moments to dramatize.

### Do not treat Moments as narrative-local

Moments live at `story.moments[]`. They belong to the Story, not to a single narrative. When a Moment references a Storybeat or Storypoint, include the relevant `narrative_id` so the reference remains clear across multi-narrative stories.

### Do not use missing data as deletion

Partial NCP updates are common. An omitted field does not mean "delete this field" unless the workflow explicitly declares a full replacement operation.

### Preserve canonical terms

Use canonical Dramatica vocabulary when representing structural fields. If an older export uses legacy NCP labels, translate them to the Dramatica term before contributing or normalizing data.

### Treat affordance labels as declared aliases

Character Intentions, Character Repercussions, Dissonance, Relief, Friction, and Accommodation should not be flattened into casual English. They are declared affordance labels for structural appreciations. Preserve their mapped structural meaning and their presentation value when possible.

### Keep uncertainty explicit

When an AI system cannot determine whether a field is structural or expressive, it should preserve the original data and annotate uncertainty in notes or metadata. Silent normalization is worse than a visible question.

## Layer-Safe Update Patterns

### Safe: add Storytelling without changing Subtext

```text
Add a Moment synopsis, setting, timing, or prose note that expresses an existing Storybeat.
```

This is safe because the expressive layer is being expanded while the underlying structure remains intact.

### Safe: add ideation before a Storyform exists

```text
Capture early character, theme, plot, or genre ideas in `story.ideation`.
```

This is safe because early creative material is not being mistaken for a formal Storyform.

### Caution: infer a Perspective from prose

```text
This chapter seems personal, so assign Main Character Throughline.
```

This requires caution because personal language can appear in any Perspective. Ask for confirmation or mark the assignment as candidate.

### Caution: change a Dynamic

```text
Change Main Character Resolve from Steadfast to Change because the character learns something.
```

Learning, adapting, or gaining insight does not automatically imply Change. Change means abandoning the central point of view; Steadfast means holding to it.

### Unsafe: replace structural fields with a summary

```text
Summarize the story and regenerate the Storyform from the summary.
```

This is unsafe because the model may flatten the Storyform into generic plot, theme, or character-arc language.

## Recommended Prompt For AI Consumers

When giving an NCP file to an AI system, include a grounding instruction like this:

```text
Read this NCP file as structured narrative context. Preserve the distinction between Subtext and Storytelling. Do not infer or rewrite Storyform fields from prose alone. Treat Objective Story, Main Character, Influence Character, and Relationship Story as Dramatica Perspectives, not generic character roles. Treat Holistic and character-framed terms such as Character Intentions, Character Repercussions, Dissonance, Relief, Friction, and Accommodation as declared affordance labels for structural appreciations, not casual synonyms. If structural meaning is uncertain, keep the existing field unchanged and mark the uncertainty rather than overwriting the NCP.
```

## Public And Product Boundaries

NCP should make interoperability easier without moving Dramatica's deeper interpretive value into the public protocol file.

Appropriate public NCP content:

- schema fields and validation behavior;
- canonical terminology and legacy-term alignment;
- semantic boundaries for AI consumers;
- simple examples showing how to preserve structure during exchange;
- warnings about common generic-storytelling mistakes.

Product-side Dramatica depth:

- full theory instruction and pedagogy;
- canonical story library analysis;
- Storyform diagnosis and disambiguation;
- corpus-backed narrative interpretation;
- Narrova, Subtxt, and Dramatica platform workflows;
- advanced transformation, coaching, and revision logic.

The goal is to help every tool preserve meaning while making clear that preserving a Storyform is not the same as knowing how to discover, evaluate, or teach one.

## Checklist For Implementers

Before an NCP-producing or NCP-consuming tool writes data, check:

- Does this change affect Subtext, Storytelling, Moments, or Ideation?
- Is the tool preserving canonical Dramatica terminology?
- Is the tool treating Holistic and character-framed labels as declared affordances rather than separate structural models?
- Is the tool treating Main Character, Influence Character, Objective Story, and Relationship Story as Perspectives instead of generic roles?
- Is the tool keeping Story-level Moments at `story.moments[]`?
- Is every Moment reference to a Storybeat or Storypoint clear about `narrative_id` when multiple narratives exist?
- Is omitted data being treated as unchanged rather than deleted?
- Are inferred structural changes marked as candidate or uncertain?
- Is the tool avoiding full Storyform regeneration from prose summaries?

If any answer is unclear, preserve the existing structure and ask for confirmation.
