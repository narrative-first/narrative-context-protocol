# SPECIFICATION

The schema separates a story into two primary layers: **Subtext** and **Storytelling**. This distinction enables authors to preserve the deeper meaning of their narratives while allowing flexibility in how those narratives are presented to audiences.

### Subtext vs. Storytelling

A **story** can consist of multiple narratives, but typically, one central narrative is predominant. Each narrative consists of:

- **Subtext**: The foundational narrative structure conveying the author's intended meaning.
- **Storytelling**: The surface-level narrative presentation directed toward audience engagement.

By clearly distinguishing these layers, the **Universal Narrative Model (UNM)** provides both depth in meaning and adaptability in presentation, facilitating effective and intentional narrative design.

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

---

## Subtext: Narrative Aspects

Subtext aspects focus on the thematic framework and deeper meaning underlying a narrative, clearly conveying authorial intent and ensuring thematic consistency throughout the story.

### Perspectives

Perspectives enable authors to explore thematic conflicts from specific authorial viewpoints. By associating particular Storypoints and Storybeats with distinct Perspectives, authors articulate how different thematic arguments or character-driven viewpoints uniquely influence the central narrative conflict, deepening thematic resonance and clarity.

### Dynamics

Dynamics represent narrative forces that shape the structural framework of a story. They encode the author's intended message or thematic meaning directly into the narrative structure itself. Understanding Dynamics helps authors clarify the purpose behind their craft.

### Players

Players constitute the ensemble of characters within the Objective Story Throughline. Each Player fulfills specific narrative roles and functions, significantly advancing plot progression and reinforcing thematic exploration within the narrative framework.

### Storypoints

Storypoints capture essential thematic concepts and core ideas integral to the narrative. They provide depth, clarity, and consistency, enabling authors to effectively embed and communicate the deeper thematic intentions of their story.

### Storybeats

Storybeats map the chronological progression of narrative events, clearly delineating significant moments and transitions. They emphasize shifts in thematic exploration and character development, ensuring effective pacing and sustained thematic momentum throughout the narrative.

---

## Storytelling: Narrative Aspects

Storytelling aspects address the explicit, audience-facing presentation of a narrative. They shape how the audience experiences and engages with the story.

### Overviews
Overviews deliver high-level storytelling components, such as Throughline descriptions, plot summaries, and character arcs. These elements offer authors and audiences a clear understanding of the narrative's direction and key thematic drivers, supporting cohesive and engaging storytelling.

### Moments
Moments organize storytelling into narrative units like acts, scenes, chapters, or sequences. Each Moment includes a concise synopsis and structured references linking to associated Storybeats, providing clear narrative structure and aiding audience comprehension and engagement.

---

## Why Distinguish Subtext from Storytelling?

Clearly differentiating between Subtext and Storytelling enhances narrative clarity and effectiveness:

| **Subtext**                  | **Storytelling**               |
|------------------------------|--------------------------------|
| Underlying thematic meaning  | Explicit narrative presentation |
| Represents authorial intent  | Shapes audience experience      |
| Ensures structural coherence | Allows stylistic and expressive flexibility|

---

## Introduction to Terminology and Complexity

From this point forward, we'll dive deeper into the intricacies and nuanced language of the Universal Narrative Model (UNM). While the terminology and concepts presented may initially seem complex or even daunting, rest assured that the application Subtxt was purposefully built from the ground up to simplify this learning curve. Through practical application and real-world exercises, [Subtxt helps authors](https://subtxt.app) intuitively grasp and leverage narrative theory in their storytelling.

Muse, our innovative AI-powered chatbot introduced in Spring 2023, takes simplicity even further. Muse meets you exactly where you are, obfuscating complex terminology and adapting its explanations to your current level of understanding. This ensures that you can confidently focus on crafting your narrative without needing to master the underlying theory upfront.

For those eager to delve deeper, [Narrative First](https://narrativefirst.com) and [the original Dramatica site](https://dramatica.com) offer fantastic resources for further exploration of these concepts.

## Canonical Standards and Customization

The UNM provides standardized canonical terms to maintain consistency across narratives:
- **Appreciations**
- **Methods**
- **Dynamics**
- **Vectors**

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

## The Justification Process

**Justification** determines the order in which events transpire, shaping the story’s progression in a way that is neither arbitrary nor purely instinctual.

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

---

## Explore the Tools That Bring the UNM to Life

The **Universal Narrative Model (UNM) isn't just a framework—it’s a gateway API into an entirely new world of narrative.** It bridges the unpredictable creativity of large-language models with the structured, meaningful progression of theme. By balancing these two forces, the UNM offers writers, developers, and AI systems a way to **navigate storytelling with both spontaneity and purpose**—unlocking emergent storytelling possibilities without sacrificing coherence or intent.  

A complete Storyform maintains _many, many more_ relationships—both between individual components and across various dynamics and temporal aspects of a narrative. While we encourage experimentation, there are only two places where one can find the definitive source of truth on best practices in developing Storyforms:  

[**Dramatica**](https://dramatica.com) – Explore the original theory and tools for narrative structure.

[**Subtxt**](https://subtxt.app) – Experience the future of AI-enhanced storytelling.

---
**Universal Narrative Model™ (UNM™)** is a trademark of the **Entertainment Technology Center (ETC)** at the **University of Southern California (USC)**. Stewardship of the UNM specification, including ongoing development, maintenance, and implementation, has been exclusively delegated to **Narrative First, Inc**. 

**Dramatica®** is is a registered trademark of **Write Brothers, Inc.®** Patent #5,734,916; #6,105,046

**Subtxt™** and **Subtxt Muse™** are trademarks of **Narrative First, Inc.™**

The UNM file format and schema are [openly distributed under the MIT License](https://github.com/NarrativeFirst/universal-narrative-model).