---
hide:
  - navigation
  - toc
---

<div class="dteg-hero">
  <div class="dteg-hero__media">
    <img src="assets/field-shop-couple.jpg" alt="Two entrepreneurs looking at a phone together in a shop in Ghana">
  </div>
  <div class="dteg-hero__inner">
    <p class="dteg-eyebrow-pill">First Edition · Accra 2026 · CC BY 4.0</p>
    <h1 class="dteg-hero__title">Designing inclusive digital solutions</h1>
    <p class="dteg-hero__lede">An open-source UI/UX guide for designing context-aware and gender-responsive digital solutions in Ghana. Built from three years of field testing with informal entrepreneurs.</p>
    <p class="dteg-hero__actions">
      <a class="dteg-btn dteg-btn--primary" href="#quick-start">Run your first test in 5 days <span aria-hidden="true">&rarr;</span></a>
      <a class="dteg-btn dteg-btn--ghost" href="#key-findings">Read the key findings</a>
    </p>
    <div class="dteg-stats">
      <div class="dteg-stat"><span class="dteg-stat__num">2023&ndash;26</span><span class="dteg-stat__label">Three years of project work</span></div>
      <div class="dteg-stat"><span class="dteg-stat__num">6</span><span class="dteg-stat__label">Regions across both phases</span></div>
      <div class="dteg-stat"><span class="dteg-stat__num">18</span><span class="dteg-stat__label">Existing products adapted, Phase 1</span></div>
      <div class="dteg-stat"><span class="dteg-stat__num">12</span><span class="dteg-stat__label">New ideas validated, Phase 2</span></div>
    </div>
  </div>
</div>

<div class="dteg-home" markdown="1">

## About This Guide

The Open-Source Guide is the final output of more than three years of work done on the project *User Testing and Support to the Adaptation of Digital Solutions for Informal Micro-Entrepreneurs* (2023–2026). The Project launched by GIZ was implemented under the Digital Transformation for Inclusive Entrepreneurship in Ghana (DTEG) programme to promote inclusive digital transformation by ensuring that digital solutions are designed around the needs of informal micro-entrepreneurs, particularly women-led enterprises.

Recognizing that many existing digital products fail to address the realities of informal businesses — including low digital literacy, limited connectivity, affordability constraints, and cultural context — the project adopted a user-centred design approach to improve the relevance, accessibility, and adoption of digital technologies.

This guide translates strategies and insights from field-based user research, usability testing, innovation and co-creation activities conducted under the project into practical guidance for those designing or adapting digital solutions for informal sector entrepreneurs in Ghana. It synthesizes learnings from across the project, covering the Upper East, Northern, Eastern, and Ashanti regions of Ghana in Phase 1, and extending into Upper West and North East Region in Phase 2. It draws on validation reports, co-creation records, Open-Source Guide input submissions, field observations, and direct contributions from all participating intermediary organizations.

All findings and recommendations presented in this guide trace directly to documented project activity. To protect participant, intermediary, and solution-provider privacy ahead of open-source publication, this edition generalizes and anonymizes examples throughout: no individual participant, staff member, or founder is named, and intermediary organizations and the solutions they tested are referred to by consistent reference codes (for example, "Intermediary N1" and "Solution S1") rather than by name. Region, sector, and the substance of each finding are preserved in full; only identifying names are removed. [Section 1.3](01-introduction.md#13-about-the-project-and-the-intermediary-cohort) explains the coding scheme.

The guide is intended to be practical, honest, and specific. It does not summarize international design literature. It reports what happened in the field: what worked, what did not, and why.

## How to Use This Document

<p class="dteg-section-note">Pick the row that describes you. Sections 3, 6, and 7 are written as standing references &mdash; return to them at any stage of a project, not only when the guide's narrative order reaches them.</p>

<div class="dteg-router" data-dteg-router>
  <div class="dteg-router__list" role="tablist" aria-label="Reader roles">
    <button class="dteg-router__role" role="tab" aria-selected="true" data-role="0">A hub or intermediary new to running user testing</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="1">A hub considering offering user testing as a paid service</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="2">A startup or solution provider preparing for user testing</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="3">A designer or developer adapting an existing product</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="4">A GIZ, donor, or government stakeholder reviewing project results</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="5">Someone designing a new digital product from the ground up</button>
    <button class="dteg-router__role" role="tab" aria-selected="false" data-role="6">Anyone wanting to contribute to or maintain this guide</button>
  </div>
  <div class="dteg-router__card">
    <p class="dteg-eyebrow">Recommended route</p>
    <p class="dteg-router__who" data-router-who>A hub or intermediary new to running user testing</p>
    <div class="dteg-router__row">
      <span class="dteg-router__key dteg-router__key--start">Start with</span>
      <span data-router-start>Section 1 and Section 2</span>
    </div>
    <div class="dteg-router__row">
      <span class="dteg-router__key">Then read</span>
      <span data-router-then>Section 4, Part A (Steps 1–3); Section 6</span>
    </div>
  </div>
</div>

<p class="dteg-section-note">Throughout the guide, colour-coded boxes flag three kinds of content: green boxes hold practical tips, blue boxes hold testimonials and observations from the field, and amber boxes flag common mistakes to avoid.</p>

![Figure 1 — The project journey, mapped to guide sections](assets/project_journey.png)

## Key Findings at a Glance {: #key-findings }

<p class="dteg-section-note">A summary of the key findings for a general read before diving into the full sections. It is a compressed summary of Section 5, not a substitute for it.</p>

<div class="dteg-findings">
  <article class="dteg-finding"><p class="dteg-finding__num">01</p><h3>Trust, not technical sophistication, was the biggest driver of adoption</h3><p>A small, verifiable promise — a fixed password flow, a specific booking time — did more for uptake than any amount of feature depth.</p><p class="dteg-finding__ref">Section 5.6</p></article>
  <article class="dteg-finding"><p class="dteg-finding__num">02</p><h3>Language and literacy were the highest-leverage fixes available</h3><p>Solutions tested in participants' first language consistently produced more honest feedback and higher task completion than English-only equivalents.</p><p class="dteg-finding__ref">Section 5.2</p></article>
  <article class="dteg-finding"><p class="dteg-finding__num">03</p><h3>Small, evidence-backed changes consistently beat large redesigns</h3><p>The clearest documented improvement in the project came from one targeted fix, not a rebuild.</p><p class="dteg-finding__ref">Section 5.4</p></article>
  <article class="dteg-finding"><p class="dteg-finding__num">04</p><h3>Accessibility fixes helped everyone, not just the group they targeted</h3><p>Larger text, simplified navigation and voice guidance measurably benefited users with no stated accessibility need.</p><p class="dteg-finding__ref">Sections 3.3, 5.5</p></article>
  <article class="dteg-finding"><p class="dteg-finding__num">05</p><h3>Co-creation only improved products where providers could act on findings</h3><p>Provider readiness turned out to matter as much as the quality of the research itself.</p><p class="dteg-finding__ref">Sections 5.4, 5.7</p></article>
  <article class="dteg-finding"><p class="dteg-finding__num">06</p><h3>The same principles held across two very different tracks</h3><p>Adapting eighteen existing products and validating twelve new ideas before they fully existed, despite different constraints, pace, and starting points.</p><p class="dteg-finding__ref">Section 5.6</p></article>
</div>

## Quick Start: Running Your First User Test in 5 Days {: #quick-start }

If this is your first time running a test and you do not have time to read the full guide first, start here. This gets you through one complete test. Come back to the full section once you've run a session; the details will make more sense with a real test behind you.

<div class="dteg-quickstart">
  <div class="dteg-quickstart__main" data-dteg-stepper>
    <div class="dteg-daybar" role="tablist" aria-label="Five-day path">
      <button class="dteg-day" role="tab" aria-selected="true" data-day="0">Day 1 · Prepare</button>
      <button class="dteg-day" role="tab" aria-selected="false" data-day="1">Day 2 · Recruit and set logistics</button>
      <button class="dteg-day" role="tab" aria-selected="false" data-day="2">Day 3–4 · Conduct sessions</button>
      <button class="dteg-day" role="tab" aria-selected="false" data-day="3">Day 5 · Analyze and share</button>
    </div>
    <div class="dteg-daycard">
      <p class="dteg-daycard__head"><strong data-day-focus>Prepare</strong> <span data-day-label>Day 1</span></p>
      <p data-day-actions>Define 3–5 concrete tasks you want participants to attempt. Confirm the solution/prototype works end to end. Write your screening questions.</p>
      <p class="dteg-daycard__deeper"><span class="dteg-eyebrow">Go deeper</span> <span data-day-deeper>Section 4, Part A/B, Step 1; Screening Template</span></p>
    </div>
  </div>
  <aside class="dteg-checklist" data-dteg-checklist>
    <p class="dteg-checklist__head"><strong>Before you start</strong> <span data-check-count>0 of 5 ready</span></p>
    <div class="dteg-checklist__bar"><span data-check-bar style="width:0%"></span></div>
    <button class="dteg-check" aria-pressed="false">Access to the solution or prototype idea you're testing (working login, test account, or clickable prototype)</button>
    <button class="dteg-check" aria-pressed="false">At least 5 people who match your target user profile: not staff, not friends, not anyone already familiar with the product</button>
    <button class="dteg-check" aria-pressed="false">A quiet space to run sessions, in person or by phone</button>
    <button class="dteg-check" aria-pressed="false">A way to take notes during the session (paper, phone, laptop, whatever you'll actually use consistently)</button>
    <button class="dteg-check" aria-pressed="false">Permission from each participant to take notes on the session (see the Screening Template for the wording)</button>
    <p class="dteg-checklist__foot">If any of these are missing, get them in place before scheduling anything; a rushed test without them produces data you can't trust.</p>
  </aside>
</div>

![Figure 2 — The five-day path to your first user test](assets/five_day_path.png)

!!! warning "Common mistakes that undermine a first test"
    Testing with the wrong people (colleagues, friends, or anyone who already knows how the product works, or who may hesitate to provide honest feedback for fear of disappointing you) will not reflect a real new user. Leading questions ("Was that easy to use?" instead of "Walk me through what you'd do next") get you agreement, not information. Skipping the debrief lets details fade fast, when a 10-minute team debrief right after each session would have captured far more. And running a test without sharing what you found has no impact, however well it was run: a finding that never reaches the solution provider changed nothing.

This Quick Start deliberately leaves out screening rigor, bias mitigation, and the differences between testing an existing product (Part A) versus a brand-new one (Part B). Section 4 covers all of that in full once you're ready for it.

## The Guide, Section by Section

<div class="dteg-sections">
  <a class="dteg-card" href="01-introduction/"><span class="dteg-card__top"><span class="dteg-card__n">1</span><span class="dteg-card__tag">Context</span></span><span class="dteg-card__title">Introduction and Background</span><span class="dteg-card__blurb">What the project set out to do, how it ran, and the coding scheme used throughout.</span></a>
  <a class="dteg-card" href="02-understanding-users/"><span class="dteg-card__top"><span class="dteg-card__n">2</span><span class="dteg-card__tag">Context</span></span><span class="dteg-card__title">Understanding the Users</span><span class="dteg-card__blurb">Who the entrepreneurs are, region by region, and how digital readiness varies.</span></a>
  <a class="dteg-card" href="03-principles/"><span class="dteg-card__top"><span class="dteg-card__n">3</span><span class="dteg-card__tag dteg-card__tag--ref">Standing reference</span></span><span class="dteg-card__title">Principles for Gender-Responsive Design</span><span class="dteg-card__blurb">Principles to design against, with field evidence for each.</span></a>
  <a class="dteg-card" href="04-design-practices/"><span class="dteg-card__top"><span class="dteg-card__n">4</span><span class="dteg-card__tag dteg-card__tag--method">Method</span></span><span class="dteg-card__title">UI/UX Design Best Practices</span><span class="dteg-card__blurb">The full method: Part A for existing products, Part B for new ideas.</span></a>
  <a class="dteg-card" href="05-insights/"><span class="dteg-card__top"><span class="dteg-card__n">5</span><span class="dteg-card__tag dteg-card__tag--method">Evidence</span></span><span class="dteg-card__title">Insights and Learnings</span><span class="dteg-card__blurb">What worked, what did not, and why — the evidence behind the findings.</span></a>
  <a class="dteg-card" href="06-toolkit/"><span class="dteg-card__top"><span class="dteg-card__n">6</span><span class="dteg-card__tag dteg-card__tag--ref">Standing reference</span></span><span class="dteg-card__title">Open-Source Toolkit and Resources</span><span class="dteg-card__blurb">Templates, scripts and checklists you can copy and run with.</span></a>
  <a class="dteg-card" href="07-recommendations/"><span class="dteg-card__top"><span class="dteg-card__n">7</span><span class="dteg-card__tag dteg-card__tag--ref">Standing reference</span></span><span class="dteg-card__title">Recommendations</span><span class="dteg-card__blurb">What hubs, providers and funders should do differently next.</span></a>
  <a class="dteg-card" href="08-business-model/"><span class="dteg-card__top"><span class="dteg-card__n">8</span><span class="dteg-card__tag dteg-card__tag--method">Method</span></span><span class="dteg-card__title">Offering User Testing as a Business</span><span class="dteg-card__blurb">Pricing, packaging and capacity for hubs turning testing into a service.</span></a>
  <a class="dteg-card" href="09-sustaining/"><span class="dteg-card__top"><span class="dteg-card__n">9</span><span class="dteg-card__tag dteg-card__tag--gov">Governance</span></span><span class="dteg-card__title">Sustaining the Open-Source Guide</span><span class="dteg-card__blurb">How the guide is maintained, licensed and contributed to.</span></a>
</div>

<div class="dteg-cta">
  <div class="dteg-cta__text">
    <p class="dteg-eyebrow">Open source</p>
    <h2>This guide is meant to be used, adapted and added to</h2>
    <p>Published under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence. Photographs, logos, and third-party figures are excluded from the licence. See the Imprint and Section 9.5 for full terms and attribution wording.</p>
    <p class="dteg-cta__actions">
      <a class="dteg-btn dteg-btn--blue" href="09-sustaining/">Contribute to the guide</a>
      <a class="dteg-btn dteg-btn--outline" href="imprint/">Imprint and licence</a>
    </p>
  </div>
  <div class="dteg-cta__media"><img src="assets/field-market-phone.jpg" alt="A market trader in Ghana on a phone call at her stall"></div>
</div>

</div>
