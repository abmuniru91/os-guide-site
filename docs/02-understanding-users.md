# 2. Understanding the Users: Informal Sector Entrepreneurs

*An honest picture of the women whose businesses these tools have to fit.*

## 2.1 The Ghanaian Context: Who the Users Are

Any meaningful work in this space starts with an honest picture of who the users are and what their daily lives look like. This section draws on participant profiles, field observations, and research findings gathered across all project partnerships.

Women micro-entrepreneurs in peri-urban and rural Ghana are not a homogeneous group. They range from young women running digitally powered, retail businesses in Tamale to older traders who have managed market stalls for decades using notebook records and informal networks. They include differently-abled entrepreneurs, smallholder farmers, food processors, hairdressers, tailors, fabric sellers, and agricultural traders. What they share is that most digital solutions were built without any of them in mind.

Critically, the goal of user research in this space is not to produce a "typical female user" profile. The aim is to develop multi-dimensional, intersectional personas that reflect age, geography, caregiving roles, literacy level, digital experience, language, and sector. A one-dimensional profile creates one-dimensional solutions. (Sample composite personas built from project participant data are provided in [Section 6.3](06-toolkit.md#63-sample-user-personas).)

### 2.1.1 Socio-Economic Realities

The businesses involved in the project spanned retail, food processing, agricultural trading, crop e-commerce, inventory management, service provision, and manufacturing. Income streams were often irregular and cash-based. Many participants managed both business and household finances from the same pool of money, which made any financial tool with subscription fees or complex pricing a difficult proposition.

A consistent pattern emerged: a digital tool has to demonstrate visible value fast. If it does not make something easier or more profitable within the first few uses, it gets set aside. This is not resistance to technology; it is entirely rational behaviour from people who cannot afford to waste time or money on tools that do not deliver.

- **Income is often seasonal, informal, or cash-based.** Pay-as-you-go pricing is strongly preferred over subscriptions.
- **Business and household finances frequently overlap.** Tools that track only business transactions can feel incomplete or irrelevant.
- **Mobile data costs are a genuine barrier.** Solutions that consume significant data or require constant connectivity will be abandoned.
- **Time has a direct cash value for traders.** Any tool that slows down a transaction during peak hours will not survive daily use.
- **Access to finance is a recurring challenge.** Intermediary E2 found that when discussing digital tools with participants, women consistently cited access to finance as a major concern alongside tool usability.

Phase 2 testing put numbers behind how severe these constraints are. Among Solution P2's participants (women livestock farmers, Upper East Region), 93% had lost at least one animal to preventable disease within the past year, with reported losses of GHS 300–1,500 per animal: money that, in this context, is often earmarked for school fees or medical costs, not discretionary spending. Among Solution P5's participants (women-led MSMEs, Northern Region), all ten had been turned down by at least one formal lender in the past twelve months and were paying 40–60% interest on informal loans as a result. Solution P4's later validation in Ashanti Region added a frequency measure: its thirty farmer participants reported livestock health problems roughly once every two months, peaking in the rainy season. Figures like these are why pay-as-you-go pricing and low switching costs are not a nice-to-have for this user group; they are testing against a baseline of real, recurring financial precarity.

### 2.1.2 Cultural and Gender Dynamics

Trust networks are central to how women in these communities evaluate and adopt new tools. Both Intermediary N3 and Intermediary N1 found that women are far more likely to try something new when it is introduced by a peer, a market queen, or a trusted association leader than through a general advertisement or cold outreach. Solutions endorsed by familiar institutions consistently had higher uptake.

Caregiving and domestic responsibilities also shape adoption directly, not just as background context. Solution P2's testing surfaced this starkly in a comparison between two participants with the same underlying problem: *"The men can go to town and find help. But I have children to care for and cooking to do. I cannot leave my home for a whole day to chase a vet."* A design or service model that assumes a user can freely travel or step away is, in practice, assuming away a constraint that falls disproportionately on women in this user group.

Phone access itself can be gendered within a household. Solution P2's team also found that some women farmers shared a phone with a husband or older child, which shaped who could act on a time-sensitive notification and when. Solution P4's validation recorded the same dynamic from the other side: where older farmers struggled with the USSD menus, younger family members submitted requests on their behalf, an assisted-use pattern that service design for this population should expect and support.

Privacy matters. Shared household phones mean that some women cannot store business records on their personal device without those records being visible to family members. Solutions with PIN-protected sections, quick logout features, or separate profiles for business and personal use received noticeably more positive responses. Intermediary E1 specifically flagged shared device use as a design constraint that affects both privacy and the simplicity of onboarding flows.

Language is both a practical issue and a dignity issue. Using English as the sole language of a platform signals to many users that the product was not designed for them. Intermediary E2 found that even participants who spoke English preferred interacting in their local language during research sessions, because it enhanced engagement and produced more candid, detailed responses.

Intermediary N4's experience in Northern Ghana pointed to the relevance of cultural commercial practices. The concept of *jara* (a small goodwill addition given to loyal customers beyond the formal transaction) is embedded in how women traders think about customer relationships. A cashback loyalty platform like Solution S5 aligned directly with this cultural practice, which influenced how participants evaluated its relevance and appeal.

!!! quote "Field observation — Intermediary N1 + Solution S1 (Tamale, 2025)"
    During initial user testing, the password setup on Solution S1 was causing login failures before participants had even seen the app's core features. Once simplified, a validation participant put it plainly: *"This time I got in within less than a minute."* (The full co-creation cycle behind this fix, and why it became this guide's model for writing evidence-backed recommendations, is in [Section 4, Part A, Step 3](04-design-practices.md#step-3-analysing-results-and-adapting-uiux).)

### 2.1.3 Digital Literacy and Business Acumen

The participant cohorts in the project showed a wide range of digital experience. Among Intermediary N1's group in Tamale, 60 percent had basic or secondary school education, 30 percent had tertiary qualifications, and 10 percent had postgraduate qualifications. Digital literacy did not map neatly onto formal education: some participants with secondary schooling were confident mobile money users, while some with higher qualifications had very limited app experience.

Intermediary E2 made an observation that proved consistent across the project: literacy levels do not correlate with business acumen. Many participants with limited formal education demonstrated a sharp understanding of how to maximize profits, manage customer credit, and track stock. They were not digitally excluded because they lacked business intelligence; they were excluded because the tools were not designed for how they work.

Solution S11 testing by Intermediary A2 found that women micro-entrepreneurs increasingly have smartphones and can navigate through features when those features meet the needs of their business. The issue was not capability, it was relevance and accessibility.

A pattern emerged consistently across sites: even participants comfortable with mobile phones struggled when they encountered unfamiliar interface structures. Creating an account, navigating multi-step forms, and interpreting icon meanings were common pain points regardless of overall digital confidence.

!!! quote "Field observation — Intermediary A1 + Solution S9 (Ashanti Region, 2025)"
    Intermediary A1's validation of the Solution S9 platform found that mobile-number-based login was successfully completed by all participants. However, 61.5% of participants needed assistance during initial sign-up, and the inventory update task had a 36.4% failure rate. Font and icon sizes were repeatedly flagged as too small, particularly for older participants. Five participants specifically requested voice features to guide them through key workflows. *"Confused about the interface"* and *"Saw lots of options so I got confused"* were the most common responses from participants encountering the platform for the first time.

**Implications:**

- **Simplify onboarding.** The first experience with a product should be completable without any external help.
- **Use large, clearly labelled buttons.** Small icons without text labels create confusion, particularly outdoors.
- **Show clear confirmation messages.** Participants frequently could not tell whether an action had succeeded or failed.
- **Allow easy error recovery.** Fear of making irreversible mistakes was one of the most consistent reasons participants avoided exploring a feature.
- **Fix bugs promptly.** Intermediary E1 noted that unresolved bugs undermine user trust rapidly, especially among first-time app users.

### 2.1.4 Environmental and Operational Context

Market stalls, roadside kiosks, home-based workshops, salons, hairdressing shops, and farm storage facilities are not comfortable environments for extended digital interaction. Screens are hard to read in direct sunlight. Background noise makes audio features unreliable. Customers arriving interrupt any task, meaning tools must support quick pauses and easy resumption.

Most participants were multitasking constantly. A payment app requiring five taps to record a transaction is genuinely harder to use than a notebook when a customer is standing in front of you. The design bar for replacing informal methods is higher than many developers appreciate.

- **Design for interruption.** Tasks must be saveable and resumable without data loss.
- **Minimise steps per common action.** Recording a sale or checking a balance should take no more than two to three taps.
- **Optimise for outdoor visibility.** High-contrast text and large fonts are not optional features.
- **Optimise for low-specification Android devices.** Many participants used entry-level or second-hand smartphones. Solutions must perform on these devices.
- **Test in realistic environments.** Office or hub testing will not surface connectivity, lighting, or interruption issues that appear in actual market conditions.

### 2.1.5 Trust, Perceived Value, and Safety

Trust has to be earned before a solution can be adopted. Participants in the project were generally cautious about apps that asked for personal data, financial information, or access to contacts without explaining why. Intermediary N2 found that building trust through transparent communication about security, data privacy, and fraud protection was as important as the functional design of the solution.

!!! quote "From the field"
    *"With the provision of available customer reps to help me, I no longer feel intimidated by the app in any way."*

    — Validation participant, Solution S1, Tamale, 2025.

Perceived value also operates on an emotional level. Women who felt that a solution had been designed with their needs in mind were more engaged and more forgiving of minor issues. Women who encountered interfaces that felt condescending or unnecessarily complex were much less likely to persist. Intermediary A2's Solution S11 research found that women prioritize what is important to them in terms of app use and are eager to improve their digital capabilities when it clearly benefits their business.
