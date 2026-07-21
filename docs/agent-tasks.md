# Coding-agent backlog

Status uses Markdown checkboxes. Tasks are executed in numeric order unless an
earlier task is blocked and a later task has no dependency on it. Each task is
intended to produce one focused commit.

## Foundation

- [x] **A-001 — Scaffold Astro and the repository structure**
  - Depends on: none
  - Implements: plan 1.1 and 1.5
  - Work: initialize a minimal Astro project in place; enable strict TypeScript;
    add `src/components`, `src/data`, `src/layouts`, `src/content`, `src/styles`,
    `public/assets/images`, and `public/assets/diagrams`; add standard scripts.
  - Success criteria:
    - `package.json`, lockfile, `astro.config.mjs`, and strict `tsconfig.json` are tracked.
    - All specified directories exist and empty required directories use `.gitkeep`.
    - `npm ci` succeeds from the lockfile.
    - `npm run check` and `npm run build` exit with code 0.
  - Commit: `chore: initialize Astro portfolio`

- [x] **A-002 — Add Tailwind and global style foundations**
  - Depends on: A-001
  - Implements: plan 1.2
  - Work: install the Astro-supported Tailwind integration; load one global
    stylesheet; remove starter styling; add a visible utility-class smoke test.
  - Success criteria:
    - Tailwind is configured through the current supported Astro integration.
    - The homepage uses at least one compiled utility class verified in `dist/`.
    - No unused starter page or starter stylesheet remains.
    - `npm run check` and `npm run build` exit with code 0.
  - Commit: `chore: configure Tailwind CSS`

- [x] **A-003 — Configure root-domain static output**
  - Depends on: A-001
  - Implements: plan 1.3
  - Work: configure Astro for static generation at the personal Pages root.
  - Success criteria:
    - `astro.config.mjs` declares `site: 'https://johanneserfurt.github.io'`.
    - No repository base path is configured.
    - `npm run build` exits with code 0 and produces `dist/index.html`.
    - Generated canonical/internal URLs do not contain a repository subpath.
  - Commit: `chore: configure GitHub Pages URL`

## Content model

- [ ] **A-004 — Define and validate portfolio data schemas**
  - Depends on: A-001
  - Implements: plan 2.1
  - Work: define strict types for languages, timeline entries, projects, and
    publications; add build-time validation for imported data.
  - Success criteria:
    - `src/data/schema.ts` exports all four documented domain types.
    - Invalid category/type values and missing required fields fail type-checking
      or build-time validation.
    - A fixture or automated test demonstrates at least one rejected invalid record.
    - `npm run check` and the relevant test command exit with code 0.
  - Commit: `feat: add typed portfolio data schemas`

- [ ] **A-005 — Populate approved structured content**
  - Depends on: A-004, H-001, H-002, H-003, H-004
  - Implements: plan 2.2
  - Work: create typed language, experience, project, and publication data from
    human-approved facts; preserve the sabbatical as an explicit timeline entry.
  - Success criteria:
    - Four data collections exist and validate against A-004 schemas.
    - Every approved experience, language, project, and publication appears once.
    - The 2022-11 through 2023-10 entry has type `sabbatical` and `isGap: true`.
    - Every external URL is HTTPS and matches human-provided evidence.
    - `npm run check`, tests, and `npm run build` exit with code 0.
  - Commit: `content: add verified portfolio data`

## Visible vertical slice and components

- [ ] **A-006 — Build the semantic page shell**
  - Depends on: A-002, A-003, H-001
  - Implements: plan 1.6 and part of 4.1
  - Work: add the base layout, header, main landmark, initial hero, one project
    card, and footer using approved title and public profile links.
  - Success criteria:
    - The production homepage contains one `header`, `main`, and `footer`.
    - Header, hero, project card, and footer render at 320px and 1440px without
      horizontal scrolling or overlapping content.
    - GitHub and LinkedIn links equal the approved H-001 values.
    - Keyboard focus reaches every interactive element in logical order.
    - `npm run check` and `npm run build` exit with code 0.
  - Commit: `feat: add portfolio vertical slice`

- [ ] **A-007 — Implement the recruiter hero**
  - Depends on: A-005, A-006, H-005
  - Implements: plan 3.1
  - Work: create the above-the-fold identity summary, proof badges, CV CTA, and
    projects CTA without unsupported marketing claims.
  - Success criteria:
    - At 1366x768, name, approved professional title, three expertise signals,
      and both CTAs are visible without scrolling.
    - The project CTA targets an existing `#projects` element.
    - The CV CTA targets `/assets/Dr_Johannes_Erfurt_CV.pdf` and the file exists.
    - CTA labels have accessible names and keyboard-visible focus.
    - Automated checks and production build pass.
  - Commit: `feat: add recruiter summary hero`

- [ ] **A-008 — Implement the experience timeline**
  - Depends on: A-005, A-006
  - Implements: plan 3.2
  - Work: render typed experience data with distinct entry types and accessible
    expandable technical detail.
  - Success criteria:
    - Every approved timeline record renders exactly once in chronological order.
    - Industry, research, education/upskilling, and sabbatical are distinguishable
      without relying on color alone.
    - The sabbatical dates and approved description are visible when collapsed.
    - Expand/collapse works with keyboard and exposes state to assistive technology.
    - With JavaScript unavailable, all essential dates, roles, and summaries remain readable.
    - Automated checks and production build pass.
  - Commit: `feat: add accessible experience timeline`

- [ ] **A-009 — Implement the project showcase**
  - Depends on: A-005, A-006
  - Implements: plan 3.3
  - Work: render featured and other projects from data with architecture/technology
    labels, approved impact, and optional code/demo links.
  - Success criteria:
    - Every approved project renders exactly once and featured projects are first.
    - Missing optional URLs produce no empty links or buttons.
    - All displayed metrics and claims match H-003 evidence exactly.
    - Cards work from 320px through 1440px with no clipped content.
    - Automated checks and production build pass.
  - Commit: `feat: add project showcase`

- [ ] **A-010 — Implement skills, languages, and publications**
  - Depends on: A-005, A-006
  - Implements: plan 3.4 and 3.5
  - Work: render approved language levels, core competencies, and categorized
    publications from structured data.
  - Success criteria:
    - German, English, and Russian labels and levels match the approved data.
    - Publication grouping is programmatic and each item appears once.
    - DOI/paper links are omitted when absent and are accessible when present.
    - Flag icons, if used, are decorative; language names remain text.
    - Automated checks and production build pass.
  - Commit: `feat: add skills and publications sections`

## Interaction, polish, and delivery

- [ ] **A-011 — Complete navigation and the theme system**
  - Depends on: A-006, A-008, A-009, A-010
  - Implements: plan 4.1 and 4.2
  - Work: finish responsive section navigation, skip link, design tokens, and a
    persistent light/dark theme that honors initial system preference.
  - Success criteria:
    - All nav targets exist: `about`, `experience`, `projects`, `publications`, `languages`.
    - The mobile menu and theme control work with mouse, touch, and keyboard.
    - Theme persists across reloads; first visit follows `prefers-color-scheme`.
    - The pre-render theme script prevents an observable wrong-theme flash.
    - Automated contrast checks find no AA failure for normal text in either theme.
    - Automated checks and production build pass.
  - Commit: `feat: complete navigation and theme system`

- [ ] **A-012 — Add metadata, privacy pages, and 404 handling**
  - Depends on: A-006, H-006
  - Implements: footer disclosure and part of plan 5.2
  - Work: add approved metadata, canonical URL, social preview metadata, legal/privacy
    content or links, robots/sitemap behavior, and a static GitHub Pages 404 page.
  - Success criteria:
    - Homepage output has one approved title, description, canonical URL, and social metadata set.
    - Footer legal/privacy links resolve to approved content and no PII beyond H-006 is exposed.
    - `dist/404.html` exists and provides a working root-home link.
    - Sitemap/robots output, if configured, references the canonical HTTPS domain.
    - Automated checks and production build pass.
  - Commit: `feat: add metadata and public policy pages`

- [ ] **A-013 — Optimize static output and assets**
  - Depends on: A-007 through A-012
  - Implements: plan 4.3
  - Work: optimize images, dimensions, fonts, CSS, and hydration while respecting
    reduced motion.
  - Success criteria:
    - Raster photos are WebP/AVIF unless documented evidence favors another format.
    - Every content image has intrinsic dimensions and meaningful alt text or empty
      alt text when decorative.
    - No component is hydrated without documented interactive need.
    - Production audit reports CLS <= 0.1 and no missing image dimensions.
    - Automated checks and production build pass.
  - Commit: `perf: optimize portfolio assets and output`

- [ ] **A-014 — Add GitHub Pages deployment workflow**
  - Depends on: A-003
  - Implements: repository-owned part of plan 1.4
  - Work: add a least-privilege Pages workflow for `main` and manual dispatch,
    using maintained official actions and the generated `dist` artifact.
  - Success criteria:
    - Workflow triggers on pushes to `main` and `workflow_dispatch`.
    - Permissions are limited to `contents: read`, `pages: write`, and `id-token: write`.
    - Workflow installs from the lockfile, builds, uploads `dist`, and deploys it.
    - Workflow YAML parses successfully and action versions are pinned to explicit major versions.
    - Local production build passes.
  - Commit: `ci: configure GitHub Pages deployment`

- [ ] **A-015 — Add automated quality gates**
  - Depends on: A-013
  - Implements: plan 5.1
  - Work: add CI/local checks for types, build, valid HTML, internal links,
    accessibility, and Lighthouse; document deterministic commands.
  - Success criteria:
    - `npm test` runs all deterministic non-browser unit/content checks.
    - One documented command validates generated HTML and internal links.
    - Lighthouse CI asserts >=95 in all four requested categories on the built site.
    - CI fails for a type error, invalid HTML, broken internal link, critical
      accessibility violation, or score below the configured threshold.
    - All quality commands pass on the current production build.
  - Commit: `ci: add portfolio quality gates`

- [ ] **A-016 — Perform the release-candidate repository audit**
  - Depends on: A-014, A-015, H-005, H-006
  - Implements: local portion of plan 5.2 and Definition of Done
  - Work: run all checks, audit public files for sensitive data, verify the CV and
    links, and document the candidate commit for human live validation.
  - Success criteria:
    - Clean install, type check, tests, build, HTML/link validation, accessibility,
      and Lighthouse all pass with recorded command output/summaries.
    - Repository scan finds no street address, exact birth date, private phone,
      secret, or credential in tracked/public files.
    - PDF text extraction succeeds and includes approved publications, languages,
      and sabbatical wording.
    - `docs/project-status.md` records the audited commit hash and identifies H-007
      and H-008 as the remaining release gates.
  - Commit: `chore: audit portfolio release candidate`
