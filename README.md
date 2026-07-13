# Open-Source UI/UX Guide — MkDocs Prototype

This is a working prototype of the interactive web version of the Open-Source UI/UX Guide for Gender-Responsive Digital Solutions in Ghana (DTEG project), built for GIZ/GHN review.

## What this is

A static site generated from the same v7 Markdown source used to build the PDF/docx version, using MkDocs with the Material theme. Because it's generated from the same source, the website will never drift out of sync with the print/PDF version as long as both are rebuilt from the same source files.

## What's included

- Full guide content across 11 pages (Home, Sections 1–9, References), matching the existing "How to Use This Document" reader-path table.
- Custom brand styling matched to the guide's own blue/green/amber palette, with a working light/dark mode toggle.
- All callouts (Tips, Pitfalls, Field Observations) converted to native Material admonitions.
- Full-text search across the whole guide.
- Responsive charts/diagrams (regional map, iteration cycle, etc.).

### Phase 2: interactive regional locator + solutions explorer (Section 2.2)

The static "Solutions at a glance" table and regional summary are now a live component, built with vanilla JS (no external libraries — `docs/javascripts/dteg-data.js` and `dteg-interactive.js`):

- **Regional locator.** An interactive version of the north-to-south schematic from Section 1.3 (Upper West → Upper East → North East → Northern → Ashanti → Eastern → Greater Accra as a secondary site). Click a region to see its intermediary/solution count and filter the table below to it. Clicking Greater Accra — which has no dedicated solution rows in the data — surfaces an explanatory note instead of a fake empty result, since it was a secondary testing site, not a distinct region code.
- **Solutions explorer.** All 30 solutions (S1–S18, P1–P12) in a searchable, filterable, sortable table: free-text search, region/phase/evidence-level dropdowns, a "Finalists only" toggle, and click-to-sort column headers (with a natural sort on codes, so S2 sorts before S10). Roster-only, discontinued, and finalist solutions carry their own badges.

Both components read from the same 30-row dataset transcribed directly from Section 1.3 and Section 2.2 of the guide — if the underlying counts in the guide ever change, update `dteg-data.js` to match. Because this only makes sense on the web (not in the docx/PDF), it's applied as a post-processing step inside `build_mkdocs_site.py` (see `inject_interactive_components`) rather than upstream in the shared Markdown source — reruns of the build script stay reproducible and don't need this reapplied by hand.

## What's deliberately different from the current working docx

Two categories of content were stripped out of this build, on the assumption that both will be resolved before any real publication — NOT because they've been decided:

1. **Internal "Editorial note" callouts** flagging open decisions (e.g. the GFA copyright/licensing question, the GIZ/GHN hand-over language). These exist in the working docx specifically to flag what must be resolved pre-publication. They're intentionally invisible here because this prototype shows what the public-facing page will look like — not because the underlying decisions have been made.
2. **The "[Placeholder pending confirmation]" license marker.** The CC BY 4.0 license text is shown as if finalized. It is not yet — the GFA copyright clause on the prior draft is still incompatible with this and needs explicit GFA/GIZ sign-off first.

**Before this goes anywhere near a real GHN URL:** resolve the licensing decision and confirm the GIZ/GHN hand-over language, per the two blockers flagged in the publishing-strategy discussion. The NILF figure discrepancy noted separately should also be resolved before publication.

## Running it yourself

Requires Python 3 with `mkdocs` and `mkdocs-material` installed:

```
pip install mkdocs mkdocs-material --break-system-packages
cd os-guide-site
mkdocs serve      # preview at http://127.0.0.1:8000
mkdocs build      # outputs static HTML to ./site/ for hosting anywhere
```

The built `site/` folder is fully static — it can be hosted on the GHN website via any standard web host, GitHub Pages, Netlify, or similar, with no server-side dependencies.

## Source of truth

The Markdown source lives in `docs/`. To keep the website and PDF/docx versions in sync going forward, edits to guide content should happen in whichever is the canonical source and be propagated to the other — see the publishing-strategy recommendation for a single-source-of-truth setup.
