# Coding Agent Operating Agreement

This file applies to the entire repository. `portfolio_project_plan.md` is the
product brief; `docs/agent-tasks.md` is the executable engineering backlog.

## Objective

Build and maintain a static, accessible, high-performance portfolio for
`https://johanneserfurt.github.io`. The first screen must communicate Johannes'
AI engineering, multi-agent systems, and video-coding expertise quickly, while
the rest of the site provides verifiable evidence.

## Sources of truth

Use these files in this order when instructions conflict:

1. The current user request.
2. This file.
3. `docs/project-status.md` for current state and blockers.
4. `docs/agent-tasks.md` for implementation tasks and success criteria.
5. `docs/human-tasks.md` for facts, approvals, and external actions.
6. `docs/content-approvals.md` for content explicitly approved for publication.
7. `portfolio_project_plan.md` for product scope and background.

Never invent biography, employment details, metrics, publication metadata,
contact details, URLs, testimonials, or legal text. Use an explicit placeholder
or mark the engineering task blocked by the relevant human task.

## Continuous loop run

1. Read this file, `docs/project-status.md`, both task lists,
   `docs/content-approvals.md`, and relevant code.
2. Inspect `git status` and preserve unrelated or user-authored changes.
3. Select the first unchecked agent task whose dependencies are complete.
4. If no task is ready, record the exact human blockers in the status file. Stop
   only when every agent task is complete or all remaining tasks are blocked.
   Do not bypass a blocker with fabricated content.
5. Implement only the selected task plus the smallest necessary supporting
   changes. Do not bundle later backlog items.
6. Run every verification named in that task. Fix failures caused by the task.
7. Mark the task complete only when every success criterion has evidence.
8. Update `docs/project-status.md` with completed work, verification evidence,
   remaining blockers, and the next ready task.
9. Update the corresponding checkbox in `portfolio_project_plan.md` only when
   its complete scope is satisfied, not when a smaller agent task finishes.
10. Commit the coherent task using the suggested commit message. Do not
    push, change repository settings, publish, or contact third parties unless
    the user explicitly requests it.
11. Return to step 1 and continue with the next ready unchecked task without
    waiting for another prompt. A blocked task may be skipped only when a later
    task is genuinely independent.
12. When the stop condition in step 4 is reached, report all outcomes, checks,
    commits, files changed, and remaining human blockers from the full run.

## Engineering rules

- Use Astro static output, strict TypeScript, semantic HTML, and Tailwind CSS.
- Prefer `.astro` components. Add client-side JavaScript only for behavior that
  cannot be achieved accessibly with HTML and CSS.
- Keep biography, experience, projects, publications, and languages in typed
  data files, separate from presentation components.
- Meet WCAG 2.1 AA: keyboard access, visible focus, meaningful landmarks,
  reduced-motion support, alt text, and text contrast of at least 4.5:1.
- Target Lighthouse scores of at least 95 for Performance, Accessibility, Best
  Practices, and SEO on the production build.
- Do not expose a street address, exact birth date, private phone number, secret,
  token, or non-public email address.
- Do not weaken tests, quality thresholds, or types to make checks pass.
- Never edit generated output such as `dist/` or dependency directories.
- Do not add a dependency when a small native implementation is clearer.
- Keep each commit scoped to one agent task even though a continuous run may
  create multiple commits. Never commit secrets or unapproved PII.

## Baseline verification

Once the scripts exist, run these before completing an implementation task:

```powershell
npm run check
npm run build
npm test
```

If a script does not exist yet, record it as not available rather than claiming
it passed. Tasks that introduce checks must add them to the baseline.

## Completion report format

- Task: task ID and title
- Result: concise outcome
- Evidence: commands and relevant results
- Changed: paths changed
- Blockers: human task IDs or `none`
- Next: next ready agent task
