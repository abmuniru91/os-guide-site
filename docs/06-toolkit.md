# 6. Open-Source Toolkit and Resources

This section is the practical reference: the design framework, functional patterns, checklists, and templates that put Sections 2–5 into practice. Use it as a standing reference at every stage of a project, not only when the guide's narrative order reaches it.

!!! tip "Short on time? Start with the Checklist (6.4), not the full Framework (6.1)."
    The Checklist compresses this whole section into yes/no prompts you can run through in minutes. Come back to 6.1's framework and 6.2's patterns when a checklist item needs more context than a single line can give.

## 6.1 UX/UI Design Framework

### 6.1.1 Language and Literacy

Products that operate only in English in communities where Twi, Dagbani, Dagban, Gonja, Mampruli, Dangme, Ga, or Ewe is the working language are inaccessible by design (see Section 3.3 for the underlying evidence). Intermediary A2 recommended Twi and English bilingual options as a minimum for solutions deployed in the Ashanti and Greater Accra areas. Intermediary N4 specifically cited Dagban and Gonja for solutions targeting Northern communities. Intermediary N1 cited Dagbani, Mampruli, and Gonja for the Tamale ecosystem. Intermediary A2's Solution S11 recommendations went further, naming Twi, Ga, Ewe, Hausa, and English as the full range of languages solutions operating at national scale would need to consider.

- Prioritize local language for onboarding flows, payment confirmations, and error messages.
- Use plain, concrete language throughout. "Today's Sales" is clearer than "Revenue Summary." "Stock Remaining" is clearer than "Inventory Balance."
- Test comprehension of icons and symbols explicitly. Do not assume standard interface icons carry the same meaning across cultural contexts.
- Provide audio support for key instructions where literacy levels are low.
- Work with local language experts on translations, not just automated tools.

### 6.1.2 Connectivity and Offline Functionality

Every partnership encountered connectivity as a usability barrier. The most workable model identified across the project was local storage with background synchronization: the app stores data locally and syncs when connectivity is restored, without requiring any user action.

- Core functions must work without an active internet connection.
- Synchronize automatically when connectivity is restored.
- Show connection status clearly within the app.
- Minimize data requirements. Optimize images and load sizes for slow connections.
- For some contexts, provide USSD access as an alternative to app-only access.

### 6.1.3 Privacy and Safety

Shared-device use is a documented constraint for this user group (Section 2.2.2) — translate it into product requirements directly:

- Include a quick-logout or session lock option.
- Allow PIN-protected access to financial data.
- Provide a plain-language privacy explanation during onboarding.
- Build clear communication about security features, data privacy measures, and fraud protection into the product itself.

### 6.1.4 Onboarding and Support

Building on Section 2.2.3's onboarding findings: multiple intermediaries recommended short explainer videos in local languages as the most effective onboarding support tool for this user group. Intermediary E1 recommended a clear animated introduction to the solution before presenting features, breaking down functionality with step-by-step demonstrations using real-life examples, and adding tooltips and contextual help for every major feature.

!!! quote ""
    *"Just knowing that someone is there to call if I get stuck makes me more willing to try things on my own."* — Validation participant, Tamale, 2025.

Human customer support, as introduced by Solution S1, was seen as reassuring even by participants who never needed to use it. The mere presence of a support option changed willingness to explore the platform.

### 6.1.5 Time-Sensitivity and Task Efficiency

Time pressure on this user group is well established by this point (Sections 1.2, 2.2.4) — the practical translation is to make speed a design constraint, not an afterthought. Intermediary A2's observations confirmed that features which save time are adopted faster than features that are functionally rich but slower to use.

- Common actions must be completable in two to three steps.
- Support partial task completion. If a user is interrupted mid-process, their progress should be saved.
- Provide automated receipts and quick-entry sales logs to reduce transaction recording time.
- Avoid unnecessary confirmation screens for non-destructive actions.

### 6.1.6 Designing for Differently-Abled Users

See Section 3.3 for the evidence behind this. In practice: budget for text size, colour contrast, touch target size, audio guidance, and navigation simplicity from the outset, not as a retrofit — these requirements go beyond standard adjustments for low-literacy users, and the target population for gender-responsive design is not a single category.

### 6.1.7 Financial Tools for Independence and Inclusion

Intermediary A2's work across both Kumasi and Accra highlighted a specific design need: tools that support women's financial independence and separation of business and household finances. Features that help women track business revenue distinctly from household expenditure, manage customer credit, set savings goals, and generate simple financial summaries were consistently valued by participants. Intermediary E3's work with Solution S8 addressed a related challenge: peer-based credit access for women entrepreneurs in the Lower Manya, Asuogyaman, and Yilo Krobo districts.

- Include tools for savings goals, expense tracking, customer credit management, and digital receipts.
- Provide clear separation between business and household finance tracking.
- Consider P2P and community credit mechanisms alongside individual savings tools.

### 6.1.8 Including Women in the Design Process

See Section 3.4 — the recommendations there apply directly here without restatement.

### 6.1.9 Visual Design Guidelines

**Colour.** Avoid gender stereotypes in colour choices — pink or pastel palettes to signal a product is "for women" are reductive and often counterproductive in professional business contexts. Colour choices should be brand-driven and context-specific, chosen for legibility and trustworthiness rather than gender signalling; high-contrast for outdoor readability on small screens; and consistent with local visual conventions where relevant, since colour associations vary by cultural context.

**Typography.** Use readable, trustworthy font faces — decorative or script fonts are inappropriate for functional interfaces. Minimum body text of 14–16pt for interfaces used on small or older devices. Ensure adequate line spacing to prevent text density from becoming a barrier for lower-literacy users. Label all interactive elements with text, not just icons.

**Imagery.** Use diverse representation — avoid imagery that reflects only one demographic, age group, or business type. Show realistic business scenarios rather than overly staged or aspirational stock imagery. Reflect the actual environments users work in: markets, workshops, farms, and home-based businesses. Where illustrating digital interfaces, ensure the illustrations match the actual product experience.

### 6.1.10 Cultural and Global Context

This guide is grounded in the Ghanaian context, but the principles it contains have relevance beyond Ghana. For practitioners adapting this guidance elsewhere:

- Infrastructure limitations differ by region. Connectivity, electricity reliability, and device type all vary. Assessment of local conditions must precede design decisions.
- Language accessibility requirements change by geography. What works in Greater Accra may not work in Tamale or in a different country entirely. Always research local language landscapes before deciding on language strategy.
- Cultural norms around money, privacy, and community obligation vary significantly. Design patterns that leverage community trust in one context may not map onto another.
- Gender dynamics are shaped by specific local, cultural, and legal contexts. Intersectional analysis of who the actual users are is always the starting point, not an assumption borrowed from another setting.

Where this guide is applied outside Ghana, treat it as a framework for asking the right questions rather than a set of answers that transfer without adjustment.

## 6.2 Functional Design Patterns

These patterns are not prescriptive — they represent areas where thoughtful design creates disproportionate value for this user group. They should inform product prioritization rather than dictate feature lists.

**Payment integration.** Mobile money is the dominant financial infrastructure for women micro-entrepreneurs in Ghana. A digital business tool that does not integrate with MTN Mobile Money, Vodafone Cash, or AirtelTigo Money is operating outside the financial ecosystem participants actually use. Integrate at the point of transaction, not as a separate export step; support multiple mobile money operators, since preferences vary by region; display transaction confirmations in local language; allow offline payment recording with sync when connectivity returns. Intermediary N4 specifically recommended mobile money integration for Solution S5 platform, noting that trust and convenience were both served by connecting loyalty features to payment infrastructure women already trusted.

**Social media and customer connectivity.** Many women micro-entrepreneurs already use WhatsApp and Facebook for business communication, customer outreach, and order management. Allow sharing of receipts, product listings, and promotions via WhatsApp; support community features for group sharing, peer referral, and business visibility within trusted networks; provide templates for customer communication features, since blank text fields are a barrier while guided templates are a bridge. Intermediary A2 found that women who could share sales records and product updates through familiar channels were more likely to use a business management tool consistently.

**Booking, scheduling, and service management.** Service-based businesses — hairdressers, tailors, caterers, coaches — have specific scheduling and customer management needs that product-focused tools often do not address. Booking and appointment management features are high-value; reminders to both provider and customer reduce no-shows; simple customer record management (contact details, order history, outstanding credit) is consistently requested.

**Content creation and business communication.** Women entrepreneurs increasingly need to create promotional content, course materials, and service descriptions for digital channels. Ready-made templates for common business communication tasks reduce cognitive load; simple image and text creation tools that integrate with social sharing are valued for promotional purposes. Intermediary N4's bulk SMS testing revealed that pre-written message templates with simple customization were the feature participants were most enthusiastic about.

**Onboarding designed for gradual scaling.** The best onboarding experiences in the project were those that started small — a participant who successfully completes one or two transactions on their first day is far more likely to return than one presented with the full feature set immediately. Introduce features progressively; provide sector-specific examples during onboarding (a food trader should see food-trading examples, not generic business terminology); allow users to reach a meaningful first success within the first five minutes of use. Intermediary E1 recommended breaking down functionality with step-by-step demonstrations using real-life business examples, building confidence before complexity.

## 6.3 Sample User Personas

These personas are composite profiles developed from participant data collected across the DTEG project. They are not based on any single individual. They illustrate the range of user profiles that gender-responsive digital solutions in peri-urban Ghana need to serve. The goal is not a single "typical female user" but a set of multi-dimensional profiles reflecting genuine diversity in age, geography, caregiving roles, literacy, digital experience, and sector.

**Persona 1 — Abena.** Age 34. Location: Tamale, Northern Region. Business: second-hand clothing market stall. Education: Secondary school (SHS). Languages: Dagbani, Hausa, basic English. Digital access: shared Android smartphone, uses MTN Mobile Money daily. Goals: manage customer credit records, send payment reminders, build loyalty with repeat customers. Key barriers: English-only interfaces, poor outdoor readability, five-step transaction flows that interrupt customer service. *"I need something that works as fast as the customer pays. If it takes longer than writing it down, I stop using it."*

**Persona 2 — Maame.** Age 52. Location: Kumasi peri-urban, Ashanti Region. Business: food processing (palm oil, groundnut paste). Education: primary school only. Languages: Twi first language; no English. Digital access: her own basic Android phone; uses mobile money but no apps beyond messaging. Goals: track stock levels, know when to reorder, receive payments from buyers remotely. Key barriers: all-English interfaces, small font sizes, complex registration requiring email address. *"When they show me in Twi and big letters, I can do it. When it is small English, I give up."*

**Persona 3 — Akosua.** Age 28. Location: Lower Manya, Eastern Region. Business: hairdressing salon and braiding. Education: technical college graduate. Languages: Twi, Dangme, English. Digital access: personal smartphone, active on WhatsApp and Facebook for business. Goals: manage appointments, reduce no-shows, promote services to new customers, separate business income from personal spending. Key barriers: booking tools not integrated with WhatsApp, subscription fees she cannot predict month-to-month. *"I already manage my customers on WhatsApp. I want a tool that connects with that, not replaces it."*

## 6.4 Gender-Responsive UI/UX Checklist

Use this checklist at every stage of product design and adaptation. It is not a substitute for field research, but a prompt for the questions that field research should be answering.

!!! warning "Common Pitfall: Treating this checklist as a substitute for field testing, not a prompt for it."
    Every line below restates something the DTEG project learned by watching real participants use real products. Ticking every box in a meeting room, without testing any of it with actual users, produces a checklist that passed and a product that still fails in the field.

**Accessibility and literacy**

- Core user flows are available in at least one local language of the deployment area
- All interface text uses plain, concrete language with no unexplained jargon
- Font sizes are readable on small screens and in outdoor conditions (minimum 14pt body text)
- Colour contrast meets or exceeds WCAG 2.1 AA standards
- All interactive elements are labelled with text, not icons alone
- Audio guidance or voice features are available for key workflows
- Visual response scales and illustrated instructions are provided where text literacy is limited
- The product is tested on low-specification Android devices representative of the target user group

**Operational realities**

- Core functions work without an active internet connection
- Data synchronizes automatically when connectivity is restored
- Connection status is visible within the app
- Common actions can be completed in no more than two to three steps
- Partial task completion is saved if the user is interrupted
- Data consumption is minimized for slow connections and limited data plans
- The product performs acceptably on entry-level smartphones from 2019 onwards

**Trust and safety**

- Pricing and subscription terms are displayed clearly before sign-up
- Privacy policy is explained in plain language during onboarding
- PIN-protected or password-protected access to financial or personal data is available
- Quick logout or session lock is accessible within the main navigation
- Security features are communicated within the product, not only in documentation
- Human support contact is visible and accessible from the main interface

**Cultural and gender responsiveness**

- Visual design avoids gender stereotypes (not using pink or pastel schemes to signal "female")
- Imagery reflects diverse representation across age, geography, and business type
- Imagery shows realistic business environments rather than staged stock photography
- The onboarding flow uses sector-specific examples relevant to the target user's actual business
- Community and social features are considered alongside individual transaction features
- Shared device use has been accounted for in the privacy and profile architecture
- Women were involved in ideation or co-design activities, not only in testing
- The product has been tested with differently-abled participants

## 6.5 Participant Screening Template

This template can be adapted for telephone or in-person screening. Translate into local language before use. Use as a guide for conversation, not a rigid questionnaire.

1. Business type and main products/services
2. How long the business has been running
3. Primary business location (market, shop, home-based, mobile)
4. Whether they own or have regular access to a smartphone
5. Which mobile money service they use (if any)
6. Whether they currently use any apps for business (and which ones)
7. Preferred language for the session (offer all available options)
8. Availability and preferred session time
9. Whether they have any accessibility requirements (vision, hearing, mobility)
10. Whether they are comfortable being observed and having their session notes recorded (with anonymisation)

After screening, confirm: session date, time, and location; what to bring, if anything; that the session is about improving the product, not testing the participant; that participation is voluntary and they can stop at any time; and that their name will not appear in any reports or publications.

## 6.6 Usability Testing Observation Sheet

Complete one sheet per participant per session. Record observations in real time. Do not interpret during the session — record what you see and hear.

**Session details:** Participant reference number (do not use name) | Date and location | Facilitator name | Note-taker (if separate) | Solution being tested | Session start and end time.

**Task observation log.** For each task (use one block per task, typically 3–4 tasks per session), record: task name; completion status (yes / with help / no); time taken (approximate); observed behaviours (hesitations, workarounds, errors); participant quotes.

**Post-task questions:** What was easy about this task? What was difficult? What would you change if you could? Would you use this feature regularly — why or why not? Overall impression of the session, in the participant's own words.

**Facilitator observations:** Note anything not captured in the task log — participant affect, confidence changes, moments of engagement or disengagement, environmental factors.

## 6.7 Ghana-Specific Localization Resources

**Language and translation by region.** Upper East Region — Dagbani, Mampruli, Gonja (Intermediary N1, Tamale-based operations — see Section 1.3's note on N1's region coding). Northern Region — Dagbani, Dagban, Mampruli, Gonja, Hausa (relevant intermediaries: Intermediary N4, Intermediary N3, Intermediary N2). Eastern Region — Twi, Dangme, Ewe, English (Intermediary E3, Intermediary E1, Intermediary E2). Ashanti Region — Twi, English (Intermediary A2, Intermediary A1, Intermediary A3, Intermediary A4, Intermediary A5). Greater Accra — Twi, Ga, Ewe, Hausa, English (Intermediary A2, secondary testing site).

**Payment standards and mobile money integration.** Mobile money is the dominant payment infrastructure for this user group. MTN Mobile Money (MoMo): largest network, available nationwide, highest usage among project participants. Vodafone Cash: significant presence in Southern Ghana. AirtelTigo Money: relevant in Northern and rural areas. Integration standard: the [Ghana Interbank Payment and Settlement Systems (GhIPSS)](https://ghipss.net/) provides the interoperability layer between mobile money providers — solutions should support GhIPSS-compliant APIs to enable cross-network transactions.

**Cultural symbols and visual conventions.** Adinkra symbols are widely recognized in Ghanaian visual culture and can be used purposefully in interface design, with appropriate understanding of their meanings. The colour green carries positive financial associations in some contexts (linked to savings and growth). Photographs and illustrations should reflect actual market and business environments — rural and peri-urban settings are underrepresented in stock imagery libraries and may require original photography.

**Connectivity and infrastructure data sources.** [National Communications Authority (NCA) Ghana](https://nca.org.gh/) — quarterly statistics on mobile penetration and internet access. [GSMA Intelligence](https://www.gsmaintelligence.com/) — regional mobile data including gender gap analysis. [Ghana Statistical Service](https://www.statsghana.gov.gh/) — demographic and socioeconomic data from the 2021 Population and Housing Census. [World Bank Open Data](https://data.worldbank.org/) — economic indicators and financial inclusion data.

## 6.8 Glossary of Key Terms

**Co-creation:** A participatory design process in which users, researchers, and developers work together to identify problems, generate solutions, and test adaptations. In the DTEG project, co-creation took place between intermediary organizations and solution providers based on evidence from user testing sessions.

**Digital literacy:** The ability to use digital tools, including smartphones and applications, to accomplish tasks. In this guide, digital literacy is treated as a spectrum rather than a binary.

**Field validation:** The process of testing a digital solution in participants' actual work environments after co-creation adaptations have been made.

**Gender-responsive design:** A design approach that takes into account how gender shapes users' experiences, constraints, and needs. It is not synonymous with designing specifically for women, but with designing in ways that are aware of and responsive to the ways gender affects technology use.

**Intermediary organization:** In the DTEG project, one of twelve Ghanaian organizations selected to conduct user research, facilitate co-creation, and validate digital solutions on behalf of the project.

**Iterative testing:** A cycle of testing, feedback, adaptation, and re-testing that allows design improvements to be assessed in sequence.

**MSME:** Micro, Small, and Medium Enterprise. In this guide, the primary focus is on micro-enterprises: businesses with fewer than five employees and limited formal registration, typically run by a single owner-operator.

**Peri-urban:** Areas on the edges of urban centres with mixed urban and rural characteristics — in Ghana, communities adjacent to cities like Tamale, Kumasi, and Accra with some urban infrastructure but not fully integrated into the urban economy.

**Task completion rate:** The proportion of participants who successfully complete a defined task during usability testing without external assistance.

**Think-aloud protocol:** A usability testing method in which participants verbalize their thoughts, reactions, and questions as they complete a task.

**Usability testing:** Structured sessions in which participants attempt to complete defined tasks using a digital solution while a facilitator observes and records their experience.

**USSD:** Unstructured Supplementary Service Data — a communication standard enabling basic digital interactions through mobile phone networks without requiring an internet connection.

**UX/UI:** See Section 2.1.

**Validation:** See Field Validation above.
