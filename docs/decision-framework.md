# Migration Decision Framework

This page captures the key inputs needed to make a confident go/no-go decision on Shopify migration and the headed vs. headless architecture choice. The Recommendation at the top is completed last — once Sections 2–10 are populated, record the final decision there.

---

## 1. Recommendation

> To be completed once Sections 2–10 are populated.

| Field | Value |
| --- | --- |
| Recommended Architecture | TBD — Headed / Headless |
| Recommended Agency | TBD |
| Decision Date | TBD |
| Decision Made By | TBD |
| Next Action | TBD |
| Rationale | TBD |

---

## 2. Decision Scorecard — Headed vs. Headless

> Score each criterion 1 (poor) to 5 (excellent). Weighted Score = Weight × Score.

| Criteria | Weight | Headed Score | Headed Weighted | Headless Score | Headless Weighted | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Speed to Market | 20% | | | | | Headed faster by ~6–12 months |
| Total Cost — Year 1 | 15% | | | | | |
| Total Cost — Year 3 | 10% | | | | | |
| Content & Design Flexibility | 15% | | | | | |
| SEO Continuity Risk | 15% | | | | | Headed lower risk |
| Internal Team Capacity | 10% | | | | | |
| Integration Complexity | 10% | | | | | Headless adds overhead on checkout-adjacent integrations |
| Revenue Risk During Cutover | 5% | | | | | |
| **Weighted Total** | **100%** | | **TBD** | | **TBD** | |

---

## 3. Total Cost of Ownership

> Context: All cost estimates should be anchored against annual GMV. Populate GMV first — cost figures are meaningless without it.

| Metric | Value |
| --- | --- |
| Annual GMV (CA + US) | TBD |
| Shopify Plus GMV Fee Threshold | $800K USD/month (~0.25% above) |

### Current State (WooCommerce Baseline)

| Cost Category | Annual Cost | Notes |
| --- | --- | --- |
| Hosting & Infrastructure | TBD | |
| Plugin & License Fees | TBD | |
| Development & Maintenance | TBD | |
| Agency / Contractor Support | TBD | |
| **Total Current Annual Cost** | **TBD** | |

### Option 1 — Headed (Shopify Native)

| Cost Category | Estimate | Notes |
| --- | --- | --- |
| Shopify Plus License | ~$27,600/year | ~$2,300/month billed annually |
| Shopify Plus GMV Fee | TBD | 0.25% above threshold |
| Theme Development | TBD | One-time |
| App Subscriptions | TBD | Monthly recurring |
| Data Migration (products, customers, orders) | TBD | One-time |
| Agency / Build Fees | TBD | |
| Ongoing Maintenance | TBD | Annual |
| **Total Year 1 Cost** | **TBD** | |
| **Total Year 3 Cost** | **TBD** | |

### Option 2 — Headless (Decoupled Frontend)

| Cost Category | Estimate | Notes |
| --- | --- | --- |
| Shopify Plus License | ~$27,600/year | ~$2,300/month billed annually |
| Shopify Plus GMV Fee | TBD | 0.25% above threshold |
| Build Cost | >$250,000 | One-time estimate — unvalidated |
| Frontend Infrastructure | TBD | CDN, hosting |
| Dedicated Frontend Engineering | TBD | Ongoing annual cost |
| Data Migration (products, customers, orders) | TBD | One-time |
| Agency / Build Fees | TBD | |
| **Total Year 1 Cost** | **TBD** | |
| **Total Year 3 Cost** | **TBD** | |
| **Break-Even vs Headed (years)** | **TBD** | At what year does headless ROI exceed the cost premium? |

---

## 4. Agency Comparison Matrix

> Criteria are weighted by importance. Scores are 1–5. Weighted score = Weight × Score.

| Criteria | Weight | eHouse | Domaine | StreamCommerce |
| --- | --- | --- | --- | --- |
| Shopify Plus Partner Status | 15% | TBD | TBD | TBD |
| Headless Experience | 20% | Low — positions headed as default | Strong — presents multiple arch options | Limited — not demonstrated |
| Headed / Shopify Native Experience | 15% | Strong | Strong | Strong |
| Co-Development / Shared Ownership Model | 15% | TBD | Supports phased, co-dev | Less flexible for collaboration |
| Estimated Build Cost | 15% | TBD | TBD | TBD |
| Estimated Timeline | 10% | TBD | TBD | TBD |
| Data Migration Experience | 5% | TBD | TBD | TBD |
| Post-Launch Support Model | 5% | TBD | TBD | TBD |
| **Weighted Score** | **100%** | **TBD** | **TBD** | **TBD** |

---

## 5. Integration Complexity Map

| Integration | Shopify Native Equivalent | Headed Effort | Headless Effort | Status |
| --- | --- | --- | --- | --- |
| Fulfil (OMS) | Custom API | High | High | TBD |
| Zendesk | Native Shopify App | Low | Medium | TBD |
| ClaimLane (Returns/Warranty) | Custom / TBD | High | High | TBD |
| ActiveCampaign / Klaviyo | Native Shopify App | Low | Medium | TBD |
| TrackShip | Native Shopify App | Low | Medium | TBD |
| Zowie Chatbot | TBD | Medium | Medium | TBD |
| Impact Radius | Custom Pixel / App | Medium | Medium | TBD |
| RaveCapture / Review Platform | TBD (Judge.me / Junip options) | Medium | Medium | TBD |
| Affirm & PayPal Financing | Native payment methods | Low | High (checkout ownership) | Affirm CA live |
| Google Merchant Center | Native Shopify Feed | Low | Medium | TBD |
| Sprout Social | TBD | Low | Low | TBD |
| Dscopify (B2B) | Shopify B2B / Dscopify App | Medium | High | TBD |
| Shopify Collabs | Native | Low | Medium | TBD |
| MyRegistry | TBD | Medium | Medium | TBD |
| Planet App (carbon shipping) | Native Shopify App | Low | Medium | TBD |

> Note: Headless effort is generally higher for checkout-adjacent integrations (payments, upsells, discount logic) because the storefront no longer uses Shopify's native checkout flow directly.

---

## 6. SEO Risk Assessment

| Area | Current State | Risk Level | Mitigation |
| --- | --- | --- | --- |
| Organic Traffic Value (monthly) | TBD | — | |
| High-Value URLs requiring redirects | TBD | High | Full redirect map before go-live |
| CA French / EN-FR hreflang | TBD | High | Validate hreflang on staging before launch |
| Blog & Content Migration | TBD | Medium | Map all content URLs; preserve slugs where possible |
| Canonical URL Strategy | TBD | Medium | Define canonical rules for CA vs US markets |
| Structured Data / Schema | TBD | Medium | Audit and reimplement post-migration |
| Site Speed Impact Post-Migration | Headed likely neutral; Headless likely improved | Medium | Run CWV benchmarks on staging |

---

## 7. Risk Register

| Risk | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| Headless build exceeds $250k estimate | High | High | Get fixed-fee SOW; define scope freeze date | TBD |
| SEO ranking drop post-migration | Medium | High | Full redirect map + staging CWV audit before go-live | TBD |
| Fulfil OMS integration delayed | Medium | High | Parallel-run WooCommerce + Shopify during Phase 1 | TBD |
| ClaimLane not compatible with Shopify | Medium | Medium | Validate in Phase 0; identify fallback returns platform | TBD |
| CA French (EN-FR) hreflang errors | Medium | Medium | Dedicated QA pass on bilingual routing before launch | TBD |
| Go-live during peak season causes revenue disruption | Low | Very High | Hard block on Oct 15 – Jan 5 launch window | TBD |
| Agency delivery delays | Medium | High | Define milestone-based payment schedule in SOW | TBD |
| Internal team bandwidth insufficient for co-development | Medium | Medium | Define internal headcount commitment before contract | TBD |

---

## 8. Go/No-Go Timeline

| Milestone | Target Date | Owner | Status |
| --- | --- | --- | --- |
| Architecture Decision Made | TBD | | |
| Agency Selected | TBD | | |
| Contract / SOW Signed | TBD | | |
| WooCommerce Contract Expiry | TBD | | |
| Development Kickoff | TBD | | |
| Data Migration Cutover Date | TBD | | |
| UAT / Staging Launch | TBD | | |
| Staff Training Completed | TBD | | |
| Soft Launch | TBD | | |
| Production Hard Launch | TBD | | |
| Black Friday / Holiday Freeze (avoid go-live) | Oct 15 – Jan 5 | | Do not go live in this window |
| Peak Season Post-Mortem | TBD | | |

---

## 9. Open Assumptions

| Assumption | Needs Validation By | Status |
| --- | --- | --- |
| Headed Shopify can support all Must-Have requirements natively or via apps | Agency discovery phase | TBD |
| Headless build cost estimate of >$250k is accurate | SOW from selected agency | TBD |
| WooCommerce can run in parallel during phased migration | Dev team assessment | TBD |
| Fulfil OMS has a viable Shopify connector or API path | Fulfil + dev team | TBD |
| ClaimLane integration is feasible on Shopify | ClaimLane + dev team | TBD |
| Shopify Markets handles CA/US pricing and routing without custom middleware | Shopify sandbox test | TBD |
| Current organic traffic can be preserved with redirect strategy | SEO audit | TBD |

---

## 10. Current State Baseline

### Known Pain Points Driving Migration

| Pain Point | Business Impact | Priority |
| --- | --- | --- |
| Rapid growth has outpaced WooCommerce capabilities | Platform instability, missed opportunities | High |
| Teams making high-impact decisions with limited system support | Operational risk, slow response | High |
| Manual workarounds for bundles, SKUs, and promotions | Error-prone, slows launches | High |
| No US storefront with compliant pricing and payment routing | Revenue ceiling | High |
| Fulfil integration fragility | Inventory and fulfillment risk | High |
| CA French-language storefront not live | Regulatory and market risk | Medium |
| Limited B2B / wholesale ordering capability | Revenue opportunity gap | Medium |

### Site Performance (Pre-Migration)

| Metric | Current Value | Target Post-Migration |
| --- | --- | --- |
| Annual GMV | TBD | |
| Core Web Vitals — LCP | TBD | <2.5s |
| Core Web Vitals — CLS | TBD | <0.1 |
| Core Web Vitals — INP | TBD | <200ms |
| Conversion Rate | TBD | |
| Average Page Load Time | TBD | |
| Organic Search Sessions (monthly) | TBD | Maintain or grow |
