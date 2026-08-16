# Migrating NCP 2.x Documents to 3.0.0-rc.1

NCP 2.x documents use a combined envelope containing both interchange and narrative-system-specific fields. NCP 3 separates those layers.

## Migration sequence

1. Create a new Core document with `ncp_version` set to `3.0.0-rc.1`.
2. Preserve the source document and story identifiers, title, authorship, timestamps, and external references.
3. Declare each narrative-system profile and workflow extension used by the source document.
4. Copy supplied narrative-system fields into the matching namespaced payload without renaming, deriving, normalizing, or completing them.
5. Convert story-level moments and contribution history only when the mapping is direct and lossless; otherwise preserve the source reference and record the unresolved migration note in provenance.
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
                "id": "preserved_storyform_id",
                "fields": {}
            }
        }
    }
}
```

An empty `fields` object in this example is not a complete Storyform. It illustrates envelope placement only.

## Semantic migration

If a migration requires DSM-version conversion, value inference, conflict resolution, or completion, stop the structural migration and use an external Dramatica semantic system. Do not implement those rules in NCP tooling.
