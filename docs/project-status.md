# Project status

Updated: 2026-07-24

## Current state

- Phase: release-candidate validation
- Last completed agent task: A-016 — Perform the release-candidate repository audit
- Next ready agent task: none
- Release state: deployed release candidate verified; awaiting H-008
- Source plan: `portfolio_project_plan.md` (contains pre-existing user changes)

## Human blockers

- H-001 through H-004 are approved. H-002 dates and claims are complete, H-003
  uses approved qualitative impacts, includes the approved MindGrow Stories live
  demo, and omits the unsupported third project; H-004 metadata was verified
  against official records. A-005 is unblocked.
- A-006 is complete. Browser verification at 320px and 1440px found no horizontal
  overflow or overlap; all seven links are focusable in logical DOM order and
  expose a visible focus outline.
- H-005 is complete. Johannes approved the updated three-page, visually designed
  CV for public release on 2026-07-22. It is not claimed to be ATS-optimized;
  its extracted language section contains German, English, and Russian, plus the
  four approved hobbies.
- H-006 is complete. Johannes explicitly chose to omit an Impressum at his own
  risk, approved the limited factual privacy notice without private contact
  details, approved the social title/description, and omitted the social image.
- H-009 is complete. Johannes supplied and explicitly approved a cropped profile
  photo for public website use; only a metadata-stripped 800x800 WebP derivative
  is published.
- The four hobbies in the expanded About section are approved for public use:
  custom AI-agent tinkering, electronic music and dancing, cultural exchange and
  traveling, and table tennis.
- The updated About narrative and heading are approved for public use. They
  describe a technology stack spanning mathematical foundations through agentic
  AI systems, with an emphasis on robust, scalable, and maintainable solutions.
- H-007 is complete. GitHub Actions run `30115868410` passed quality, build,
  and deployment for commit `7b576e8`; the reported environment URL is
  `https://johanneserfurt.github.io/`. Unauthenticated checks returned HTTP 200
  for every public route and the CV, and the custom missing route returned the
  expected 404 page.
- Final live acceptance requires H-008.

## Verification baseline

- `npm ci` — passed on 2026-07-21 (584 packages installed; npm reported 5
  development-toolchain vulnerabilities: 2 low, 2 moderate, 1 high).
- `npm run check` — passed on 2026-07-21 (21 files, 0 errors/warnings/hints).
- `npm run build` — passed on 2026-07-21 (3 static pages).
- `npm test` — passed on 2026-07-21 (7 tests).
- `npm run validate` — passed on 2026-07-21 (HTML and internal links valid).
- `npm run lighthouse` — passed on 2026-07-21 (home scored 99/100/100/100 and
  privacy scored 100/100/100/100 for Performance/Accessibility/Best Practices/SEO).

## Iteration log

2026-08-12 — CNN publication image crop-safe revision — complete
Result: Enlarged the title to “CNN-based IN-Loop Filter” and repositioned the
title and diagram lower on a true 16:9 canvas so the Conference thumbnail does
not clip the title.
Evidence: revised 1672x941 WebP inspected at the publication-card aspect ratio;
title and diagram are fully inside the canvas; `npm run check`, `npm test`, and
`npm run build` passed.
Commit: `assets: optimize CNN publication image crop` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-12 — WPSNR publication image — complete
Result: Replaced the WPSNR conference-paper concept artwork with a
publication-style scientific illustration showing compressed input, uniform
and perceptual weighting paths, saliency maps, and quality comparisons.
Evidence: generated 1536x1024 source inspected; public derivative is a
157,124-byte WebP with no embedded text, logos, watermarks, or private data;
`npm run check`, `npm test`, and `npm run build` passed.
Commit: `assets: add WPSNR publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-12 — CNN publication image title revision — complete
Result: Added the exact title “CNN-based In-Loop Filter” to the conference
publication illustration while preserving the CNN/filtering diagram.
Evidence: revised 1536x1024 source inspected; public derivative is a
122,538-byte WebP; title is centered in the top margin and does not overlap the
diagram.
Commit: `assets: title CNN publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-12 — CNN adaptive-loop-filter publication image — complete
Result: Replaced the conference-paper concept artwork with a publication-style
scientific illustration showing blocky input, CNN feature layers and
classification, adaptive filter banks, and restored output.
Evidence: generated 1536x1024 source inspected; public derivative is a
113,870-byte WebP with no embedded text, logos, watermarks, or private data;
`npm run check`, `npm test`, and `npm run build` passed.
Commit: `assets: add CNN adaptive-loop-filter publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-12 — Development dependency vulnerability remediation — complete
Result: Applied npm's non-forced audit updates for brace-expansion, fast-uri,
ip-address, js-yaml, nanoid, and postcss. Added npm overrides for patched
tmp@0.2.7 and uuid@11.1.1 because the latest @lhci/cli release still pins
vulnerable ranges for those transitive packages.
Evidence: `npm ci` -> 582 packages installed, 0 vulnerabilities; `npm audit`
and `npm audit --omit=dev` -> 0 vulnerabilities; `npm ls tmp uuid` -> patched
versions; `npm run quality` -> all checks, tests, build, link validation, and
Lighthouse assertions passed.
Commit: `security: remediate development dependency vulnerabilities` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-11 — About illustration side-by-side layout — complete
Result: Moved the About illustration into a smaller right-hand column beside
the “A little about me” text, with a single-column stack retained for mobile
screens.
Evidence: shared About component uses a responsive two-column grid at the
medium breakpoint; `npm run check`, `npm test`, and `npm run build` passed.
Commit: `layout: place about illustration beside text` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-08-11 — About-page interest illustration replacement — complete
Result: Replaced the About-page illustration with a restrained editorial visual
that connects machine learning, computer vision, generative AI, MLOps, and
autonomous agents. Updated the alternative text to describe the new visual.
Evidence: generated 1536x1024 source inspected; public derivative is an
89,530-byte WebP with no embedded text, logos, watermarks, or private data;
visual inspection passed.
Commit: `assets: refresh about-page interest illustration` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — Publication card prompt removal — complete
Result: Removed the repeated "View publication details" overlay from every
publication image while retaining each card's button semantics, accessible
label, dialog association, keyboard behavior, and hover treatment.
Evidence: shared publication component contains no visible prompt text; all
five image buttons retain descriptive `aria-label` and `aria-controls`
attributes.
Commit: `ui: simplify publication cards` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — MCALF publication image replacement — complete
Result: Replaced the MCALF journal paper's concept artwork with Johannes'
supplied filtering visual. The complete 3:2 composition is centered within the
existing 16:9 publication frame so no labels or diagrams are cropped.
Evidence: source inspection -> 1536x1024 PNG; public derivative -> 1200x676,
metadata-free WebP, 69,724 bytes; visual inspection -> complete MCALF title,
classification diagram, arrows, and compressed/restored image comparison
visible.
Commit: `assets: update MCALF publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — Shearlet journal publication image replacement — complete
Result: Replaced the journal shearlet paper's concept artwork with Johannes'
supplied shearlet decomposition visual. The complete 3:2 composition is centered
within the existing 16:9 publication frame so no labels or diagrams are cropped.
Evidence: source inspection -> 1536x1024 PNG; public derivative -> 1200x676,
metadata-free WebP, 76,262 bytes; visual inspection -> complete title, three
scale rows, directional response grid, directional kernels, and descriptors
visible.
Commit: `assets: update shearlet publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — Doctoral-thesis publication image replacement — complete
Result: Replaced the doctoral-thesis concept artwork with Johannes' supplied
in-loop-filtering visual. The complete 3:2 composition is centered within the
existing 16:9 publication frame so no labels or diagrams are cropped.
Evidence: source inspection -> 1536x1024 PNG; public derivative -> 1200x676,
metadata-free WebP, 88,760 bytes; visual inspection -> complete title, MCALF,
SCLF, CNNLF, compressed/filtered frames, and supporting labels visible.
Commit: `assets: update doctoral thesis publication image` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — Publication abstract summaries — complete
Result: Added a substantive, source-verified abstract summary to every
publication detail dialog. The summaries are original paraphrases of the
official records, and the longer dialogs now scroll within the viewport.
Evidence: official TU Berlin DepositOnce, ScienceDirect, Fraunhofer Publica,
and Cambridge Core records reviewed; `npm run check` -> 27 files, 0
diagnostics; `npm test` -> 7 passed; `npm run validate` -> 5 static pages
built with valid HTML and internal links; generated homepage -> 5 publications,
5 substantive abstracts, 5 Abstract headings, and 5 scrollable dialogs.
Commit: `content: add publication abstract summaries` (this iteration)
Blockers: none
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 — GitHub Pages performance-gate remediation — complete
Result: Diagnosed the failed Pages workflow as a homepage Lighthouse performance
regression and deferred rendering work for the four below-the-fold homepage
sections while preserving their accessible DOM and the 0.95 quality threshold.
Evidence: GitHub Actions run `30111405928` -> checks, tests, build, HTML, and
links passed; homepage performance was 0.54. Local `npm run check` -> 27 files,
0 diagnostics; `npm test` -> 7 passed; `npm run validate` -> 5 static pages
built with valid HTML and internal links. Direct mobile Lighthouse -> 1.00
performance, 0 ms total blocking time; an 8x CPU-throttled run also scored 1.00
with 0 ms total blocking time. The full local Lighthouse CI wrapper reached a
1.00 homepage result but Windows denied cleanup of its temporary Edge profile;
the Linux GitHub Actions run remains the authoritative end-to-end verification.
Remote evidence: GitHub Actions run `30115868410` -> quality, build, and deploy
all succeeded; deployment `5593276264` -> `github-pages` environment succeeded
at `https://johanneserfurt.github.io/`; live route, metadata, CV, and custom 404
checks passed.
Commit: `7b576e8` (`perf: defer below-fold homepage rendering`)
Blockers: H-008
Next: H-008 — perform live acceptance and the 30-second scan test

2026-07-24 â€” About layout readability â€” complete
Result: Promoted the AI-adoption infographic to a full-width feature, kept the
introductory copy above it, and reduced the supporting cards to Education,
Skills, and Hobbies in a three-column layout.
Evidence: local browser visual check -> complete infographic readable with all
three cards aligned below; `npm run check` -> 27 files, 0 diagnostics; `npm
test` -> 7 passed; `npm run validate` -> 5 static pages built, HTML and
internal links valid.
Commit: `style: improve About layout readability` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” About illustration replacement â€” complete
Result: Replaced the About illustration with Johannes' AI-adoption workflow
infographic, preserving its complete 3:2 composition in a 197 KB WebP.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `feat: update About workflow illustration` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” About heading refinement â€” complete
Result: Replaced the About heading with the approved `Turning AI potential into
practical systems.`
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm run validate` -> 5
static pages built, HTML and internal links valid.
Commit: `content: refine About heading` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” About AI-adoption narrative â€” complete
Result: Added an approved About paragraph positioning Johannes as helping teams
adapt workflows and provide the context needed for dependable AI integration.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `content: add AI adoption narrative` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Hero symbol replacement â€” complete
Result: Replaced the neural-network target with a sparse six-node graph,
redesigned the storybook as a child-reading icon, and simplified the agent into
a large robot assistant with a speech bubble.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `feat: replace hero particle symbols` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Hero symbol clarity refinement â€” complete
Result: Replaced the neural-network animation target with a clear three-layer
node graph and redrew the storybook target with a large full-body child figure.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `fix: clarify hero particle symbols` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Publication-card summary removal â€” complete
Result: Removed the short title-derived summary below each publication-card
title while keeping it in the click-open detail dialog.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm run validate` -> 5
static pages built, HTML and internal links valid.
Commit: `style: simplify publication cards` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Publication two-column cards â€” complete
Result: Arranged publications as two cards per row on medium and larger screens,
with each compact cover, title, and title-derived summary stacked vertically.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm run validate` -> 5
static pages built, HTML and internal links valid.
Commit: `style: arrange publication cards in grid` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Publication thumbnail refinement â€” complete
Result: Reduced publication cover images to compact side-by-side thumbnails on
larger screens while retaining a full-width tappable layout on mobile.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm run validate` -> 5
static pages built, HTML and internal links valid.
Commit: `style: reduce publication image size` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Publication visual gallery â€” complete
Result: Added five original, optimized WebP publication concept illustrations.
Each image opens an accessible native dialog with a title-derived summary and
the approved bibliographic details and official links.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid;
local browser check -> publication image opens its labeled dialog with details.
Commit: `feat: add publication visual gallery` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Expertise section removal â€” complete
Result: Removed the homepage Expertise section, including its applied-skills and
language panels, and removed the obsolete Languages navigation link.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `refactor: remove expertise section` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Homepage section backgrounds â€” complete
Result: Added full-width, contrast-safe background bands to visually separate
the homepage sections: cyan Projects, violet Experience, emerald Expertise, and
sky Publications, complementing the existing warm About section.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `style: separate homepage sections` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Homepage section order â€” complete
Result: Reordered the homepage and its primary navigation so Projects follows
About and Experience follows Projects.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `refactor: reorder homepage sections` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 â€” Project demo and visuals â€” complete
Result: Added Johannes' approved MindGrow Stories live-demo link and original,
project-specific WebP concept illustrations to both selected-project cards and
their case-study pages. The illustrations are clearly described as concepts,
not product screenshots.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `feat: add project demo and visuals` (this iteration)
Blockers: none
Next: H-007 â€” validate the live GitHub Pages deployment

2026-07-24 — Dedicated project case studies — complete
Result: Added shareable static case-study pages for MindGrow Stories and
Wizarding Story Engine, linked from the homepage project cards. Each page has
an original, data-grounded workflow visual, approved approach text, technology
stack, impact statement, and the public source link where available.
Evidence: `npm run check` -> 27 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 5 static pages built, HTML and internal links valid.
Commit: `feat: add project case study pages` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Timeline connector interruption — complete
Result: Made each timeline icon disc opaque in light and dark themes, so vertical
connectors break at the icon edge and continue afterward rather than showing
through the icon.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `fix: interrupt timeline connectors at icons` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Two-column vertical timeline — complete
Result: Added subtle vertical connectors through the icon centers for Work,
Transition, Education, and Study Abroad, while retaining the two-column page
layout.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `feat: add two column vertical timeline` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Timeline date-layout redesign — complete
Result: Moved every Experience, Transition, Education, and Study Abroad period
to a muted line above its role title, giving titles full width and eliminating
right-side crowding.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: move timeline dates above roles` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Further-education date alignment — complete
Result: Changed the Transition title row to a fixed two-column grid so the
Further Education and Project Phase period stays beside its title.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `fix: align further education timeline` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience heading update — complete
Result: Replaced the Experience heading with the concise, narrative title
`From research to real-world AI`.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `content: refine experience heading` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience technical-detail removal — complete
Result: Removed the expandable Technical Detail and Selected Outcomes panel from
Experience; the public CV remains the intended source for deeper detail.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: remove experience detail panel` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Logo-inspired study-abroad icons — complete
Result: Replaced the generic Durham and Tomsk study-abroad markers with original
icons inspired by the supplied university logos: a purple shield for Durham and
a green landmark motif for Tomsk. The supplied raster logos remain unpublished.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `feat: refine study abroad icons` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Transition visual and travel update — complete
Result: Redesigned the two Transition entries to match the icon-led Experience
and Education structure, with dates alongside role titles. Added original SVG
icons for further education and world travel, and published the approved travel
locations in the sabbatical summary.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `feat: enhance transition experience entries` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — English university-name normalization — complete
Result: Replaced the German public display name with `Technical University of
Berlin` across the education entries, About summary, and doctoral-thesis venue.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built; source scan -> no German university
name remains under `src`.
Commit: `content: use English university name` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Tomsk timeline alignment — complete
Result: Moved the Tomsk study-abroad period into the same row as the Study
Abroad title, avoiding a date that wraps beneath the long university name.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `fix: align Tomsk study timeline` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Education study-abroad separation — complete
Result: Moved the two approved study-abroad records into a dedicated Study
Abroad subsection within Education. Added original, consistent SVG university
markers: a globe-and-arrow icon for Tomsk and a university-building icon for
Durham.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `feat: separate study abroad experience` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Education-column alignment — complete
Result: Rebuilt Education as individual newest-first entries matching the Work
Experience presentation: institution on the left, period aligned right, then
the degree or study title and its approved summary.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: align education experience entries` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience teaching-summary restoration — complete
Result: Restored the approved mathematics and engineering tutorial summary under
the compact Student Teaching Assistant entry.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `content: restore teaching experience summary` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience project-topic removal — complete
Result: Removed Private AI Projects from Experience so project content appears
only in the dedicated Projects section.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: remove projects from experience` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience teaching-entry simplification — complete
Result: Made Student Teaching Assistant a compact standalone working-experience
entry with its period aligned beside Technical University of Berlin. Removed the
duplicated role, organization, and description content beneath the heading.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: simplify teaching experience entry` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience role-heading refinement — complete
Result: Promoted the Scansonic and Fraunhofer role names to their respective
working-experience headings and aligned each period beside the organization
label. Split Fraunhofer HHI into separate Research Associate and Student
Research Assistant entries, both with the HHI symbol.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: clarify experience role headings` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience Scansonic and transition refinement — complete
Result: Made the approved Scansonic role the current-work heading with its
period and summary directly beneath it. Moved Further Education and Project
Phase plus World Travel and Parental Leave into a separate Career Transition
topic outside Work Experience.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: `refactor: clarify experience transition` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience columns and chronology update — complete
Result: Reordered the Experience section into a latest-first two-column layout:
work experience on the left and education on the right. Removed the long-term
direction stage and its icon. Each remaining icon now appears inline beside its
respective stage title rather than above it.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 3 static pages built, HTML and internal links valid.
Commit: `refactor: organize experience by category` (this iteration)
Blockers: none
Next: H-007 — validate the live GitHub Pages deployment

2026-07-24 — Experience career-journey redesign — complete
Result: Replaced the standalone Experience infographic with an accessible,
responsive six-stage career journey inspired by the supplied CV reference. The
timeline uses original SVG markers for Mathematics, Promotion, Fraunhofer HHI,
Scansonic MI, Private AI Projects, and Long-term Direction; it retains every
approved experience record and offers technical outcomes in a native disclosure.
Evidence: `npm run check` -> 25 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages; `npm run validate` -> HTML and internal links
valid. Browser visual preview was unavailable because the in-app browser could
not reach the locally running development server.
Commit: `feat: redesign experience journey` (this iteration)
Blockers: none for this change; H-007 and H-008 remain release-process items
Next: H-007 — validate the live GitHub Pages deployment

Add newest entries first using this format:

```text
YYYY-MM-DD — A-NNN — complete|blocked
Result: ...
Evidence: command -> result
Commit: hash or not created
Blockers: H-NNN or none
Next: A-NNN
```

2026-07-22 — About narrative update — complete
Result: Replaced the homepage About narrative with Johannes's supplied concise
statement on research-to-application intelligent systems and scalable,
maintainable software. The existing heading remains unchanged.
Evidence: `npm run check` -> 24 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero agent and neural-symbol clarity refinement — complete
Result: Increased particle density and particle size for stronger settled forms.
Simplified the neural graph to larger neuron rings and fewer clear connections;
redesigned the agent form around a larger central chatbot and four separated,
connected tool symbols.
Evidence: desktop browser preview -> the settled neural graph clearly shows six
large neuron circles and seven links in the right hero area; `npm run check` ->
24 files, 0 diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static
pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero children's-storybook symbol — complete
Result: Added an original open-storybook particle illustration with a small
character, rainbow, cloud, star, and page lines, following the supplied
reference's composition.
Evidence: desktop browser preview -> open book, character, rainbow, cloud, star,
and sparkles form in the right hero area; `npm run check` -> 24 files, 0
diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero computer-vision symbol refinement — complete
Result: Replaced the basic eye with an original connected computer-vision eye:
an almond-shaped outline, concentric iris rings, and eight linked outer nodes,
following the supplied reference's composition.
Evidence: desktop browser preview -> particle animation remains positioned in the
right hero area without obscuring the content; `npm run check` -> 24 files, 0
diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero electronic-music symbol refinement — complete
Result: Replaced the music-note-and-waves phase with an original dotted DJ/mixer
deck featuring a central turntable, note, knobs, and faders, following the
supplied reference's composition.
Evidence: desktop browser preview -> dotted mixer deck, turntable, note, knobs,
and faders form clearly to the right of the hero content; `npm run check` -> 24
files, 0 diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static pages
built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero neural-network symbol refinement — complete
Result: Replaced the simple neural graph with six large, particle-filled neuron
circles and crossing connections, following the supplied reference's structure
while retaining an original canvas-particle illustration.
Evidence: desktop browser preview -> six dotted neuron clusters and their
crossing links form clearly to the right of the hero content; `npm run check`
-> 24 files, 0 diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static
pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero agent-symbol refinement — complete
Result: Removed the MLOps particle phase. Replaced the simple agent network with
an original chatbot-and-tool-ring illustration, inspired by the supplied visual
reference: a central assistant connects to speech, reasoning, document, globe,
search, and calendar tools.
Evidence: desktop browser preview -> the chatbot-and-tool-ring particle symbol
forms clearly to the right of the hero content; `npm run check` -> 24 files, 0
diagnostics; `npm test` -> 7 passed; `npm run build` -> 3 static pages built.
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero particle symbol refinement — complete
Result: Replaced the particle animation's text morphs with five larger,
symbol-only forms: neural network, vision eye, electronic-music notes, MLOps
pipeline, and connected agents. The particle field is positioned farther right;
the slower twelve-second cycle allows each symbol to settle before transitioning.
Evidence: desktop browser preview -> neural-network and electronic-music
symbols render clearly in the right side of the hero without obscuring its
content; 390px browser check -> canvas is hidden and no horizontal overflow;
`npm run check` -> 24 files, 0 diagnostics;
`npm test` -> 7 passed; `npm run build` -> 3 static pages built; `npm run
lighthouse` -> homepage audit completed, but the suite could not finish because
Windows denied cleanup of Lighthouse's temporary Chrome profile while testing
the privacy page (EPERM; retried once).
Commit: not created
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Experience career infographic — complete
Result: Added the user-supplied career-journey infographic below the Experience
introduction and before the detailed timeline. The displayed image is constrained
for desktop readability and links to its full-size version. Published an optimized
WebP derivative, reducing transfer size from 1.59 MB to about 157 KB.
Evidence: desktop browser preview -> complete infographic centered and readable;
390px browser check -> image 293x440px with no horizontal overflow; `npm run
check` -> 24 files, 0 diagnostics; `npm test` -> 7 passed; `npm run validate` ->
3 pages built, HTML and internal links valid; Lighthouse rerun -> home
99/100/100/100 and privacy 100/100/100/100 for Performance/Accessibility/Best
Practices/SEO.
Commit: `feat: add Experience career infographic` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — CV-specific hero particle animation — complete
Result: Added an original, dependency-free canvas animation whose white/cyan
particles morph between five approved CV phrases and five related symbols. The
effect is confined to the right side of the desktop hero and remains behind the
foreground content. Small screens omit it; reduced-motion mode renders a static
state; inactive and off-screen animations pause.
Evidence: desktop browser frames -> phrases and transitions render on the right
without foreground overlap or horizontal overflow; 390px browser check -> canvas
hidden and no horizontal overflow; `npm run quality` -> 24 files with 0
diagnostics, 7 tests passed, 3 pages built, HTML/internal links valid; Lighthouse
-> home 95/100/100/100 and privacy 100/100/100/100 for Performance/
Accessibility/Best Practices/SEO.
Commit: `feat: add CV particle hero animation` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero background image — complete
Result: Added the user-supplied AI illustration as a full-width hero background,
with a dark gradient overlay and the profile photo, name, badges, and actions
layered above it. Published responsive WebP derivatives, reducing the mobile
transfer from 2.18 MB to about 56 KB and the full-size transfer to about 165 KB.
Evidence: `npm run quality` -> Astro check 0 diagnostics, 7 tests passed,
3 pages built, HTML and internal links valid; Lighthouse -> home
98/100/100/100 and privacy 100/100/100/100 for Performance/Accessibility/Best
Practices/SEO; color-contrast audit passed; home LCP 2.0 seconds.
Commit: `feat: add AI hero background` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About illustration layout — complete
Result: Moved the About illustration beside the introductory narrative in a
responsive two-column layout. Smaller screens retain a readable stacked layout,
with the summary cards remaining below both elements.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 3 pages built, HTML and internal links valid; generated
homepage -> responsive two-column About wrapper present.
Commit: `style: place About image beside narrative` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About illustration — complete
Result: Added the user-supplied AI/neural-network illustration between the About
narrative and summary cards. Published a visually equivalent JPEG derivative at
the original dimensions, reducing transfer size from 2.36 MB to about 302 KB.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run validate` -> 3 pages built, HTML and internal links valid; generated
homepage -> illustration and descriptive alt text present; production asset ->
published JPEG present.
Commit: `feat: add About illustration` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About north-star removal — complete
Result: Removed the complete `My north star` panel and simplified the surrounding
About layout so the approved narrative occupies the available content width.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages; generated homepage -> north-star label and
supporting sentence absent.
Commit: `content: remove About north-star panel` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — Hero expertise badge update — complete
Result: Replaced the `Multi-Agent Systems · LangGraph` hero badge with the
approved `MLOps - Software Engineering` text.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages; generated homepage -> new badge present and
old badge absent.
Commit: `content: update hero expertise badge` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About education and hobbies update — complete
Result: Expanded the Education card with the approved Mathematics B.Sc. and
M.Sc., replaced the Research card with a four-item Hobbies card, and added the
four user-supplied hobby icons. Removed the separate hobby grid to avoid repeated
content.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages; generated homepage check -> both mathematics
degrees and four hobbies present, all four icon assets copied, old duplicate hobby
section absent.
Commit: `content: update About education and hobbies` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About skills update — complete
Result: Replaced the compact Skills summary in the homepage About section with
four detailed capability groups covering generative AI and agents, computer
vision and machine learning, software development and MLOps, and image/video
processing and algorithmics. The entries render as a semantic bullet list.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages.
Commit: `content: expand About skills` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — About narrative update — complete
Result: Replaced the existing About heading and two introductory paragraphs with
a polished English adaptation of Johannes's German summary. The new copy presents
his end-to-end AI technology stack and systems-oriented engineering approach.
Evidence: `npm run check` -> 23 files, 0 diagnostics; `npm test` -> 7 passed;
`npm run build` -> 3 static pages; generated homepage -> new heading and all three
paragraphs present.
Commit: `content: refine About narrative` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — validate the live GitHub Pages deployment

2026-07-22 — H-005 CV update — complete
Result: Replaced the public CV with the updated three-page `cv_github.pdf`,
retaining the stable download filename and the “Download CV (PDF)” label.
Evidence: PDF extraction -> 3 pages, selectable text, German/English/Russian,
four approved hobbies, five approved publications, and sabbatical wording; privacy
scan -> no email, phone label, address, or private-key signature; metadata scrub ->
only intentional title, author, and subject retained; rendered public copy -> no
clipping or overlap; quality suite -> passed.
Commit: `feat: update public CV content` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — enable and validate GitHub Pages deployment

2026-07-21 — About section expansion — complete
Result: Expanded the homepage About section with a warmer personal narrative,
four icon-led facts cards, and four approved hobby cards. Content is stored in a
typed data module and uses native inline SVG symbols with visible labels.
Evidence: browser render -> About heading, 4 highlights, 4 hobbies, 8 icons,
and no horizontal overflow; `npm run check` -> 0 diagnostics; `npm test` -> 7
passed; `npm run build` -> 3 pages; HTML/internal-link validation -> passed;
Lighthouse -> home and privacy 100/100/100/100 for Performance/Accessibility/
Best Practices/SEO.
Commit: `feat: expand homepage about section` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — enable and validate GitHub Pages deployment

2026-07-21 — H-005 replacement — complete
Result: Replaced the public CV with Johannes' explicitly supplied four-page
visually designed `cv_github.pdf`, retaining the stable download filename.
The website CTA now says “Download CV (PDF)” because ATS optimization is not
claimed for this design.
Evidence: PDF extraction -> 4 pages, selectable text, 5 approved publications,
English and Russian language levels, approved sabbatical wording, no email/phone/
address/private contact details; metadata scrub -> only intentional title,
author, and subject retained; rendered public copy -> no clipping or overlap;
`npm run check` -> 0 diagnostics; `npm test` -> 7 passed; `npm run build` and
HTML/internal-link validation -> passed; Lighthouse -> home 99/100/100/100 and
privacy 100/100/100/100.
Commit: `feat: replace public CV with approved design` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — enable and validate GitHub Pages deployment

2026-07-21 — A-016 — complete
Result: Audited release candidate `7f11c3ad915f604f69d97782544ed3520bccd5da`.
The clean build and all gates pass; tracked/public files contain no detected
private contact data, exact birth date, address, secret, or credential; the
approved two-page CV renders cleanly and its text contains all five approved
publications, all three languages, and the approved sabbatical wording.
Evidence: `npm ci` -> passed; `npm run quality` -> passed; sensitive-data pattern
scan -> 0 email/exact-date/postal-address/credential/private-key matches (generic
policy wording reviewed separately); PDF extraction -> 5/5 publications, 3/3
languages, sabbatical wording and dates present; two-page PNG render -> no clipping,
overlap, broken glyphs, or unreadable text; PDF SHA-256 ->
`0834F1E7337EF065270D47F4B6F223AA8A187DB02CFCDE2F7C45937F3EA3BA38`.
Commit: `chore: audit portfolio release candidate` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — enable and validate GitHub Pages deployment

2026-07-21 — H-009 — complete
Result: Added Johannes' explicitly approved profile photo to the hero section.
The source TIF remains private; the site publishes only a centered, metadata-
stripped 800x800 WebP derivative with explicit dimensions and descriptive alt text.
Evidence: browser render at 1280x720 -> image loaded at 800x800 with no horizontal
overflow; `npm run check` -> 0 diagnostics; `npm test` -> 7 passed; `npm run build`
and HTML/internal-link validation -> passed; Lighthouse -> home 99/100/100/100 and
privacy 100/100/100/100 for Performance/Accessibility/Best Practices/SEO.
Commit: `feat: add approved profile photo` (this iteration)
Blockers: H-007 and H-008
Next: H-007 — enable and validate GitHub Pages deployment

2026-07-21 — A-015 — complete
Result: Added deterministic content tests, generated-HTML and internal-link
validation, Lighthouse CI thresholds, and a CI quality job that gates deployment.
Evidence: `npm run quality` -> type check passed, 7 tests passed, 3 pages built,
3 HTML files and their internal links validated; Lighthouse -> home 100/100/100/100
and privacy 100/100/100/100 for Performance/Accessibility/Best Practices/SEO.
Commit: `7f11c3a` (`ci: add portfolio quality gates`)
Blockers: none
Next: A-016

2026-07-21 — A-013 — complete
Result: Audited the production output and confirmed that the current no-image,
system-font implementation already meets the asset and hydration constraints;
no speculative media or dependencies were added.
Evidence: production browser audit -> CLS 0, no content images, no external fonts,
0 module scripts, 2 necessary inline theme scripts, 1 local stylesheet, no
horizontal overflow; static build -> index, privacy, and 404 generated;
`npm run check` -> 0 diagnostics; `npm run build` -> passed; `npm test` -> 7 passed.
Commit: `perf: optimize portfolio assets and output` (this iteration)
Blockers: none
Next: A-015

2026-07-21 — A-012 — complete
Result: Added the approved canonical/social metadata without an image, a limited
privacy page without private contact details, robots and sitemap files, footer
privacy navigation, and a noindex static 404 page with a root-home link.
Evidence: browser audit -> approved title/description, one canonical URL, complete
OG/Twitter text metadata, no social image, privacy route and 404 route resolve;
output assertions -> index/privacy/404/robots/sitemap passed;
`npm run check` -> 0 diagnostics; `npm run build` -> 3 pages built;
`npm test` -> 7 passed.
Commit: `feat: add metadata and public policy pages` (this iteration)
Blockers: none
Next: A-013

2026-07-21 — A-011 — complete
Result: Completed desktop and native mobile navigation, added a skip link,
introduced reduced-motion-aware global tokens, and implemented an accessible
light/dark theme that honors first-visit system preference and persists choices.
Evidence: browser audit -> all five section targets exist; mobile menu exposes
seven visible links and a focusable native summary; theme state toggles and
persists after reload; early head script present; contrast audit -> 0 failures
across 218 visible text candidates in light and dark themes;
`npm run check` -> 0 diagnostics; `npm run build` -> passed; `npm test` -> 7 passed.
Commit: `feat: complete navigation and theme system` (this iteration)
Blockers: none for A-011
Next: none; A-012 blocked by H-006

2026-07-21 — A-010 — complete
Result: Added a competency matrix, the three approved language proficiencies,
and five publications grouped programmatically as thesis, journal, and conference
work with accessible DOI and official-record links.
Evidence: browser audit -> exact language labels/levels, 9 competencies, publication
groups 1/2/2 with 5 unique records and 10 labelled HTTPS links, no flag-only
communication, no mobile overflow; `npm run check` -> 0 diagnostics;
`npm run build` -> passed; `npm test` -> 7 passed.
Commit: `feat: add skills and publications sections` (this iteration)
Blockers: none
Next: A-011

2026-07-21 — A-009 — complete
Result: Replaced the project placeholder with two typed, responsive project
cards containing approved descriptions, exact impact statements, workflow
technology badges, and only the public links that actually exist.
Evidence: browser audit at 320px and 1440px -> 2 unique project cards, no
horizontal overflow or clipping; MindGrow -> 0 links; Wizarding Story Engine ->
1 accessible source link; displayed impact text matches approved JSON exactly;
`npm run check` -> 0 diagnostics; `npm run build` -> passed; `npm test` -> 7 passed.
Commit: `feat: add project showcase` (this iteration)
Blockers: none
Next: A-010

2026-07-21 — A-008 — complete
Result: Rendered all 11 approved timeline records in descending chronological
order with explicit Industry, Research, Teaching, Education, Professional
development, and Sabbatical labels plus native expandable technical details.
Evidence: browser audit -> 11 unique records, all essential dates/roles/summaries
visible when collapsed, no horizontal overflow, native summaries focusable with
open state exposed; `npm run check` -> 0 diagnostics; `npm run build` -> passed;
`npm test` -> 7 passed.
Commit: `feat: add accessible experience timeline` (this iteration)
Blockers: none
Next: A-009

2026-07-21 — A-007 — complete
Result: Added an above-the-fold recruiter summary with the approved identity,
three evidence-backed expertise signals, an approved ATS CV download, and a
projects CTA.
Evidence: browser render at 1366x768 -> all required hero content and both CTAs
visible above the fold; CTA focus audit -> visible 2px outlines; project target
and CV output asset -> present; `npm run check` -> 0 diagnostics;
`npm run build` -> passed; `npm test` -> 7 passed.
Commit: `feat: add recruiter summary hero` (this iteration)
Blockers: none
Next: A-008

2026-07-21 — A-006 — complete
Result: Verified and completed the semantic page shell with one header, main,
and footer; approved profile links; responsive rendering; and keyboard-visible
focus for every interactive element.
Evidence: browser render at 320x800 and 1440x900 -> no overflow/overlap;
focus audit -> 7 enabled links in logical order with a 2px visible outline;
`npm run check` -> 0 diagnostics; `npm run build` -> passed; `npm test` -> 7 passed.
Commit: `feat: add portfolio vertical slice` (this iteration)
Blockers: none
Next: A-007

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
  2026-08-12 — WPSNR sensitivity-map image revision — complete
  Result: Replaced the WPSNR publication artwork with a Lena-based research
  visualization containing distinct coarse region-wise and fine pixel-wise
  sensitivity-weight maps plus a shared color scale.
  Evidence: generated 1536x1024 source inspected; public derivative is a
  160,372-byte WebP with all panels inside safe margins and no logos, watermarks,
  or private data.
  Commit: pending (this iteration)
  Blockers: none
  Next: run the baseline checks, then commit this scoped asset and documentation update.
  2026-08-12 — CNN publication Lena-image revision — complete
  Result: Replaced the CNN adaptive-loop-filter artwork's grayscale landscape
  input/output examples with recognizable compressed and restored Lena panels,
  while retaining the CNN pipeline, title, arrows, and legend.
  Evidence: generated 1536x1024 source inspected; public derivative is a
  144,810-byte WebP with the full diagram inside the canvas and no logos,
  watermarks, or private data.
  Commit: pending (this iteration)
  Blockers: none
  Next: run the baseline checks, then commit this scoped asset and documentation update.
  2026-08-12 — WPSNR workflow-and-sensitivity image revision — complete
  Result: Expanded the WPSNR publication artwork into a complete perceptual
  quality workflow: Lena input, compressed/blocky Lena, region-wise and
  pixel-wise sensitivity maps, weighted quality output, and visual examples
  explaining why homogeneous regions receive higher weights than textured ones.
  Evidence: generated 1536x1024 source inspected; public derivative is a
  181,586-byte WebP with the workflow and explanatory panels inside the canvas.
  Commit: pending (this iteration)
  Blockers: none
  Next: run the baseline checks, then commit this scoped asset and documentation update.
  2026-08-12 — CNN publication exact-layout Lena replacement — complete
  Result: Edited the prior CNN publication artwork in place, replacing only the
  left blocky landscape and right restored landscape with compressed and clean
  Lena panels. The central CNN/filter workflow and title were preserved.
  Evidence: 1672x941 source inspected; public derivative is a 135,138-byte WebP
  with the central diagram unchanged and both outer panels inside their original
  borders.
  Commit: pending (this iteration)
  Blockers: none
  Next: run the baseline checks, then commit this scoped asset and documentation update.
  2026-08-12 — publication card grid sizing — complete
  Result: Reduced publication card padding and enabled three columns at wide
  breakpoints so multiple publication cards fit side by side; detail dialogs
  retain their readable width.
  Evidence: `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped layout update.
  2026-08-12 — MindGrow Stories project image replacement — complete
  Result: Replaced the MindGrow Stories hero artwork with the user-supplied
  illustrated children’s-book scene, preserving the existing project metadata
  and asset path.
  Evidence: source converted to a 1536x1024, 293,726-byte WebP and inspected;
  `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project asset update.
  2026-08-12 — MindGrow Stories description update — complete
  Result: Replaced the project description with the user-approved positioning
  focused on parents, educational children’s books, learning, emotional
  development, parenting challenges, and coordinated AI workflows.
  Evidence: `npm run check` and `npm test` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-content update.
  2026-08-12 — Wizarding Story Engine project image replacement — complete
  Result: Replaced the Wizarding Story Engine hero artwork with the user-supplied
  magical library and multi-agent story-orchestration illustration, preserving
  the existing project metadata and asset path.
  Evidence: source converted to a 1536x1024, 245,652-byte WebP and inspected;
  `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project asset update.
  2026-08-12 — publication gallery UX revision — complete
  Result: Reordered publications newest-first in one unified responsive gallery;
  compact cards now fit three across on large screens, two across on tablets,
  and one on small screens, with hover affordances and unchanged accessible
  detail dialogs.
  Evidence: `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped publication-layout update.
  2026-08-12 — selected-project complexity framing — complete
  Result: Added explicit scope and development-effort badges to project cards
  and case-study headers: MindGrow Stories is a product-scale platform built
  over about six months; Wizarding Story Engine is a focused prototype built
  over a few days.
  Evidence: project data remains schema-valid; `npm run check`, `npm test`, and
  `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-content and presentation update.
  2026-08-12 — Wizarding Story Engine description rewrite — complete
  Result: Replaced the project description with the user-approved explanation
  of chapter planning, scene writing, continuity checks, review cycles, and
  human approval gates.
  Evidence: `npm run check` and `npm test` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-content update.
  2026-08-12 — Wizarding Story Engine impact rewrite — complete
  Result: Replaced the engineering-impact statement with the user-approved
  description of its modular stateful architecture, memory, critic agents,
  revision routing, resumability, approval gates, and cost monitoring.
  Evidence: `npm run check` and `npm test` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-content update.
  2026-08-12 — compact selected-project cards — complete
  Result: Simplified the main project previews to image, project name,
  technology keywords, case-study link, and demo/source links. Full descriptions,
  scope, development effort, and engineering impact remain on the detail pages.
  Evidence: `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-card UX update.
  2026-08-12 — MindGrow case-study workflow and approach expansion — complete
  Result: Replaced the MindGrow case-study workflow visual with the user-supplied
  parent-led generation diagram and added the supplied production-oriented
  engineering narrative to the Approach section. The detailed content remains
  on the case-study page, not the compact project card.
  Evidence: workflow converted to a 1536x1024, 218,194-byte WebP;
  `npm run check`, `npm test`, and `npm run build` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped MindGrow case-study update.
  2026-08-12 — project development-effort wording update — complete
  Result: Updated the project labels to “More than six months of development”
  for MindGrow Stories and “Built over a few weeks” for Wizarding Story Engine.
  Evidence: `npm run check` and `npm test` passed.
  Commit: pending (this iteration)
  Blockers: none
  Next: commit the scoped project-content update.
