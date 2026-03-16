---
comments: true
---

# Migration Decision Framework

> **Decision date: April 1, 2026 | Hard launch: August 31, 2026 | Build window: ~5 months**
>
> This page is the executive go/no-go artifact. Supporting detail lives in linked pages. Shopify documentation references validated 2026-03-13 via `@shopify/dev-mcp` - see [Appendix](#appendix-shopify-documentation-references).

---

## 1. Recommendation

> To be completed once sections below are scored.

| Field | Value |
| --- | --- |
| Recommended Architecture | TBD - Headed / Headless |
| Recommended Agency | TBD |
| Decision Date | **April 1, 2026** |
| Hard Launch Deadline | **August 31, 2026** |
| Decision Made By | TBD |
| Next Action | TBD |
| Rationale | TBD |

---

## 2. Decision Scorecard - Headed vs. Headless

> Score each criterion 1 (poor) to 5 (excellent). Weighted total = Score × Weight, summed per column. Speed to Market weighted at 30% to reflect the 5-month build window.

| Criteria | Weight | Headed | Headless | Notes |
| --- | --- | --- | --- | --- |
| Speed to Market | **30%** | | | Headed leverages OS2.0 + theme app extensions; headless adds checkout routing, shared carts, custom frontend scope. |
| Total Cost - Year 1 | 15% | | | |
| Total Cost - Year 3 | 5% | | | Reduced - timeline risk outweighs long-run cost optimization. |
| Content & Design Flexibility | 10% | | | OS2.0 JSON templates provide significant headed flexibility. |
| Checkout Ownership | **- (TBD)** | | | Checkout Extensibility (headed) vs. checkout subdomain routing (headless). |
| SEO Continuity Risk | 15% | | | Headed lower risk; redirects required either way. Details: [SEO Risk Assessment](seo-risk-assessment.md). |
| Internal Team Capacity | 10% | | | Co-dev model mitigates - agency handles architecture; internal team executes alongside. |
| Integration Complexity | 10% | | | Headless adds overhead on checkout-adjacent integrations. Details: [Integration Map](integration-map.md). |
| Revenue Risk During Cutover | 5% | | | Shared carts support phased migration. |

---

## 3. Agency Comparison Matrix

> Engagement model: **co-development + consultancy**. Agencies without a co-dev track are disqualified. Detailed team notes: [Agency Evaluation Notes](agency-notes.md).
>
> RFP should require demonstrated experience with OS2.0, Checkout Extensibility, and Hydrogen/Oxygen.

| Criteria | Weight | Agency E (eHouse) | Agency D (Domaine) | Agency S (StreamCommerce) | Self-Build |
| --- | --- | --- | --- | --- | --- |
| Headless Experience | 25% | Low - defaults to headed | Strong - presented all options with co-dev | Low - no headless experience | Medium - learning curve remains |
| Headed / Native Experience | 20% | Strong | Strong | Strong | Low |
| Co-Dev Model | **25%** | TBD - **must confirm before Apr 1** | **Strong - explicit co-dev and consulting tracks** | Weak - not flexible; effectively disqualified | Full - entirely internal |
| Estimated Build Cost | 15% | TBD - comparable to Agency S | **Significantly higher** | TBD - comparable to Agency E | Staff cost only |
| Estimated Timeline | 5% | TBD | TBD | TBD | Longest |
| Data Migration Experience | 5% | TBD | TBD | TBD | Low |
| Post-Launch Support | 5% | TBD | TBD | TBD | Internal only |
| **Weighted Score** | **100%** | **TBD** | **TBD** | **TBD** | **TBD** |

---

## 4. Total Cost of Ownership

> All estimates anchored against annual GMV. Populate GMV first.

| Metric | Value |
| --- | --- |
| Annual GMV (CA + US) | TBD |
| Shopify Plus GMV Fee Threshold | $800K USD/month (~0.25% above) - **confirm with Shopify account rep** |

### Current State (WooCommerce)

| Cost Category | Annual Cost | Notes |
| --- | --- | --- |
| Hosting & Infrastructure | TBD | |
| Plugin & License Fees | TBD | |
| Development & Maintenance | TBD | |
| **Total** | **TBD** | |

### Option 1 - Headed

| Cost Category | Estimate | Notes |
| --- | --- | --- |
| Shopify Plus License | ~$27,600/yr | ~$2,300/mo - confirm with account rep |
| GMV Fee | TBD | 0.25% above threshold |
| Theme Development | TBD | One-time; OS2.0 reduces custom work |
| App Subscriptions | TBD | Monthly recurring |
| Data Migration | TBD | One-time |
| Agency / Build Fees | TBD | |
| Ongoing Maintenance | TBD | Annual |
| **Year 1 Total** | **TBD** | |
| **Year 3 Total** | **TBD** | |

### Option 2 - Headless

| Cost Category | Estimate | Notes |
| --- | --- | --- |
| Shopify Plus License | ~$27,600/yr | |
| GMV Fee | TBD | |
| Build Cost | >$250,000 | One-time - unvalidated |
| Frontend Infrastructure | TBD | Hydrogen/Oxygen hosting, CDN |
| Checkout Subdomain Config | TBD | Required for headless |
| Custom Event Mapping | TBD | GTM/pixel reimplementation |
| Dedicated Frontend Engineering | TBD | Ongoing annual |
| Data Migration | TBD | One-time |
| Agency / Build Fees | TBD | |
| **Year 1 Total** | **TBD** | |
| **Year 3 Total** | **TBD** | |
| **Break-Even vs Headed** | **TBD** | |

---

## 5. Top Risks to Decision

> Full register with 11 risks and 12 assumptions: [Risk Register & Open Assumptions](risk-register.md).

| Risk | Likelihood | Impact | Key Mitigation |
| --- | --- | --- | --- |
| **Headless build cannot meet Aug 31 deadline** | Very High | Very High | Require shared cart PoC + checkout config + dry-run deployment before approving headless |
| **Discount stacking limitation (Shopify Functions)** | Medium | High | Technical spike on Shopify Functions + discount APIs before architecture is locked |
| **Co-dev capacity - agency + internal bandwidth** | Low–Medium | High | Internal headcount committed before contract; agency carries architecture load |

---

## 6. Go/No-Go Timeline

| Milestone | Target Date | Status |
| --- | --- | --- |
| Architecture & Agency Decision | **Apr 1, 2026** | Decision date locked |
| Agency Notified | Apr 3 | |
| Contract / SOW Signed | Apr 10 | |
| Development Kickoff | Apr 14 | |
| Checkout / Payment Validation | Jun 30 | |
| UAT / Staging Launch | Jul 14 | 6-week UAT window |
| Data Migration Cutover | Aug 18 | Dry-run at least once before |
| Staff Training | Aug 24 | |
| Soft Launch | Aug 25 | Limited traffic; monitoring on |
| **Production Hard Launch** | **Aug 31, 2026** | **Hard deadline** |
| Holiday Freeze | Oct 15 – Jan 5 | No go-live in this window |

---

## Supporting Documents

| Document | Contents |
| --- | --- |
| [Integration Complexity Map](integration-map.md) | 22 integrations with headed vs. headless effort ratings |
| [Agency Evaluation Notes](agency-notes.md) | Team observations from agency meetings |
| [SEO Risk Assessment](seo-risk-assessment.md) | 8 SEO risk areas with mitigations |
| [Risk Register & Open Assumptions](risk-register.md) | 11 risks + 12 assumptions |
| [Current State Baseline](current-state-baseline.md) | WooCommerce pain points and performance targets |

---

## Appendix: Shopify Documentation References

> Index of all Shopify documentation cited across this framework and supporting pages. Generated 2026-03-13 via `@shopify/dev-mcp`.

| Short Name | URL | Used In |
| --- | --- | --- |
| OS2.0 (themes, JSON templates, sections) | <https://shopify.dev/docs/storefronts/themes/os20> | Scorecard, Agency, SEO, Baseline |
| Theme App Extensions (app blocks) | <https://shopify.dev/docs/apps/build/online-store/theme-app-extensions> | Scorecard, Integrations, SEO |
| Hydrogen Migration (shared carts, checkout subdomain, redirects) | <https://shopify.dev/docs/storefronts/headless/hydrogen/migrate> | Scorecard, Integrations, TCO, SEO, Risks |
| Checkout Extensibility (UI extensions, constraints) | <https://shopify.dev/docs/apps/build/checkout> | Scorecard, Integrations, Agency, Timeline |
| Shopify Functions (discounts, server-side customization) | <https://shopify.dev/docs/api/functions> | Agency, Risks |
| Discount Functions | <https://shopify.dev/docs/apps/discounts/functions> | Agency, Risks |
| Admin API (REST) | <https://shopify.dev/docs/api/admin-rest> | Integrations |
| Admin API (legacy path) | <https://shopify.dev/docs/admin-api> | Baseline |
| Storefront API | <https://shopify.dev/docs/storefront-api> | Integrations |
| Webhooks | <https://shopify.dev/docs/apps/build/webhooks> | Integrations |
| Web Pixels / Customer Events | <https://shopify.dev/docs/api/pixels/customer-events> | Integrations |
| Hydrogen Analytics | <https://shopify.dev/docs/storefronts/headless/hydrogen/analytics> | Integrations |
| Checkout for Headless (Storefront API) | <https://shopify.dev/docs/storefronts/headless/building-with-storefront-api/checkout> | Integrations |
| Marketing Analytics / Pixels | <https://shopify.dev/docs/apps/build/marketing-analytics/pixels> | Integrations |
| Shopify Tax | <https://help.shopify.com/en/manual/taxes/shopify-tax> | Integrations |
| Apps & App Store guidance | <https://shopify.dev/docs/apps> | Integrations |
| Shopify CLI / Theme Check | <https://shopify.dev/docs/themes/tools/cli> | Risks |
| Shopify Markets (merchant docs) | <https://help.shopify.com/en/manual/markets> | SEO, Assumptions |
