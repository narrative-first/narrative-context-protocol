# NCP Validation Guide

Use this guide to validate Narrative Context Protocol JSON payloads against the canonical schema.

## First-Time Adopter Checklist

If you discovered NCP and want to validate your own payload quickly, follow this exact sequence:

1. Clone this repository.
2. Run:
```bash
npm install
```
3. Validate your file:
```bash
npm run validate:file -- /path/to/your-ncp.json
```
4. Treat any `FAIL` output as blocking.
5. Re-run until you get `PASS`.

## Local Setup

```bash
npm install
```

## Validate This Repository's Fixtures

```bash
npm run validate:schema
```

This validates:

- `/examples/example-story.json`
- `/examples/anora.json`
- `/examples/the-shawshank-redemption.json`
- Expected failures in `/examples/invalid/*.json`

## Validate Your Own NCP File(s)

```bash
npm run validate:file -- /absolute/or/relative/path/to/your-ncp.json
```

You can pass multiple files:

```bash
npm run validate:file -- ./my-story.json ./their-story.json
```

The command returns non-zero on failure, which makes it CI-friendly.

## Using NCP Validation In Your Own Repository

If you do not want to run validation from this repository, copy these files into your own project:

- `/schema/ncp-schema.json`
- `/tests/validate-file.js`

Then install Ajv and run:

```bash
npm install ajv
node tests/validate-file.js /path/to/your-ncp.json
```

For continuous enforcement, add the GitHub Actions workflow below.

## Timestamp Rule (`created_at`)

NCP requires `story.created_at` to be an ISO-8601 UTC timestamp in this form:

- `YYYY-MM-DDTHH:MM:SSZ`
- Example: `2025-12-01T12:34:56Z`

## GitHub Actions (Reference)

If another repository stores NCP files, use this workflow pattern:

```yaml
name: Validate NCP

on:
  pull_request:
  push:

jobs:
  validate-ncp:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run validate:file -- path/to/your-ncp.json
```

## Adoption Recommendations

- Pin the schema version (`schema_version`) in your payloads.
- Validate NCP during pull requests and before release builds.
- Keep canonical keys even when using custom mapping namespaces.
- Treat `/examples/legacy/` as migration reference only, not canonical interchange fixtures.
