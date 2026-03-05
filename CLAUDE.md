# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # TypeScript compile + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

No test framework is configured yet.

## Architecture

This is a React 19 + Vite app (TypeScript) for tracking Phasmophobia ghost evidence during gameplay.

**Data layer** (`src/data/ghosts.ts`):
- `EVIDENCE_TYPES` — const array of the 7 evidence types; `EvidenceType` is derived from it
- `Ghost` interface — `name`, `evidence` (exactly 3 `EvidenceType`s), `traits` (string array)
- `GHOSTS` — array of all 24 ghosts with their evidence combos and behavior descriptions

**State** (`src/App.tsx`):
- `evidenceState` — maps each `EvidenceType` to `'unselected' | 'selected' | 'strikethrough'` (note: the current code has a mismatch — `handleToggleEvidence` references `selectedEvidence` state that doesn't exist; this is in-progress work)

**Components**:
- `EvidenceSelector` — renders clickable buttons for each evidence type; takes `selectedEvidence: EvidenceType[]` and `onToggleEvidence` callback as props

The intended flow: player selects/eliminates evidence → app filters `GHOSTS` to show only matching ghosts.
