# JohannesErfurt.github.io

Personal portfolio of Dr.-Ing. Johannes Erfurt — AI systems, computer vision,
and generative AI.

## Project execution

- Product brief: [`portfolio_project_plan.md`](portfolio_project_plan.md)
- Coding-agent rules: [`AGENTS.md`](AGENTS.md)
- Repeatable loop prompt: [`LOOP_PROMPT.md`](LOOP_PROMPT.md)
- Coding-agent backlog: [`docs/agent-tasks.md`](docs/agent-tasks.md)
- Human-in-the-loop backlog: [`docs/human-tasks.md`](docs/human-tasks.md)
- Public-content approval handoff: [`docs/content-approvals.md`](docs/content-approvals.md)
- Current state and handoff: [`docs/project-status.md`](docs/project-status.md)

## Local development and verification

```powershell
npm ci
npm run dev
```

Run the complete release-quality pipeline with:

```powershell
npm run quality
```

The pipeline checks Astro/TypeScript diagnostics, deterministic content tests,
the production build, generated HTML, internal links, accessibility, and
Lighthouse scores. `npm run validate` is the documented standalone command for
building and validating generated HTML and internal links. Lighthouse CI requires
a locally installed Chromium/Chrome browser and enforces scores of at least 95
for Performance, Accessibility, Best Practices, and SEO.
