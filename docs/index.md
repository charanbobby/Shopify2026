---
comments: true
---

# Shopify 2026 - Project Documentation

Welcome to the Silk & Snow Shopify migration documentation hub.

This site consolidates planning materials, architectural decisions, and developer analysis for **Project Phoenix** - the strategic migration from WooCommerce to Shopify Plus.

---

## Site Map

### [Project Phoenix - Strategic Migration](project-phoenix.md)

Executive briefing and proposed path forward, leading with:

- **The Decision: Headed vs Headless** - constraints table, timeline as primary filter
- Architecture options: Headed (Shopify Native) vs Headless (Decoupled Frontend)
- Transition & risk-management strategy
- Agency evaluations: eHouse, Domaine, StreamCommerce
- Stakeholder perspectives, requirements blueprint, and business objectives

### [Requirements Backlog](requirements-backlog.md)

Full prioritized backlog sourced from Shopify requirements worksheet v4, organized as:

- **Must Have** - 7 epics, 28 items across platform setup, checkout, fulfillment, marketing, and data migration
- **Should Have** - inventory logic, B2B wholesale, loyalty, checkout extensibility
- **Could Have** - HS codes, lot tracking, social sales channels
- **Nice to Have** - CDP, CRM, quizzes, wishlist, lookbook
- **Pending Review** - 12 items awaiting MoSCoW priority assignment (NEW-43 through NEW-57)

### [Migration Decision Framework](decision-framework.md)

Executive go/no-go artifact - recommendation, decision scorecard, agency matrix, TCO, top risks, and timeline. Supporting detail is in linked pages:

| Supporting Document | Contents |
| --- | --- |
| [Integration Complexity Map](integration-map.md) | 22 integrations with headed vs. headless effort ratings |
| [Agency Evaluation Notes](agency-notes.md) | Detailed team observations from agency meetings |
| [SEO Risk Assessment](seo-risk-assessment.md) | 8 SEO risk areas with mitigations |
| [Risk Register & Open Assumptions](risk-register.md) | 11 risks + 12 assumptions requiring validation |
| [Current State Baseline](current-state-baseline.md) | WooCommerce pain points and performance targets |

### [Current S&S Architecture](current-sns-architecture.md)

End-to-end system map of the live WooCommerce stack, covering:

- Perimeter & hosting (AWS EC2, Cloudflare)
- All active integrations across OMS, CX, marketing, finance, and data
- Shopify migration notes: MVP parity integration table and headless reuse opportunity analysis

### [Headless Migration - Developer Analysis](developer-analysis.md)

Developer-focused analysis of the phased migration path, covering:

- **Phase 0** - environment setup and information gathering
- **Phase 1** - product pages served via Shopify Storefront API; WooCommerce handles cart/checkout
- **Phase 2** - cart, checkout, and all integrations migrate to Shopify
- **Phase 3** - WooCommerce removed; PHP upgraded; full Shopify stack
- Key exploratory questions with answers and ClickUp ticket references

---

## Decision Status

| Decision | Status |
| --- | --- |
| Architecture: Headed vs Headless | **Open** - Decision date locked **Apr 1, 2026**; time-to-market now primary filter |
| Agency Selection | **Open** - Decision date **Apr 1, 2026**; engagement model: **co-development + consultancy**; agencies without co-dev track are disqualified |
| Hard Launch Deadline | **Aug 31, 2026** - non-negotiable; ~5-month build window from decision |
| WooCommerce Parallel Run | **Assumed yes** - to be confirmed by dev team |
| US Storefront (Shopify Markets) | **Must Have** - included in backlog |
| CA French / EN-FR Launch | **Must Have** - included in backlog |
| Go-Live Window | **Target Aug 31, 2026** - clears Oct 15 – Jan 5 holiday freeze |

---

## Repository

Source: [github.com/charanbobby/Shopify2026](https://github.com/charanbobby/Shopify2026)
