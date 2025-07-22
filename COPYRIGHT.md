# COPYRIGHT

We’re entering a world where authorship isn't diminished but amplified by artificial intelligence. In this AI-driven age, issues of copyright, provenance, and attribution are increasingly crucial, reinforcing—not weakening—the essential role of the author. Drawing from decades of creative storytelling experience across animation, film, and television, our team recognizes the nuances and sensitivities inherent to the creative writing process. Rather than viewing AI as a threat, we see it as an unprecedented opportunity to clearly define, track, and protect authorship, codifying the essential value that original creators bring to storytelling.

Picture a brainstorming session in an imaginary writer's room for a new thriller set in a corporate espionage scenario called *Insider Threat*. Of course, the film is hypothetical (and might already be perfect!), but let’s use it as a creative example. Imagine someone pitching a new interaction between Alex, a junior analyst, and Miriam, the paranoid CEO:

## Pitch (Initial Storytelling Idea - Contributor: Alex Bennett):

> “So, Alex is unexpectedly called into Miriam’s office late at night. Miriam’s clearly losing it—jumpy and suspicious, fixated on uncovering who leaked details of her secret merger deal. Alex stays completely silent, giving away nothing.”

## Committing to the Process

This initial storytelling pitch is captured within the Narrative Context Protocol object for the film, clearly providing attribution to the original contributor. Typically, the earliest creative ideas start here, within this more surface-level storytelling space. Then, as the narrative evolves and the story's underlying structure is refined, other contributors can deepen and clarify these initial concepts. Each contribution is explicitly tracked through commits to the repository, transparently demonstrating how every individual's ideas meaningfully shape the narrative's development, while ensuring clear authorship attribution throughout the entire creative process.

## Initial Commit (Storytelling Moment - Alex Bennett):

```diff
commit a1b2c3d4
Author: Alex Bennett <alex.bennett@example.com>
Date:   Thu Jul 17 10:15:42 2025 -0700

    feat(storytelling): Initial idea for CEO confrontation scene

diff --git a/insider-threat-ncp.json b/insider-threat-ncp.json
index c4e7f2a..a6b8d3f 100644
--- a/insider-threat-ncp.json
+++ b/insider-threat-ncp.json
@@ -32,6 +32,14 @@
         "moments": [
+          {
+            "id": "fe8a8863-866d-411d-8d2d-8fb30876abfc",
+            "summary": "Alex is urgently summoned by Miriam, whose paranoia about an internal leak is escalating.",
+            "synopsis": "Alex meets Miriam, visibly distressed and accusing her staff of betrayal. Alex remains tight-lipped.",
+            "setting": "Miriam’s private office, late evening.",
+            "timing": "After hours, amid rising company tensions.",
+            "audience_experiential_pov": "third-person limited",
+          }
         ]
```

But then, what happens when Sam jumps in, and riffs off of Alex’s initial idea, building out the conflict even more?

## Second Pitch (Enhanced Conflict - Contributor: Sam Carter):

> “Exactly! And what if Miriam’s paranoia starts affecting the entire company? Employees become anxious and suspicious of each other, frantically covering their tracks. Now the office is a hotbed of mistrust and tension, with everyone desperately pointing fingers elsewhere. Alex tries to stay calm, subtly redirecting Miriam’s suspicions away from himself and his allies by suggesting other potential leaks. But Miriam pushes harder, becoming more paranoid by the second. Alex skillfully deflects attention and tries to remain unnoticed.”

Great addition, Sam! But how does authorship play out in this scenario?

## Semantic Extraction (Using Narrative Context Protocol):

Because we already have a Storyform for this narrative, we can **semantically extract Sam’s idea** to see if it fits within the existing structure. If it does, we then place his contributions into the appropriate parts of the Storyform and attribute them accordingly:

* **Objective Story Symptom (Pursuit)**

  * Illustration of Pursuit: “Miriam relentlessly pursues phantom leaks, fostering company-wide paranoia.”
  * Storytelling: “The CEO’s fixation on potential betrayals creates widespread instability and suspicion in the office.”
* **Objective Story Response (Avoid)**

  * Illustration of Avoid: “Employees react by avoiding suspicion, leading to further mistrust.”
  * Storytelling: “Employees’ efforts to deflect suspicion unintentionally heighten anxiety. Alex subtly directs Miriam’s suspicion away from himself, maintaining careful neutrality.”

## Enhanced Conflict Contribution by Sam Carter (explicit subtext added):

Here, we can begin to see Sam's contribution to the process, as well as how it affects Alex's original idea for the scene.

```diff
commit d4c3b2a1
Author: Sam Carter <sam.carter@example.com>
Date:   Thu Jul 17 12:33:28 2025 -0700

    feat(subtext): Added Objective Story Symptom & Response to CEO/Alex scene

diff --git a/insider-threat-ncp.json b/insider-threat-ncp.json
index a6b8d3f..e1f7c9d 100644
--- a/insider-threat-ncp.json
+++ b/insider-threat-ncp.json
@@ -18,7 +18,19 @@
           "storypoints": [
+            {
+              "context": "objective_story",
+              "appreciation": "symptom",
+              "method": "pursuit",                       
+              "illustration": "relentless pursuit of imaginary betrayals",
+              "storytelling": "Miriam’s obsessive hunt for a non-existent traitor spreads paranoia."
+            },
+            {
+              "context": "objective_story",
+              "appreciation": "response",
+              "method": "avoid",                       
+              "illustration": "steering suspicion away",
+              "storytelling": "Employees and Alex actively deflect suspicion, creating a tense atmosphere."
+            }
         ],
```

Even Carl jumps in:

> “Hey, maybe Alex panics and says something ridiculous like, ‘It was me, Miriam! I leaked it!’ to protect someone else. Totally out of character—but desperation could do that, right?”

Alright, so it's not the greatest idea—but you can see how it could still fit within the narrative structure. And with NCP, we have a track record of commits to refer back to if we decide to rollback some of these ideas in the future.

```diff
commit g5c3b2a1
Author: Carl Knolls <carl.knolls@example.com>
Date:   Thu Jul 17 14:47:28 2025 -0700

    feat(subtext): Developed OS Response further in Warden/Red scene

diff --git a/shawshank-redemption-ncp.json b/shawshank-redemption-ncp.json
index e1f7c9d..r2k8b7e 100644
--- a/shawshank-redemption-ncp.json
+++ b/shawshank-redemption-ncp.json
@@ -18,7 +18,19 @@
             {
               "id": "04fc7292-abf6-4754-8d0f-d0fe66c5dd05",
               "context": "objective_story",
               "appreciation": "response",
               "method": "avoid",
-              "illustration": "steering something",
-              "summary": "Prisoners actively steer suspicion away from themselves, creating a pervasive atmosphere of mistrust and caution.",
-              "storytelling": "Norton's escalating paranoia compels prisoners to cautiously cover their tracks and deflect suspicion onto others. Red carefully avoids implicating himself and his crew by calmly redirecting Norton's attention elsewhere, maintaining a subtle but constant effort to stay off the Warden's radar.",                     
+              "illustration": "being obviously preventative",
+              "summary": "Red comes off super-suspicious as he tries to deflect the Warden's attention away from him and Andy.",
+              "storytelling": "In response, Red obviously implicates himself, while trying to prevent Norton from finding out what's going on. It has the reverse effect, and now Norton’s paranoia leads him straight to Red and Andy.",
               "perspectives": [
             {
               "id": "edff489e-cd00-4520-b6ff-2f66dba28a2e"
             }
```

With the NCP we now possess **a meaningful chronicle of the story development process**: including exactly who contributed each idea, how ideas were developed or discarded, and insight into the collaborative storytelling process. The NCP approach gives us exceptional clarity about attribution and provenance.

---

## Attribution and Provenance

In traditional storytelling, determining who deserves credit for a creative contribution can often be confusing and stressful, especially in collaborative environments influenced by AI-generated content. With Narrative Context Protocol, these existential worries about authorship and copyright are significantly alleviated. It’s easy to clearly track every person’s contributions, ensuring everyone is meaningfully included in the authorship process without getting lost in the complexities of AI-driven storytelling. Through the Narrative Context Protocol, we leverage AI to seamlessly attribute each contribution precisely and transparently.
