---
comments: true
---

# Migration Decision Framework

> **Decision date: April 1, 2026 | Target launch: August 31, 2026 | Build window: ~5 months**
>
> This page is the executive go/no-go artifact. Supporting detail lives in linked pages. Shopify documentation references validated 2026-03-13 via `@shopify/dev-mcp` - see [Appendix](#appendix-shopify-documentation-references).

---

## 1. Recommendation

> To be completed once sections below are scored.

| Field | Value |
| --- | --- |
| Recommended Architecture | **Headed (OS 2.0)** - scored 4.05 vs Headless 2.95 out of 5.00 |
| Recommended Agency | **Domaine (co-dev model)** — confirm eHouse co-dev availability before Apr 1 as secondary option |
| Decision Date | **April 1, 2026** |
| Hard Launch Deadline | **August 31, 2026 (hard deadline)** |
| Decision Made By | TBD |
| Next Action | 1) Confirm eHouse co-dev model availability. 2) Confirm Discount Logic Audit before Apr 1. 3) **Validate co-dev headed timeline meets Aug 31 hard deadline — if not, pivot to developer's headless phased strategy.** |
| Fallback Strategy | If co-dev headed model cannot confirm Aug 31 delivery, proceed with developer's [Headless Phased Migration Strategy](developer-analysis.md) — a 3-phase approach that incrementally migrates from WooCommerce to Shopify via Storefront API while preserving the existing frontend, reducing big-bang risk. |
| Rationale | Headed wins on 6 of 9 criteria (Speed to Market now tied at 4 each — developer's phased approach closes the headless timeline gap). Infrastructure/HA criterion (10%) reflects current WooCommerce downtime issues — headed gets full Shopify infrastructure (330 PoPs, 99.9% uptime, GCP redundancy); headless storefront runs on Oxygen (still Shopify-managed, scored 4). Headless adoption is ~10-20% of e-commerce market; headed is the standard path (Sidekick-validated). Headless leads only on Content & Design Flexibility. Co-dev model is the preferred engagement — Domaine has confirmed co-dev and consulting tracks; eHouse should be evaluated as a secondary option if co-dev is available. **Aug 31 is a hard deadline — time constraint validation is critical before Apr 1 decision.** Pixel-to-pixel design fidelity from current Silk & Snow site is confirmed achievable in both architectures (developer-validated). **Key co-dev concern:** dependency on an external agency (Domaine/eHouse) introduces schedule and delivery risk — if the agency cannot meet timelines, internal team absorbs the impact. The developer's headless phased approach mitigates this by keeping execution primarily in-house. Recommended path: headed launch targeting Aug 31 with co-dev agency; if timeline cannot be confirmed, pivot to developer's [headless phased approach](developer-analysis.md). |

---

## 2. Decision Scorecard - Headed vs. Headless

> Score each criterion 1 (poor) to 5 (excellent). Weighted total = Score × Weight, summed per column. **Aug 31 is a hard deadline** (updated from target date). Speed to Market weighted at 20%. Infrastructure/HA weighted at 10% — current WooCommerce site has recurring downtime, making availability a key migration driver. Revenue Risk During Cutover weighted at 10% to reflect the operational importance of a clean migration.

| Criteria | Weight | Headed | Headless | Notes |
| --- | --- | --- | --- | --- |
| Speed to Market | **20%** | **4** | **4** | **Headed (3-4 mo typical):** leverages OS 2.0 themes out of the box, theme app extensions integrate seamlessly, pre-built components and sections ready to use, faster development and testing cycles. **Headless — phased approach (revised):** developer's [phased migration strategy](developer-analysis.md) eliminates the traditional 6-9 month big-bang headless build. Phase 1 keeps WordPress frontend, sources product data from Shopify via Storefront API; Phase 2 migrates cart/checkout/integrations; Phase 3 removes legacy plugins. Incremental rollout reduces risk and parallelizes work. Score revised 1→4 based on phased feasibility. **Aug 31 is a hard deadline** (updated from target date). **Co-dev concern:** headed path depends on an external agency (Domaine/eHouse) for delivery — agency delays directly impact the Aug 31 deadline. The developer's headless phased approach keeps execution primarily in-house, reducing external dependency. |
| Total Cost - Year 1 | 15% | **4** | **2** | Headless adds $150K-$250K in estimated effort above headed (agency delta pricing). Self-build converts this to internal capacity cost, not cash outlay, but may require additional Hydrogen/React expertise. Details: [TCO](#4-total-cost-of-ownership). |
| SEO Continuity Risk | 15% | **4** | **2** | **Headed:** single domain, built-in URL management, standard Shopify URLs — lower risk. **Headless:** cross-domain tracking complexity, custom URL structures, more manual redirect management — roughly doubles SEO migration risk. Headless score assumes proper implementation (canonical tags, structured data) but still requires ongoing developer expertise to maintain SEO parity. Note: headless can offer faster page loads (edge rendering via Oxygen) which benefits Core Web Vitals / SEO, but this upside is offset by the architectural complexity. Details: [SEO Risk Assessment](seo-risk-assessment.md). |
| Content & Design Flexibility | 10% | **4** | **5** | **Headless:** complete control over frontend framework, component architecture, and UI/UX — full React freedom. **Headed:** OS 2.0 sections + JSON templates have closed the flexibility gap significantly vs. older themes, and React code injection into theme sections is possible for interactive components — you're not limited to pure Liquid. Still within Shopify's theme structure ("theme-bounded flexibility") but the ceiling is higher than it appears. The 4 vs 5 gap reflects that OS 2.0 + React injection is substantial — headless's lead here is narrow. Weight at 10% reflects that current business requirements likely don't demand extreme custom UI beyond OS 2.0 — brands with highly unique design needs might weight 15-25%. Note: "flexibility" does not extend to custom checkout experiences — headless has more limitations there than expected (Shopify-hosted checkout in both architectures). Leverage depends on having React/frontend expertise internally to actually use headless freedom. **Pixel-to-pixel design fidelity:** manager requires exact visual translation from current Silk & Snow website — developer has confirmed this is achievable in headless (full frontend control) and feasible in headed (OS 2.0 sections + custom Liquid/CSS). No frontend blocker in either architecture. |
| Integration Complexity | 10% | **4** | **2** | Headed: most integrations Low via app extensions. Headless: GTM/Ads High, 4 others Medium. Details: [Integration Map](integration-map.md). |
| Revenue Risk During Cutover | **10%** | **4** | **2** | Both require the same backend migration (products, customers, orders) — the difference is surface area. **Headed:** well-trodden path with predictable issues, known solutions, and extensive community/agency experience. **Headless:** roughly doubles cutover risk — must coordinate custom frontend deployment, API readiness, CDN/Oxygen configuration, and checkout domain switching simultaneously. Additional headless cutover risks: API rate limits during high-traffic windows, cache warming and CDN propagation delays, rollback complexity (can't just flip DNS back easily), less agency/developer experience with headless cutover procedures. Weight at 10% reflects that cutover risk is significant but temporary. |
| Infrastructure / High Availability | **10%** | **5** | **4** | **Current WooCommerce site has recurring downtime — HA is a key migration driver.** Shopify core infrastructure: 99.9% guaranteed uptime, 284M requests/minute edge capacity, 330 PoPs across 125+ countries, GCP-backed redundancy with automatic failover, full disaster recovery program. **Headed:** entire storefront + checkout + backend runs on this infrastructure — 100% Shopify-managed availability. **Headless:** checkout and backend APIs remain on Shopify core infrastructure, but the **storefront runs on Oxygen** (Shopify's Hydrogen hosting) — a separate deployment with its own availability characteristics that does not inherit the full 330-PoP storefront infrastructure. Oxygen is still Shopify-managed but introduces a distinct availability surface requiring its own monitoring and deployment pipeline. Headless adoption remains ~10-20% of e-commerce market (Sidekick-validated) — headed is the standard path for most merchants including Shopify Plus. Sidekick-validated 2026-03-18. |
| Total Cost - Year 3 | 5% | **3** | **3** | Too many TBDs to differentiate; headless has ongoing frontend costs but amortizes build investment. |
| Checkout Ownership | 5% | **4** | **2** | **Headed:** single-domain Checkout Extensibility — maintains trust signals and brand continuity seamlessly, native checkout apps work without custom integration, simpler compliance/privacy management (single domain for cookies/consent). **Headless:** separate domain by default (`.myshopify.com`) creates friction even if configurable to custom subdomain; cross-domain analytics tracking is "solvable" but adds ongoing work, monitoring, and potential data gaps. Key insight: headless does NOT give more checkout control — both architectures use Shopify Checkout Extensibility — headless just adds domain complexity. Score reduced from 3→2 per Sidekick validation. [Web Pixels API](https://shopify.dev/docs/api/pixels/customer-events) available if GA4 retained. |
| **Weighted Total** | **100%** | **4.05** | **2.95** | **Headed leads by 1.10 points** (narrowed from 1.70 after developer's phased approach revised headless Speed to Market 1→4). Revenue Risk During Cutover (10%), SEO Continuity (15%), and Integration Complexity (10%) remain key differentiators. Infrastructure/HA (10%) differentiates — headed gets full Shopify infrastructure vs. headless's Oxygen-managed storefront. Headless leads only on Content & Design Flexibility (by 1 point). **The phased headless approach makes headless a viable fallback if headed co-dev cannot confirm Aug 31 delivery.** |

### Sensitivity: What if we have more time and budget?

> If the Aug 31 target is extended (e.g., 9-12 month runway) and budget increases by $150K-$250K+, headless closes the gap but **headed still leads**. The table below shows how headless scores shift — headed scores remain unchanged.

| Criteria | Weight | Headed | Headless (current) | Headless (relaxed) | Why it changes |
| --- | --- | --- | --- | --- | --- |
| Speed to Market | 20% | 4 | 4 | **4** | Phased approach already closes this gap at current timeline; extended runway adds buffer |
| Total Cost - Year 1 | 15% | 4 | 2 | **3** | Larger budget absorbs the $150K-$250K delta |
| SEO Continuity Risk | 15% | 4 | 2 | **2** | Architectural — cross-domain complexity doesn't shrink with more time or money |
| Content & Design Flexibility | 10% | 4 | 5 | **5** | Headless still leads but gap narrowed (headed bumped 3→4 with React injection); unchanged in relaxed scenario |
| Integration Complexity | 10% | 4 | 2 | **3** | More time to plan GTM/pixel work, but architectural gaps remain |
| Revenue Risk During Cutover | 10% | 4 | 2 | **3** | More time for dry runs and phased rollout reduces risk |
| Infrastructure / High Availability | 10% | 5 | 4 | **4** | Architectural — Oxygen is Shopify-managed but a separate availability surface; doesn't change with more time or money |
| Total Cost - Year 3 | 5% | 3 | 3 | **4** | Larger upfront investment amortizes better over 3 years |
| Checkout Ownership | 5% | 4 | 2 | **2** | Cross-domain checkout is architectural; both use Checkout Extensibility — unchanged with more time/money |
| **Weighted Total** | **100%** | **4.05** | **2.95** | **3.55** | **Gap narrows from 1.10 → 0.50** |

**Key takeaway:** The remaining 0.50-point gap comes from **SEO continuity risk**, **integration complexity**, and **checkout ownership** — these are architectural differences that don't shrink with more time or money. Infrastructure/HA is a wash in the relaxed scenario (both architectures are Shopify-managed). With the developer's phased approach, headless is now a **viable fallback** even at the current timeline — the gap has narrowed significantly. Headed remains the lower-risk path, but headless is no longer disqualified on speed grounds. The phased approach (headed now, headless 2027) remains an option, but so does headless-first if co-dev headed cannot confirm Aug 31 delivery.

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
| Shopify Plus GMV Fee Threshold | $800K USD/month (**0.40%** above threshold) - confirmed per current Shopify Plus pricing |

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
| GMV Fee | TBD | 0.40% above threshold |
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
| Build Cost (incremental above headed) | $150K-$250K (self-build) / >$250K (agency) | Agency E quote may be over-estimated per team; self-build reduces cash outlay |
| Frontend Infrastructure | TBD | Hydrogen/Oxygen hosting, CDN |
| Checkout Subdomain Config | TBD | Required for headless; defaults to `.myshopify.com`, configurable to custom subdomain (e.g., `checkout.yourstore.com`) for brand consistency |
| Custom Event Mapping | TBD | GTM/pixel reimplementation |
| Cross-Domain GA4/GTM Attribution | TBD | [Web Pixels API](https://shopify.dev/docs/api/pixels/customer-events) setup + GA4 referral exclusion list (checkout subdomain, primary domain, `checkout.shopify.com`, payment provider domains) to prevent attribution loss across Hydrogen-to-checkout domain transition |
| Data Migration (standard) | Included in build cost | Standard Shopify migration path: CSV import, Store Migration app, or Shopify Partner. One-time data cutover from WooCommerce. |
| Oxygen CI/CD Infrastructure | TBD | Dev-ops hours for [Hydrogen/Oxygen deployment pipeline](https://shopify.dev/docs/storefronts/headless/hydrogen/deploy) setup |
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
| **Headless build may not meet Aug 31 deadline** | **Medium** | **High** | 🟢 Developer's [phased migration strategy](developer-analysis.md) reduces this risk — incremental rollout (Phase 1: product data, Phase 2: cart/checkout, Phase 3: cleanup) avoids big-bang rebuild. **Aug 31 is now a hard deadline.** Phased approach lowers likelihood from High→Medium. Require Phase 1 completion checkpoint by Jun 15 to validate pace. Standard data migration cutover assumed. |
| **External agency dependency (co-dev model)** | **Medium** | **Medium** | 🟡 Developer flagged: the co-dev headed model depends on an external agency (Domaine/eHouse) for architecture, build, and timeline delivery. If the agency has capacity constraints, staffing changes, or delivery delays, the Aug 31 hard deadline is at risk. The developer's headless phased approach keeps execution primarily in-house, reducing this dependency. Mitigations: confirm agency SOW with milestone-based deliverables and penalty clauses; maintain headless phased approach as a ready fallback; ensure internal team has enough context to proceed independently if needed. |
| **Cross-domain analytics attribution loss (headless)** | High | High | Headless checkout defaults to `.myshopify.com` (custom subdomain like `checkout.yourstore.com` configurable). GA4 interprets the domain change as a new session, inflating "Direct" traffic. Mitigations: [Web Pixels API](https://shopify.dev/docs/api/pixels/customer-events) + add checkout domain, primary store domain, `checkout.shopify.com`, and payment provider domains to GA4 referral exclusion list. Budget specialized technical scope. |
| **Discount stacking limitation (Shopify Functions)** | Medium | High | Discount Logic Audit before Apr 1: map WooCommerce's top 10 complex coupons to Shopify [combination rules](https://help.shopify.com/en/manual/discounts/combining-discounts). Hard ceiling at ~5 concurrent custom discount functions. |
| **Co-dev capacity - agency + internal bandwidth** | Low-Medium | High | Internal headcount committed before contract; agency carries architecture load |

---

## 6. Go/No-Go Timeline

> 🟢 **Headless timeline risk: MEDIUM** (revised from MEDIUM-HIGH). Developer's [phased migration strategy](developer-analysis.md) reduces big-bang risk — incremental rollout keeps existing WordPress frontend operational while migrating backend to Shopify in phases. Standard data migration cutover assumed (CSV, Store Migration app, or Partner). **Aug 31 is a hard deadline.** Headed remains the lower-risk path, but headless phased approach is now a viable fallback. **Primary strategy:** co-dev headed model targeting Aug 31. **Fallback:** developer's headless phased approach if co-dev cannot confirm Aug 31 delivery.

| Milestone | Target Date | Status |
| --- | --- | --- |
| Discount Logic Audit | **Before Apr 1** | Map WooCommerce coupon types to Shopify [discount combination rules](https://help.shopify.com/en/manual/discounts/combining-discounts) |
| Data Migration Method Selection | **Before Apr 1** | Choose standard migration path: CSV import, Store Migration app, or Shopify Partner. Plan dry-run cutover schedule. |
| Architecture & Agency Decision | **Apr 1, 2026** | Decision date locked |
| Agency Notified | Apr 3 | |
| Contract / SOW Signed | Apr 10 | |
| Development Kickoff | Apr 14 | |
| Checkout / Payment Validation | Jun 30 | |
| Checkout Extensibility Branding Design | Jul 7 | Reconcile Hydrogen storefront UI with Shopify-hosted checkout (headless only); configure custom checkout subdomain, checkout branding settings, and checkout customization apps to minimize visual gap |
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
| [Developer Analysis — Headless Phased Strategy](developer-analysis.md) | 3-phase headless migration plan (fallback strategy) with task breakdown |
| [Current State Baseline](current-state-baseline.md) | WooCommerce pain points and performance targets |

---

## Appendix: Shopify Documentation References

> Index of all Shopify documentation cited across this framework and supporting pages. Generated 2026-03-13 via `@shopify/dev-mcp`.

| Short Name | URL | Used In |
| --- | --- | --- |
| OS2.0 (themes, JSON templates, sections) | <https://shopify.dev/docs/storefronts/themes/os20> | Scorecard, Agency, SEO, Baseline |
| Theme App Extensions (app blocks) | <https://shopify.dev/docs/apps/build/online-store/theme-app-extensions> | Scorecard, Integrations, SEO |
| Hydrogen Migration (checkout subdomain, redirects) | <https://shopify.dev/docs/storefronts/headless/hydrogen/migrate> | Scorecard, Integrations, TCO, SEO, Risks |
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
| Shopify Plus Pricing (plans & features) | <https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan> | TCO |
| Discount Combinations | <https://help.shopify.com/en/manual/discounts/combining-discounts> | Risks, Timeline |
| Hydrogen/Oxygen Deployment | <https://shopify.dev/docs/storefronts/headless/hydrogen/deploy> | TCO, Timeline |
