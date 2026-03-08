# Gemini (Project Constitution)

## 1. Data Schemas
*(To be defined during Phase 1: Blueprint)*

**Input Shape (`raw_input`):**
```json
// TBD
```

**Output Shape (`payload`):**
```json
// TBD
```

## 2. Behavioral Rules
- Prioritize reliability over speed.
- Never guess at business logic.
- Follow B.L.A.S.T. protocol strictly.
- Data-First: Code only begins once "Payload" schema is confirmed.
- Self-Annealing Loop: Analyze, Patch, Test, Update Architecture.
- Local vs Global: Use `.tmp/` for intermediates, cloud destination for final Payload.

## 3. Architectural Invariants
- **Layer 1:** Architecture (`architecture/`) - Technical SOPs in Markdown.
- **Layer 2:** Navigation - Decision making and routing.
- **Layer 3:** Tools (`tools/`) - Deterministic scripts. Atomic and testable.
- **Environment Context:** Variables/secrets in `.env`.
