# Migrating NCP 2.x Documents to 3.0.0-rc.1

NCP 2.x documents use a combined envelope containing both interchange and narrative-system-specific fields. NCP 3 separates those layers.

## Migration sequence

1. Create a new Core document with `ncp_version` set to `3.0.0-rc.1`.
2. Preserve the source document and story identifiers, title, authorship, timestamps, and external references.
3. Declare each narrative-system profile and workflow extension used by the source document.
4. Copy the complete supplied legacy `story` object into `payloads["dramatica:"].storyform` without renaming, deriving, normalizing, or completing it.
5. Copy story identity fields into the Core `story` envelope and preserve Story-level Moments inside the Dramatica profile representation. The Core and profile story IDs should match.
6. Record the source NCP version, migration time, tool identity, and target component versions in `document.provenance`.
7. Run NCP Core and selected profile transport schemas separately.

## Example envelope

```json
{
    "ncp_version": "3.0.0-rc.1",
    "document": {
        "id": "migrated_document_001",
        "created_at": "2026-08-16T12:00:00Z",
        "provenance": [
            {
                "at": "2026-08-16T12:00:00Z",
                "action": "migrated from NCP 2.0.0"
            }
        ]
    },
    "story": {
        "id": "preserved_story_id"
    },
    "profiles": [
        {
            "namespace": "dramatica:",
            "profile_version": "1.0.0-rc.1",
            "schema": "https://narrativecontextprotocol.com/profiles/dramatica/1.0.0-rc.1/profile-schema.json"
        }
    ],
    "payloads": {
        "dramatica:": {
            "namespace": "dramatica:",
            "profile_version": "1.0.0-rc.1",
            "dsm_version": "source-declared-version",
            "storyform": {
                "id": "preserved_story_id",
                "title": "Preserved title",
                "logline": "Preserved logline",
                "created_at": "2026-08-16T12:00:00Z",
                "moments": [],
                "narratives": []
            }
        }
    }
}
```

The abbreviated example shows envelope placement. A real migration copies the complete legacy `story` object—including settings, ideation, every narrative's Subtext and Storytelling, and Story-level Moments—without loss. Empty `narratives` passes structural validation but does not represent a complete or semantically valid Dramatica Storyform.

## Semantic migration

If a migration requires DSM-version conversion, value inference, conflict resolution, or completion, stop the structural migration and use an external Dramatica semantic system. Do not implement those rules in NCP tooling.
