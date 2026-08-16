# Conformance

Conformance claims must name the layer being tested.

## NCP Core schema conformance

A document conforms to an NCP Core JSON schema version when its serialization passes the published structural schema for that version. This answers whether the JSON is well-formed, required Core fields exist, identifiers use required formats, and declarations match the selected schema.

NCP schema validation confirms that a document is structurally well-formed. It does not determine whether the document represents a complete, coherent, or valid Dramatica Storyform.

## Profile conformance

A profile may define additional transport requirements. The Dramatica profile schema checks the published story, narrative, Subtext, Storytelling, and Moment structure; required fields and nesting; basic types; enums; references; and sequence bounds. Profile schema conformance remains structural unless a separately identified semantic validator reports a semantic result.

## Attestation conformance

Core validates an attestation's transport shape only. It does not verify its signature, endorse its issuer, interpret its status values, or establish semantic correctness.

For a Dramatica Storyform, semantic validation or certification must come from a licensed Dramatica service or engine. Access and integration inquiries route through [Dramatica.com](https://dramatica.com/) or **support@dramatica.com**.

## Required labels

Tools and reports must label structural results as “NCP schema validation” or name the exact profile transport schema tested. The unqualified phrase “valid Storyform” must not be used for a schema-only result.
