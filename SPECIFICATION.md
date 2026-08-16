# Narrative Context Protocol 3.0.0-rc.1

Status: public technical review candidate.

Narrative Context Protocol is an application-independent interchange standard for transporting narrative context, authorial intent, provenance, and structured story information across tools and workflows.

This document defines the layered architecture. The normative Core transport details are in [`core/specification.md`](core/specification.md) and [`core/ncp-core-schema.json`](core/ncp-core-schema.json).

## 1. Architectural layers

### 1.1 Dramatica Semantic Model

The implementation-independent semantic system containing Dramatica concepts, terminology, relationships, classifications, constraints, rules, algorithms, valid structural combinations, and Storyform architecture.

The Dramatica Semantic Model is not defined by NCP Core or the public Dramatica transport profile. Questions of ownership, licensing, official status, and certification authority are outside this technical release candidate and remain pending review.

### 1.2 Dramatica Storyform

A particular configuration or instance of the Dramatica Semantic Model representing the structural argument of a story. A Storyform contains creative story information supplied by its author or studio and may identify the semantic-model version used to produce it.

### 1.3 Dramatica Storyform Profile

An NCP profile identifying the fields, identifiers, data types, and transport conventions required to preserve and exchange an existing Dramatica Storyform representation.

The public profile treats Storyform fields as opaque transport data. It does not publish rules for generating, resolving, diagnosing, completing, or semantically validating a Storyform. See [`profiles/dramatica/`](profiles/dramatica/).

### 1.4 NCP Core

The narrative-system-neutral envelope for document and story identifiers, authorship, provenance, versions, profile and extension declarations, Storytelling Moments, contribution history, external references, opaque attestations, and payload transport.

NCP Core does not assume that every narrative uses Dramatica. See [`core/specification.md`](core/specification.md).

### 1.5 NCP serialization

A machine-readable representation of NCP data. JSON is the first serialization. JSON is not the protocol, a Dramatica Storyform, or the Dramatica Semantic Model.

### 1.6 Profiles and extensions

Profiles carry information produced by a named narrative system. Extensions carry additional application, workflow, or domain information. Both are separately declared and versioned; neither silently changes Core or another namespace.

Illustrative namespaces include:

- `dramatica:` for the Dramatica Storyform Profile;
- `ncp-interactive:` for interactive narrative and game-state data;
- `ncp-production:` for production-specific narrative references not already represented by a production standard;
- `hero-journey:` for a separately governed Hero's Journey mapping; and
- `save-the-cat:` for a separately governed Save the Cat mapping.

Mappings remain mappings. They do not modify the source narrative system.

### 1.7 Bindings

A binding describes how an NCP document is embedded in or referenced from another standard or workflow. The first candidate binding is the [NCP-OMC Binding](bindings/omc/omc-binding.md).

## 2. Transport dependency

For a document carrying an existing Dramatica Storyform, the conceptual dependency is:

```text
Dramatica Semantic Model
    -> Dramatica Storyform
    -> Dramatica Storyform Profile
    -> NCP document
    -> consuming workflow or binding
```

The arrows describe production and transport dependencies. A downstream envelope or binding does not acquire or redefine the upstream semantics.

## 3. Core processing model

An NCP 3 processor:

1. validates the Core envelope against the selected Core schema;
2. reads declared profile and extension namespaces and versions;
3. preserves payloads whose semantics it does not understand;
4. applies a profile or extension schema only when that schema is available;
5. labels structural schema results separately from semantic results; and
6. records migration or transformation activity in provenance when it changes the document representation.

A Core processor must not infer Dramatica structure from prose, normalize profile values according to unpublished rules, or present schema success as semantic validation.

## 4. Validation and attestations

NCP schema validation establishes structural conformance only. A profile may identify a separate semantic validator, but that validator is not part of Core.

Core can carry opaque attestations. An attestation identifies its kind, subject hash, issuer, time, and any profile or semantic-model version to which it applies. Core validates only the attestation's transport shape; it does not endorse the issuer, verify semantic correctness, or assign meaning to a profile-specific status record.

See [`VALIDATION.md`](VALIDATION.md) and [`governance/conformance.md`](governance/conformance.md).

## 5. Compatibility

NCP 1.x and 2.x used a combined schema. Those artifacts remain in [`schema/`](schema/) for compatibility and release-history preservation.

Migration to NCP 3 creates a Core envelope and moves narrative-system-specific information into declared profile payloads. Migration must preserve supplied values and provenance without inferring, normalizing, completing, or semantically reinterpreting them.

See [`governance/versioning.md`](governance/versioning.md).

## 6. Candidate governance

NCP 3 namespaces are explicit so independent systems can coexist without semantic drift. The technical reservation and change process is described in [`governance/namespaces.md`](governance/namespaces.md).

This candidate does not establish new legal terms. The excluded topics are listed in [`PENDING_REVIEW.md`](PENDING_REVIEW.md).
