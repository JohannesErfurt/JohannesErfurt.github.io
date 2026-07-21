# Project status

Updated: 2026-07-21

## Current state

- Phase: content and vertical slice
- Last completed agent task: A-005 — Populate approved structured content
- Next ready agent task: A-006 — Build the semantic page shell
- Release state: not ready
- Source plan: `portfolio_project_plan.md` (contains pre-existing user changes)

## Human blockers

- H-001 through H-004 are approved. H-002 dates and claims are complete, H-003
  uses approved qualitative impacts and omits the unsupported third project,
  and H-004 metadata was verified against official records. A-005 is unblocked.
- A-006 implementation is present as uncommitted work, but its required 320px and
  1440px browser verification is blocked because the in-app browser runtime fails
  before initialization (`failed to write kernel assets`, OS error 3).
- A-007/A-016 require H-005, which remains pending because the supplied CV is
  not sanitized or single-column.
- H-006 is labelled approved but still contains unresolved legal/privacy and
  social-image placeholders. Treat A-012/A-016 as blocked until those choices
  are resolved.
- Live release acceptance requires H-007 and H-008.

## Verification baseline

- `npm ci` — passed on 2026-07-21 (279 packages, 0 vulnerabilities reported).
- `npm run check` — passed on 2026-07-21 (4 files, 0 errors/warnings/hints).
- `npm run build` — passed on 2026-07-21 (static `dist/index.html`, 1 page).
- `npm test` — not available yet; A-004/A-015 introduce relevant test coverage.

## Iteration log

Add newest entries first using this format:

```text
YYYY-MM-DD — A-NNN — complete|blocked
Result: ...
Evidence: command -> result
Commit: hash or not created
Blockers: H-NNN or none
Next: A-NNN
```

2026-07-21 — A-005 — complete
Result: Added validated JSON collections for 3 languages, 11 timeline entries,
2 approved projects, and 5 verified publications. Unsupported project content
and an unavailable MindGrow URL are omitted rather than fabricated.
Evidence: `npm test` -> 7 passed; `npm run check` -> 0 diagnostics;
`npm run build` -> passed; HTTPS and sabbatical invariants -> passed.
Commit: `content: add verified portfolio data` (this iteration)
Blockers: none
Next: A-006

2026-07-21 — A-014 — complete
Result: Added the maintained official Astro/GitHub Pages build and deployment
workflow for pushes to `main` and manual dispatch, with least-privilege permissions.
Evidence: YAML parser -> passed; workflow semantic assertions -> passed;
`npm run build` -> passed; actions use explicit major versions.
Commit: `ci: configure GitHub Pages deployment` (this iteration)
Blockers: none for A-014; live activation remains human-owned H-007
Next: none; all remaining tasks are blocked

2026-07-21 — A-006 — blocked
Result: Implemented the semantic responsive shell locally, but did not mark it
complete or commit it because required visual viewport verification could not run.
Evidence: `npm run check` -> 0 diagnostics; `npm test` -> 4 passed;
`npm run build` -> passed; in-app browser initialization -> OS error 3.
Commit: not created
Blockers: browser runtime unavailable
Next: A-014 (independent; completed afterward)

2026-07-21 — A-004 — complete
Result: Added strict domain interfaces and native runtime validators for all
four portfolio collections, plus a deterministic schema test suite.
Evidence: `npm test` -> 4 passed; `npm run check` -> 0 diagnostics;
`npm run build` -> passed.
Commit: `feat: add typed portfolio data schemas` (this iteration)
Blockers: none for A-004; A-005 is blocked by H-002/H-003/H-004 placeholders
Next: A-006 (independent of A-005)

2026-07-21 — A-003 — complete
Result: Configured explicit static output and the canonical personal GitHub
Pages root domain without a repository base path.
Evidence: `npm run check` -> 0 diagnostics; `npm run build` -> generated
`dist/index.html`; generated-output scan -> no `/JohannesErfurt.github.io/` subpath.
Commit: `chore: configure GitHub Pages URL` (this iteration)
Blockers: none
Next: A-004

2026-07-21 — A-002 — complete
Result: Added Tailwind CSS 4 through the preferred official Vite plugin, loaded
a single global stylesheet, and replaced the unstyled placeholder with a small
utility-class smoke test.
Evidence: `npm run check` -> 0 diagnostics; `npm run build` -> passed;
generated CSS contains `.text-3xl` and is linked from `dist/index.html`.
Commit: `chore: configure Tailwind CSS` (this iteration)
Blockers: none
Next: A-003

2026-07-21 — A-001 — complete
Result: Initialized a minimal Astro 7 project with strict TypeScript, standard
scripts, a static placeholder page, a lockfile, and the required tracked folder
structure.
Evidence: `npm ci` -> passed; `npm run check` -> 0 diagnostics; `npm run build`
-> generated `dist/index.html` successfully; required directory audit -> passed.
Commit: `chore: initialize Astro portfolio` (this iteration)
Blockers: none
Next: A-002

## Decisions

- 2026-07-21: Use separate agent and human backlogs so an autonomous loop cannot
  silently invent personal content or perform account-level release actions.
- 2026-07-21: A loop invocation continues through all ready agent tasks without
  waiting for another prompt. Each task still requires its own verification
  evidence and scoped local commit before the loop advances.
