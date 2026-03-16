---
comments: true
---

# Project Phoenix: A Strategic Migration to Shopify

Executive Briefing & Proposed Path Forward

---

## The Decision: Headed vs Headless

Shopify Plus is confirmed as the platform. The remaining architecture decision - **headed (Shopify Native) vs headless (Decoupled Frontend)** - must be made by **April 1, 2026**. See the [Decision Framework](decision-framework.md) for the full timeline and scorecard.

**The timeline is the primary constraint.** With only ~5 months to build (Apr 14 kickoff to Aug 31 hard launch), headless increases engineering scope significantly. Headed leverages OS2.0 + theme app extensions to move faster.

---

## Core Architecture Options

**Decision Lens:** Speed and cost efficiency vs long-term content and design flexibility.

### Option 1 - Headed (Shopify Native)

- Stack: Shopify Online Store 2.0 | Liquid | React extensions
- Fastest path to market with the lowest TCO
- Leverages native Shopify capabilities (checkout, promotions, Functions)
- Constraint: Limited flexibility for complex storytelling and advanced campaign layouts

### Option 2 - Headless (Decoupled Frontend)

- Stack: Hydrogen / Next.js | Sanity CMS
- Maximum control over content structure, design, and frontend behavior
- Frontend can evolve independently of commerce backend
- Trade-off: Significantly higher build and ongoing maintenance cost. See [TCO](decision-framework.md#4-total-cost-of-ownership) for estimates.

---

## Transition & Risk-Management Strategy

### Phased Migration Approaches

- **Frontend-First Hybrid:** Migrate commerce and checkout to Shopify first while retaining the existing frontend. Reduces "big-bang" launch risk.
- **Pilot-Based Validation (BBBY):** Use Bed Bath & Beyond as a controlled pilot for Headless + Sanity. Acknowledges short-term architectural inconsistency as a deliberate trade-off.

### Delivery Model

**Co-Development with Consultancy:** Internal teams build alongside an agency rather than fully outsourcing. Ensures knowledge transfer, shared accountability, and long-term ownership. See [Agency Evaluation Notes](agency-notes.md) for detailed partner assessments.

---

## Business Objectives

Remove WooCommerce constraints and establish a Shopify Plus foundation that supports Silk & Snow's growth across CA (EN/FR), US, retail, and B2B. See [Current State Baseline](current-state-baseline.md) for the full pain-point analysis.

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

## Requirements Blueprint

80+ total requirements captured across 5 workstreams. ~45 Must-Have items define launch scope. See the full [Requirements Backlog](requirements-backlog.md) for details.

| Workstream | Count |
| --- | --- |
| Fulfillment, Inventory & Operations | ~27 |
| Customer & Checkout Experience | ~24 |
| Marketing & Engagement | ~18 |
| Product Management & Logic | ~15 |
| Customer Data, Service & B2B | ~8 |

---

## Voices From the Room

Key themes from stakeholder discussions. See Appendix below for individual perspectives.

- **Headed is the most commonly adopted model** - ecosystem maturity and speed
- **Headless is a longer-term option** - flexibility and future-proofing at higher cost
- **Cost and complexity trade-offs remain unresolved** - depends on time horizon
- **Many challenges are execution patterns**, not platform limitations
- **Different roles value different outcomes** - engineering favors control; marketing favors speed
- **Hybrid and phased models are viable** - reduce risk while keeping options open

---

## Appendix A - Internal Stakeholder Perspectives

| Person | Key Position |
| --- | --- |
| **Justin G** | Current stack is largely sufficient; issues stem from governance gaps, not tooling |
| **Justin C** | Supportive of headed Shopify; acknowledges developer control benefits of headless |
| **Alex** | Open to hybrid approaches; views Sanity as more modern CMS; flags headless cost uncertainty |
| **Sri** | Emphasizes long-term optionality; headless valuable if platform landscape changes in 5+ years |
| **Jason** | Favors lower-risk, Shopify-native approaches; highlights marketing enablement and CMS usability |
| **JJ** | Requests structured 3-year TCO comparison; features first, then validate architectural fit |
| **Kavya** | Search, filtering, and merchandising are 2026 priorities; supports co-dev with strong QA |

---

## Appendix B - External Advisor Perspectives

| Partner | Key Position |
| --- | --- |
| **eHouse** | Vast majority of clients use headed; simpler, faster, aligned with Shopify roadmap; headless significantly more expensive |
| **Domaine** | Multiple viable options; highlights marketing/CMS usability as key factors; supports co-dev and phased approaches |
| **StreamCommerce** | Strong discovery rigor; concerns about analytics attribution and SEO; limited headless and co-dev experience |
