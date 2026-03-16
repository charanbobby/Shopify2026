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

End-to-end system map of the live WooCommerce stack (hosting, OMS, CX, marketing, finance, data flows).

### [Developer Analysis](developer-analysis.md)

Phased migration plan (Phase 0-3), task lists, and key exploratory questions with answers.

---

## Key Dates

| Milestone | Date |
| --- | --- |
| Architecture & Agency Decision | **Apr 1, 2026** |
| Hard Launch | **Aug 31, 2026** |
| Holiday Freeze (no go-live) | Oct 15 - Jan 5 |

See the [Decision Framework](decision-framework.md) for the full timeline and scorecard.

---

Source: [github.com/charanbobby/Shopify2026](https://github.com/charanbobby/Shopify2026)
