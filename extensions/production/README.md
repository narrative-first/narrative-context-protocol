# `ncp-production:` Extension

Status: reserved namespace without a published schema or conformance requirements.

Production-specific narrative references that are not already represented by an authoritative production standard belong in a separately versioned extension rather than in NCP Core or the Dramatica Storyform Profile.

Production objects, breakdowns, schedules, tasks, assets, participants, and workflow state should generally remain in a production model such as MovieLabs OMC. NCP should reference those records where needed instead of duplicating them.

NCP 3.0.0-rc.1 reserves `ncp-production:` as an example extension namespace. An implementation must not claim conformance to an `ncp-production:` schema until a separately versioned schema and conformance policy are published.
