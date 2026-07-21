# Master Implementation & Project Plan: Personal AI Engineering Portfolio
**Target Domain:** `johanneserfurt.github.io`  
**Target Audience:** Technical Recruiters, AI/ML Engineering Leads, Executive Hiring Managers, & Industrial Partners  
**Core Goal:** Communicate high-impact technical expertise (AI/ML Engineering, Multi-Agent Systems, Video Coding/Signal Processing) within a 30-second initial scan, while providing deep-dive proof of work for technical reviewers.

---

## 🤖 Instructions for AI Coding Agents
* **Execution Strategy:** Treat each checkbox (`- [ ]`) as an atomic, verifiable unit of work.
* **Code Standard:** TypeScript / Modern JavaScript (or Astro/React), strictly typed, modular UI components, clean semantic HTML5, utility-first CSS (Tailwind CSS), zero-framework runtime overhead where possible.
* **Data Sources:** All dynamic content (Experience, Projects, Publications, Languages) must be loaded from strongly-typed JSON/YAML data files or Astro Content Collections to maintain separation of concerns.
* **Strict Constraints:**
  * No exposed personally identifiable information (PII) such as exact residential address, birth date, or private phone numbers.
  * Web Accessibility: WCAG 2.1 AA compliance (proper ARIA attributes, color contrast >= 4.5:1, keyboard navigation).
  * Performance: 95+ score on Google Lighthouse (Performance, Accessibility, Best Practices, SEO).

---

## 🗺️ Project Execution Roadmap & Checklist

> **Execution rule:** All implementation work—including framework setup, styling, deployment, data modelling, UI work, and QA—must be represented by checkboxes in this plan. Do not complete project work outside the tracked tasks. After finishing a task, verify its acceptance criteria, mark it complete, and commit the change.

### Phase 0: Privacy, Security & Public Assets
- [x] **Task 0.1: PII Sanitization Audit**
  - [x] Audit repository and source text to ensure removal of precise street address, exact birth date, and private phone number.
  - [x] Establish professional contact endpoints: LinkedIn URL and GitHub profile;
    record the explicit decision to omit a public email alias.
- [x] **Task 0.2: ATS-Optimized CV Preparation**
  - [x] Create single-column, machine-readable PDF version of CV for standard Applicant Tracking Systems (ATS).
  - [x] Ensure plain-text extractability (no vector text converting to paths, no text embedded inside images).
  - [x] Explicitly include "Selected Publications" (PhD thesis, IEEE papers).
  - [x] Explicitly include Language Proficiencies (German: Native, English: Business Fluent, Russian: Very Good).
  - [x] Transparently include the 11/2022 – 10/2023 node ("Sabbatical: World Travel & Parental Leave").
  - [x] Place PDF asset into `public/assets/Dr_Johannes_Erfurt_CV.pdf`.

---


### Phase 1: Project Bootstrap

- [x] **Task 1.1: Initialize Astro Project**
  - [x] Initialize Astro in the existing repository.
  - [x] Select the minimal or empty Astro template.
  - [x] Enable strict TypeScript.
  - [x] Install project dependencies.
  - [x] Verify that `npm run dev` starts the local development server.
  - [x] Verify that `npm run build` creates a successful production build.
  - **Acceptance criteria:**
    - [x] Astro runs locally without errors.
    - [x] Strict TypeScript is enabled.
    - [x] The production build completes successfully.
  - **Suggested commit message:** `chore: initialize Astro project`

- [x] **Task 1.2: Configure Tailwind CSS**
  - [x] Install and configure Tailwind CSS using the current Astro-supported setup.
  - [x] Add a global stylesheet.
  - [x] Verify that Tailwind utility classes are applied correctly.
  - [x] Remove unnecessary default template styles and content.
  - **Acceptance criteria:**
    - [x] Tailwind classes render correctly in the browser.
    - [x] `npm run build` continues to pass.
    - [x] The project contains no unnecessary starter-template styling.
  - **Suggested commit message:** `chore: configure Tailwind CSS`

- [x] **Task 1.3: Configure Astro for GitHub Pages**
  - [x] Configure `astro.config.mjs` for static output.
  - [x] Set the production site URL to `https://johanneserfurt.github.io`.
  - [x] Confirm that no repository subpath is required for the personal GitHub Pages repository.
  - [x] Verify the generated static output locally.
  - **Acceptance criteria:**
    - [x] Astro generates a static production build.
    - [x] Internal URLs are correct for the root GitHub Pages domain.
    - [x] The site configuration contains the correct canonical site URL.
  - **Suggested commit message:** `chore: configure Astro for GitHub Pages`

- [ ] **Task 1.4: Configure GitHub Actions Deployment**
  - [x] Create `.github/workflows/deploy.yml`.
  - [x] Configure automatic deployment on pushes to `main`.
  - [x] Use the maintained Astro and GitHub Pages deployment actions.
  - [x] Enable manual workflow execution with `workflow_dispatch`.
  - [ ] In repository settings, select **GitHub Actions** as the GitHub Pages source.
  - [ ] Push the workflow and verify a successful deployment.
  - **Acceptance criteria:**
    - [ ] The GitHub Actions build completes successfully.
    - [ ] The deployment job completes successfully.
    - [ ] The website is accessible at `https://johanneserfurt.github.io`.
  - **Suggested commit message:** `ci: configure GitHub Pages deployment`

- [x] **Task 1.5: Create Initial Project Structure**
  - [x] Create `src/components/`.
  - [x] Create `src/data/`.
  - [x] Create `src/layouts/`.
  - [x] Create `src/content/`.
  - [x] Create `src/styles/`.
  - [x] Create `public/assets/`.
  - [x] Create `public/assets/images/`.
  - [x] Create `public/assets/diagrams/`.
  - [x] Add placeholder `.gitkeep` files where empty directories must be tracked.
  - **Acceptance criteria:**
    - [x] The folder structure supports components, typed data, layouts, content, styles, images, diagrams, and downloadable assets.
    - [x] Empty but required directories are tracked in Git.
  - **Suggested commit message:** `chore: create initial portfolio structure`

- [ ] **Task 1.6: Build and Deploy a Minimal Vertical Slice**
  - [x] Create a minimal global layout.
  - [x] Create a basic responsive header.
  - [x] Create a simple hero section with the final professional title.
  - [x] Add one placeholder or real featured-project card.
  - [x] Create a minimal footer with GitHub and LinkedIn links.
  - [x] Verify the page locally.
  - [ ] Deploy the minimal page through GitHub Actions.
  - **Acceptance criteria:**
    - [x] Header, hero, one project card, and footer render on desktop and mobile.
    - [x] The local build succeeds.
    - [ ] The deployed GitHub Pages site displays the same content.
  - **Suggested commit message:** `feat: add initial deployed portfolio shell`

---

### Phase 2: Information Architecture & Data Schemas

- [x] **Task 2.1: Data Model & Schema Definitions**
  - [x] Create `src/data/schema.ts` defining TypeScript interfaces for all data collections.

```typescript
export interface LanguageProficiency {
  language: string;
  level: string; // e.g., "Native / Muttersprache", "Business Fluent", "Very Good"
  code: string;  // e.g., "de", "en", "ru"
}

export interface TimelineEntry {
  id: string;
  period: string; // e.g., "11/2022 – 10/2023"
  startDate: string; // "2022-11"
  endDate: string;   // "2023-10"
  role: string;
  organization: string;
  type: 'employment' | 'education' | 'upskilling' | 'sabbatical';
  summary: string;
  keyHighlights: string[];
  techStack?: string[];
  isGap?: boolean;
}

export interface ProjectEntry {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Multi-Agent' | 'Video Coding & Compression' | 'Open Source';
  description: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface PublicationEntry {
  id: string;
  year: number;
  title: string;
  venue: string;
  authors: string;
  doi?: string;
  paperUrl?: string;
  type: 'PhD Thesis' | 'Journal' | 'Conference';
}
```

- [x] **Task 2.2: Population of Structured Data Files**
  - [x] Create `src/data/languages.json`:
    - German: Native (Muttersprache)
    - English: Business Fluent (Verhandlungssicher)
    - Russian: Very Good (Sehr gut)
  - [x] Create `src/data/experience.json`:
    - Scansonic (AI & Image Processing Developer, 05/2024 – Present)
    - Upskilling Phase (DeepLearning.AI, velpTEC - Multi-Agent / MLOps, 11/2023 – 04/2024)
    - **Sabbatical Node** (World Travel & Parental Leave / Elternzeit & Weltreise, 11/2022 – 10/2023)
    - Fraunhofer HHI (Researcher & Student Worker in Video Coding, H.265/HEVC, H.266/VVC)
    - TU Berlin (Teaching Assistant / Studentische Hilfskraft)
    - PhD Promotion (Filtertechniken in der Videokodierung, Grade: "sehr gut")
  - [x] Create `src/data/projects.json`:
    - MindGrow Stories (Cloud-Native Multi-Agent Children's Book Generation Engine)
    - Wizarding Story Engine (Open-Source Multi-Agent Narrative System with LangGraph)
    - Autonomous Research Agent Framework is intentionally omitted until approved
      facts and public evidence are supplied.
  - [x] Create `src/data/publications.json` including PhD Dissertation and key HHI signal filtering papers.

---

### Phase 3: UI/UX Component Specifications

- [x] **Task 3.1: 30-Second Recruiter Summary Card (`HeroSummary.tsx` / `.astro`)**
  - [x] Position above the fold on homepage.
  - [x] Display quick-scan badge stats: **PhD in Video Coding**, **AI & Image Processing Specialist**, **LangGraph / Multi-Agent Architect**.
  - [x] Add direct CTA button: "Download ATS CV (PDF)" linking to sanitized PDF asset.
  - [x] Add secondary CTA: "Explore Projects & Code".

- [x] **Task 3.2: Experience Timeline Component (`InteractiveTimeline.tsx`)**
  - [x] Render chronological list/tree with clear visual distinct badges for each entry type (Industry, Research, Education, Sabbatical).
  - [x] Ensure 11/2022 – 10/2023 Sabbatical node renders cleanly with a dedicated icon (e.g., Globe / Family) and positive concise description ("World Travel & Parental Leave - Intercultural perspective & family focus").
  - [x] Expandable details for technical stack (e.g., Python, PyTorch, C++, LangChain, LangGraph, H.266/VVC).

- [ ] **Task 3.3: Multi-Agent & AI Engineering Showcase (`ProjectGrid.tsx`)**
  - [ ] Display interactive cards for MindGrow Stories and Wizarding Story Engine.
  - [ ] Show architecture diagrams / workflow badges (LangGraph, FastAPI, Vector DB, Cloud Native).
  - [ ] Highlight quantifiable impact / technical achievements.

- [ ] **Task 3.4: Languages & Core Competencies Matrix (`SkillsMatrix.tsx`)**
  - [ ] Explicitly render Language Proficiencies block:
    * 🇩🇪 German: Native Speaker
    * 🇬🇧 English: Business Fluent
    * 🇷🇺 Russian: Very Good
  - [ ] Render Core Technical Competencies: Multi-Agent Orchestration, MLOps, Video Compression (HEVC/VVC), Deep Learning, C++/Python.

- [ ] **Task 3.5: Research & Publications Section (`PublicationsList.tsx`)**
  - [ ] Categorized view of PhD thesis and peer-reviewed papers.
  - [ ] Direct links to DOIs / PDFs / IEEE Xplore where available.

---

### Phase 4: Core Layout, Styling & Performance Implementation

- [ ] **Task 4.1: Layout & Global Navigation**
  - [ ] Create `Header.astro` or `Header.tsx` with smooth-scroll navigation links: `#about`, `#experience`, `#projects`, `#publications`, and `#languages`.
  - [ ] Create `Footer.astro` or `Footer.tsx` with copyright, GitHub, LinkedIn, and Impressum / privacy links.
  - [ ] Implement responsive mobile navigation.
  - [ ] Add visible keyboard-focus states.
  - [ ] Add a skip-to-content link.
  - **Acceptance criteria:**
    - [ ] Navigation works with mouse, touch, and keyboard.
    - [ ] Header and footer are responsive.
    - [ ] All internal navigation links point to valid section IDs.
  - **Suggested commit message:** `feat: implement global navigation and footer`

- [ ] **Task 4.2: Theme and Global Design Tokens**
  - [ ] Configure the agreed light and dark color palettes.
  - [ ] Define global typography, spacing, border radius, and shadow tokens.
  - [ ] Add a light/dark theme switcher with persisted user preference.
  - [ ] Respect the operating system's preferred color scheme on first visit.
  - **Acceptance criteria:**
    - [ ] Light and dark themes meet WCAG 2.1 AA contrast requirements.
    - [ ] Theme selection persists across reloads.
    - [ ] No flash of an incorrect theme is visible during normal loading.
  - **Suggested commit message:** `feat: add portfolio theme system`

- [ ] **Task 4.3: Static Generation & Performance Optimization**
  - [ ] Confirm all portfolio routes are statically generated.
  - [ ] Optimize images as WebP or AVIF where appropriate.
  - [ ] Set explicit image width and height to prevent layout shift.
  - [ ] Inline or efficiently load small SVG icons.
  - [ ] Minimize client-side JavaScript and hydrate only interactive components.
  - [ ] Configure sensible font loading and fallbacks.
  - **Acceptance criteria:**
    - [ ] Production build generates all expected static pages.
    - [ ] No avoidable cumulative layout shift is present.
    - [ ] Non-interactive sections ship without unnecessary client-side JavaScript.
  - **Suggested commit message:** `perf: optimize static portfolio output`

---

### Phase 5: Automated QA & Release Validation

- [ ] **Task 5.1: Configure Automated Quality Checks**
  - [ ] Add Lighthouse CI or an equivalent automated performance audit.
  - [ ] Add HTML validation with `html-validate` or an equivalent tool.
  - [ ] Add automated broken-link checking for internal and external links.
  - [ ] Add TypeScript and build checks to CI.
  - [ ] Configure the CI workflow to fail on critical validation errors.
  - **Acceptance criteria:**
    - [ ] Type checking and production build run automatically.
    - [ ] Invalid HTML and broken internal links fail CI.
    - [ ] Lighthouse reports are generated for the deployed or preview build.
  - **Suggested commit message:** `ci: add automated portfolio quality checks`

- [ ] **Task 5.2: Validate GitHub Pages Release**
  - [ ] Verify that pushes to `main` trigger a successful deployment.
  - [ ] Verify the canonical URL and page metadata on the live site.
  - [ ] Check all routes directly through the deployed GitHub Pages domain.
  - [ ] Confirm that downloadable assets, including the sanitized CV, work in production.
  - [ ] Confirm that custom 404 behavior works on GitHub Pages.
  - **Acceptance criteria:**
    - [ ] The live site is accessible at `https://johanneserfurt.github.io`.
    - [ ] All public routes and assets work without local-development assumptions.
    - [ ] The deployment and QA workflows are green on `main`.
  - **Suggested commit message:** `chore: validate production portfolio release`

---


## 🎯 Definition of Done (Verification Checklist)

- [ ] **30-Second Scan Test Passed:** A visitor can identify Dr. Johannes Erfurt's core identity (PhD in Video Coding + AI/Multi-Agent Specialist) within 30 seconds.
- [ ] **ATS CV Download Functional:** Clicking "Download ATS CV" downloads `Dr_Johannes_Erfurt_CV.pdf` containing publications, languages, and zero exposed PII.
- [ ] **Timeline Gap Explicit:** Sabbatical (11/2022 – 10/2023) is visually clear and positively framed.
- [ ] **Languages Displayed:** German, English, and Russian proficiencies are prominently listed.
- [ ] **Mobile & Desktop Responsive:** Perfectly readable across viewport widths 320px to 3840px.
- [ ] **Deployed on GitHub Pages:** Accessible live at `https://johanneserfurt.github.io`.
