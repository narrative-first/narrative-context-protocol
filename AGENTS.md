# Repository Guidelines

This repository is the open Narrative Context Protocol interchange standard for transporting narrative context and authorial intent across mediums. It is not a Dramatica implementation or standalone app. Treat NCP Core, profiles, extensions, serializations, and bindings as separately governed layers.

## Project Structure & Module Organization
- NCP 3 Core lives in `core/ncp-core-schema.json`. The files in `schema/` are frozen legacy combined artifacts; keep their JSON/YAML twins in sync only for an approved compatibility correction.
- Examples used for validation are in `examples/` (e.g., `example-story.json`, `example-mapping.json`).
- Formal reference docs sit in `SPECIFICATION.md` and `docs/`, with terminology notes under `docs/terminology/`.
- Lightweight automated checks reside in `tests/`; update or add scripts there when extending coverage.

## Build, Test, and Development Commands
- Install runtime deps locally (Node 18+ recommended): `npm install ajv` (or `pnpm add ajv`) before running tests.
- Validate legacy, Core, profile, and binding fixtures with `node tests/validate-schema.js`.
- When adding a new validation script, prefer Node-based runners kept in `tests/` and commit them alongside any new fixtures.

## Coding Style & Naming Conventions
- JSON/YAML: 4-space indentation, no tabs; keep keys in snake_case to align with current schema fields.
- File naming: use hyphenated lowercase for documents (`example-story.json`) and numeric prefixes for ordered docs (`docs/terminology/01.perspectives.md`).
- Do not add Dramatica relationships, rules, algorithms, mappings, or diagnostics. Keep profiles and extensions outside Core and respect namespace governance.
- Write concise descriptions inside schema entries; avoid schema-breaking renames unless documented in `HISTORY.md`.

## Testing Guidelines
- Add a representative synthetic sample under the matching `examples/` subdirectory whenever you extend an open schema; wire it into a validation script in `tests/`.
- For breaking or optional fields, include both positive and negative cases to guard intent.
- Capture validation output in your PR description as “NCP schema validation passed.” Never imply that structural validation certifies a Dramatica Storyform.

## Commit & Pull Request Guidelines
- Follow the repo’s short, action-first commit style (e.g., `fix: ...`, `updates: ...`). Keep one concern per commit.
- PRs should summarize the change scope, link any relevant sections of `SPECIFICATION.md`, and note validation results. Attach updated examples or screenshots of docs when helpful.
- Call out backward-incompatible schema changes clearly and update `HISTORY.md` with a brief rationale.
