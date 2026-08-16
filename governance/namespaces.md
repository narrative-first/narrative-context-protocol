# Namespace Governance for 3.0.0-rc.1

Namespaces prevent one narrative system or workflow from silently changing another.

## Candidate reservations

- `ncp:` identifies NCP Core vocabulary maintained through the NCP change process.
- `dramatica:` identifies the Dramatica Storyform Profile maintained through its profile-specific review process.
- `ncp-interactive:` and `ncp-production:` are reserved candidate extension namespaces. They remain outside `dramatica:`.

Third parties may create separately named and governed profiles or extensions, including mappings such as `hero-journey:` or `save-the-cat:`. A mapping remains a mapping and must not redefine fields in another namespace.

## Change requirements

Every accepted change to a maintained namespace identifies:

- the affected namespace and version;
- whether the change is backward compatible;
- migration or deprecation behavior;
- synthetic positive and negative examples; and
- structural validation coverage when a schema is available.

Consumers should preserve unknown declared namespaces and payloads where practical rather than reinterpreting or deleting them.

This technical policy does not establish ownership, licensing, trademark, compatibility-mark, or certification-authority terms. Those topics remain [pending review](../PENDING_REVIEW.md).
