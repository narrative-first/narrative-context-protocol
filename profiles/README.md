# NCP Profiles

A profile defines how information produced by a named narrative system is represented for exchange in NCP. Profiles are declared and versioned independently from Core.

A public profile may specify stable field names, identifiers, basic data types, and transport conventions needed to preserve existing information. It must not silently change Core or another profile.

The foundational NCP profile is the [`dramatica:` Storyform Profile](dramatica/transport-guidance.md). NCP originated as an interchange path for Dramatica Storyforms, and this profile remains the reference example of how a narrative system participates in NCP.

The foundational profile is not a Core requirement. Implementations may exchange Core-only documents or declare other independently governed profiles and extensions.

Third parties may publish profiles under separate namespaces. A mapping between narrative approaches remains a mapping; it does not modify either source system.
