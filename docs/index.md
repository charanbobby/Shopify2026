# Shopify 2026 — Project Documentation

Welcome to the Silk & Snow Shopify migration documentation hub.

This site consolidates planning materials, architectural decisions, and developer analysis for **Project Phoenix** — the strategic migration from WooCommerce to Shopify Plus.

---

## Site Map

### [Project Phoenix — Strategic Migration](project-phoenix.md)

Executive briefing and proposed path forward, covering:

- Business objectives and success criteria
- Architecture options: Headed (Shopify Native) vs Headless (Decoupled Frontend)
- Agency evaluations: eHouse, Domaine, StreamCommerce, and Self-Build
- Stakeholder perspectives

### [Requirements Backlog](requirements-backlog.md)

Full prioritized backlog sourced from Shopify requirements worksheet v4, organized as:

- **Must Have** — 7 epics, 28 items across platform setup, checkout, fulfillment, marketing, and data migration
- **Should Have** — inventory logic, B2B wholesale, loyalty, checkout extensibility
- **Could Have** — HS codes, lot tracking, social sales channels
- **Nice to Have** — CDP, CRM, quizzes, wishlist, lookbook
- **Pending Review** — 12 items awaiting MoSCoW priority assignment (NEW-43 through NEW-57)

### [Migration Decision Framework](decision-framework.md)

10-section framework for making a confident go/no-go decision on architecture and agency, including:

| Section | Status |
| --- | --- |
| 1. Recommendation | Blank — to be completed once all sections are populated |
| 2. Decision Scorecard — Headed vs. Headless | Criteria and weights defined; scores TBD |
| 3. Total Cost of Ownership | Structure in place; GMV and cost figures TBD |
| 4. Agency Comparison Matrix | eHouse, Domaine, StreamCommerce, Self-Build — key observations populated from team meetings |
| 5. Integration Complexity Map | 15 integrations mapped with Headed vs Headless effort ratings |
| 6. SEO Risk Assessment | 7 risk areas identified with mitigations |
| 7. Risk Register | 8 risks with likelihood, impact, and mitigation owners |
| 8. Go/No-Go Timeline | Milestones defined; dates TBD; holiday freeze hard-blocked Oct 15 – Jan 5 |
| 9. Open Assumptions | 7 assumptions requiring validation before decision is locked |
| 10. Current State Baseline | WooCommerce pain points and site performance targets |

### [Headless Migration — Developer Analysis](developer-analysis.md)

Developer-focused analysis of the phased migration path, covering:

- **Phase 0** — environment setup and information gathering
- **Phase 1** — product pages served via Shopify Storefront API; WooCommerce handles cart/checkout
- **Phase 2** — cart, checkout, and all integrations migrate to Shopify
- **Phase 3** — WooCommerce removed; PHP upgraded; full Shopify stack
- Key exploratory questions with answers and ClickUp ticket references

---

## Decision Status

| Decision | Status |
| --- | --- |
| Architecture: Headed vs Headless | **Open** — Decision Scorecard in progress |
| Agency Selection | **Open** — 3 agencies evaluated + self-build baseline |
| WooCommerce Parallel Run | **Assumed yes** — to be confirmed by dev team |
| US Storefront (Shopify Markets) | **Must Have** — included in backlog |
| CA French / EN-FR Launch | **Must Have** — included in backlog |
| Go-Live Window | **Blocked Oct 15 – Jan 5** (Black Friday / holiday freeze) |

---

## Repository

Source: [github.com/charanbobby/Shopify2026](https://github.com/charanbobby/Shopify2026)
