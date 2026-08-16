# NCP Profiles

A profile defines how information produced by a named narrative system is represented for exchange in NCP. Profiles are declared and versioned independently from Core.

A public profile may specify stable field names, identifiers, basic data types, and transport conventions needed to preserve existing information. It must not silently change Core or another profile.

The first candidate profile is the [`dramatica:` Storyform Profile](dramatica/transport-guidance.md).

Third parties may publish profiles under separate namespaces. A mapping between narrative approaches remains a mapping; it does not modify either source system.
