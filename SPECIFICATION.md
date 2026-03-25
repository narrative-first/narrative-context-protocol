# SPECIFICATION

The NCP schema supports an optional pre-narrative ideation layer alongside two complementary narrative layers—**Subtext** and **Storytelling**:

- **Ideation** captures exploratory concepts before a formal Storyform exists.
- **Subtext** represents the deeper, intended meaning crafted by the author.
- **Storytelling** is the adaptable, creative presentation of this meaning to an audience.

This clear distinction encourages narrative depth alongside flexibility, allowing storytellers to confidently maintain their original vision while freely exploring creative expression.

```json
"story": {
  "id": "story_123e4567",
  "title": "The Journey Within",
  "ideation": {
    "character": [],
    "theme": [],
    "plot": [],
    "genre": []
  },
  "narratives": [
    {
        "id": "narrative_AbnHJ147",
        "title": "Central Form",
        "status": "candidate",
        "subtext": {
            "perspectives": [],
            "players": [],
            "storypoints": [],
            "storybeats": [],
            "dynamics": []
        },
        "storytelling": {
            "overviews": [],
            "moments": []
        }
    }
  ]
}
```

## Story

The highest-level object representing the entire story, containing its metadata and core narrative structures.

```json
{
  "story": {
    "id": "story_123e4567",
    "title": "The Journey Within",
    "genre": "Psychological Drama",
    "logline": "A psychologist struggling with his past helps a patient uncover a hidden trauma, only to confront his own.",
    "ideation": {
      "character": [],
      "theme": [],
      "plot": [],
      "genre": []
    },
    "narratives": [],
    "created_at": "2025-02-05T14:30:00Z"
  }
}
```

## Pre-Narrative Ideation Layer (Beginner Mode)

`story.ideation` is an optional, beginner-friendly concept space for authors who are still forming ideas and are not ready for full Storyform structure.

- It lives inside `story`, above and outside formal narratives.
- It contains four domains: `character`, `theme`, `plot`, and `genre`.
- Each domain is an array of lightweight nodes requiring only `id` and `summary`.
- Nodes remain open/extensible so creators and LLM workflows can attach additional metadata without breaking schema compatibility.

This layer informs narratives as projects mature, while keeping strict structural meaning in `narratives[].subtext` and `narratives[].storytelling`.

For open-source adopters, this creates a shared on-ramp: communities can exchange early creative concepts in a common format without forcing immediate commitment to full Dramatica Storyform structure, while still preserving interoperability with canonical narrative objects.

```json
"ideation": {
  "character": [
    {
      "id": "idea_char_001",
      "summary": "A protector whose need for control masks grief.",
      "title": "Lead Character Seed",
      "notes": "Could split into multiple variants later.",
      "tags": ["character_arc", "inner_conflict"]
    }
  ],
  "theme": [],
  "plot": [],
  "genre": []
}
```


## Narrative: Structuring Subtext & Storytelling

A single story may contain one or more narratives (e.g., _The Empire Strikes Back_ has the Luke/Yoda Storyform and the Han/Leia Storyform, _Barbie_ has the Barbie/Ken Storyform and the Barbie/Gloria Storyform). Most stories, however, exhibit a single central narrative (e.g., _Anora_, _Anatomy of a Fall_, etc.).

Each narrative may optionally declare a `status` of `candidate`, `draft`, or `complete` to distinguish exploratory forms from finalized structure. If omitted, consumers may treat it as complete.

A narrative consists of two core layers:

- **Subtext**: The deep, underlying structure of the narrative that conveys the author’s intent.
- **Storytelling**: The high-level, audience-facing presentation of the story.

This structure provides both depth (meaning) and flexibility (presentation) within a single, organized model, ensuring a clear distinction between what the story means (Subtext) and how the story is told (Storytelling).

```json
{
  "story": {
    "id": "story_123e4567",
    "title": "The Journey Within",
    "narratives": [
      {
        "id": "narrative_AbnHJ147",
        "title": "Central Form",
        "status": "draft",
        "subtext": {
          "perspectives": [],
          "players": [],
          "storypoints": [],
          "storybeats": [],
          "dynamics": []
        },
        "storytelling": {
          "overviews": [],
          "moments": []
        }
      }
    ]
  }
}
```

Each layer of a narrative consists of several narrative aspects specialized for both author and audience.

---

## Subtext: Narrative Aspects

Subtext aspects focus on the thematic framework and deeper meaning underlying a narrative, clearly conveying authorial intent and ensuring thematic consistency throughout the story.

### Perspectives
Perspectives enable authors to explore thematic conflicts from specific authorial viewpoints. By associating particular Storypoints and Storybeats with distinct Perspectives, authors articulate how different thematic arguments or character-driven viewpoints uniquely influence the central narrative conflict, deepening thematic resonance and clarity.

**Why?** Perspectives encourage authors to consciously examine their narratives through multiple lenses, enriching the story by revealing hidden tensions, motivations, and nuances from distinct viewpoints.

## Dynamics
Dynamics represent narrative forces that shape the structural framework of a story. They encode the author's intended message or thematic meaning directly into the narrative structure itself. Understanding Dynamics helps authors clarify the purpose behind their craft.

**Why?** Dynamics help authors intentionally guide their narrative towards meaningful conclusions, ensuring the story remains purposeful and resonant from beginning to end.

## Players  
Players constitute the ensemble of characters within the Objective Story Throughline. Each Player fulfills specific narrative roles and functions, significantly advancing plot progression and reinforcing thematic exploration within the narrative framework.

**Why?** Clearly defining Players helps authors ensure each character's actions and decisions meaningfully support the overarching narrative, enhancing clarity, cohesion, and thematic depth.

## Storypoints  
Storypoints capture essential thematic concepts and core ideas integral to the narrative. They provide depth, clarity, and consistency, enabling authors to effectively embed and communicate the deeper thematic intentions of their story.

**Why?** Identifying Storypoints explicitly guides authors in maintaining narrative focus and coherence, allowing them to consistently reflect and reinforce core thematic elements throughout their story.

## Storybeats  
Storybeats map the chronological progression of narrative events, clearly delineating significant structural turns. They emphasize shifts in thematic exploration and character development, ensuring effective pacing and sustained thematic momentum throughout the narrative.

**Why?** Storybeats help authors manage narrative flow and emotional impact, ensuring each event meaningfully contributes to character arcs and thematic progression, enhancing audience engagement and satisfaction.

---

## Storytelling: Narrative Aspects

Storytelling aspects address the explicit, audience-facing presentation of a narrative. They shape how the audience experiences and engages with the story.

## Overviews  
Overviews deliver high-level storytelling components, such as Throughline descriptions, plot summaries, and character arcs. These elements offer authors and audiences a clear understanding of the narrative's direction and key thematic drivers, supporting cohesive and engaging storytelling.

**Why?** Overviews help authors clearly communicate their narrative's essential themes and structural direction, ensuring audiences can effortlessly follow and deeply connect with the story.

## Moments  
Moments organize storytelling into narrative units like acts, scenes, chapters, or sequences. Each Moment includes a concise synopsis and structured references linking to associated Storybeats, providing clear narrative structure and aiding audience comprehension and engagement.

**Why?** Structuring storytelling through Moments ensures narratives are approachable and engaging, helping audiences intuitively grasp story progression and emotional dynamics.

---

## Why Distinguish Subtext from Storytelling?

Clearly differentiating between Subtext and Storytelling enhances narrative clarity and effectiveness:

| **Subtext**                  | **Storytelling**               |
|------------------------------|--------------------------------|
| Underlying thematic meaning  | Explicit narrative presentation |
| Represents authorial intent  | Shapes audience experience      |
| Ensures structural coherence | Allows stylistic and expressive flexibility |

This separation becomes even more critical in AI workflows. Training exclusively on storytelling artifacts captures surface expression, but often misses transferable structural intent. Subtext is the layer designed for durable interchange.

---

## Introduction to Terminology and Appreciating Conflict

Moving forward, we'll explore the specific terminology that shapes Narrative Context Protocol (NCP). While these terms might seem intricate at first, their significance lies in precisely capturing the totality of how we appreciate narrative conflict—both logically and emotionally. Clear, consistent terminology is essential to effectively understanding, communicating, and resolving narrative tensions across diverse storytelling contexts.

### Canonical Standards and Customization

NCP provides standardized canonical terms to maintain consistency and clarity across narratives:

- **Appreciations**: Appreciations are how we interpret and appreciate narrative conflicts, formed by pairing a specific Perspective with either a Storypoint or a Storybeat. They help authors and audiences recognize the narrative's thematic depth and complexity.

- **Narrative Functions**: Narrative Functions are the engines of conflict. A narrative function is a process that shapes the story's meaning. Each Appreciation reveals one or more Narrative Functions, clarifying how characters and narratives actively engage with and respond to thematic tensions.

- **Dynamics**: Dynamics represent relationships between narrative elements rather than individual, isolated components. They usually present themselves as binary choices, allowing clear narrative direction and purpose. This binary nature complements the more nuanced, multi-dimensional nature of Storypoints and Storybeats.

- **Vectors**: Vectors indicate the narrative direction taken by Dynamics, visually or conceptually representing the chosen path within these binary relationships. They help clarify and reinforce the intended thematic trajectory within the narrative structure. Note: Dynamics and Vectors appear binary primarily because this version of the model emphasizes structural clarity and ease of narrative interpretation, intentionally contrasting with the richer complexity offered by Storypoints and Storybeats.

---

To support creative flexibility and compatibility with different narrative frameworks, NCP accommodates:
- **Custom Terms**: Personalized terminology reflecting unique narrative preferences.
- **Namespaces**: Mapping custom terminology to other narrative frameworks (e.g., Dramatica, Hero’s Journey, Save the Cat!).

### Customization Best Practices
- Always retain canonical standards alongside custom terms.
- Utilize namespaces for clear mapping to external frameworks.

Canonical lists are maintained in `docs/terminology/02.appreciations-of-narrative.md` and `docs/terminology/03.narrative-functions.md`.

### Narrative Framing Lens (Holistic Storypoint Aliases)

For holistic framing, NCP also recognizes the following Character-framing Appreciations as canonical-valid labels:

- Character Intentions -> Story Goal
- Character Repercussions -> Story Consequence
- Character Adaptations -> Story Requirements
- Character Affectations -> Story Prerequisites
- Character Engagements -> Story Preconditions
- Character Perks -> Story Dividends
- Character Pressures -> Story Costs
- Character Forebodings -> Story Forewarnings

These labels preserve authorial framing voice while retaining compatibility with Story Goal/Story Consequence-centered canonical reduction.

---

## Validation and Narrative Integrity

To ensure integrity and consistency in narratives structured with NCP:
- Storypoints and Storybeats must use canonical terms from schema enums when `narrative_function` is provided.
- Linear-focused and Character-framing Appreciations are both canonical-valid labels for holistic framing workflows.
- Regardless of Appreciation framing, NCP normalization reduces these terms to canonical Story Goal / Story Consequence families for interoperability.
- Linear stories should use linear-focused Appreciations; holistic stories may use either linear-focused or Character-framing Appreciations.
- Storybeats require clearly defined scopes and sequences to maintain coherent temporal progression.

---

## Narrative Aspects: In-depth

In this section, we'll explore examples of each narrative aspect, offering a brief overview of what each object contains. For a detailed understanding of specific keys and values, including enumerated values, please refer to the complete [narrative-context-protocol-schema.md](/docs/narrative-context-protocol-schema.md).

### Perspectives

Perspectives are where the author positions the source of conflict to communicate the story’s intended meaning, independent of first- or third-person narrative style (those refer to storytelling, not subtext). These Perspectives shape how thematic conflicts are revealed, deepening the story by re-inforcing the author's intended message.

Perspectives are closed authorial POV records. They do not carry character identity, role, or conflict metadata; those belong on Players, Storypoints, and Storybeats.

For example, in _A Christmas Carol_, each of the four ghosts (Marley included) functions thematically as an Influence Character for Scrooge, sequentially handing off their unique perspectives from one ghost to another. While each ghost brings a distinct angle—progress, past, present, and future—their collective thematic role remains consistent: to provoke Scrooge’s transformation. Each ghost provides a unique lens on his life, amplifying narrative resonance by exploring different facets of the same thematic conflict.

Another example can be seen in *Inside Out 2*. Unlike the original *Inside Out*, where Joy alone carries the perspective of the Main Character, the sequel has both Joy and Riley sharing the same thematic perspective of Main Character. They seamlessly pass this viewpoint back and forth, allowing the audience to explore identical thematic issues through two distinct yet interconnected lenses. This shared perspective enriches the narrative by demonstrating how the same thematic conflicts can manifest uniquely in different characters, amplifying emotional resonance.

The implications for interactive narratives are significant. In interactive storytelling environments, a player might naturally gravitate towards or even assume a Main Character perspective not originally intended by the author. By clearly defining and supporting multiple perspectives within the narrative structure, the author can accommodate and guide these emergent experiences, allowing for a more personalized and meaningful interaction without losing thematic coherence or depth.

```json
"perspectives": [
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "author_structural_pov": "i",
    "summary": "Michael Radford",
    "storytelling": "Michael Radford has spent his life convincing himself that control is the key to survival, but every step forward only tightens the noose around him. When his instincts betray him at the worst possible moment, he’s forced to confront the truth—his carefully built defenses aren’t protecting him, they’re suffocating him."
  }
]
```

### Players

Players own character identity within the narrative. They carry names, roles, sensory characterization, summaries, and the links to any Perspectives they express in the story.

```json
"players": [
  {
    "id": "123e4567-e89b-12d3-a456-426614174001",
    "name": "Dr. Michael Hayes",
    "role": "Main Character",
    "visual": "A distinguished man in his late 50s, with silver-streaked hair and piercing blue eyes. He wears a well-tailored suit but often appears slightly disheveled, as if sleep eludes him.",
    "audio": "His voice is calm and measured, carrying the weight of experience but occasionally betraying a hint of hesitation when discussing personal matters.",
    "summary": "A celebrated trauma specialist whose command over others cannot protect him from unresolved grief.",
    "bio": "Michael is a respected trauma specialist whose professional authority cannot resolve the private grief shaping his choices.",
    "storytelling": "Michael presents authority and polish, but every personal question exposes how fragile that control really is.",
    "motivations": [
      {
        "narrative_function": "Control",
        "illustration": "maintaining professional authority to suppress unresolved grief",
        "storytelling": "Michael leans on structure and expertise whenever his personal life threatens to overwhelm him."
      }
    ],
    "perspectives": [
        {
            "perspective_id": "123e4567-e89b-12d3-a456-426614174000"
        }
    ]
  }
]
```

### **Storypoints** 

Defined structural elements representing spatial aspects of a narrative. They establish the narrative's foundational arrangement and thematic relationships.

```json
"storypoints": [
  {
    "id": "storypoint_2345abcd",
    "appreciation": "Main Character Issue",
    "narrative_function": "Rationalization",
    "illustration": "justifying bad behavior",
    "summary": "Michael avoids self-examination by rationalizing past behavior.",
    "storytelling": "Michael takes charge, justifying his actions as necessary in order to take care of the family.",
    "perspectives": [
        {
            "perspective_id": "123e4567-e89b-12d3-a456-426614174000"
        }
    ]
  }
]
```

### Storybeats

Temporal elements that demonstrate how the narrative unfolds over time. Each beat marks a significant shift or progression in the story, framed within a clearly defined scope.

```json
"storybeats": [
  {
    "id": "beat_9876bcde",
    "appreciation": "Main Character Signpost 4",
    "scope": "signpost",
    "sequence": 4,
    "throughline": "Main Character",
    "narrative_function": "Past",
    "summary": "Michael can no longer escape his past.",
    "storytelling": "Michael has spent years outrunning his past, but in an instant, it catches up to him. His patient’s words land like a ghostly echo, dredging up memories he’s tried to bury, his composure cracking under the weight of old wounds. For the first time, he isn’t just remembering—he’s reliving it, trapped in a moment he thought he’d left behind.",
    "perspectives": [
        {
            "perspective_id": "123e4567-e89b-12d3-a456-426614174000"
        }
    ]
  }
]
```

`appreciation` is supported on Storybeats as an optional derived interoperability field. When present, it should restate the structural slot identified by `throughline + scope + sequence`, such as `Objective Story Signpost 1` or `Main Character Event 12`. `signpost` is not part of the canonical Storybeat shape; consumers that need internal signpost grouping should derive it from structure or parent relationships instead.

### Dynamics

High-level narrative forces that reflect the author's intent, shaping the story's message and clearly communicating its Narrative Argument.

```json
"dynamics": [
  {
    "id": "dynamic_abcdef12",
    "dynamic": "story_outcome",
    "vector": "success",
    "summary": "The story resolves with Michael embracing his past.",
    "storytelling": "Michael finally opens up, allowing his own progress."
  }
]
```

### Overviews

Surface-level narrative elements that quickly orient the audience, such as Logline and Genre considerations, providing context and immediate clarity.

```json
"overviews": [
  {
    "id": "123e4567-e89b-12d3-a456-426614174010",
    "label": "Logline",
    "storytelling": "In a neon-lit cyberpunk metropolis, a determined detective races to outsmart a rogue AI before it reshapes humanity's future.",
    "summary": "A cyberpunk crime thriller about a rogue AI and the detective trying to stop it."
  },
  {
    "id": "123e4567-e89b-12d3-a456-426614174011",
    "label": "Genre",
    "storytelling": "Cyber Noir: Merging shadowy detective intrigue with dystopian futurism to subvert classic crime narratives.",
    "summary": "A fusion of cyberpunk and detective noir."
  },
  {
    "id": "123e4567-e89b-12d3-a456-426614174012",
    "label": "Blended Throughlines",
    "storytelling": "The detective's private guilt, the rogue AI's challenge, the city's institutional corruption, and the unstable alliance between hunter and hunted all converge into one unified audience-facing summary of the argument.",
    "summary": "A single overview blending Main Character, Influence Character, Objective Story, and Relationship Story tensions."
  }
]
```

### Moments
  
Organizational narrative units—such as Acts, Scenes, Sequences, Chapters, and Levels—that help structure the narrative temporally. These units can vary in scale and can be flexibly defined to organize narrative flow in any specific context. 

```json
"moments": [
  {
    "id": "moment_abcdef12",
    "summary": "Infiltrating the neon-lit heart of a dystopian metropolis, Alex plunges into a shadowy realm teeming with digital outlaws.",
    "synopsis": "Freshly arrived in the neon chaos of Neo-Tokyo, Alex is swiftly ensnared in a perilous game played by cyber-criminals, underground syndicates, and relentless AI-driven enforcers.",
    "setting": "The pulsating streets of Neo-Tokyo, where holographic ads blend with the shadowy back alleys controlled by syndicate bosses.",
    "timing": "Late night, just hours after Alex's first unsettling discovery upon arriving in the city.",
    "imperatives": "- Establish the dark, chaotic atmosphere of Neo-Tokyo\n- Introduce key threats: cyber-criminals and AI enforcers\n- Show Alex's initial vulnerabilities and resourcefulness",
    "audience_experiential_pov": "third_person_limited",
    "fabric": [
      { "type": "space", "limit": 10 }
    ],
    "storybeats": [
      { "sequence": 0, "storybeat_id": "beat_123456" },
      { "sequence": 1, "storybeat_id": "beat_789012" },
      { "sequence": 2, "storybeat_id": "beat_345678" }
    ]
  },
  {
    "id": "moment_ghijkl34",
    "summary": "Face-to-face with the enigmatic AI, Alex discovers a truth that overturns every assumption.",
    "synopsis": "In a high-stakes confrontation deep within a secretive data sanctuary, Alex meets the rogue AI, only to uncover its true nature—and question who the real villain is.",
    "setting": "A hidden data sanctuary deep beneath Neo-Tokyo, where reality merges seamlessly with the digital ether.",
    "timing": "The following evening, after Alex spends the day piecing together crucial fragments of intel collected overnight.",
    "imperatives": "- Build tension leading to the meeting with the AI\n- Reveal the AI's surprising nature and motives\n- Challenge Alex's established beliefs about allies and enemies",
    "audience_experiential_pov": "third_person_limited",
    "fabric": [
      { "type": "space", "limit": 20 }
    ],
    "storybeats": [
      { "sequence": 0, "storybeat_id": "beat_987654" },
      { "sequence": 1, "storybeat_id": "beat_654321" }
    ]
  }
]
```

---

## The Justification Process

Now we come to one of the most intriguing parts of narrative structure—the Justification process. Think of this as the art of turning your story’s meaning and purpose into a clearly ordered timeline.

In narrative design, the sequence of events isn’t just about what happens next—it's about why it happens next. This key insight lies at the heart of Narrative Context Protocol, setting it apart from frameworks like the Hero’s Journey or Save the Cat, where the sequence of beats such as "All is Lost" or "Dark Night of the Soul" can shift based on personal preference or intuition.

Imagine your daily commute along Interstate 5 in Southern California. The experience of passing the 210 and then the 170 is drastically different depending on whether you’re heading into work or heading back home--yet, these are the same two events: passing the 210, and passing the 170. **The meaning behind your experience lies in what order these events occur.** Just like your commute, the meaning of your narrative can shift dramatically depending on the order of events.

That's where **Justification** comes in. It shapes the order in which your events unfold, guiding your story’s progression in a purposeful and meaningful way—far from random guesswork or pure instinct. This careful ordering helps highlight why separating subtext from storytelling isn't just helpful; it's absolutely essential for impactful narrative design.

### The Core Principle: Meaning Dictates Order

Justification is the underlying mechanism that explains why events unfold in a particular sequence. It is not random, nor is it left to subjective interpretation—there is a logic behind how and why a story plays out the way it does. The key insight is that the structure of a story is determined by the relationships between its dynamics and storypoints.

> **Formula:** *Dynamics × Storypoints = Storybeats*

This equation reflects the idea that a story’s core conflicts (its Dynamics) interact with predefined narrative components (Storypoints) to generate a meaningful sequence of events (Storybeats).

### The Process of Justification: A Structured Perspective

At the heart of Justification is the way a story presents and resolves conflicts. A prime example is the interplay between the two primary opposing forces, governed by the **Dynamic of Resolve**, which determines whether a character ultimately **Changes** or remains **Steadfast**. This interplay illustrates how Justification structures the progression of a story based on meaning rather than arbitrary events.

**The Path of the Steadfast Resolve**

   - At the beginning, a force is introduced that challenges this character's worldview.
   - Every event and decision within the story reinforces their commitment to this perspective.
   - As the story escalates, pressure builds, leading to a final crisis where they must decide whether to **stay the course** or abandon their stance.
   - The audience sees a pattern of persistence in the face of increasing opposition, culminating in a moment where either their resolve holds or their world collapses around them.
   - In the end, this character **chooses to stay the course**, *remaining steadfast* and fully embracing their perspective despite all opposition.

**The Path of the Change Resolve**

   - This character begins where the Steadfast Resolve character would stop—at a point of full conviction in their approach.
   - Over time, blind spots emerge. What once worked no longer does, and cracks begin to show in their reasoning.
   - Through a process of breaking down these blinders, they gradually gain awareness of an alternative choice.
   - When they reach the crisis, they recognize both paths but must choose—knowing there is no guarantee the new choice will work.
   - In the end, this character **chooses the path they have never tried before**, *changing* their resolve and stepping into the unknown.

One character’s convictions are reinforced while the other’s are dismantled—each path structured by the forces that shape the story’s meaning. The interaction between these characters dictates the order of events, creating a framework where every moment is a necessary step in the logical progression of the narrative.

### The Importance of Perspective: The Direction of Justification

Justification is a means of modeling not just the sequencing of events, but also how individual perspectives shifts over time. Think of a road trip:

- Driving in one direction, you see landmarks in a particular order, forming a clear and consistent experience.
- Returning along the same road, the experience is entirely different—you notice things that were previously overlooked, and the journey feels altered.
- This change in perception mirrors how stories unfold: the meaning behind each event is dependent on the direction of Justification.

---

## The Importance of Pivotal Elements in Narrative Structure

Following the Justification Process, we explore how **Resolve**—whether Change or Steadfast—converts the temporal dynamics of conflict *back* into spatial considerations within a Storyform.

| Resolve Type                     | Connected Forces                          |
| ----------------------------- | ------------------------------------- |
| **Change Resolve**                 | Problem & Solution                  |                                
| **Steadfast Resolve**                    | Focus & Direction                 | 

A **Change Resolve** connects the underlying Forces of **Problem** and **Solution** with the Character who holds that perspective. Conversely, a **Steadfast Resolve** connects with the underlying forces of **Focus** and **Direction**. This key relationship binds the various perspectives of conflict throughout the story, ensuring that character development and plot progression remain intertwined, sustaining the thematic integrity of the narrative.
