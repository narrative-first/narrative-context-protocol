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
- structural validators and synthetic examples; and
- frozen-legacy and semantic-boundary notices.

## Intentionally excluded

- prospective licensing terms;
- contributor-agreement terms;
- trademark and compatibility-mark policy;
- certification-authority policy;
- Dramatica semantic rules, relationships, algorithms, valid combinations, generation, completion, resolution, diagnosis, or implementation details.

Existing releases, repository history, and license notices are unchanged.

## Review questions

1. Can a Core-only implementation exchange narrative context without knowing Dramatica?
2. Are profile and extension payloads cleanly isolated from Core?
3. Does the Dramatica profile preserve an existing representation without exposing or recreating semantic logic?
4. Are schema and semantic validation results impossible to confuse?
5. Can OMC embed or reference NCP without duplicating production data?
6. Are version and migration boundaries explicit enough for early implementers?

Report feedback in a GitHub issue and identify the affected layer, namespace, and candidate component version.
