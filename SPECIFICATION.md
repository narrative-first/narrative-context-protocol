# SPECIFICATION

The UNM schema separates narrative design into two complementary layers—**Subtext** and **Storytelling**:

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
        "title": "Central Form",
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
—

### Story 
The highest-level object representing the entire story, containing its metadata and core narrative structures.  

```json
“story”: {
  “id”: “story_123e4567”,
  “title”: “The Journey Within”,
  “genre”: “Psychological Drama”,
  “logline”: “A psychologist struggling with his past helps a patient uncover a hidden trauma, only to confront his own.”,
  “narratives”: [],
  “created_at”: “2025-02-05T14:30:00Z”
}
```

—

### Narrative: Structuring Subtext & Storytelling  

A single **story** may contain **one or more narratives** (e.g., “The Empire Strikes Back” has the Luke/Yoda Storyform and the Han/Leia Storyform, “Barbie” has the Barbie/Ken Storyform and the Barbie/Gloria Storyform). Most stories, however, exhibit a **single central narrative** (e.g., “Anora”, “Anatomy of a Fall”, etc.). 

A narrative consists of two core layers:  

1. **Subtext:** The deep, underlying structure of the narrative that conveys the author’s intent.  
2. **Storytelling:** The high-level, audience-facing presentation of the story.  

This structure provides both depth (meaning) and flexibility (presentation) within a single, organized model, ensuring a clear distinction between **what the story means** (Subtext) and **how the story is told** (Storytelling).  

—

```json
{
  “story”: {
    “id”: “story_123e4567”,
    “title”: “The Journey Within”,
    “narratives”: [
      {
        “id”: “narrative_AbnHJ147”,
        “title”: “Central Form”,
        “subtext”: {
          “perspectives”: [],
          “players”: [],
          “storypoints”: [],
          “storybeats”: [],
          “dynamics”: []
        },
        “storytelling”: {
          “overviews”: [],
          “moments”: []
        }
      }
    ]
  }
}
```
—

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

Moving forward, we'll explore the specific terminology that shapes the Universal Narrative Model (UNM). While these terms might seem intricate at first, their significance lies in precisely capturing the totality of how we appreciate narrative conflict—both logically and emotionally. Clear, consistent terminology is essential to effectively understanding, communicating, and resolving narrative tensions across diverse storytelling contexts.

### Canonical Standards and Customization

The UNM provides standardized canonical terms to maintain consistency and clarity across narratives:

- **Appreciations**: Appreciations are how we interpret and appreciate narrative conflicts, formed by pairing a specific Perspective with either a Storypoint or a Storybeat. They help authors and audiences recognize the narrative's thematic depth and complexity.

- **Methods**: Methods are small narrative engines that actively process and navigate through conflicts. Each Appreciation reveals one or more Methods, clarifying how characters and narratives actively engage with and respond to thematic tensions.

- **Dynamics**: Dynamics represent relationships between narrative elements rather than individual, isolated components. They usually present themselves as binary choices, allowing clear narrative direction and purpose. This binary nature complements the more nuanced, multi-dimensional nature of Storypoints and Storybeats.

- **Vectors**: Vectors indicate the narrative direction taken by Dynamics, visually or conceptually representing the chosen path within these binary relationships. They help clarify and reinforce the intended thematic trajectory within the narrative structure. Note: Dynamics and Vectors appear binary primarily because this version of the model emphasizes structural clarity and ease of narrative interpretation, intentionally contrasting with the richer complexity offered by Storypoints and Storybeats.

---

To support creative flexibility and compatibility with different narrative frameworks, the UNM accommodates:
- **Custom Terms**: Personalized terminology reflecting unique narrative preferences.
- **Namespaces**: Mapping custom terminology to other narrative frameworks (e.g., Dramatica, Hero’s Journey, Save the Cat!).

### Customization Best Practices
- Always retain canonical standards alongside custom terms.
- Utilize namespaces for clear mapping to external frameworks.

---

## Validation and Narrative Integrity

To ensure integrity and consistency in narratives structured with the UNM:
- Storypoints and Storybeats must include canonical terms.
- Custom terms complement but do not replace canonical standards.
- Storybeats require clearly defined scopes and sequences to maintain coherent temporal progression.

---

## Narrative Aspects: In-depth

In this section, we'll explore examples of each narrative aspect, offering a brief overview of what each object contains. For a detailed understanding of specific keys and values, including enumerated values, please refer to the complete [universal-narrative-model-schema.md](/docs/universal-narrative-model-schema.md).

### Perspectives

Where the author positions the source of conflict to communicate the story's intended meaning, independent of first- or third-person narrative style.

```json
"perspectives": [
  {
    "id": "perspective_ab12cd34",
    "author_structural_pov": "i",
    "summary": "Michael Radford",
    "storytelling": "Michael Radford has spent his life convincing himself that control is the key to survival, but every step forward only tightens the noose around him. When his instincts betray him at the worst possible moment, he’s forced to confront the truth—his carefully built defenses aren’t protecting him, they’re suffocating him."
  }
]
```

### Players

Characters whose actions and motivations reveal deeper thematic layers (subtext), moving beyond superficial characterization. Each Player must be  linked explicitly to an **Objective Story Throughline Perspective** to maintain narrative coherence.

```json
"players": [
  {
    "id": "player_def456",
    "name": "Dr. Michael Hayes",
    "role": "the world's leading psychologist",
    "visual": "A distinguished man in his late 50s, with silver-streaked hair and piercing blue eyes. He wears a well-tailored suit but often appears slightly disheveled, as if sleep eludes him.",
    "audio": "His voice is calm and measured, carrying the weight of experience but occasionally betraying a hint of hesitation when discussing personal matters.",
    "bio": "Dr. Michael Hayes is a renowned psychologist known for his groundbreaking research on trauma and memory. Despite his professional success, he struggles with the ghosts of his past—mistakes he can never take back and patients he couldn’t save. As he delves deeper into the minds of others, he finds himself unable to escape his own unresolved grief.",
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

### **Storypoints** 

Defined structural elements representing spatial aspects of a narrative. They establish the narrative's foundational arrangement and thematic relationships.

```json
"storypoints": [
  {
    "id": "storypoint_2345abcd",
    "appreciation": "facet",
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

```json
"storybeats": [
  {
    "id": "storybeat_9876bcde",
    "appreciation": "transit",
    "sequence": 4,
    "method": "past",
    "illustration": "reliving the past",
    "summary": "Michael can no longer escape his past.",
    "storytelling": "Michael has spent years outrunning his past, but in an instant, it catches up to him. His patient’s words land like a ghostly echo, dredging up memories he’s tried to bury, his composure cracking under the weight of old wounds. For the first time, he isn’t just remembering—he’s reliving it, trapped in a moment he thought he’d left behind.",
    "tones": {
        "abstraction": "situation",
        "spatial": "power",
        "temporal": "transcendence"
    },
    "perspectives": [
        "perspective_ab12cd34"
    ]
  }
]
```

### Dynamics

High-level narrative forces that reflect the author's intent, shaping the story's message and clearly communicating its Narrative Argument.

```json
"dynamics": [
  {
    "id": "dynamic_abcdef12",
    "dynamic": "Story Outcome",
    "vector": "Success",
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
    "imperatives": "- Establish the dark, chaotic atmosphere of Neo-Tokyo\n- Introduce key threats: cyber-criminals and AI enforcers\n- Show Alex's initial vulnerabilities and resourcefulness",
    "audience_experiential_pov": "third-person limited",
    "fabric": [
      { "type": "space", "limit": 10 }
    ],
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
    "imperatives": "- Build tension leading to the meeting with the AI\n- Reveal the AI's surprising nature and motives\n- Challenge Alex's established beliefs about allies and enemies",
    "audience_experiential_pov": "third-person limited",
    "fabric": [
      { "type": "space", "limit": 20 }
    ],
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

In narrative design, the sequence of events isn’t just about what happens next—it's about why it happens next. This key insight lies at the heart of the Universal Narrative Model, setting it apart from frameworks like the Hero’s Journey or Save the Cat, where the sequence of beats such as "All is Lost" or "Dark Night of the Soul" can shift based on personal preference or intuition.

Imagine your daily commute along Interstate 5 in Southern California. The experience of passing the 210 and then the 170 is drastically different depending on whether you’re heading into work or heading back home--yet, these are the same two events: passing the 210, and passing the 170. **The meaning behind your experience lies in what order these events occur.** Just like your commute, the meaning of your narrative can shift dramatically depending on the order of events.

That's where **Justification** comes in. It shapes the order in which your events unfold, guiding your story’s progression in a purposeful and meaningful way—far from random guesswork or pure instinct. This careful ordering helps highlight why separating subtext from storytelling isn't just helpful; it's absolutely essential for impactful narrative design.

### The Core Principle: Meaning Dictates Order

Justification is the underlying mechanism that explains why events unfold in a particular sequence. It is not random, nor is it left to subjective interpretation—there is a logic behind how and why a story plays out the way it does. The key insight is that the structure of a story is determined by the relationships between its dynamics and storypoints.

> **Formula:** *Dynamics × Storypoints = Storybeats*

This equation reflects the idea that a story’s core conflicts (its Dynamics) interact with predefined narrative components (Storypoints) to generate a meaningful sequence of events (Storybeats).

### The Process of Justification: A Structured Perspective

At the heart of Justification is the way a story presents and resolves conflicts. A prime example is the interplay between the two primary opposing forces, governed by the **Dynamic of Resolve**, which determines whose resolve is ultimately **Relinquished** and whose is **Maintained**. This interplay illustrates how Justification structures the progression of a story based on meaning rather than arbitrary events.

**The Path of the Maintained Resolve**

   - At the beginning, a force is introduced that challenges this character's worldview.
   - Every event and decision within the story reinforces their commitment to this perspective.
   - As the story escalates, pressure builds, leading to a final crisis where they must decide whether to **stay the course** or abandon their stance.
   - The audience sees a pattern of persistence in the face of increasing opposition, culminating in a moment where either their resolve holds or their world collapses around them.
   - In the end, this character **chooses to stay the course**, *maintaining* their resolve and fully embracing their perspective despite all opposition.

**The Path of the Relinquished Resolve**

   - This character begins where the Maintained Resolve character would stop—at a point of full conviction in their approach.
   - Over time, blind spots emerge. What once worked no longer does, and cracks begin to show in their reasoning.
   - Through a process of breaking down these blinders, they gradually gain awareness of an alternative choice.
   - When they reach the crisis, they recognize both paths but must choose—knowing there is no guarantee the new choice will work.
   - In the end, this character **chooses the path they have never tried before**, *relinquishing* their resolve, and stepping into the unknown.

One character’s convictions are reinforced while the other’s are dismantled—each path structured by the forces that shape the story’s meaning. The interaction between these characters dictates the order of events, creating a framework where every moment is a necessary step in the logical progression of the narrative.

### The Importance of Perspective: The Direction of Justification

Justification is a means of modeling not just the sequencing of events, but also how individual perspectives shifts over time. Think of a road trip:

- Driving in one direction, you see landmarks in a particular order, forming a clear and consistent experience.
- Returning along the same road, the experience is entirely different—you notice things that were previously overlooked, and the journey feels altered.
- This change in perception mirrors how stories unfold: the meaning behind each event is dependent on the direction of Justification.

---

## The Importance of Pivotal Elements in Narrative Structure

Following the Justification Process, we explore how **Resolve**—whether maintained or relinquished—converts the temporal dynamics of conflict *back* into spatial considerations within a Storyform.

| Resolve Type                     | Connected Forces                          |
| ----------------------------- | ------------------------------------- |
| **Relinquished Resolve**                 | Problem & Solution                  |                                
| **Maintained Resolve**                    | Focus & Direction                 | 

A **Relinquished Resolve** connects the underlying Forces of **Problem** and **Solution** with the Character who holds that perspective. Conversely, a **Maintained Resolve** connects with the underlying forces of **Focus** and **Direction**. This key relationship binds the various perspectives of conflict throughout the story, ensuring that character development and plot progression remain intertwined, sustaining the thematic integrity of the narrative.