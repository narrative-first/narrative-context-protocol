# NCP 3.0.0-rc.1 Review Guide

This candidate is intended for public interoperability review before a final NCP 3.0.0 release.

## Included for review

- narrative-neutral NCP Core schema and specification;
- independent profile and extension architecture;
- Dramatica Storyform Profile 1.0.0-rc.1 as an opaque transport contract;
- generic validation-attestation transport;
- JSON serialization guidance;
- NCP-OMC Binding 1.0.0-rc.1;
- namespace, conformance, versioning, and migration mechanics;
- the intended open-Core, foundational-profile, and licensed-Dramatica commercial boundary;
- access routes for Dramatica MCP, validation, certification, SDK, studio, and private deployment;
- structural validators and synthetic examples; and
- frozen-legacy and semantic-boundary notices.

## Intentionally excluded

- contributor-agreement terms;
- final service, SDK, profile, trademark, compatibility-mark, and certification terms;
- Dramatica semantic rules, relationships, algorithms, valid combinations, generation, completion, resolution, diagnosis, or implementation details.

The current license preamble is updated to reflect the layered interoperability architecture while preserving the MIT grant text. Existing releases and repository history are unchanged.

## Review questions

1. Can a Core-only implementation exchange narrative context without knowing Dramatica?
2. Are profile and extension payloads cleanly isolated from Core?
3. Does the Dramatica profile preserve an existing representation without exposing or recreating semantic logic?
4. Are schema and semantic validation results impossible to confuse?
5. Can OMC embed or reference NCP without duplicating production data?
6. Are version and migration boundaries explicit enough for early implementers?
7. Is it clear that Dramatica is NCP's foundational profile without being required by Core?
8. Is the route from open NCP transport to licensed Dramatica validation and certification clear?

Report feedback in a GitHub issue and identify the affected layer, namespace, and candidate component version.
