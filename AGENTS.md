# Repository Guidelines

This repository is the open-source Dramatica storyform (Narrative Context Protocol) intended for capturing and preserving authorial intent across mediums. It is not a standalone app—treat it as the reference schema and examples for anyone building tools on top of NCP.

## Project Structure & Module Organization
- Core schema lives in `schema/ncp-schema.json` with a YAML twin in `schema/ncp-schema.yaml`. Keep both in sync when making changes.
- Examples used for validation are in `examples/` (e.g., `example-story.json`, `example-mapping.json`).
- Formal reference docs sit in `SPECIFICATION.md` and `docs/`, with terminology notes under `docs/terminology/`.
- Lightweight automated checks reside in `tests/`; update or add scripts there when extending coverage.

## Build, Test, and Development Commands
- Install runtime deps locally (Node 18+ recommended): `npm install ajv` (or `pnpm add ajv`) before running tests.
- Validate examples against the schema: ensure `tests/validate-schema.js` points to `schema/ncp-schema.json`, then run `node tests/validate-schema.js`.
- When adding a new validation script, prefer Node-based runners kept in `tests/` and commit them alongside any new fixtures.

## Coding Style & Naming Conventions
- JSON/YAML: 4-space indentation, no tabs; keep keys in snake_case to align with current schema fields.
- File naming: use hyphenated lowercase for documents (`example-story.json`) and numeric prefixes for ordered docs (`docs/terminology/01.perspectives.md`).
- Schema updates should mirror between JSON and YAML; regenerate both before committing.
- Write concise descriptions inside schema entries; avoid schema-breaking renames unless documented in `HISTORY.md`.

## Testing Guidelines
- Add a representative sample under `examples/` whenever you extend the schema; wire it into a validation script in `tests/`.
- For breaking or optional fields, include both positive and negative cases to guard intent.
- Capture validation output in your PR description (e.g., `node tests/validate-schema.js` → “Narrative JSON is valid!”).

## Commit & Pull Request Guidelines
- Follow the repo’s short, action-first commit style (e.g., `fix: ...`, `updates: ...`). Keep one concern per commit.
- PRs should summarize the change scope, link any relevant sections of `SPECIFICATION.md`, and note validation results. Attach updated examples or screenshots of docs when helpful.
- Call out backward-incompatible schema changes clearly and update `HISTORY.md` with a brief rationale.
