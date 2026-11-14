# NCP Extensions

Extensions carry application, workflow, or domain data that is not part of NCP Core or a narrative-system profile. Every extension has a separate namespace, version, schema or transport contract, and change history.

Candidate extension areas include [`ncp-interactive:`](interactive/README.md) and [`ncp-production:`](production/README.md). Their presence does not make interactive or production concepts part of the Dramatica Storyform Profile.

The optional [`ncp-script:` extension](script/README.md) carries source-anchored screenplay storytelling independently of a structural profile.

The [`ncp-script-content:` extension](script-content/README.md), also called NCP Scripts 2, is the default for screenplay content exchange: ordered scenes and typed writing blocks with stable links. The source-oriented `ncp-script:` extension remains available for extraction evidence and page-level provenance.
