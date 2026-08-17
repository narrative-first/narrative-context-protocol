# NCP 3 Release Status

NCP 3.0.0-rc.1 is a public technical release candidate. It is available for implementation, interoperability testing, and feedback before the final NCP 3.0.0 release.

## What the candidate establishes

The release candidate defines:

- narrative-system-neutral NCP Core;
- separately versioned profiles, extensions, serializations, and bindings;
- the foundational but optional Dramatica Storyform Profile;
- structural schema validation distinct from narrative-system semantic validation;
- migration guidance for earlier combined NCP documents; and
- the NCP-OMC Binding for embedded and referenced interchange.

The [release-candidate overview](RELEASE_CANDIDATE.md) explains the architecture and review goals. The [versioning policy](governance/versioning.md) lists the candidate component versions.

## What may change before 3.0.0

Release-candidate components may change in response to implementation experience and public review. Any change must identify its compatibility impact and update the affected schemas, examples, tests, and migration guidance.

Existing NCP 1.x and 2.x releases remain available through their published tags and artifacts. A release-candidate change does not alter those historical releases.

## Policies outside the protocol

NCP does not define service contracts, SDK agreements, enterprise deployment terms, trademark permissions, compatibility marks, or certification-mark permissions. Those matters are governed separately from the protocol and its structural schemas. See [Licensing and Commercial Access](governance/licensing.md) for the current public boundary.

## Provide feedback

Open a [GitHub issue](https://github.com/narrative-first/narrative-context-protocol/issues) and identify the affected layer, namespace, component version, and interoperability impact.
