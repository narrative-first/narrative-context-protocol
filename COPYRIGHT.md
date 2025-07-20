# COPYRIGHT

We’re entering a world where authorship isn't diminished but amplified by artificial intelligence. In this AI-driven age, issues of copyright, provenance, and attribution are increasingly crucial, reinforcing—not weakening—the essential role of the author. Drawing from decades of creative storytelling experience across animation, film, and television, our team recognizes the nuances and sensitivities inherent to the creative writing process. Rather than viewing AI as a threat, we see it as an unprecedented opportunity to clearly define, track, and protect authorship, codifying the essential value that original creators bring to storytelling.

Picture a brainstorming session in an imaginary writer's room for *The Shawshank Redemption*. Of course, the film hardly needs improving (it’s already perfect!), but let’s use it as a creative example. Imagine someone pitching a new interaction between Red and Warden Norton:

## Pitch (Initial Storytelling Idea - Contributor: Alex Bennett):

> “So Red gets called into the Warden’s office late one night. Norton’s clearly losing it, he’s jumpy and suspicious, obsessed with figuring out who’s ratting out his shady dealings. Red just keeps quiet, doesn't say a word.”

## Committing to the Process

This initial storytelling pitch is captured within the Narrative Context Protocol object for the film, clearly providing attribution to the original contributor. Typically, the earliest creative ideas start here, within this more surface-level storytelling space. Then, as the narrative evolves and the story's underlying structure is refined, other contributors can deepen and clarify these initial concepts. Each contribution is explicitly tracked through commits to the repository, transparently demonstrating how every individual's ideas meaningfully shape the narrative's development, while ensuring clear authorship attribution throughout the entire creative process.

## Initial Commit (Storytelling Moment - Alex Bennett):

```
commit a1b2c3d4
Author: Alex Bennett <alex.bennett@example.com>
Date:   Thu Jul 17 10:15:42 2025 -0700

    feat(storytelling): Initial idea for Warden confrontation scene

diff --git a/shawshank-redemption-ncp.json b/shawshank-redemption-ncp.json
index c4e7f2a..a6b8d3f 100644
--- a/shawshank-redemption-ncp.json
+++ b/shawshank-redemption-ncp.json
@@ -32,6 +32,14 @@
         "moments": [
+          {
+            "id": "fe8a8863-866d-411d-8d2d-8fb30876abfc",
+            "summary": "Red is summoned late at night by Warden Norton, whose paranoia over a prison informant threatens to boil over.",
+            "synopsis": "Red meets with the visibly shaken Warden Norton, who interrogates him about potential leaks of his illicit activities. Red keeps quiet.",
+            "setting": "Warden Norton’s private office, late at night.",
+            "timing": "Shortly after lights-out, during heightened prison tensions.",
+            "audience_experiential_pov": "third-person limited",
+          }
         ]

```

Alright, so Alex’s idea was cool, and we marked it down in the commit under a **Storytelling > Moment** key within the Narrative Context Protocol object for the project. First ideas usually start here, in the more superficial storytelling space, and anyone can easily participate and collaborate.

But then, what happens when Sam jumps in, and riffs off of Alex’s initial idea, building out the conflict even more?

## Second Pitch (Enhanced Conflict - Contributor: Sam Carter):

> “Yeah, totally, and what if Norton’s paranoia isn’t just his own problem—maybe it’s making everyone else freak out too? Like, prisoners start panicking because Norton’s aggressively chasing down imaginary threats, so they’re scrambling to cover their tracks. Now there’s this atmosphere of mistrust everywhere because everyone’s trying to dodge suspicion, pointing fingers at each other. Red keeps his cool though, trying to casually steer suspicion away from himself and his crew by suggesting other people Norton should look at. But the Warden won’t let it go, pushing harder and getting more paranoid by the second. Red just keeps calmly deflecting and staying under the radar.”

Great addition, Sam! But how does authorship play out in this scenario?

## Semantic Extraction (Using Narrative Context Protocol):

Because we already have a Storyform for this narrative (see our full example of [the NCP for The Shawshank Redemption](https://github.com/narrative-first/narrative-context-protocol/blob/main/examples/the-shawshank-redemption.json)), and we’ve figured out all the different narrative potentials, we can **semantically extract Sam’s idea** to see if it fits within the existing structure. If it does, we then place his contributions into the appropriate parts of the Storyform and attribute them accordingly*:

- **Objective Story Symptom (Pursuit)**
  - Illustration of Pursuit: “Norton imagines relentless pursuit from unknown threats, causing widespread paranoia.”
  - Storytelling: “The Warden’s obsession with perceived threats causes disruptive paranoia within the prison.”
- **Objective Story Response (Avoid)**
  - Illustration of Avoid: “Prisoners respond by deliberately avoiding suspicion, creating mistrust and tension among themselves.”
  - Storytelling: “The prisoners’ efforts to avoid Norton’s paranoid suspicions inadvertently escalate tensions and conflict. Red steers the conversation away from him and his friends, suggesting other people the Warden should look into.”

*(_Hint: Most writer’s room sessions are a process of refining a Storyform, even if the participants are not aware of it. Great storytellers are natural identifiers of key Storyform aspects_)

## Enhanced Conflict Contribution by Sam Carter (explicit subtext added):

Here, we can begin to see Sam's contribution to the process, as well as how it affects Alex's original idea for the scene.

```
commit d4c3b2a1
Author: Sam Carter <sam.carter@example.com>
Date:   Thu Jul 17 12:33:28 2025 -0700

    feat(subtext): Added Objective Story Symptom & Response to Warden/Red scene

diff --git a/shawshank-redemption-ncp.json b/shawshank-redemption-ncp.json
index a6b8d3f..e1f7c9d 100644
--- a/shawshank-redemption-ncp.json
+++ b/shawshank-redemption-ncp.json
@@ -18,7 +18,19 @@
           "storybeats": [],
           "storypoints": [
+            {
+              "id": "888d6f01-56d2-4fbf-837a-d36d0b373bb3",
+              "context": "objective_story",
+              "appreciation": "symptom",
+              "method": "pursuit",                       
+              "illustration": "relentless suspicion of being chased",
+              "storytelling": "Warden Norton obsessively pursues the leak of his corrupt activities, suspecting inmates are secretly undermining him.",
+              "perspectives": [
+            {
+              "id": "edff489e-cd00-4520-b6ff-2f66dba28a2e"
+            },
+            {
+              "id": "04fc7292-abf6-4754-8d0f-d0fe66c5dd05",
+              "context": "objective_story",
+              "appreciation": "response",
+              "method": "avoid",                       
+              "illustration": "steering something",
+              "summary": "Prisoners actively steer suspicion away from themselves, creating a pervasive atmosphere of mistrust and caution.",
+              "storytelling": "Norton's escalating paranoia compels prisoners to cautiously cover their tracks and deflect suspicion onto others. Red carefully avoids implicating himself and his crew by calmly redirecting Norton's attention elsewhere, maintaining a subtle but constant effort to stay off the Warden's radar."
}
+              "perspectives": [
+            {
+              "id": "edff489e-cd00-4520-b6ff-2f66dba28a2e"
+            }
+          ]
         },
         "storytelling": {
           "overviews": [],
           "moments": [
             {
               "id": "fe8a8863-866d-411d-8d2d-8fb30876abfc",
@@ -25,7 +37,8 @@
               "summary": "Red is summoned late at night by Warden Norton, whose paranoia over a prison informant threatens to boil over.",
-            "synopsis": "Red meets with the visibly shaken Warden Norton, who interrogates him about potential leaks of his illicit activities. Red keeps quiet.",
+              "synopsis": "Red is confronted by a visibly agitated Warden Norton, convinced inmates are deliberately sabotaging his operations. Red skirts around the idea, refusing to answer any questions directly.",
               "storypoints": [
+                  {
+                    "storypoint_id": "888d6f01-56d2-4fbf-837a-d36d0b373bb3"
+                  },
+                  {
+                    "storypoint_id": "04fc7292-abf6-4754-8d0f-d0fe66c5dd05"
+                  }
								],
               "setting": "Warden Norton’s private office, late at night.",
               "timing": "Shortly after lights-out, during heightened prison tensions.",
               "audience_experiential_pov": "third-person limited"

```

Perfect. Here you can see the chain of different ideas in the room and how they contribute to the overall story development process. What’s great about this process is that, while it chronicles everyone’s contribution, it allows for everyone to participate.

Even Carl.

> “Hey, maybe Red panics and just blurts out something like, ‘It was me, Warden, I did it!’ You know, to distract him from looking too closely at Andy. I mean, Red wouldn’t normally do that, but hey—desperate times, right?”

Alright, so it's not the greatest idea—but you can see how it could still fit within the narrative structure.

```
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

Hopefully, it might inspire someone else to come up with better dialogue or something more in-character that Red would realistically do to prevent the Warden from learning more about Andy.

If nothing else, we know who to blame if it makes it to the final cut!

Regardless, with the NCP we now possess **a meaningful chronicle of the story development process**: including who exactly who came up with what idea, how those ideas were developed or discarded, and an insight into the process of writing a story. The NCP approach gives us unbelievable insight into the development process, both in terms of attribution and provenance.

⸻

## Attribution and Provenance

In traditional storytelling, determining who deserves credit for a creative contribution can often be confusing and stressful, especially in collaborative environments influenced by AI-generated content. With Narrative Context Protocol, these existential worries about authorship and copyright are significantly alleviated. It’s easy to clearly track every person’s contributions, ensuring everyone is meaningfully included in the authorship process without getting lost in the complexities of AI-driven storytelling. Through the Narrative Context Protocol, we leverage AI to seamlessly attribute each contribution precisely and transparently.
