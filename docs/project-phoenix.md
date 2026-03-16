---
comments: true
---

# Project Phoenix: A Strategic Migration to Shopify

Executive Briefing & Proposed Path Forward
22-Dec-2026

---

## The Decision: Headed vs Headless

Shopify Plus is confirmed as the platform. The remaining architecture decision - **headed (Shopify Native) vs headless (Decoupled Frontend)** - must be made by **April 1, 2026**.

| Constraint | Detail |
| --- | --- |
| Platform | **Shopify Plus** - decided |
| Architecture Decision Date | **April 1, 2026** |
| Hard Launch Deadline | **August 31, 2026** |
| Effective Build Window | **~5 months** (Apr 14 kickoff → Aug 31 launch) |
| Holiday Freeze | Oct 15 – Jan 5 - do not go live in this window |
| Engagement Model | **Co-development + consultancy** - internal team builds alongside agency |

**The timeline is the primary constraint.** With only ~5 months to build, headless increases engineering scope significantly (checkout routing, shared carts, custom frontend, event mapping). Headed leverages OS2.0 + theme app extensions to move faster.

---

## Core Architecture Options

**Decision Lens:** Speed and cost efficiency vs long-term content and design flexibility.

### Option 1 - Headed (Shopify Native)

- Stack: Shopify Online Store 2.0 | Liquid | React extensions
- Primary Advantage: Fastest path to market with the lowest Total Cost of Ownership
- Business Strengths:
    - Leverages native Shopify capabilities (checkout, promotions, Functions)
    - Lower operational and support complexity
- Business Constraints:
    - Limited flexibility for complex storytelling, long-form content, and advanced campaign layouts
    - Risk of accumulating theme and app complexity over time
- Best Suited For: Commerce-first experiences where speed, stability, and cost control are priorities

### Option 2 - Headless (Decoupled Frontend)

- Stack: Hydrogen / Next.js | Sanity CMS
- Primary Advantage: Maximum control over content structure, design, and frontend behavior
- Business Strengths:
    - Enables richer editorial, brand, and promotional experiences
    - Frontend can evolve independently of commerce backend
- Business Trade-offs:
    - Significantly higher build and ongoing maintenance cost (>$250k estimate)
    - Increased operational complexity and reliance on engineering capacity
- Best Suited For: Brand-led experiences where content flexibility and design control materially drive revenue

---

## Transition & Risk-Management Strategy

Objective: Validate architectural choices while minimizing revenue, delivery, and team risk.

### Phased Migration Approaches

Frontend-First Hybrid:

- Migrate commerce and checkout to Shopify first while retaining the existing frontend
- Reduces "big-bang" launch risk and accelerates Shopify value realization

Pilot-Based Validation (BBBY):

- Use Bed Bath & Beyond as a controlled pilot for Headless + Sanity
- Allows measurement of delivery velocity, content workflows, and maintenance overhead
- Acknowledges short-term architectural inconsistency as a deliberate trade-off

### Delivery & Governance Model

Co-Development with Consultancy:

- Internal teams build alongside an agency rather than fully outsourcing
- Ensures knowledge transfer, shared accountability, and long-term ownership
- Keeps future architectural decisions flexible and reversible

---

## Evaluating Our Agency Partners

### eHouse

Strong Shopify Headed advocates; recommended for straightforward, cost-conscious projects.

Architecture Options presented:

- Headed (Basic Theme)
- Headed (Custom Theme / Lift & Shift)
- Headless (Consultancy-Led by DX teams)
- Headless (Co-Development)

### Domaine

Showcased relevant high-end design work; open to multiple architectural paths including a co-development model.

Delivery Models presented:

- Co-development
- Consulting (Domaine-led)

Architecture Options presented:

- Headed with React
- Headed
- Headless (Hydrogen + Oxygen)
- Headless

### StreamCommerce

Strong discovery work, but no experience in headless and not flexible with co-development.

---

## Voices From the Room

### Summary of Perspectives Raised

Key viewpoints expressed:

### Headed Shopify is the most commonly adopted model

External advisors and industry experience indicate most Shopify implementations use a headed architecture, citing ecosystem maturity and implementation speed.

### Headless is viewed as a longer-term architectural option

Headless approaches are associated with greater flexibility and future-proofing, alongside higher build effort, maintenance, and skill requirements.

### Cost and complexity trade-offs remain unresolved

Headed approaches are generally perceived as lower cost and simpler to operate, while headless value depends on longer-term horizons and scale.

### Many challenges are attributed to execution patterns

Several contributors noted that current pain points stem from how tools are used and governed, rather than the platforms themselves.

### Different roles value different outcomes

Engineering perspectives tend to favor extensibility and control, while marketing and content teams emphasize speed, autonomy, and ease of iteration.

### Hybrid and phased models were raised as viable options

Transitional approaches were discussed as a way to reduce risk while keeping future architectural options open.

---

## Requirements Blueprint

### Consolidated Launch Scope

- 80+ total requirements captured in the consolidated backlog
- ~45 Must-Have requirements define launch scope
- Single backlog is the system of record for priority, status, & ownership

### Requirements by workstream

- Fulfillment, Inventory & Operations - ~27
- Customer & Checkout Experience - ~24
- Marketing & Engagement - ~18
- Product Management & Logic - ~15
- Customer Data, Service & B2B - ~8

### Outcome

- Clear, quantified launch scope
- Aligned ownership across teams

---

## Pillars (Launch-Critical Foundation)

### Pillar A: Fulfillment, Inventory & Operations

- Fulfil OMS integration with full WooCommerce parity (orders, tags, bundle/kit behavior, historical data plan)
- Shipment + return tracking improvements (TrackShip or alternative, Shopify tracking completeness)
- Inventory controls (Safety stock thresholds, shared child SKU allocation priorities)
- Omni operations enablement (BOPIS, replenishment min/max, lost or reship workflows)
- Cross-channel flexibility (buy, pick up, return across channels; inventory consistency)

### Pillar B: Customer & Checkout Experience

- Checkout conversion enablers (Shop Pay express checkout, single-order multi-delivery handling)
- Payments readiness (CA payment continuity, expanded US methods, geo-based rules & fallbacks)
- Promotional mechanics (discount stacking rules, BOGO/bundle refund logic, item-level discount tracking)
- Gifting capabilities (gift card purchase/redemption, optional scheduled send, EN/FR support)
- Self-serve CX improvements (post-order edits, reshipment or lost package inquiry)

---

## Pillars (Growth, Governance & Customer Intelligence)

### Pillar C: Marketing & Engagement (~18)

- Retention & campaign systems (ActiveCampaign/Klaviyo integration, triggers, abandoned cart, deep data sync)
- Influencer/affiliate & tracking continuity (Shopify Collabs, Impact tracking migration)
- Social & discovery channels (TikTok/FB/IG sales channels, Shop App integration)
- Reviews, UGC, & reputation (review platform selection/migration, Google Business Profile continuity)
- Registry & loyalty (MyRegistry, rewards program, top-of-funnel engagement tools)

### Pillar D: Product Management & Logic (~15)

- Bundle & SKU logic parity (SKU builder replication, parent-child mappings, free-gift logic)
- Catalog & data hygiene (legacy SKU cleanup, duplicate UPC handling)
- Product operations tooling (bulk import via CSV, variant standards)
- Product data governance (PIM with audit trail, localization fields, media management)
- Site experience controls (search/filter/merchandising tooling, mobile-first theme requirements, checkout extensibility)

### Pillar E: Customer Data, Service & B2B (~8)

- Support workflow integration (Zendesk order sidebar, refunds from tickets, agent enablement)
- Returns/Warranty integration (ClaimLane pre-population, automated validation, inventory outcomes)
- Customer data foundation (CDP ingestion & identity stitching; CRM single customer view)
- B2B enablement (wholesale ordering portal &/or partner integrations like TSC/Costco via app)

---

## Business Objectives

Remove WooCommerce constraints and establish a Shopify Plus foundation that supports Silk & Snow's growth across CA (EN/FR), US, retail, and B2B.

### Why now

- Rapid growth has outpaced the current platform
- Teams are making high-impact decisions with limited system support
- Manual workarounds increase risk, slow launches, and strain operations

### What this enables

- US and Canada (EN/FR) storefronts with compliant pricing, payments, and routing
- Stable SEO through controlled migration and redirects
- Fulfil integration parity to protect inventory, fulfillment, and finance flows
- Reliable bundle, SKU, and promotion logic across online and POS

### Success looks like

- Fewer operational exceptions and support escalations
- Faster campaign and product launches
- No disruption to fulfillment, inventory, or SEO post-launch

---

## Appendix A - Attributed Perspectives and Observations (Internal Stakeholders)

### Justin G

- Believes the current core stack is largely sufficient.
- Attributes most issues to lack of best practices and governance rather than tooling.
- Notes the team is now better positioned to address these gaps due to growth.

### Justin C

- Generally supportive of headed Shopify from a business perspective.
- Highlights the developer control benefits of headless approaches.

### Alex

- Open to hybrid approaches combining WordPress and Shopify.
- Expresses concerns about WordPress as a long-term CMS when paired with Shopify.
- Views headless CMS options (e.g., Sanity) as more modern and widely adopted by large brands.
- Flags cost uncertainty and complexity in fully headless implementations.

### Sri

- Emphasizes long-term optionality and future disruption risk.
- Notes that maintaining headless capabilities could be valuable if the eCommerce platform landscape changes materially in 5+ years.

### Jason

- Favors lower-risk approaches that maximize use of Shopify-native capabilities.
- Highlights the importance of marketing enablement, CMS usability, and promotion management.
- Calls for further investigation into landing pages, long-form content, redundancy assumptions, and business decision tooling.

### JJ

- Requests a structured 3-year TCO comparison (initiation + ongoing maintenance).
- Emphasizes the need to identify required features first, then validate architectural fit.

### Kavya

- Highlights search, product indexing, filters, and merchandising tooling as near-term priorities (2026 focus)
- Views headed Shopify as potentially advantageous for marketing enablement and operational ease, depending on content and promotion needs
- Supports co-development models with strong QA and shared ownership, rather than pure consultancy-led delivery.

---

## Appendix B - Attributed Perspectives and Observations (External Advisors and Partners)

### eHouse (Consultancy)

- Reports that the vast majority of Shopify clients use headed architectures.
- Positions headed Shopify as simpler, faster to deliver, and more aligned with Shopify's roadmap.
- Estimates significantly higher costs for headless builds, while acknowledging uncertainty and the need for validation.
- Frames headless as offering flexibility but at higher cost and complexity.

### Domaine (Consultancy)

- Presents multiple viable architectural options ranging from headed to headless.
- Highlights marketing, merchandising, and CMS usability as key decision factors.
- Notes potential limitations in promotion stacking and advanced merchandising with Shopify Functions.
- Supports co-development and phased approaches as lower-risk delivery models.

### StreamCommerce (Consultancy)

- Demonstrates strong discovery and requirements rigor.
- Raises concerns around Shopify bloat, analytics attribution, SEO impacts, and third-party plugin constraints.
- Has limited demonstrated experience with headless and co-development models.
- Viewed as competent but less flexible for collaborative delivery.
