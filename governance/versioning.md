# Versioning and Migration

NCP releases use semantic version tags. Each release identifies the Core, profile, extension, serialization, and binding versions it contains or references.

## Published compatibility lines

| Release | Architecture status | Compatibility rule |
| --- | --- | --- |
| `v1.2.1` | Legacy combined schema | Preserved in Git history and release artifacts; consumers use the schema shipped with that release. |
| `v1.3.0` | Legacy combined schema | Combined-schema additions remain documented in that release's history and schema. |
| `v2.0.0` | Legacy combined schema | Frozen combined surface; no new Dramatica semantics are added to this line during restructuring. |
| `3.0.0-rc.1` | Layered release candidate | Narrative-neutral NCP Core plus separately versioned profiles, extensions, JSON serialization, and bindings for public technical review. |

## Candidate component versions

- NCP Core: `3.0.0-rc.1`
- Dramatica Storyform Profile: `1.0.0-rc.1`
- NCP-OMC Binding: `1.0.0-rc.1`
- JSON serialization: `3.0.0-rc.1`
- `ncp-interactive:` and `ncp-production:`: namespace placeholders without schemas

## Migration rules

- Do not relabel a legacy combined document as Core-only.
- Create a Core envelope and move system-specific information into declared profile or extension payloads.
- Preserve source identifiers, authorship, provenance, timestamps, supplied profile values, and unknown namespaces.
- Do not infer, normalize, complete, or semantically reinterpret Dramatica fields during migration.
- Record the source release, target Core version, component versions, migration timestamp, and migrating tool identity in provenance.
- Treat schema success after migration as structural only.
- Retain an existing signed record only when its subject representation and declared versions still match after migration.

See the [2.x to 3.0 migration guide](migration-2-to-3.md).

## Release-candidate compatibility

RC components may change before `3.0.0`. Every change after RC1 must document its compatibility impact and update affected examples and tests. Existing 1.x and 2.x tags and artifacts remain unchanged.

The release candidate uses the public boundary documented in [Licensing and Commercial Access](licensing.md). Service agreements, SDK terms, trademark permissions, compatibility marks, and certification-mark permissions remain governed separately from protocol versioning.
