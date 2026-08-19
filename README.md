# Designing Inclusive Digital Solutions — web edition

The interactive web version of **Designing Inclusive Digital Solutions: An Open-Source UI/UX Guide for Designing Context-Aware and Gender-Responsive Digital Solutions in Ghana** (First Edition, 2026), published by GIZ under the Digital Transformation for Inclusive Entrepreneurship in Ghana (DTEG) programme and implemented by GFA Consulting Group GmbH.

This site is built from the same Markdown source used for the designed PDF edition, so the web and print versions stay in sync as long as both are rebuilt from that source.

## What's included

- The full guide: Home (About This Guide, How to Use This Document, Key Findings at a Glance, Quick Start), Sections 1–9, References.
- Front matter matching the PDF: Imprint (authors, licence, copyright, citation), Acknowledgements, and Disclaimer.
- The eleven figures from the designed edition, extracted at print resolution.
- Custom brand styling matched to the guide's blue/green/amber palette, with a light/dark mode toggle.
- All callouts (tips, common mistakes, field observations) as native Material admonitions.
- Full-text search across the whole guide.

## Interactive components

Section 1.3 carries two live components, built in vanilla JS with no external libraries (`docs/javascripts/dteg-data.js` and `dteg-interactive.js`):

- **Regional locator** — an interactive version of the north-to-south regional schematic (Upper West → Upper East → North East → Northern → Ashanti → Eastern, with Greater Accra as a secondary site). Click a region to see its intermediary/solution count and filter the table below to it. Greater Accra has no dedicated solution rows in the data, so clicking it surfaces an explanatory note rather than a fake empty result.
- **Solutions explorer** — all 30 solutions (S1–S18, P1–P12) in a searchable, filterable, sortable table: free-text search, region/phase/evidence-level dropdowns, a "Finalists only" toggle, and click-to-sort column headers (natural sort on codes, so S2 sorts before S10). Roster-only, discontinued, and finalist solutions carry their own badges.

Both read from the same 30-row dataset transcribed from Section 1.3. If the counts in the guide change, update `dteg-data.js` to match. The mount points are the two empty `<div>` elements in `docs/01-introduction.md`.

## Licence status

Resolved. The guide is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), with GIZ and GFA Consulting Group GmbH holding copyright. Photographs, logos, and third-party figures are excluded from the licence. Full terms are in [Imprint](docs/imprint.md) and Section 9.5.

## Running it locally

Requires Python 3 with `mkdocs` and `mkdocs-material`:

```bash
pip install mkdocs mkdocs-material
mkdocs serve   # preview at http://127.0.0.1:8000
mkdocs build   # static HTML into ./site/
```

The built `site/` folder is fully static and can be hosted on the GHN website, GitHub Pages, Netlify, or any standard web host with no server-side dependencies. This repository deploys to GitHub Pages automatically on every push to `main` (see `.github/workflows/`).

## Source of truth

The Markdown source lives in `docs/`. Edits to guide content should happen there and be propagated to the PDF/docx edition, so the two do not drift.
