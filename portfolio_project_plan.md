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

### Phase 0: Privacy, Security & Public Assets
- [ ] **Task 0.1: PII Sanitization Audit**
  - [ ] Audit repository and source text to ensure removal of precise street address, exact birth date, and private phone number.
  - [ ] Establish professional contact endpoints: public email alias, LinkedIn URL, GitHub profile.
- [ ] **Task 0.2: ATS-Optimized CV Preparation**
  - [ ] Create single-column, machine-readable PDF version of CV for standard Applicant Tracking Systems (ATS).
  - [ ] Ensure plain-text extractability (no vector text converting to paths, no text embedded inside images).
  - [ ] Explicitly include "Selected Publications" (PhD thesis, IEEE papers).
  - [ ] Explicitly include Language Proficiencies (German: Native, English: Business Fluent, Russian: Very Good).
  - [ ] Transparently include the 11/2022 – 10/2023 node ("Sabbatical: World Travel & Parental Leave").
  - [ ] Place PDF asset into `public/assets/Dr_Johannes_Erfurt_CV.pdf`.

---

### Phase 1: Information Architecture & Data Schemas

- [ ] **Task 1.1: Data Model & Schema Definitions**
  - [ ] Create `src/data/schema.ts` defining TypeScript interfaces for all data collections.

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

- [ ] **Task 1.2: Population of Structured Data Files**
  - [ ] Create `src/data/languages.json`:
    - German: Native (Muttersprache)
    - English: Business Fluent (Verhandlungssicher)
    - Russian: Very Good (Sehr gut)
  - [ ] Create `src/data/experience.json`:
    - Scansonic (AI & Image Processing Developer, 05/2024 – Present)
    - Upskilling Phase (DeepLearning.AI, velpTEC - Multi-Agent / MLOps, 11/2023 – 04/2024)
    - **Sabbatical Node** (World Travel & Parental Leave / Elternzeit & Weltreise, 11/2022 – 10/2023)
    - Fraunhofer HHI (Researcher & Student Worker in Video Coding, H.265/HEVC, H.266/VVC)
    - TU Berlin (Teaching Assistant / Studentische Hilfskraft)
    - PhD Promotion (Filtertechniken in der Videokodierung, Grade: "sehr gut")
  - [ ] Create `src/data/projects.json`:
    - MindGrow Stories (Cloud-Native Multi-Agent Children's Book Generation Engine)
    - Wizarding Story Engine (Open-Source Multi-Agent Narrative System with LangGraph)
    - Autonomous Research Agent Framework
  - [ ] Create `src/data/publications.json` including PhD Dissertation and key HHI signal filtering papers.

---

### Phase 2: UI/UX Component Specifications

- [ ] **Task 2.1: 30-Second Recruiter Summary Card (`HeroSummary.tsx` / `.astro`)**
  - [ ] Position above the fold on homepage.
  - [ ] Display quick-scan badge stats: **PhD in Video Coding**, **AI & Image Processing Specialist**, **LangGraph / Multi-Agent Architect**.
  - [ ] Add direct CTA button: "Download ATS CV (PDF)" linking to sanitized PDF asset.
  - [ ] Add secondary CTA: "Explore Projects & Code".

- [ ] **Task 2.2: Experience Timeline Component (`InteractiveTimeline.tsx`)**
  - [ ] Render chronological list/tree with clear visual distinct badges for each entry type (Industry, Research, Education, Sabbatical).
  - [ ] Ensure 11/2022 – 10/2023 Sabbatical node renders cleanly with a dedicated icon (e.g., Globe / Family) and positive concise description ("World Travel & Parental Leave - Intercultural perspective & family focus").
  - [ ] Expandable details for technical stack (e.g., Python, PyTorch, C++, LangChain, LangGraph, H.266/VVC).

- [ ] **Task 2.3: Multi-Agent & AI Engineering Showcase (`ProjectGrid.tsx`)**
  - [ ] Display interactive cards for MindGrow Stories and Wizarding Story Engine.
  - [ ] Show architecture diagrams / workflow badges (LangGraph, FastAPI, Vector DB, Cloud Native).
  - [ ] Highlight quantifiable impact / technical achievements.

- [ ] **Task 2.4: Languages & Core Competencies Matrix (`SkillsMatrix.tsx`)**
  - [ ] Explicitly render Language Proficiencies block:
    * 🇩🇪 German: Native Speaker
    * 🇬🇧 English: Business Fluent
    * 🇷🇺 Russian: Very Good
  - [ ] Render Core Technical Competencies: Multi-Agent Orchestration, MLOps, Video Compression (HEVC/VVC), Deep Learning, C++/Python.

- [ ] **Task 2.5: Research & Publications Section (`PublicationsList.tsx`)**
  - [ ] Categorized view of PhD thesis and peer-reviewed papers.
  - [ ] Direct links to DOIs / PDFs / IEEE Xplore where available.

---

### Phase 3: Project Structure & Implementation Setup

- [ ] **Task 3.1: Repository Initialization**
  - [ ] Setup repository with modern framework (Astro or Next.js static export).
  - [ ] Configure Tailwind CSS with dark/light mode palette optimized for readability:
    - Primary text: `#0f172a` (Light) / `#f8fafc` (Dark)
    - Accent brand color: Deep Indigo (`#4f46e5`) / Electric Violet (`#818cf8`)
    - Surface colors: Neutral slate `#f8fafc` / dark slate `#0f172a`
  - [ ] Configure TypeScript `tsconfig.json` with strict type checking.

- [ ] **Task 3.2: Layout & Global Navigation**
  - [ ] Create `Header.tsx` with smooth scroll navigation links: `#about`, `#experience`, `#projects`, `#publications`, `#languages`.
  - [ ] Add Theme Switcher (Light / Dark mode toggle).
  - [ ] Create `Footer.tsx` with copyright, GitHub, LinkedIn, and Impressum / Privacy disclosures.

- [ ] **Task 3.3: Static Generation & Performance Optimization**
  - [ ] Configure SSG (Static Site Generation) for fast GitHub Pages hosting.
  - [ ] Optimize images with webp formats and explicit width/height to prevent Layout Shift (CLS = 0).
  - [ ] Inline critical SVG icons (Lucide icons).

---

### Phase 4: CI/CD Pipeline & GitHub Pages Deployment

- [ ] **Task 4.1: GitHub Actions Setup**
  - [ ] Create `.github/workflows/deploy.yml` for automatic build & deploy on push to `main`.

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build static site
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Task 4.2: Automated QA & Validation**
  - [ ] Run Lighthouse CLI in CI to enforce >= 95 score across all metrics.
  - [ ] Validate HTML structure with `html-validate`.
  - [ ] Test broken links across all project and publication outbound URLs.

---

## 🎯 Definition of Done (Verification Checklist)

- [ ] **30-Second Scan Test Passed:** A visitor can identify Dr. Johannes Erfurt's core identity (PhD in Video Coding + AI/Multi-Agent Specialist) within 30 seconds.
- [ ] **ATS CV Download Functional:** Clicking "Download ATS CV" downloads `Dr_Johannes_Erfurt_CV.pdf` containing publications, languages, and zero exposed PII.
- [ ] **Timeline Gap Explicit:** Sabbatical (11/2022 – 10/2023) is visually clear and positively framed.
- [ ] **Languages Displayed:** German, English, and Russian proficiencies are prominently listed.
- [ ] **Mobile & Desktop Responsive:** Perfectly readable across viewport widths 320px to 3840px.
- [ ] **Deployed on GitHub Pages:** Accessible live at `https://johanneserfurt.github.io`.
