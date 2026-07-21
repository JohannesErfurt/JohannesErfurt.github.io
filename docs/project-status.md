# Project status

Updated: 2026-07-21

## Current state

- Phase: foundation
- Last completed agent task: A-003 — Configure root-domain static output
- Next ready agent task: A-004 — Define and validate portfolio data schemas
- Release state: not ready
- Source plan: `portfolio_project_plan.md` (contains pre-existing user changes)

## Human blockers

- H-001, H-002, H-003, and H-004 are marked approved in
  `docs/content-approvals.md`; their dependent engineering work is unblocked.
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
