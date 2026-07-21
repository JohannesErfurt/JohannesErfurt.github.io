# Human-in-the-loop backlog

Only Johannes (or an explicitly authorized reviewer) can complete these tasks.
Record approved public facts in `docs/content-approvals.md` or communicate them
to the coding agent; do not store private source documents in the repository.

- [x] **H-001 — Approve public identity and contact endpoints**
  - Provide: exact display name, final professional title/tagline, public email
    alias (or decision to omit email), GitHub profile URL, and LinkedIn URL.
  - Success criteria:
    - Each value is explicitly marked approved for public use.
    - Both profile URLs open the intended public profile while signed out.
    - No value includes a private phone number, residential address, or birth date.
  - Unlocks: A-005, A-006

- [x] **H-002 — Approve experience and education facts**
  - Provide: organization, public role title, month-level start/end dates, concise
    summary, approved technologies, and highlights for every timeline item.
  - Explicitly approve wording for the 11/2022–10/2023 sabbatical.
  - Success criteria:
    - Every entry has complete month-level dates and a unique identity.
    - Current roles explicitly say `Present`; overlapping dates are intentional.
    - Claims reveal no employer-confidential information.
    - Sabbatical wording is approved for both site and ATS CV.
  - Unlocks: A-005

- [x] **H-003 — Approve project facts, links, and measurable claims**
  - Provide: public title, summary, technologies, category, GitHub/demo URLs,
    architecture description, featured status, and evidence-backed impact for each project.
  - Success criteria:
    - Each URL works for a signed-out visitor or is explicitly marked private/omit.
    - Each number or impact statement has a source Johannes can defend in an interview.
    - Employer/client IP and confidential implementation details are excluded.
    - Image/diagram ownership or permission is documented for supplied assets.
  - Unlocks: A-005

- [x] **H-004 — Approve publication bibliography**
  - Provide: title, year, publication type, author line, venue, and optional DOI/public PDF URL.
  - Success criteria:
    - Metadata matches the publisher, DOI record, or university repository.
    - Author order and title spelling are verified for every item.
    - Every supplied PDF is legally redistributable; otherwise link to its landing page.
  - Unlocks: A-005

- [x] **H-005 — Supply and approve the public CV**
  - Place the final file at `public/assets/Dr_Johannes_Erfurt_CV.pdf` after a privacy review.
  - Success criteria:
    - The PDF contains selectable/extractable text in a logical single-column order.
    - It includes selected publications, the supplied language levels, and the
      approved 11/2022–10/2023 sabbatical wording. The replacement is visually
      designed and is not claimed to be ATS-optimized.
    - Manual review confirms no street address, exact birth date, private phone,
      hidden comments/metadata, or other unintended personal information.
    - The filename is exact and the document opens in two independent PDF viewers.
  - Unlocks: A-007, A-016

- [x] **H-006 — Approve public legal, privacy, and metadata content**
  - Decide whether German law requires an Impressum for this site and provide
    reviewed public wording/contact details; approve privacy wording and social-preview text/image.
  - Success criteria:
    - Legal/privacy text has been reviewed by Johannes or qualified counsel; the
      coding agent is not treated as a source of legal advice.
    - Only contact details intentionally approved for public display are included.
    - Social-preview copy and any image are licensed and approved.
  - Unlocks: A-012, A-016

- [ ] **H-007 — Enable and validate GitHub Pages deployment**
  - In repository settings, select GitHub Actions as the Pages source; push/merge
    the release candidate when ready; approve any required Pages environment.
  - Success criteria:
    - The build and deployment jobs are green for the release commit on `main`.
    - The deployment reports `https://johanneserfurt.github.io` as its environment URL.
    - A clean/private browser session receives HTTP 200 for the homepage and CV.
  - Unlocks: H-008 and completion of plan 1.4/5.2

- [ ] **H-008 — Perform live acceptance and the 30-second scan test**
  - Test the live site on a phone and desktop and ask at least one target-audience
    reviewer to inspect the homepage for no more than 30 seconds.
  - Success criteria:
    - Reviewer can state: Johannes has a doctorate/video-coding background and
      specializes in AI/image processing and multi-agent systems.
    - All navigation, theme control, external links, CV download, and 404 behavior work live.
    - Pages remain readable at 320px and at a desktop width with no horizontal overflow.
    - Any defects are recorded as new agent tasks with reproduction steps; otherwise
      Johannes explicitly approves the release.
  - Unlocks: final Definition of Done

## Optional human enhancements

- [x] **H-009 — Supply approved visual assets**
  - Provide an optional portrait, project screenshots, and architecture diagrams
    with attribution/license notes and desired alt-text context.
  - Success criteria:
    - [x] Original files are high enough resolution for their intended display size.
    - [x] Public-use permission and attribution requirements are documented.
    - [x] No screenshot contains secrets, personal data, private customer data, or private URLs.
  - Unlocks: optional visual polish; does not block the initial release
