---
title: Narrative Context Protocol
description: A standardized JSON format for structuring narrative elements, enabling consistency, interoperability, and adaptability across storytelling platforms.
---

The **Narrative Context Protocol** provides a standardized format for defining and organizing story elements in a structured, interoperable way. This schema allows narratives to be stored, analyzed, and transferred between different storytelling tools while maintaining **clarity, flexibility, and the author's original intent**.

At its core, the schema divides a story into two layers: the **deep, structural meaning (Subtext)** and the **surface-level presentation (Storytelling)**. This split ensures that authors can preserve the underlying message of their work while allowing for various forms of high-level audience engagement.

---

## **Schema Validation & Usage**  

The schema is designed for **broad adoption**. It can be used in:  

- **Storytelling platforms** (Subtxt/Dramatica, AI-driven tools, screenwriting apps)  
- **APIs** that facilitate structured narrative generation  
- **AI models** that generate structured story data  
- **Interactive storytelling** systems (video games, branching narratives) 

---

## **Extending the Model**  

Narrative Context Protocol is **designed for flexibility**. Developers and storytellers can:  

- Add **custom Appreciations, Methods, Dynamics, and Vectors** using `custom_appreciation`, `custom_method`, `custom_dynamic`, and `custom_vector` fields.  
- Map terms from other storytelling frameworks using `custom_appreciation_namespace`, `custom_method_namespace`, `custom_dynamic_namespace`, and `custom_vector_namespace`.  
- Submit **extensions and feedback** via issues and discussions in this repo.  
 
---

## **Schema Overview**  

The schema is divided into the following key sections:

### Story 
The highest-level object representing the entire story, containing its metadata and core narrative structure.  

#### **Story Properties:**  
- `id`: Unique story identifier  
- `title`: Story title  
- `genre`: Story genre  
- `logline`: A short description of the story’s premise  
- `created_at`: Timestamp for record-keeping  

```json
"story": {
  "id": "story_123e4567",
  "title": "The Journey Within",
  "genre": "Psychological Drama",
  "logline": "A psychologist struggling with his past helps a patient uncover a hidden trauma, only to confront his own.",
  "created_at": "2025-02-05T14:30:00Z"
}
```

Inside a story, the **narrative** is broken down into two layers: **Subtext** and **Storytelling.**

---

### Narrative: Structuring Subtext & Storytelling  

A **story** may contain **one or more narratives**, though most stories exhibit a **single central narrative**. Each narrative is composed of two core layers:  

1. **Subtext:** The deep, underlying structure of the narrative that conveys the author's intent.  
2. **Storytelling:** The high-level, audience-facing presentation of the story.  

This structure provides both depth (meaning) and flexibility (presentation) within a single, organized model, ensuring a clear distinction between **what the story means** (Subtext) and **how the story is told** (Storytelling).  

---

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

## Structuring Subtext vs. Storytelling  

### **Subtext** – The deep, underlying message of the narrative that communicates the author's intent.  
Subtext is composed of core structural components that define meaning beneath the surface:  
- **Perspectives** – The lens through which story elements are experienced (e.g., `Objective Story`, `Main Character`).  
- **Dynamics** – High-level narrative forces like `Story Outcome` (`Success` or `Failure`).
- **Players** – Characters with defined roles and motivations that impact the story's underlying meaning.  
- **Storypoints** – Key structural points, such as `Problem`, `Solution`, and `Story Goal`.  
- **Storybeats** – Significant turning points that reflect shifts in narrative meaning, such as `Signpost`, `Progression`, or `Event`.  

---

### **Storytelling** – The high-level, audience-facing presentation of the narrative.  
This is how the story is structured and told, with organizational and stylistic elements that shape audience perception:  
- **Overviews** – Surface-level storytelling components. The only standard Overviews are **Logline** and **Genre Dynamics**.
- **Moments** – Organizational units (such as scenes, sequences, acts, chapters, sections, or levels) that define the telling of the narrative. Each Moment includes a `synopsis` and reference to ordered Storybeats found within.  

---

### **Example Breakdown**

#### **Subtext Example**
```json
"subtext": {
  "perspectives": [
    {
      "id": "perspective_abc123",
      "name": "Dr. Michael Hayes",
      "storytelling": "The perspective through which the audience primarily experiences the story.",
      "pov": "i"
    }
  ],
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
        ]
    }
  ]
}
```

---

#### **Storytelling Example**
```json
"storytelling": {
  "overviews": [
    {
      "id": "overview_789123",
      "summary": "A cyberpunk thriller with a rogue AI.",
      "storytelling": "Fast-paced action with a dystopian backdrop."
    }
  ],
  "moments": [
    {
      "id": "moment_456789",
      "summary": "The protagonist confronts the rogue AI.",
      "synopsis": "Alex tracks the AI to its hidden base for a final confrontation.",
      "storybeats": [
        { "sequence": 0, "storybeat_id": "storybeat_123456" },
        { "sequence": 1, "storybeat_id": "storybeat_654321" }
      ]
    }
  ]
}
```

---

## Summary of the Narrative Structure
| Section        | Purpose                          | Key Elements                           |
|----------------|----------------------------------|-----------------------------------------|
| **Subtext**     | Deep, underlying narrative meaning | Perspectives, Players, Storypoints, Storybeats, Dynamics |
| **Storytelling**| Surface-level narrative presentation | Overviews, Moments                      |

---

### Subtext (Deep Narrative Structure)
This section represents the **core meaning** of the story.

#### **Perspectives**  
The lens through which the audience experiences the story’s **meaning**.  

```json
"perspectives": [
  {
    "id": "perspective_ab12cd34",
    "pov": "i",
    "summary": "Michael Radford",
    "storytelling": "Michael Radford has spent his life convincing himself that control is the key to survival, but every step forward only tightens the noose around him. When his instincts betray him at the worst possible moment, he’s forced to confront the truth—his carefully built defenses aren’t protecting him, they’re suffocating him."
  }
]
```

#### **Players**  
Characters within the **narrative structure**, with motivations tied to **subtext** rather than superficial characterization. The associated Perspective MUST be associated with an `Objective Story` Throughline.

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
    ]
  }
]
```

#### **Dynamics**  
High-level narrative forces like **Story Outcome** and **Story Judgment**.

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

#### **Storypoints**  
Structured **spatial aspects** that define and shape the narrative.

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

#### **Storybeats**  
**Temporal aspects** that illustrate the progression _through_ the narrative. Each beat captures a **significant temporal shift** and exists within a defined **scope**.

#### **Special Keys for Storybeats**
- **`appreciation`** – Defines the narrative level the beat belongs to:
  - `"signpost"` → **Broad thematic shifts** (1-4)
  - `"progression"` → **Structural developments** (1-16)
  - `"event"` → **Fine-grained events** (1-64)
- **`sequence`** – Canonical ordering within the **scope**.
- **`tones`** – Classifies the narrative function in three dimensions:
  - **abstraction** → `"situation"`, `"action"`, `"justification"`, `"opinion"`
  - **spatial** → `"potential"`, `"resistance"`, `"current"`, `"power"`
  - **temporal** → `"expression"`, `"experimentation"`, `"integration"`, `"transcendence"`

These ensure **consistency across all stories** while allowing room for creative variation.

```json
"storybeats": [
  {
    "id": "storybeat_9876bcde",
    "appreciation": "signpost",
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

---

### Storytelling (How the Narrative is Expressed)  
This section represents the **presentation, style, and organization** of the story.

#### **Overviews**  
**Surface-level components** like the **Logline** and **Genre Dynamics**.  

```json
"overviews": [
  {
    "id": "overview_12345abc",
    "storytelling": "A thrilling cat-and-mouse chase through the neon-lit streets of a futuristic city.",
    "summary": "A cyberpunk crime thriller about a rogue AI and the detective trying to stop it."
  },
  {
    "id": "overview_67890def",
    "storytelling": "Blending classic noir with futuristic dystopia, the story challenges conventional crime tropes.",
    "summary": "A fusion of cyberpunk and detective noir."
  }
]
```

#### **Moments**  
Organizational and supreficial **narrative units**—Acts, Scenes, Sequences, Chapters, Levels.  

```json
"moments": [
  {
    "id": "moment_abcdef12",
    "summary": "The protagonist arrives in the dystopian city and gets their first taste of the underworld.",
    "synopsis": "After landing in Neo-Tokyo, Alex is forced to navigate a world of hackers, crime syndicates, and AI-controlled law enforcement.",
    "storybeats": [
      { "sequence": 0, "storybeat_id": "storybeat_123456" },
      { "sequence": 1, "storybeat_id": "storybeat_789012" },
      { "sequence": 2, "storybeat_id": "storybeat_345678" }
    ]
  },
  {
    "id": "moment_ghijkl34",
    "summary": "A tense confrontation with the antagonist reveals a shocking truth.",
    "synopsis": "Alex finally meets the rogue AI and realizes it may not be the villain they were led to believe.",
    "storybeats": [
      { "sequence": 0, "storybeat_id": "storybeat_987654" },
      { "sequence": 1, "storybeat_id": "storybeat_654321" }
    ]
  }
]
```

## Here you go, matching the style you provided:

```json
"audience_experiential_pov": {
  "type": "string",
  "enum": [
    "first_person_central",
    "first_person_peripheral",
    "second_person",
    "third_person_limited",
    "third_person_objective",
    "third_person_omniscient"
  ]
}
```

### Moment Properties

#### Audience Experiential POV

Essential for communicating how the Moment's synopsis and storytelling should be written.

- **first_person_central:** Narrator is the main character, directly experiencing events ("I did this").
- **first_person_peripheral:** Narrator is a secondary character observing another's story ("I saw him do this").
- **second_person:** Directly addresses the reader, immersing them in the action ("You did this").
- **third_person_limited:** Narration closely follows one character’s perspective and thoughts ("She thought this").
- **third_person_objective:** Narration reports only observable actions without internal thoughts ("He did that").
- **third_person_omniscient:** Narration shares thoughts and emotions from multiple characters ("He felt angry; meanwhile, she was plotting").

---

## Why This Split Matters
| **Subtext** | **Storytelling** |
|-------------|----------------|
| Represents **deep narrative structure** | Represents **surface-level presentation** |
| Focuses on **author's intent** | Focuses on **audience appreciation** |
| Structural elements: **Perspectives, Players, Storypoints, Storybeats, Dynamics** | Expressive elements: **Overviews, Moments** |
| Determines the **underlying meaning** | Determines **how the story is told** |

---

## **Canonical Standards & Custom Mapping**  

The **Universal Narrative Model JSON Schema** provides a **canonical set of values** for `appreciation`, `method`, `dynamic`, and `vector` ensuring consistency across different implementations. However, we recognize that different storytelling frameworks (such as **Dramatica, Hero’s Journey, or Save the Cat!**) may use alternative terminology to describe similar concepts.  

To maintain **compatibility** while allowing **customization**, we introduce:  

- **Canonical Standards** – A predefined list of `appreciation`, `method`, `dynamic`, and `vector` values that form the foundation of the model and convey the meaning of the narrative.  
- **Custom Mapping Fields** – Optional fields (`custom_appreciation`, `custom_method`, `custom_dynamic`, `custom_vector`) for alternative terms.  
- **Namespacing for Third-Party Mappings** – The ability to link terminology from other frameworks via `custom_appreciation_namespace`, `custom_method_namespace`, `custom_dynamic_namespace`, and `custom_vector_namespace`.  

**Base Set** 

**Validation Rule:** Any `appreciation`, `method`, `dynamic`, or `vector` **must match** one of the below unless explicitly mapped via the **custom mapping system** for compliance with the Universal Narrative Model:

---

### Appreciations

```json
"appreciation": {
  "type": "string",
  "enum": [
    "domain",
    "concern",
    "issue",
    "problem",
    "solution",
    "symptom",
    "response",
    "catalyst",
    "inhibitor",
    "unique_ability",
    "critical_flaw",
    "benchmark",
    "story_goal",
    "story_requirements",
    "story_prerequisites",
    "story_preconditions",
    "story_costs",
    "story_dividends",
    "story_forewarnings",
    "story_consequence",
    "pivotal_element",
    "initial_story_driver",
    "second_story_driver",
    "midpoint_story_driver",
    "fourth_story_driver",
    "concluding_story_driver",
    "signpost",
    "progression",
    "event"
    ],
  "description": "A core narrative Appreciation, based on the Universal Narrative Model."
}
```
**💡 Expansion:** If users need additional Appreciations, they can use a `custom_appreciation` field.

---

### Methods
```json
"method": {
  "type": "string",
  "enum": [
    "universe",
    "physics",
    "psychology",
    "mind",
    "past",
    "understanding",
    "conceptualizing",
    "memory",
    "progress",
    "doing",
    "being",
    "preconscious",
    "future",
    "obtaining",
    "becoming",
    "subconscious",
    "present",
    "learning",
    "conceiving",
    "conscious",
    "fate",
    "prediction",
    "interdiction",
    "destiny",
    "instinct",
    "senses",
    "interpretation",
    "conditioning",
    "fact",
    "security",
    "threat",
    "fantasy",
    "wisdom",
    "skill",
    "experience",
    "enlightenment",
    "openness",
    "delay",
    "choice",
    "preconception",
    "approach",
    "self_interest",
    "altruism",
    "attitude",
    "work",
    "attraction",
    "repulsion",
    "attempt",
    "qualification",
    "strategy",
    "analysis",
    "stipulation",
    "truth",
    "evidence",
    "suspicion",
    "falsehood",
    "state_of_being",
    "situation",
    "circumstances",
    "sense_of_self",
    "value",
    "confidence",
    "worry",
    "worth",
    "knowing",
    "able",
    "driven",
    "thinking",
    "closure",
    "hope",
    "dream",
    "denial",
    "rationalization",
    "commitment",
    "responsibility",
    "obligation",
    "investigation",
    "appraisal",
    "reappraisal",
    "doubt",
    "permission",
    "need",
    "expediency",
    "deficiency",
    "ability",
    "acceptance",
    "accurate",
    "actuality",
    "avoid",
    "aware",
    "cause",
    "certainty",
    "change",
    "chaos",
    "conscience",
    "consider",
    "control",
    "deduction",
    "desire",
    "determination",
    "disbelief",
    "effect",
    "ending",
    "equity",
    "evaluation",
    "expectation",
    "faith",
    "feeling",
    "help",
    "hinder",
    "hunch",
    "inaction",
    "induction",
    "inequity",
    "inertia",
    "knowledge",
    "logic",
    "rejection",
    "deviation",
    "oppose",
    "order",
    "perception",
    "possibility",
    "potentiality",
    "proaction",
    "probability",
    "process",
    "production",
    "projection",
    "protection",
    "proven",
    "pursuit",
    "re_evaluation",
    "reaction",
    "reconsider",
    "reduction",
    "result",
    "self_aware",
    "speculation",
    "support",
    "temptation",
    "test",
    "theory",
    "thought",
    "trust",
    "free",
    "continuing",
    "presumption"
  ],
  "description": "A Method by which the Appreciation is explored in the narrative."
}
```
**💡 Expansion:** Third-party implementations can add their own `custom_method` fields.

---

### Dynamics

```json
"dynamic": {
  "type": "string",
  "enum": [
    "main_character_resolve",
    "influence_character_resolve",
    "main_character_growth",
    "main_character_approach",
    "problem_solving_style",
    "story_limit",
    "story_driver",
    "story_outcome",
    "story_judgment"
  ],
  "description": "An indication of a Dynamic applied to the Dramatica storyform."
}
```
**💡 Expansion:** Third-party implementations can add their own `custom_dynamic` fields.

---

### Vectors
```json
"vector": {
  "type": "string",
  "enum": [
    "change",
    "steadfast",
    "stop",
    "start",
    "do_er",
    "be_er",
    "linear",
    "holistic",
    "optionlock",
    "timelock",
    "action",
    "decision",
    "success",
    "failure",
    "good",
    "bad"
  ],
  "description": "A vector illustrating how a Dynamic manifests within the story."
}
```
**💡 Expansion:** Third-party implementations can add their own `custom_vector` fields.

---

### Storypoints

```json
"storypoints": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": { "type": "string" },
      "appreciation": { 
        "type": "string",
        "enum": ["domain", "concern", "issue", "problem", "solution", "symptom", "response", "catalyst", "inhibitor", "unique_ability", "critical_flaw", "benchmark"]
      },
      "method": { 
        "type": "string",
        "enum": [
          "universe", "physics", "psychology", "mind", "past", "understanding", "conceptualizing", "memory",
          "progress", "doing", "being", "preconscious", "future", "obtaining", "becoming", "subconscious", "present", "learning", "conceiving", "conscious",
          "fate", "prediction", "interdiction", "destiny", "instinct", "senses", "interpretation", "conditioning", "fact", "security", "threat", "fantasy",
          "wisdom", "skill", "experience", "enlightenment", "openness", "delay", "choice", "preconception", "approach", "self_interest", "altruism", "attitude",
          "work", "attraction", "repulsion", "attempt", "qualification", "strategy", "analysis", "stipulation", "truth", "evidence", "suspicion", "falsehood",
          "state_of_being", "situation", "circumstances", "sense_of_self", "value", "confidence", "worry", "worth", "knowing", "able", "driven", "thinking",
          "closure", "hope", "dream", "denial", "rationalization", "commitment", "responsibility", "obligation", "investigation", "appraisal", "reappraisal",
          "doubt", "permission", "need", "expediency", "deficiency", "ability", "acceptance", "accurate", "actuality", "avoid", "aware", "cause", "certainty",
          "change", "chaos", "conscience", "consider", "control", "deduction", "desire", "determination", "disbelief", "effect", "ending", "equity", "evaluation",
          "expectation", "faith", "feeling", "help", "hinder", "hunch", "inaction", "induction", "inequity", "inertia", "knowledge", "logic", "rejection",
          "deviation", "oppose", "order", "perception", "possibility", "potentiality", "proaction", "probability", "process", "production", "projection",
          "protection", "proven", "pursuit", "re_evaluation", "reaction", "reconsider", "reduction", "result", "self_aware", "speculation", "support",
          "temptation", "test", "theory", "thought", "trust", "free", "continuing", "presumption"
        ]
      },
      "illustration": { "type": "string" },
      "summary": { "type": "string" },
      "storytelling": { "type": "string" },
      "perspectives": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "perspective_id": { "type": "string" }
          },
          "required": ["perspective_id"]
        }
      }
    },
    "required": ["id", "appreciation", "method", "illustration", "summary", "storytelling", "perspectives"]
  }
}
```

---

### Storybeats
The following standardized values ensure consistency and interoperability in story structure:

#### Scope-Based Number Ranges

In a Storybeat, `appreciation` determines the range of `number`:

| **Appreciation** | **Allowed Range** |
|------------|-----------------|
| **Signpost** | `1-4` |
| **Progression** | `1-16` |
| **Event** | `1-64` |

#### Canonical Tone Categories

Each Storybeat has **three tonal layers**:
| **Tone Type**  | **Enum Options** |
|---------------|-----------------|
| **Abstraction** | `"situation"`, `"action"`, `"justification"`, `"opinion"` |
| **Spatial** | `"potential"`, `"resistance"`, `"current"`, `"power"` |
| **Temporal** | `"expression"`, `"experimentation"`, `"integration"`, `"transcendence"` |

#### Full Example: Canonical Storybeats

```json
"storybeats": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "pattern": "^storybeat_[a-f0-9-]{36}$"
      },
      "appreciation": {
        "type": "string",
        "enum": ["signpost", "progression", "event"]
      },
      "sequence": {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 1,
            "maximum": 4,
            "description": "For Signposts (1-4)"
          },
          {
            "type": "integer",
            "minimum": 1,
            "maximum": 16,
            "description": "For Progressions (1-16)"
          },
          {
            "type": "integer",
            "minimum": 1,
            "maximum": 64,
            "description": "For Events (1-64)"
          }
        ]
      },
      "method": {
        "type": "string"
      },
      "illustration": {
        "type": "string"
      },
      "summary": {
        "type": "string"
      },
      "storytelling": {
        "type": "string"
      },
      "tones": {
        "type": "object",
        "properties": {
          "abstraction": {
            "type": "string",
            "enum": ["situation", "action", "justification", "opinion"]
          },
          "spatial": {
            "type": "string",
            "enum": ["potential", "resistance", "current", "power"]
          },
          "temporal": {
            "type": "string",
            "enum": ["expression", "experimentation", "integration", "transcendence"]
          }
        },
        "required": ["abstraction", "spatial", "temporal"]
      },
      "perspectives": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
            "perspective_id": {
                "type": "string"
            }
            },
            "required": []
        }
      }
    },
    "required": [
      "id",
      "appreciation",
      "sequence",
      "method",
      "tones",
      "perspectives"
    ]
  }
}

```
---

#### Example Storybeat Validation

**Valid Signpost**

```json
{
  "id": "storybeat_abc123",
  "perspective": {
    "throughline": "Main Character",
    "perspective_id": "perspective_ab12cd34"
  },
  "appreciation": "Signpost",
  "sequence": 3,
  "method": "Memory",
  "illustration": "looking back at choices made",
  "summary": "A moment of hesitation as the protagonist considers the past.",
  "storytelling": "In the rain, Alex stares at the old photo, lost in thought.",
  "tones": {
    "abstraction": "justification",
    "spatial": "potential",
    "temporal": "expression"
  }
}
```
✅ **Passes validation** because `number: 3` is within the **1-4 range** for `Signpost`.

---

**Invalid Signpost**

```json
{
  "id": "storybeat_abc123",
  "perspective": {
    "throughline": "Main Character",
    "perspective_id": "perspective_ab12cd34"
  },
  "appreciation": "Signpost",
  "sequence": 7,  
  "method": "Memory",
  "illustration": "looking back at choices made",
  "summary": "A moment of hesitation as the protagonist considers the past.",
  "storytelling": "In the rain, Alex stares at the old photo, lost in thought.",
  "tones": {
    "abstraction": "justification",
    "spatial": "potential",
    "temporal": "expression"
  },
  "perspective_id": "perspective_xyz789"
}
```
❌ **Fails validation** because `number: 7` is **outside the allowed range (1-4)** for `Signpost`.

---

### Customizing & Cross-Framework Mapping  

**Narrative Context Protocol** provides a **structured, standardized framework** for defining storytelling elements. However, we recognize that different storytelling paradigms may use **alternative terminology** or require **custom extensions**.  

To maintain both **consistency and flexibility**, the schema introduces two mechanisms:  

1. **`custom_appreciation`** – For defining a **personalized term** while retaining compatibility with the standard model.  
2. **`custom_appreciation_namespace`** – For mapping an appreciation to **external storytelling frameworks** (e.g., Dramatica, Hero’s Journey, Save the Cat!).  

---

## Custom Appreciations, Methods, Dynamics, and Vectors
While every standard is open to customization, we focus on customizing an Appreciation here as an example.

`custom_appreciation` allows users to introduce **a preferred appreciation label** without replacing the canonical standard.  

### Storypoint Example
```json
{
    "id": "storypoint_2345abcd",
    "perspective": {
        "throughline": "Influence Character",
        "perspective_id": "perspective_ab12cd34"
    },
    "appreciation": "Focus",
    "method": "Disbelief",
    "custom_appreciation": "Alternative Viewpoint"
}
```

**Why?**  
- The combination of the `"Catalust Provocateur"` Perspective and the `"Focus"` Appreciation fits within **NCP** standards and serves as an anchor across all systems. There is no ambiguity as to what this Storypoint refers to within the narrative. 
- `"Alternative Viewpoint"` is the **user’s preferred alternative**, which **does not conflict** with the standard model.  

::callout
---
icon: i-heroicons-exclamation-triangle
---
**Best Practice**: When using `custom_appreciation`, it is **required** to keep the original **canonical standards** outlined in the standard set for compatibility.
::

---

## Custom Appreciation Namespace (Cross-Framework Mapping)
To **ensure interoperability** across storytelling models, users can map appreciations to **alternative terminologies** using `custom_appreciation_namespace`.  

### Usage Example
```json
{
    "id": "storypoint_2345abcd",
    "perspective": {
        "throughline": "Influence Character",
        "perspective_id": "perspective_ab12cd34"
    },
    "appreciation": "Focus",
    "method": "Disbelief",
    "custom_appreciation": "Alternative Viewpoint",
    "custom_appreciation_namespace": {
        "Dramatica": "Influence Character Symptom",
        "Hero's Journey": "Call to Adventure",
        "Save the Cat!": "Debate"
    }
}
```
**Why?** 

- `"Focus"`, along with `"Influence Character"` remains the **official Perspective and Appreciation**.  
- `"Alternative Tension"` is the **custom term** for internal use.  
- `"Dramatica": "Influence Character Symptom"` ensures **compatibility with original Dramatica theory concepts**.  
- `"Hero's Journey": "Call to Adventure"` provides a **direct mapping to Joseph Campbell’s model**.  
- `"Save the Cat!": "Debate"` aligns with **Blake Snyder’s methodology**. 

::callout
---
icon: i-heroicons-information-circle
---
**Best Practice:** For broader adoption, users should **map their custom terms** to at least **one external framework** when possible.
::

---

## Summary of Differences
| **Feature** | **`custom_appreciation`** | **`custom_appreciation_namespace`** |
|------------|----------------------|--------------------------------|
| **Purpose** | Allows a user to define a **custom term** for internal use | Maps an appreciation to an **external narrative framework** |
| **Scope** | A single replacement term | Multi-framework compatibility |
| **Format** | A simple string | An object with key-value mappings |
| **Use Case** | User wants to customize terminology but stay within the model | User needs to translate their story into Dramatica, Hero’s Journey, etc. |

---

## Other Customization and Namespacing
Just as Appreciations of Storypoints can be customized and mapped, the same applies to **Methods**, **Dynamics**, and **Vectors** across both Storypoints, Storybeats, and Dynamics. The key requirement is to maintain the keys found in the Standard Set for the applicable component, and then expanding with both the **custom term** and **custom term namespace**.  

### Storybeat Example

```json
"storybeats": [
  {
    "id": "storybeat_9876bcde",
    "perspective": {
        "throughline": "Main Character",
        "perspective_id": "perspective_ab12cd34"
    },
    "appreciation": "Signpost",
    "sequence": 3,
    "method": "Preconscious",
    "illustration": "reacting spontaneously",
    "summary": "Michael’s carefully constructed world crumbles as his instincts betray him, pushing him into a moment of raw, unfiltered reaction that costs him everything he’s fought for.",
    "storytelling": "Michael doesn’t think—he just reacts. The argument erupts, his voice raw as he hurls words he can’t take back, exposing the fear he’s buried beneath years of control. The moment shatters, leaving only silence, a slammed door, and the sinking realization that he’s just lost everything.",
    "tones": {
        "abstraction": "justification",
        "spatial": "potential",
        "temporal": "expression"
    },
    "custom_appreciation": "Main Character Signpost 3",
    "custom_method": "Impulsive Responses",
    "custom_appreciation_namespace": {
      "Dramatica": "Main Character Signpost 3"
    },
    "custom_method_namespace": {
      "Dramatica": "Impulsive Responses",
      "Save the Cat!": "Dark Night of the Soul"
    }
  }
]
```

---

## Validation & Best Practices
To **preserve the integrity** of NCP while allowing for flexibility, the following **validation rules** should be applied:  

- Storypoints and Storybeats must always include a standard `perspective`, `appreciation`, `method`, even if mapped to an external framework.
- In addition, Storybeats must include a `scope` and `number` to map across the temporal progression of the narrative.
- Dynammics must include a standard `dynamic` and `vector`.
- If `custom_appreciation` is used, `appreciation` must still be present.**  
- `custom_appreciation_namespace` should be used when interoperability with external frameworks is desired.

---

## Example JSON Document  

To see the schema in action, here’s a **full example JSON document**:  

```json
{
  "schema_version": "1.1.0",
  "story": {
    "id": "story_123e4567-e89b-12d3-a456-426614174000",
    "title": "Echoes of the Past",
    "genre": "Mystery Thriller",
    "logline": "A hardened detective uncovers clues linking a cold case to his own haunting history.",
    "created_at": "2025-12-01T12:34:56Z",
    "narratives": [
      {
        "id": "narrative_001",
        "title": "Central Narrative",
        "subtext": {
          "perspectives": [
            {
              "id": "perspective_12345678-1234-1234-1234-123456789012",
              "throughline": "Main Character",
              "summary": "Michael Radford",
              "storytelling": "Michael Radford has spent his life convincing himself that control is the key to survival, but every step forward only tightens the noose around him. When his instincts betray him at the worst possible moment, he’s forced to confront the truth—his carefully built defenses aren’t protecting him, they’re suffocating him."
            }
          ],
          "players": [
            {
              "id": "player_abcdef12-3456-7890-abcd-ef1234567890",
              "name": "Detective John Marlowe",
              "role": "Main Character",
              "summary": "A seasoned detective battling personal demons and a haunting past.",
              "storytelling": "John projects a stoic and determined front, masking his inner turmoil.",
              "perspective": {
                "throughline": "Objective Story",
                "perspective_id": "perspective_12345678-1234-1234-1234-123456789012"
              },
              "motivations": [
                {
                  "method": "Determination",
                  "illustration": "John relentlessly pursues leads despite the personal cost.",
                  "storytelling": "Intense close-ups and internal monologues reveal his unwavering resolve."
                }
              ]
            }
          ],
          "dynamics": [
            {
              "id": "dynamic_00112233-4455-6677-8899-aabbccddeeff",
              "dynamic": "Story Outcome",
              "vector": "Success",
              "summary": "The investigation culminates with John finding redemption as truth prevails.",
              "storytelling": "A crescendo of revelations ties together the character’s journey and the case.",
              "perspective_id": "perspective_12345678-1234-1234-1234-123456789012"
            }
          ],
          "storypoints": [
            {
              "id": "storypoint_11223344-5566-7788-99aa-bbccddeeff00",
              "perspective": {
                "throughline": "Main Character",
                "perspective_id": "perspective_12345678-1234-1234-1234-123456789012"
              },
              "appreciation": "Main Character Focus",
              "method": "Consider",
              "illustration": "ruminating over the case",
              "summary": "John discovers evidence that hints at a personal connection to the old unsolved case.",
              "storytelling": "A shattered piece of glass at the scene becomes a recurring symbol of hidden truths.",
              "custom_appreciation": "Mystery Element",
              "custom_method": "Clue Analysis"
            }
          ],
          "storybeats": [
            {
              "id": "storybeat_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
              "perspective": {
                "throughline": "Main Character",
                "perspective_id": "perspective_12345678-1234-1234-1234-123456789012"
              },
              "appreciation": "Signpost",
              "sequence": 2,
              "method": "Preconscious",
              "illustration": "being impulsive",
              "summary": "Haunted by the past, John relives the traumatic events that shaped his career.",
              "storytelling": "Intercut scenes merge present-day investigation with vivid flashbacks of earlier failures.",
              "tones": {
                "abstraction": "situation",
                "spatial": "resistance",
                "temporal": "expression"
              },
              "custom_appreciation": "Main Character Signpost 3",
              "custom_method": "Impulsive Responses",
              "custom_appreciation_namespace": {
                "Dramatica": "Main Character Signpost 3"
              },
              "custom_method_namespace": {
                "Dramatica": "Impulsive Responses"
              }
            }
          ]
        },
        "storytelling": {
          "overviews": [
            {
              "id": "overview_001",
              "summary": "A dark investigation in a rain-soaked city where every shadow holds a secret.",
              "storytelling": "A gritty, atmospheric narrative blending film noir with modern mystery."
            },
            {
              "id": "overview_002",
              "summary": "A psychological dive into trauma and redemption.",
              "storytelling": "The story juxtaposes stark reality with introspective moments, engaging the audience emotionally."
            }
          ],
          "moments": [
            {
              "id": "moment_001",
              "summary": "The inciting discovery.",
              "synopsis": "John stumbles upon a crucial piece of evidence that challenges everything he believed about the case.",
              "storybeats": [
                {
                  "order": 0,
                  "storybeat_id": "storybeat_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
                }
              ]
            },
            {
              "id": "moment_002",
              "summary": "The tense confrontation.",
              "synopsis": "In a high-stakes interrogation, John confronts a suspect whose ambiguous alibi deepens the mystery.",
              "storybeats": [
                {
                  "order": 0,
                  "storybeat_id": "storybeat_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```