# SPECIFICATION

The NCP schema separates narrative design into two complementary layers—**Subtext** and **Storytelling**:

- **Subtext** represents the deeper, intended meaning crafted by the author.
- **Storytelling** is the adaptable, creative presentation of this meaning to an audience.

This clear distinction encourages narrative depth alongside flexibility, allowing storytellers to confidently maintain their original vision while freely exploring creative expression.

```json
"story": {
  "id": "story_123e4567",
  "title": "The Journey Within",
  "narratives": [
    {
        "id": "narrative_AbnHJ147",
        "title": "The House Over There",
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
    "title": "The House Over There",
    "genre": "Psychological Drama",
    "logline": "A psychologist struggling with his past helps a patient uncover a hidden trauma, only to confront his own.",
    "narratives": [],
    "created_at": "2025-02-05T14:30:00Z"
  }
}
```

## Narrative: Structuring Subtext & Storytelling

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
        "title": "The House Over There",
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


## Introducing the Storyform: An Objective Narrative Model

Central to the Narrative Context Protocol (NCP) is the concept of abstracting the underlying meaning, or Subtext, of a story into an objective structure known as a Storyform. Originating from Dramatica theory, a Storyform captures the precise narrative dynamics and thematic intentions established by the author, free from subjective interpretations or personal biases inherent in individual readers.

Every reader or viewer naturally experiences a story through their own subjective lens, leading to varied interpretations and often conflicting opinions. The Storyform circumvents this issue by representing the author’s intent in an objective, structured format. This clarity of narrative intent enables creators, analysts, and advanced AI systems to clearly identify thematic elements, narrative dynamics, and potential storytelling blind spots, thereby enriching the storytelling process and ensuring narrative consistency.

### Core Components of a Storyform

Each Storyform includes structured narrative components:

- **Throughlines**: Representing distinct narrative perspectives (Objective Story, Main Character, Obstacle Character, Relationship Story).
- **Dynamics**: Key narrative forces such as Resolve, Outcome, Judgment, and Cognitive Alignment.
- **Storypoints**: Specific thematic considerations and narrative signposts, providing detailed markers of narrative intent.

### Why the Storyform Matters in NCP

NCP leverages the Storyform concept precisely because it remains the only narrative framework capable of objectively encapsulating an author’s true thematic and narrative intentions. By grounding story analysis and development in an objective model, NCP enables AI-driven tools to reliably identify, highlight, and address narrative strengths and weaknesses that might remain hidden through conventional subjective analysis. This approach significantly enhances storytelling effectiveness, consistency, and depth, facilitating richer audience engagement and clearer authorial communication.

A single story may contain one or more Storyforms (e.g., _The Empire Strikes Back_ has the Luke/Yoda Storyform and the Han/Leia Storyform, _Barbie_ has the Barbie/Ken Storyform and the Barbie/Gloria Storyform). Most stories, however, exhibit a single central narrative (e.g., _Anora_, _Anatomy of a Fall_, etc.).

In summary, the Storyform within NCP provides a foundational, objective representation of Subtext, enabling creators and AI systems alike to construct, refine, and interpret narratives with unprecedented clarity and precision.

## Subtext: Narrative Aspects

Each layer of a single Storyform (the Subtext) consists of several narrative aspects specialized for both author and audience. These aspects focus on the thematic framework and deeper meaning underlying a narrative, clearly conveying authorial intent and ensuring thematic consistency throughout the story.

### Perspectives
Perspectives enable authors to explore thematic conflicts from specific authorial viewpoints. By associating particular Storypoints and Storybeats with distinct Perspectives, authors articulate how different thematic arguments or character-driven viewpoints uniquely influence the central narrative conflict, deepening thematic resonance and clarity.

Perspectives also facilitate tracking the narrative hand-off from one Player to another, emphasizing that Throughlines are essentially Perspectives and not permanently bound to a single character or entity. This allows for fluid storytelling, where narrative responsibilities or viewpoints can dynamically shift, as exemplified by characters like the multiple spirits collectively embodying the Influence Character Perspective in _A Christmas Carol_.

**Why?** Perspectives encourage authors to consciously examine their narratives through multiple lenses, enriching the story by revealing hidden tensions, motivations, and nuances from distinct viewpoints, while supporting dynamic character interactions and thematic complexity.

## Dynamics
Dynamics represent narrative problems that shape the structural framework of a story. They encode the author's intended message or thematic meaning directly into the narrative structure itself. Understanding Dynamics helps authors clarify the purpose behind their craft.

**Why?** Dynamics help authors intentionally guide their narrative towards meaningful conclusions, ensuring the story remains purposeful and resonant from beginning to end.

## Players  
Players constitute the ensemble of characters within the Objective Story Throughline. Each Player fulfills specific narrative roles and functions, significantly advancing plot progression and reinforcing thematic exploration within the narrative framework.

**Why?** Clearly defining Players helps authors ensure each character's actions and decisions meaningfully support the overarching narrative, enhancing clarity, cohesion, and thematic depth.

## Storypoints  
Storypoints capture essential thematic concepts and core ideas integral to the narrative. They provide depth, clarity, and consistency, enabling authors to effectively embed and communicate the deeper thematic intentions of their story.

**Why?** Identifying Storypoints explicitly guides authors in maintaining narrative focus and coherence, allowing them to consistently reflect and reinforce core thematic elements throughout their story.

## Storybeats  
Storybeats map the chronological progression of narrative events, clearly delineating significant moments and transitions. They emphasize shifts in thematic exploration and character development, ensuring effective pacing and sustained thematic momentum throughout the narrative.

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

This separation becomes even more critical in the AI era. Training models exclusively on storytelling—whether through transcripts, closed captions, or script dialogue—beyond being unethical--is fundamentally unproductive. Such training is ineffective because it captures only the surface-level "flavoring" of a story, not its underlying thematic essence. The true value resides in the structural coherence provided by subtext, the very heart of the narrative.

---

## Introduction to Terminology and Appreciating Conflict
Moving forward, we’ll explore the specific terminology that shapes Narrative Context Protocol (NCP). Many of these terms are heavily influenced by—and in some cases directly drawn from—the established concepts within Dramatica theory. Although the NCP standard itself remains distinct and independent, we highly encourage anyone interested in deepening their understanding of these foundational concepts to visit [dramatica.com](https://dramatica.com).

While these terms might seem intricate at first, their significance lies in precisely capturing the totality of how we appreciate narrative conflict—both logically and emotionally. Clear, consistent terminology is essential to effectively understanding, communicating, and resolving narrative tensions across diverse storytelling contexts.

### Canonical Standards and Customization

NCP provides standardized canonical terms to maintain consistency and clarity across narratives:

- **Appreciations**: Appreciations are how we interpret and appreciate narrative conflicts, formed by pairing a specific Perspective with either a Storypoint or a Storybeat. They help authors and audiences recognize the narrative's thematic depth and complexity.

- **Methods**: Methods are small narrative engines that actively process and navigate through conflicts. Each Appreciation reveals one or more Methods, clarifying how characters and narratives actively engage with and respond to thematic tensions.

- **Dynamics**: Dynamics represent relationships between narrative elements rather than individual, isolated components. They usually present themselves as binary choices, allowing clear narrative direction and purpose. This binary nature complements the more nuanced, multi-dimensional nature of Storypoints and Storybeats.

- **Vectors**: Vectors indicate the narrative direction taken by Dynamics, visually or conceptually representing the chosen path within these binary relationships. They help clarify and reinforce the intended thematic trajectory within the narrative structure. Note: Dynamics and Vectors appear binary primarily because this version of the model emphasizes structural clarity and ease of narrative interpretation, intentionally contrasting with the richer complexity offered by Storypoints and Storybeats.

---

To support creative flexibility and compatibility with different narrative frameworks, NCP accommodates:
- **Custom Terms**: Personalized terminology reflecting unique narrative preferences.
- **Namespaces**: Mapping custom terminology to other narrative frameworks (e.g., Dramatica, Hero’s Journey, Save the Cat!).

### Customization Best Practices
- Always retain canonical standards alongside custom terms.
- Utilize namespaces for clear mapping to external frameworks.

---

## Validation and Narrative Integrity

To ensure integrity and consistency in narratives structured with NCP:
- Storypoints and Storybeats must include canonical terms.
- Custom terms complement but do not replace canonical standards.
- Storybeats require clearly defined scopes and sequences to maintain coherent temporal progression.

---

## Narrative Aspects: In-depth

In this section, we'll explore examples of each narrative aspect, offering a brief overview of what each object contains. For a detailed understanding of specific keys and values, including enumerated values, please refer to the complete [narrative-context-protocol-schema.md](/docs/narrative-context-protocol-schema.md).

### Perspectives

Perspectives are where the author positions the source of conflict to communicate the story’s intended meaning, independent of first- or third-person narrative style (those refer to storytelling, not subtext). These Perspectives shape how thematic conflicts are revealed, deepening the story by re-inforcing the author's intended message.

For example, in _A Christmas Carol_, each of the four ghosts (Marley included) functions thematically as a Catalyst Provocateur for Scrooge, sequentially handing off their unique perspectives from one ghost to another. While each ghost brings a distinct angle—progress, past, present, and future—their collective thematic role remains consistent: to provoke Scrooge’s transformation. Each ghost provides a unique lens on his life, amplifying narrative resonance by exploring different issues of the same thematic conflict.

Another example can be seen in *Inside Out 2*. Unlike the original *Inside Out*, where Joy alone carries the perspective of the Main Character, the sequel has both Joy and Riley sharing the same thematic perspective of Main Character. They seamlessly pass this viewpoint back and forth, allowing the audience to explore identical thematic issues through two distinct yet interconnected lenses. This shared perspective enriches the narrative by demonstrating how the same thematic conflicts can manifest uniquely in different characters, amplifying emotional resonance.

The implications for interactive narratives are significant. In interactive storytelling environments, a player might naturally gravitate towards or even assume a Main Character perspective not originally intended by the author. By clearly defining and supporting multiple perspectives within the narrative structure, the author can accommodate and guide these emergent experiences, allowing for a more personalized and meaningful interaction without losing thematic coherence or depth.

```json
"perspectives": [
  {
    "id": "perspective_ab12cd34",
    "author_structural_pov": "i",
    "throughline": "Main Character",
    "summary": "Michael Radford",
    "storytelling": "Michael Radford has spent his life convincing himself that control is the key to survival, but every step forward only tightens the noose around him. When his instincts betray him at the worst possible moment, he’s forced to confront the truth—his carefully built defenses aren’t protecting him, they’re suffocating him."
  }
]
```

### Players
Characters whose actions and motivations reveal deeper thematic layers (subtext), moving beyond superficial characterization. Each Player must be linked explicitly to an Objective Story Throughline Perspective to maintain narrative coherence.

#### Motivations
Motivations represent the function a Player fulfills within the Objective Story Throughline. Each Motivation is explicitly tied to one of the 64 Elements defined within the Dramatica theory model. A Motivation’s Method identifies the specific Element driving narrative conflict (e.g., “Avoid,” “Pursuit,” “Logic”), its Illustration provides a semantic expression or refinement of that Method, and its Storytelling articulates how this Motivation manifests concretely within the narrative.

Players can exhibit multiple Motivations, and certain combinations of Motivations form classically understood Archetypal Characters (Protagonist, Antagonist, Guardian, etc.). Typically, Motivations should not be repeated across different Players within the same Storyform, as this duplication can blur narrative functions and result in Players appearing to redundantly fulfill the same thematic roles.

Example:

```
"players": [
  {
    "id": "player_def456",
    "name": "Dr. Michael Hayes",
    "role": "the world's leading psychologist",
    "storytelling": "A psychologist haunted by his past.",
    "motivations": [
        {
          "method": "Avoid",
          "illustration": "avoiding confronting past failures",
          "storytelling": "In therapy sessions, he changes topics when pressed."
        }
    ],
    "perspectives": [
        {
          "perspective_id": "persp_def456"
        }
    ]
  }
]
```

### Storypoints

Defined structural elements representing spatial aspects of a narrative. They establish the narrative's foundational arrangement and thematic relationships.

**Appreciations:** Storypoints are composed of various structural Appreciations, each capturing a specific narrative dimension or thematic aspect. Each Appreciation includes:

* **Context:** Identifies the Throughline or Perspective to which the Storypoint belongs (e.g., main\_character, objective\_story).
* **Method:** The specific Element from the Dramatica model that represents the underlying nature of conflict or thematic dimension (e.g., rationalization, pursuit, avoid).
* **Illustration:** A semantic development or interpretation of the Method, providing narrative depth and context.
* **Storytelling:** The tangible, observable expression within the narrative, illustrating how the Method manifests in concrete story events or character actions.

```json
"storypoints": [
  {
    "id": "storypoint_2345abcd",
    "context": "main_character",
    "appreciation": "issue",
    "method": "rationalization",
    "illustration": "justifying bad behavior",
    "summary": "Michael avoids self-examination by rationalizing past behavior.",
    "storytelling": "Michael takes charge, justifying his actions as necessary in order to take care of the family.",
    "perspectives": [
        {
            "perspective_id": "persp_def456"
        }
    ]
  }
]
```

### Storybeats

Temporal elements that demonstrate how the narrative unfolds over time. Each beat marks a significant shift or progression in the story, framed within a clearly defined scope.

In addition to Appreciation Methods, Storybeats are also defined by their numerical sequence, identifying precisely where they occur within the narrative structure:

* **Signposts:** Numbered 1-4, representing major narrative milestones.
* **Progressions:** Numbered 1-16, representing smaller narrative developments within the Signposts.
* **Events:** Numbered 1-64, representing granular narrative moments or turning points.

```json
"storybeats": [
  {
    "id": "storybeat_9876bcde",
    "context": "main_character",
    "appreciation": "signpost",
    "sequence": 4,
    "method": "being",
    "illustration": "wearing a mask that no longer fits",
    "summary": "Michael’s carefully constructed persona begins to crack.",
    "storytelling": "For years Michael has hidden behind the role of the unflappable physician, reinventing himself so completely that even he forgets the man he used to be. But one patient’s off-hand remark slices through the façade, and suddenly the mask feels impossibly tight. His practiced bedside composure falters as memories seep through the cracks, exposing the fragile act he has been performing. In this moment he isn’t simply recalling his past—he’s forced to be the man he pretended he’d never become, trapped inside a persona that can no longer contain him.",
    "perspectives": [
        "perspective_ab12cd34"
    ]
  }
]
```

### Dynamics

High-level narrative problems that reflect the author's intent, shaping the story's message and clearly communicating its Narrative Argument.

Dynamics represent relational tensions existing between narrative Aspects within a Storyform. Unlike Storypoints or Storybeats, Dynamics are not attached to a specific Perspective. Instead, they consist of:

* **Dynamic:** The specific high-level narrative tension or thematic direction (e.g., story\_outcome, main\_character\_resolve).
* **Vector:** Indicates the direction or polarity of the Dynamic (e.g., success/failure, steadfast/change). Although often presented as binary choices, these vectors are primarily directional indicators rather than strict binaries.

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
    "id": "overview_12345abc",
    "label": "logline",
    "storytelling": "In a neon-lit cyberpunk metropolis, a determined detective races to outsmart a rogue AI before it reshapes humanity's future.",
    "summary": "A cyberpunk crime thriller about a rogue AI and the detective trying to stop it."
  },
  {
    "id": "overview_67890def",
    "label": "genre_dynamics",
    "storytelling": "Cyber Noir: Merging shadowy detective intrigue with dystopian futurism to subvert classic crime narratives.",
    "summary": "A fusion of cyberpunk and detective noir."
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
    "audience_experiential_pov": "third-person limited",
    "storybeats": [
      { "sequence": 0, "storybeat_id": "storybeat_123456" },
      { "sequence": 1, "storybeat_id": "storybeat_789012" },
      { "sequence": 2, "storybeat_id": "storybeat_345678" }
    ]
  },
  {
    "id": "moment_ghijkl34",
    "summary": "Face-to-face with the enigmatic AI, Alex discovers a truth that overturns every assumption.",
    "synopsis": "In a high-stakes confrontation deep within a secretive data sanctuary, Alex meets the rogue AI, only to uncover its true nature—and question who the real villain is.",
    "setting": "A hidden data sanctuary deep beneath Neo-Tokyo, where reality merges seamlessly with the digital ether.",
    "timing": "The following evening, after Alex spends the day piecing together crucial fragments of intel collected overnight.",
    "audience_experiential_pov": "third-person limited",
    "storybeats": [
      { "sequence": 0, "storybeat_id": "storybeat_987654" },
      { "sequence": 1, "storybeat_id": "storybeat_654321" }
    ]
  }
]
```

---

## The Justification Process

Now we come to one of the most intriguing parts of narrative structure—the Justification process. Think of this as the art of turning your story’s meaning and purpose into a clearly ordered timeline.

In narrative design, the sequence of events isn’t just about what happens next—it's about why it happens next. This key insight lies at the heart of the Dramatica theory of story, setting it apart from other narrative frameworks like the Hero’s Journey or Save the Cat, where the sequence of beats such as "All is Lost" or "Dark Night of the Soul" can shift based on personal preference or intuition.

Imagine your daily commute along Interstate 5 in Southern California. The experience of passing the 210 and then the 170 is drastically different depending on whether you’re heading into work or heading back home--yet, these are the same two events: passing the 210, and passing the 170. **The meaning behind your experience lies in what order these events occur.** Just like your commute, the meaning of your narrative can shift dramatically depending on the order of events.

That's where **Justification** comes in. It shapes the order in which your events unfold, guiding your story’s progression in a purposeful and meaningful way—far from random guesswork or pure instinct. This careful ordering helps highlight why separating subtext from storytelling isn't just helpful; it's absolutely essential for impactful narrative design.

### The Core Principle: Meaning Dictates Order

Justification is the underlying mechanism that explains why events unfold in a particular sequence. It is not random, nor is it left to subjective interpretation—there is a logic behind how and why a story plays out the way it does. The key insight is that the structure of a story is determined by the relationships between its dynamics and storypoints.

> **Formula:** *Dynamics × Storypoints = Storybeats*

This equation reflects the idea that a story’s core conflicts (its Dynamics) interact with predefined narrative components (Storypoints) to generate a meaningful sequence of events (Storybeats).

### The Process of Justification: A Structured Perspective

At the heart of Justification is the way a story presents and resolves conflicts. A prime example is the interplay between the two primary opposing problems, governed by the **Dynamic of Main Character Resolve**, which determines who alters their nature in order to resolve conflict (a **Change** Resolve) and who retains their essential nature (a **Steadfast** Resolve) in order to resolve conflict. This interplay illustrates how Justification structures the progression of a story based on meaning rather than arbitrary events.

**The Path of the Steadfast Resolve**

   - At the beginning, a problem is introduced that challenges this character's worldview.
   - Every event and decision within the story reinforces their commitment to this perspective.
   - As the story escalates, pressure builds, leading to a final crisis where they must decide whether to **stay the course** or abandon their stance.
   - The audience sees a pattern of persistence in the face of increasing opposition, culminating in a moment where either their resolve holds or their world collapses around them.
   - In the end, this character **chooses to stay the course**, *maintaining* their resolve and fully embracing their unique perspective despite all opposition.

**The Path of the Change Resolve**

   - This character begins where the Steadfast Resolve character would stop—at a point of full conviction in their approach.
   - Over time, blind spots emerge. What once worked no longer does, and cracks begin to show in their reasoning.
   - Through a process of breaking down these blinders, they gradually gain awareness of an alternative choice.
   - When they reach the crisis, they recognize both paths but must choose—knowing there is no guarantee the new choice will work.
   - In the end, this character **chooses the path they have never tried before**, *relinquishing* their initial perspective, and step into the unknown as they alter their essential nature.

One character’s convictions are reinforced while the other’s are dismantled—each path structured by the problems that shape the story’s meaning. The interaction between these two perspectives dictates the order of events within the narrative, creating a framework where every moment is a necessary step in the logical progression of the narrative.

---

### The Importance of Pivotal Elements in Narrative Structure

Following the Justification Process, we explore how **Main Character Resolve**—whether Change or Steadfast—converts the temporal dynamics of conflict *back* into spatial considerations within a Storyform.

| Resolve Type                     | Connected Problems                          |
| ----------------------------- | ------------------------------------- |
| **Change Resolve**                 | Problem & Solution                  |                                
| **Steadfast Resolve**                    | Symptom & Response                 | 

A **Change Resolve** connects the underlying Problems of **Problem** and **Solution** within the Objective Story Throughline (overall plot) to the Character who holds that perspective. Conversely, a **Steadfast Resolve** connects its perspective with the underlying problems of **Symptom** and **Response** within the Objective Story Throughline. This key relationship binds the various perspectives of conflict throughout the story, ensuring that character development and plot progression remain intertwined, sustaining the thematic integrity of the narrative.

## The Dramatica Platform and the Sequencing of Meaning

The Justification process described above—where the interaction between Dynamics and Storypoints generates a purposeful sequence of Storybeats—is not something that can be accurately replicated through intuition or surface-level interpretation alone. At its core, this process is powered by a unique set of algorithms developed within the Dramatica theory of story, a model of narrative psychology that treats stories as systems of meaning, not merely collections of events.

This is where the Subtxt/Dramatica platform (https://dramatica.com) plays a vital role. It is currently the only system capable of calculating the precise, meaningful order of events based on a complete Storyform. These calculations emerge from decades of theoretical development and a proprietary process of structural sequencing—not guesswork, templates, or beat sheets.

While the Narrative Context Protocol (NCP) remains an open standard for expressing thematic relationships and Storyforms across platforms, it intentionally does not include the proprietary algorithms for event sequencing. These remain exclusive to the Dramatica platform to preserve the integrity and precision of the model’s application.

We recognize the importance of accessibility in the creative process. Looking forward, we are exploring ways to make the Dramatica platform more broadly available—allowing writers and creators to form highly accurate Storyforms without requiring any subscription or barrier to entry. Our aim is to support the evolution of storytelling tools while honoring the precision and depth that Dramatica provides.
