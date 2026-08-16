# NCP and MovieLabs OMC Integration

The candidate integration guidance is maintained in the [NCP-OMC Binding](../bindings/omc/omc-binding.md).

OMC 2.8 Custom Data Blocks can embed NCP data or reference a resolvable external NCP document. Production objects remain in OMC; NCP carries portable narrative context and references those objects when necessary.

The binding transports declared profile data without redefining its semantics. Applications needing profile-specific creation, resolution, diagnosis, completion, or semantic validation use a system outside NCP Core.
