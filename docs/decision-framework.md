---
comments: true
---

# Migration Decision Framework

This page captures the key inputs needed to make a confident go/no-go decision on Shopify migration and the headed vs. headless architecture choice. The Recommendation at the top is completed last — once Sections 2–10 are populated, record the final decision there.

> **Critique applied 2026-03-13.** Sections reviewed against Shopify's official developer documentation via the Shopify Dev MCP server (`@shopify/dev-mcp`). All `[Ref]` links trace to Shopify docs used during validation. See [Appendix: Shopify Documentation References](#appendix-shopify-documentation-references) for the full index.

---

## 1. Recommendation

> To be completed once Sections 2–10 are populated.

| Field | Value |
| --- | --- |
| Recommended Architecture | TBD — Headed / Headless |
| Recommended Agency | TBD |
| Decision Date | **April 1, 2026** |
| Hard Launch Deadline | **August 31, 2026** |
| Decision Made By | TBD |
| Next Action | TBD |
| Rationale | TBD — include links to key Shopify doc pages used to validate architecture assumptions (e.g., [OS2.0](https://shopify.dev/docs/storefronts/themes/os20), [Hydrogen migration](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate), [Checkout Extensibility](https://shopify.dev/docs/apps/checkout/checkout-extensions)) |

---

## 2. Decision Scorecard — Headed vs. Headless

> Score each criterion 1 (poor) to 5 (excellent). Weighted total to be calculated separately (Score × Weight, summed per column).
>
> **Note — timeline now a primary constraint:** With a hard launch deadline of **Aug 31, 2026** and an architecture decision on **Apr 1, 2026**, the effective build window is approximately **5 months**. Headless increases engineering scope — projects often take longer, especially when including custom checkout experiences, complex integrations, or building Hydrogen/Oxygen infrastructure. [[Ref: Hydrogen migration](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] Many headed use-cases can be accomplished via Online Store 2.0 JSON templates, sections, app blocks, and theme app extensions without headless overhead. [[Ref: OS2.0](https://shopify.dev/docs/storefronts/themes/os20)] [[Ref: Theme App Extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] Speed to Market weight has been increased to 30% to reflect this constraint.

| Criteria | Weight | Headed Score | Headless Score | Notes |
| --- | --- | --- | --- | --- |
| Speed to Market | **30%** | | | Headless increases engineering scope (checkout routing, shared carts, custom frontend, event mapping); headed leverages OS2.0 + theme app extensions to move faster. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Total Cost — Year 1 | 15% | | | |
| Total Cost — Year 3 | **5%** | | | Reduced weight — timeline risk outweighs long-run cost optimization at this stage |
| Content & Design Flexibility | **10%** | | | OS2.0 JSON templates and sections provide significant headed flexibility. [[Ref](https://shopify.dev/docs/storefronts/themes/os20)] |
| Checkout Ownership | **—** | | | **(New row — do not score yet; weight TBD.)** Checkout-adjacent work materially affects timeline and architecture. Checkout Extensibility provides headed customization points; headless requires checkout subdomain routing. [[Ref](https://shopify.dev/docs/apps/checkout/checkout-extensions)] [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| SEO Continuity Risk | 15% | | | Headed lower risk; redirect mapping and canonical strategy required either way. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Internal Team Capacity | 10% | | | Co-dev model directly mitigates capacity risk — agency handles architecture and complex integrations; internal team executes alongside |
| Integration Complexity | 10% | | | Headless adds overhead on checkout-adjacent integrations (payments, GTM/conversion, upsells). [[Ref](https://shopify.dev/docs/apps/checkout/checkout-extensions)] |
| Revenue Risk During Cutover | 5% | | | Shared carts support phased migration to reduce cutover risk. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |

---

## 3. Total Cost of Ownership

> Context: All cost estimates should be anchored against annual GMV. Populate GMV first — cost figures are meaningless without it.

| Metric | Value |
| --- | --- |
| Annual GMV (CA + US) | TBD |
| Shopify Plus GMV Fee Threshold | $800K USD/month (~0.25% above) — **action: confirm with Shopify account rep; pricing is merchant-specific and not published in dev docs** |

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
| Shopify Plus License | ~$27,600/year | ~$2,300/month billed annually — **confirm with Shopify account rep; not published in dev docs** |
| Shopify Plus GMV Fee | TBD | 0.25% above threshold — confirm with account rep |
| Theme Development | TBD | One-time; OS2.0 theme app extensions can reduce custom theme work. [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| App Subscriptions | TBD | Monthly recurring — inventory current WooCommerce plugins and match to Shopify App Store equivalents. [[Ref](https://shopify.dev/docs/apps)] |
| Data Migration (products, customers, orders) | TBD | One-time |
| Agency / Build Fees | TBD | |
| Ongoing Maintenance | TBD | Annual |
| **Total Year 1 Cost** | **TBD** | |
| **Total Year 3 Cost** | **TBD** | |

### Option 2 — Headless (Decoupled Frontend)

| Cost Category | Estimate | Notes |
| --- | --- | --- |
| Shopify Plus License | ~$27,600/year | ~$2,300/month billed annually — **confirm with Shopify account rep** |
| Shopify Plus GMV Fee | TBD | 0.25% above threshold — confirm with account rep |
| Build Cost | >$250,000 | One-time estimate — unvalidated; Shopify docs do not provide cost ranges but migration overhead is documented. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Frontend Infrastructure | TBD | Hydrogen/Oxygen hosting, CDN — infrastructure implications documented in migration guide. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Checkout Subdomain Configuration | TBD | Required for headless; checkout routing to Shopify-hosted checkout. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Custom Event Mapping (analytics) | TBD | GTM/pixel reimplementation for headless storefront |
| Dedicated Frontend Engineering | TBD | Ongoing annual cost |
| Data Migration (products, customers, orders) | TBD | One-time |
| Agency / Build Fees | TBD | |
| **Total Year 1 Cost** | **TBD** | |
| **Total Year 3 Cost** | **TBD** | |
| **Break-Even vs Headed (years)** | **TBD** | At what year does headless ROI exceed the cost premium? |

---

## 4. Agency Comparison Matrix

> Criteria are weighted by importance. Scores are 1–5. Weighted score = Weight × Score. Self-Build is included as a baseline option — no agency fees, but full internal resourcing burden.
>
> **Engagement model selected: Co-development + Consultancy.** Given the Aug 31 hard deadline, the internal team will execute alongside the agency rather than waiting on agency-only delivery. Agencies without a viable co-dev or consulting track are effectively disqualified from solo-build consideration. Co-Development weight increased to 25% to reflect this.
>
> **Critique note:** Agency RFP should require demonstrated experience with specific Shopify capabilities: OS2.0 + Theme App Extensions [[Ref](https://shopify.dev/docs/storefronts/themes/os20)], Checkout Extensibility [[Ref](https://shopify.dev/docs/apps/checkout/checkout-extensions)], and Hydrogen/Oxygen [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)]. Co-dev workstream should use Shopify recommended patterns (theme app extensions, app blocks) to avoid modifying theme code directly. [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)]

| Criteria | Weight | Agency E | Agency D | Agency S | Self-Build (Internal) |
| --- | --- | --- | --- | --- | --- |
| Headless Experience | 25% | Low — defaults to headed; headless quoted at $250K+ | Strong — presented Headed / Headless / Hydrogen options with co-dev model | Low — no headless experience demonstrated | Medium — dev team has explored Storefront API; learning curve remains |
| Headed / Shopify Native Experience | 20% | Strong | Strong | Strong — did solid Shopify discovery homework | Low — limited Shopify-native production experience |
| Co-Development / Shared Ownership Model | **25%** | TBD — not yet confirmed; key question before Apr 1 | **Strong — explicit co-dev (Option 2) and consulting (Option 3) tracks; best fit for Aug 31 deadline** | Weak — not flexible for co-development; effectively disqualified for co-dev track | Full — entirely internal; no external dependency |
| Estimated Build Cost | 15% | TBD — headless $250K+; headed TBD | TBD — potentially highest (team flagged "Hush?") | TBD | Staff cost only; no agency fee |
| Estimated Timeline | **5%** | TBD | TBD | TBD | Longest — no dedicated build team; co-dev mitigates partially |
| Data Migration Experience | 5% | TBD | TBD | TBD — mentioned data migration approach | Low — no prior Shopify migration at this scale |
| Post-Launch Support Model | 5% | TBD | TBD | TBD | Internal only |
| **Weighted Score** | **100%** | **TBD** | **TBD** | **TBD** | **TBD** |

### Agency Notes — Key Observations from Team

#### Agency E

- Recommended by Kavya; positioned as safe, proven Shopify Plus partner
- Steers 99%+ of projects to headed — treats headless as edge case
- Shopify is investing heavily in headed (Online Store 2.0 + Checkout Extensibility); Agency E aligned with that direction. [[Ref: OS2.0](https://shopify.dev/docs/storefronts/themes/os20)] [[Ref: Checkout Extensibility](https://shopify.dev/docs/apps/checkout/checkout-extensions)]
- Headless quoted at $250K+; team flags this may be over-estimated
- Concerns: potential over-reliance on Shopify platform; AI tooling and advanced landing page/blog capabilities not confirmed; no impact on redundancy protocols
- **Key open question before Apr 1: Does Agency E support a co-development / consultancy engagement model? This is now a qualifying criterion.**
- Alex: developer preference leans headed (move fast); Shopify Markets being new is a positive; headed may not achieve pixel-perfect parity with current site
- Sri: headless keeps options open for disruptive platforms 5 years out
- JJ: TCO is lighter with headed; need 3-year headless TCO (initiation + annual maintenance) before deciding

#### Agency D

- Two formal meetings (Dec 10, Dec 18); most thorough discovery of the three agencies
- Presented four options: (1) Headed with React, (2) Headed, (3) Headless with Hydrogen + Oxygen, (4) Headless
- Co-development (Option 2) and consulting-only (Option 3) engagement models available
- Suggested 2-prong approach: BBBY on headed; S&S on WordPress + Shopify cart — learnings transferable
- Jason: co-dev is good; CMS advantage depends on copy volume; lowest risk path
- Kavya: co-dev is valuable; search/filtering/product indexing and upsell widget are 2026 priorities — may be easier in headed; concerned about losing capabilities in headless
- Alex: open to any involvement level; may be the most expensive option
- Key open question: Shopify Functions cannot stack multiple discount types in a single cart (e.g., mattress + bed frame + GC redemption + promo code) — needs validation before architecture is locked. **Action: technical spike using Shopify Functions and discount APIs.** [[Ref: Shopify Functions](https://shopify.dev/docs/api/functions)] [[Ref: Discount Functions](https://shopify.dev/docs/apps/discounts/functions)]

#### Agency S

- Did strong pre-meeting homework; liked Shopify discovery approach and sample site
- Rebuilt Casper Canada on Shopify — relevant reference
- GA4 attribution was painful on previous builds; need due diligence on Shopify analytics
- No headless experience — could not articulate headless benefits
- Justin G: appears to sell their ecosystem rather than advising; design system hard with existing theme
- Justin C: not flexible for co-development model
- Sri: good preparation but headless capability gap is disqualifying for that option
- Jason: server-side WooCommerce plugin; redirect history needs SEO impact audit; headless could be done internally with their guidance on promo bundles / integrations

#### Self-Build (Internal)

- Explored in developer analysis (see Headless Migration page) as a phased approach
- Phase 1: product pages via Storefront API while WooCommerce handles cart/checkout
- Phase 2: cart and checkout migrate to Shopify; WooCommerce remains on standby
- Phase 3: WooCommerce removed; full Shopify stack
- Advantage: full ownership, no agency lock-in, lowest cash outlay
- Risk: internal team bandwidth is the hard constraint; co-development with any agency reduces this risk
- Justin G: architectural consistency between S&S and BBBY easier to maintain if both internally owned

---

## 5. Integration Complexity Map

> **MVP Parity Required** = must be live and functional on Shopify at launch to match current WooCommerce operations. Any integration marked **No** is either Shopify-native out of the box (no build work) or a net-new capability beyond current state. Do not scope additional work for No rows at MVP — Shopify handles them automatically or they are deferred.
>
> **Headless architecture note:** All WooCommerce connector code (plugins, PHP hooks, webhooks) is WooCommerce-specific and cannot be reused on Shopify — every integration in this table must be rebuilt on Shopify's APIs/apps regardless of headed or headless architecture. [[Ref: Apps](https://shopify.dev/docs/apps)] [[Ref: Admin API](https://shopify.dev/docs/admin-api)] What is preserved across any migration path is vendor accounts, configurations, and business logic knowledge (Avalara nexus rules, Fulfil item catalog, Xero chart of accounts, etc.), which reduces ramp-up time but not rebuild effort. The real benefit of a phased headless approach is **risk mitigation, not cost savings**: shared carts and checkout routing allow WooCommerce to stay live during Phase 1 while Shopify connectors are built in parallel. [[Ref: Hydrogen migration — shared carts](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] The integration rebuild happens in Phase 2 regardless.
>
> **Action required:** For each integration, validate the Shopify App Store listing and confirm migration effort with the vendor. Checkout-adjacent integrations are constrained by Shopify's hosted checkout; Checkout Extensibility provides extension points but not full checkout hosting in headless. [[Ref: Checkout Extensibility](https://shopify.dev/docs/apps/checkout/checkout-extensions)]

| Integration | MVP Parity Required | Shopify Native Equivalent | Headed Effort | Headless Effort | Status |
| --- | --- | --- | --- | --- | --- |
| Fulfil (OMS) | **Yes** | Custom API | High | High | TBD |
| Zendesk | **Yes** | Native Shopify App | Low | Medium | TBD |
| ClaimLane (Returns/Warranty) | **Yes** | Custom / TBD | High | High | TBD |
| Signifyd (Fraud Detection) | **Yes** | Shopify Fraud Protect (native) or Signifyd Shopify App | Low | Medium | TBD |
| Avalara (Tax) | **Yes** | Shopify Tax may cover requirements; Avalara remains available as app for complex nexus — **validate fit with tax team** | Low | Medium | TBD |
| Xero (Accounting) | **Yes** | Xero native Shopify integration | Low | Medium | TBD |
| ActiveCampaign / Klaviyo | **Yes** | Native Shopify App | Low | Medium | TBD |
| Google Tag Manager | **Yes** | Shopify Customer Events / GTM via web pixel | Low | High (custom event mapping required) | TBD |
| Google Ads | **Yes** | Shopify Google & YouTube channel / GTM conversion tracking | Low | High (conversion tracking needs custom implementation) | TBD |
| MessageMedia (SMS) | **Yes** | Klaviyo SMS / direct MessageMedia; routing decision needed | Low | Medium | TBD |
| Impact Radius | **Yes** | Custom Pixel / App | Medium | Medium | TBD |
| RaveCapture / Review Platform | **Yes** | TBD (Judge.me / Junip options) | Medium | Medium | TBD |
| Reputation (Review Aggregator) | **Yes** | Shopify App / webhook to Reputation | Low | Medium | TBD |
| Affirm & PayPal Financing | **Yes** | Native payment methods — **confirm availability via Shopify Payments / third-party gateway docs** | Low | High (checkout ownership). [[Ref](https://shopify.dev/docs/apps/checkout/checkout-extensions)] | Affirm CA live |
| TrackShip | **Yes** | Native Shopify App | Low | Medium | TBD |
| Google Merchant Center | **Yes** | Native Shopify Feed | Low | Medium | TBD |
| Zowie Chatbot | **Yes** | TBD | Medium | Medium | TBD |
| Sprout Social | **Yes** | TBD | Low | Low | TBD |
| Dscopify (B2B) | **Partial** — Should Have; not MVP blocker | Shopify B2B / Dscopify App | Medium | High | TBD |
| MyRegistry | **TBD** — confirm if live on WooCommerce today | TBD | Medium | Medium | TBD |
| Shopify Collabs | **No** — net-new; Shopify native | Native | Low | Medium | TBD |
| Planet App (carbon shipping) | **No** — net-new; Shopify native | Native Shopify App | Low | Medium | TBD |

> **Notes:** Headless effort is generally higher for checkout-adjacent integrations (payments, GTM/conversion, upsells) because the storefront no longer uses Shopify's native checkout and pixel infrastructure directly. Retail/wholesale channels (EQ3, TSC, SCC, Costco) all route through Fulfil — covered by the Fulfil row; no separate Shopify integration needed. Finance tools (Dext, ApprovalMax) connect to Xero, not WooCommerce — covered by the Xero row. Assembled (CX workforce) connects to Zendesk, not WooCommerce — unaffected by Shopify migration.

---

## 6. SEO Risk Assessment

| Area | Current State | Risk Level | Mitigation |
| --- | --- | --- | --- |
| Organic Traffic Value (monthly) | TBD | — | |
| High-Value URLs requiring redirects | TBD | High | Full redirect map before go-live; Hydrogen migration guidance stresses redirect setup when routes change. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| CA French / EN-FR hreflang | TBD | High | Validate hreflang on staging before launch; Shopify Markets provides built-in locale routing — validate behavior in sandbox. [[Ref](https://help.shopify.com/en/manual/markets)] |
| Blog & Content Migration | TBD | Medium | Map all content URLs; preserve slugs where possible |
| Canonical URL Strategy | TBD | Medium | Define canonical rules for CA vs US markets; Shopify Markets may handle locale routing natively — confirm. [[Ref](https://help.shopify.com/en/manual/markets)] |
| Structured Data / Schema | TBD | Medium | Audit and reimplement JSON-LD via theme or app blocks (OS2.0). [[Ref](https://shopify.dev/docs/storefronts/themes/os20)] [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| Site Speed Impact Post-Migration | Headed likely neutral; Headless likely improved (edge rendering via Oxygen) | Medium | Run CWV benchmarks on staging (Lighthouse, Web Vitals); deploy staging with noindex until validated. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Post-Launch SEO Monitoring | N/A | Medium | **(New row)** Run Google Search Console URL inspection post-migration; SEO recovery can take weeks — add contingency buffer |

---

## 7. Risk Register

| Risk | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| **Headless build cannot meet Aug 31, 2026 hard deadline** | **Very High** | **Very High** | Architecture decision must weight time-to-market as primary filter; headed strongly favoured given ~5-month window. Before approving headless: require shared cart PoC, checkout subdomain config, integration priority for Phase 1, and one dry-run deployment to Oxygen or chosen hosting. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| Headed build encounters scope creep and also slips past Aug 31 | Medium | Very High | Fix scope at SOW signing; milestone payments tied to delivery gates; go-live must clear Oct 15 holiday freeze | TBD |
| Headless build exceeds $250k estimate | High | High | Get fixed-fee SOW; define scope freeze date | TBD |
| SEO ranking drop post-migration | Medium | High | Full redirect map + staging CWV audit before go-live; add SEO QA contingency buffer — recovery can take weeks. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| Fulfil OMS integration delayed | Medium | High | Parallel-run WooCommerce + Shopify during Phase 1 | TBD |
| ClaimLane not compatible with Shopify | Medium | Medium | Validate in Phase 0; identify fallback returns platform | TBD |
| CA French (EN-FR) hreflang errors | Medium | Medium | Dedicated QA pass on bilingual routing before launch | TBD |
| Go-live during peak season causes revenue disruption | Low | Very High | Hard block on Oct 15 – Jan 5 launch window | TBD |
| Discount stacking limitation (Shopify Functions) | Medium | High | **(New risk)** Shopify Functions enable custom discount logic but have constraints on stacking multiple discount types in a single cart — validate with technical spike. [[Ref](https://shopify.dev/docs/api/functions)] [[Ref](https://shopify.dev/docs/apps/discounts/functions)] | TBD |
| Agency delivery delays | Medium | High | Define milestone-based payment schedule in SOW; milestones should align with Shopify deployment artifacts (theme branches, preview stores, Hydrogen preview links). Require acceptance criteria using Shopify CLI / Theme Check. [[Ref](https://shopify.dev/docs/themes/tools/cli)] | TBD |
| Internal team bandwidth insufficient for co-development | **Low** | Medium | Co-dev + consultancy model is the chosen engagement; internal headcount commitment must be defined before contract; agency carries architecture and complex integration load | TBD |

---

## 8. Go/No-Go Timeline

> **Hard deadline: August 31, 2026.** The go-live window must clear the Oct 15 holiday freeze. Working backwards from Aug 31 with a ~5-month build window, the decision must be made by April 1, 2026.

| Milestone | Target Date | Owner | Status |
| --- | --- | --- | --- |
| Architecture & Agency Decision Made | **Apr 1, 2026** | | Decision date locked |
| Agency Selected / Notified | Apr 3, 2026 | | |
| Contract / SOW Signed | Apr 10, 2026 | | |
| Development Kickoff | Apr 14, 2026 | | |
| WooCommerce Contract Expiry | TBD | | Confirm with hosting/plugin vendors |
| Checkout Extensibility / Payment Validation | Jun 30, 2026 | | **(New milestone)** Validate checkout customizations and payment provider integrations before UAT. [[Ref](https://shopify.dev/docs/apps/checkout/checkout-extensions)] |
| UAT / Staging Launch | Jul 14, 2026 | | 6-week UAT window; acceptance requires: full redirect map passing, CWV benchmarks met, integration smoke tests, and checkout dry-run. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Data Migration Cutover | Aug 18, 2026 | | Dry-run at least once before this |
| Staff Training Completed | Aug 24, 2026 | | CS, ops, marketing teams |
| Soft Launch | Aug 25, 2026 | | Limited traffic; monitoring on |
| **Production Hard Launch** | **Aug 31, 2026** | | **Hard deadline** |
| Black Friday / Holiday Freeze (avoid go-live) | Oct 15 – Jan 5 | | Do not go live in this window — Aug 31 target clears this |
| Peak Season Post-Mortem | Jan 2027 | | |

---

## 9. Open Assumptions

| Assumption | Needs Validation By | Status |
| --- | --- | --- |
| **Engagement model is co-development + consultancy — not agency-led only; internal team capacity is committed before contract signing** | Internal resourcing confirmed before Apr 10 | TBD |
| **Co-dev + consultancy model compresses the build timeline sufficiently to meet Aug 31** | Agency SOW with co-dev workstream breakdown by Apr 10 | TBD |
| **Selected agency can deliver a production-ready headed build by Aug 31, 2026 (~5 months) under co-dev model** | Agency SOW / confirmed project plan by Apr 10 | TBD |
| **Headless architecture is not achievable within the Aug 31 deadline without a phased/hybrid compromise** | Architecture decision on Apr 1 | TBD |
| Headed Shopify can support all Must-Have requirements natively or via apps | Agency discovery phase | TBD |
| Headless build cost estimate of >$250k is accurate | SOW from selected agency | TBD |
| WooCommerce can run in parallel during phased migration | Dev team assessment | TBD |
| Fulfil OMS has a viable Shopify connector or API path | Fulfil + dev team | TBD |
| ClaimLane integration is feasible on Shopify | ClaimLane + dev team | TBD |
| Shopify Markets handles CA/US pricing and routing without custom middleware | Shopify sandbox test — configure Markets, verify pricing, checkout flows, and hreflang routing in sandbox store. [[Ref](https://help.shopify.com/en/manual/markets)] | TBD |
| Current organic traffic can be preserved with redirect strategy | SEO audit | TBD |
| **Phased headless migration (WooCommerce live during Phase 1) reduces cutover risk but does NOT reduce integration rebuild cost — all connectors must be rebuilt for Shopify in Phase 2 regardless** | Validate with dev team before architecture decision Apr 1. Supported by Hydrogen shared carts / phased approach. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |

---

## 10. Current State Baseline

### Known Pain Points Driving Migration

| Pain Point | Business Impact | Priority |
| --- | --- | --- |
| Rapid growth has outpaced WooCommerce capabilities | Platform instability, missed opportunities | High |
| Teams making high-impact decisions with limited system support | Operational risk, slow response | High |
| Manual workarounds for bundles, SKUs, and promotions | Error-prone, slows launches | High |
| No US storefront with compliant pricing and payment routing | Revenue ceiling | High |
| Fulfil integration fragility — **action: confirm Shopify connector or API path; sandbox test for inventory sync and order flow via Admin API** [[Ref](https://shopify.dev/docs/admin-api)] | Inventory and fulfillment risk | High |
| CA French-language storefront not live | Regulatory and market risk | Medium |
| Limited B2B / wholesale ordering capability | Revenue opportunity gap | Medium |

### Site Performance (Pre-Migration)

| Metric | Current Value | Target Post-Migration |
| --- | --- | --- |
| Annual GMV | TBD | |
| Core Web Vitals — LCP | TBD | <2.5s — measure Lighthouse + field data on staging. Headed: leverage OS2.0 performance best practices [[Ref](https://shopify.dev/docs/storefronts/themes/os20)]; Headless: Hydrogen edge rendering [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Core Web Vitals — CLS | TBD | <0.1 |
| Core Web Vitals — INP | TBD | <200ms |
| Conversion Rate | TBD | |
| Average Page Load Time | TBD | |
| Organic Search Sessions (monthly) | TBD | Maintain or grow |

---

## Appendix: Shopify Documentation References

> Index of all Shopify documentation cited in this framework. Generated 2026-03-13 via Shopify Dev MCP server (`@shopify/dev-mcp`) critique pass.

| Short Name | URL | Used In |
| --- | --- | --- |
| OS2.0 (themes, JSON templates, sections) | <https://shopify.dev/docs/storefronts/themes/os20> | Sections 2, 4, 6, 10 |
| Theme App Extensions (app blocks) | <https://shopify.dev/docs/apps/build/online-store/theme-app-extensions> | Sections 2, 3, 4, 6 |
| Hydrogen Migration (shared carts, checkout subdomain, redirects) | <https://shopify.dev/docs/storefronts/headless/hydrogen/migrate> | Sections 2, 3, 5, 6, 7, 8, 9, 10 |
| Checkout Extensibility (UI extensions, constraints) | <https://shopify.dev/docs/apps/checkout/checkout-extensions> | Sections 2, 4, 5, 7, 8 |
| Shopify Functions (discounts, server-side customization) | <https://shopify.dev/docs/api/functions> | Sections 4, 7 |
| Discount Functions | <https://shopify.dev/docs/apps/discounts/functions> | Sections 4, 7 |
| Admin API | <https://shopify.dev/docs/admin-api> | Sections 5, 10 |
| Storefront API | <https://shopify.dev/docs/storefront-api> | Section 5 |
| Apps & App Store guidance | <https://shopify.dev/docs/apps> | Sections 3, 5 |
| Shopify CLI / Theme Check | <https://shopify.dev/docs/themes/tools/cli> | Section 7 |
| Shopify Markets (merchant docs) | <https://help.shopify.com/en/manual/markets> | Sections 6, 9 |
