# NCP JSON Serialization 3.0.0-rc.1

JSON is the first machine-readable serialization of NCP. JSON is only the serialization: it is not the Narrative Context Protocol, a Dramatica Storyform, or the Dramatica Semantic Model.

The normative candidate Core JSON Schema is [`../../core/ncp-core-schema.json`](../../core/ncp-core-schema.json). The separately versioned public Dramatica JSON profile is [`../../profiles/dramatica/profile-schema.json`](../../profiles/dramatica/profile-schema.json). Other profile and extension schemas are versioned separately. A future serialization may represent the same protocol model without changing Core semantics or the meaning of a declared profile.

JSON property names, namespaces, and values must be preserved exactly unless an applicable versioned migration explicitly says otherwise. Reformatting JSON may change a byte-oriented hash or signature even when the parsed data is equivalent.
