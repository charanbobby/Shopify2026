---
comments: true
---

# Risk Register & Open Assumptions

> Extracted from the [Migration Decision Framework](decision-framework.md) - full risk and assumption tracking for the Shopify migration.

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| **Headless build cannot meet Aug 31, 2026 hard deadline** | **Very High** | **Very High** | 🔴 **Reclassified as HIGH RISK.** Typical Hydrogen builds take 6-9 months (custom frontend + shared cart middleware + Oxygen infrastructure). The 4.5-month window is extremely aggressive; the 6-week UAT window is likely consumed by middleware debugging. **Recommendation:** headed-first launch by Aug 31; Hydrogen as 2027 fast-follow. If headless is still considered: require shared cart PoC, Multipass technical spike, checkout subdomain config, integration priority for Phase 1, and one dry-run deployment to Oxygen. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| Headed build encounters scope creep and also slips past Aug 31 | Medium | Very High | Fix scope at SOW signing; milestone payments tied to delivery gates; go-live must clear Oct 15 holiday freeze | TBD |
| Headless build exceeds budget ($150K-$250K above headed for self-build; >$250K agency) | High | High | Get fixed-fee SOW if agency; define scope freeze date; self-build reduces cost but increases team bandwidth risk | TBD |
| SEO ranking drop post-migration | Medium | High | Full redirect map + staging CWV audit before go-live; add SEO QA contingency buffer - recovery can take weeks. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| Fulfil OMS integration delayed | Medium | High | Parallel-run WooCommerce + Shopify during Phase 1 | TBD |
| ClaimLane not compatible with Shopify | Medium | Medium | Validate in Phase 0; identify fallback returns platform | TBD |
| CA French (EN-FR) hreflang errors | Medium | Medium | Dedicated QA pass on bilingual routing before launch | TBD |
| Go-live during peak season causes revenue disruption | Low | Very High | Hard block on Oct 15 – Jan 5 launch window | TBD |
| Discount stacking limitation (Shopify Functions) | Medium | High | Shopify Functions enable custom discount logic but have a hard ceiling of ~5 concurrent custom discount functions per cart. WooCommerce allows virtually unlimited coupon stacking and complex conditional logic that Shopify's native discount combinations (Product, Order, Shipping) may not support without heavy Functions development. **Action:** Discount Logic Audit before Apr 1 - map WooCommerce's top 10 complex coupons to Shopify [combination rules](https://help.shopify.com/en/manual/discounts/combining-discounts). [[Ref](https://shopify.dev/docs/api/functions)] [[Ref](https://shopify.dev/docs/apps/discounts/functions)] | TBD |
| Agency delivery delays | Medium | High | Define milestone-based payment schedule in SOW; milestones should align with Shopify deployment artifacts (theme branches, preview stores, Hydrogen preview links). Require acceptance criteria using Shopify CLI / Theme Check. [[Ref](https://shopify.dev/docs/themes/tools/cli)] | TBD |
| Cross-domain analytics attribution loss (headless) | **High** | High | Moving from single-domain (WooCommerce) to cross-domain (Hydrogen to Shopify checkout subdomain) causes GA4 "Direct" traffic inflation. Requires [Web Pixels API](https://shopify.dev/docs/api/pixels/customer-events) configuration and advanced GTM setup. Budget specialized technical scope. | TBD |
| Shared cart middleware complexity underestimated (headless) | **High** | High | Sharing a cart between WooCommerce/Liquid and Hydrogen requires custom middleware: cart ID persistence across frontends via Storefront API + unified customer sessions via Multipass. Not a built-in feature. Cost assumed included in headless build estimate ($150K-$250K above headed). Dedicated technical spike required before Apr 1. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| B2B capability gap in headless architecture | Medium | Medium | If the store handles wholesale, Shopify B2B is natively supported in headed but requires custom Storefront API work in headless (company profiles, bulk ordering, price lists). Evaluate in headed vs. headless scorecard. | TBD |
| Internal team bandwidth insufficient for co-development | **Low** | Medium | Co-dev + consultancy model is the chosen engagement; internal headcount commitment must be defined before contract; agency carries architecture and complex integration load | TBD |

---

## Open Assumptions

| Assumption | Needs Validation By | Status |
| --- | --- | --- |
| **Engagement model is co-development + consultancy - not agency-led only; internal team capacity is committed before contract signing** | Internal resourcing confirmed before Apr 10 | TBD |
| **Co-dev + consultancy model compresses the build timeline sufficiently to meet Aug 31** | Agency SOW with co-dev workstream breakdown by Apr 10 | TBD |
| **Selected agency can deliver a production-ready headed build by Aug 31, 2026 (~5 months) under co-dev model** | Agency SOW / confirmed project plan by Apr 10 | TBD |
| **Headless architecture is not achievable within the Aug 31 deadline without a phased/hybrid compromise** | Architecture decision on Apr 1 | TBD |
| Headed Shopify can support all Must-Have requirements natively or via apps | Agency discovery phase | TBD |
| Headless build cost: $150K-$250K above headed (self-build) or >$250K (agency) - validate against chosen engagement model | SOW from selected agency or internal estimate | TBD |
| WooCommerce can run in parallel during phased migration | Dev team assessment | TBD |
| Fulfil OMS has a viable Shopify connector or API path | Fulfil + dev team | TBD |
| ClaimLane integration is feasible on Shopify | ClaimLane + dev team | TBD |
| Shopify Markets handles CA/US pricing and routing without custom middleware | Shopify sandbox test - configure Markets, verify pricing, checkout flows, and hreflang routing in sandbox store. [[Ref](https://help.shopify.com/en/manual/markets)] | TBD |
| Current organic traffic can be preserved with redirect strategy | SEO audit | TBD |
| **Phased headless migration (WooCommerce live during Phase 1) reduces cutover risk but does NOT reduce integration rebuild cost - all connectors must be rebuilt for Shopify in Phase 2 regardless** | Validate with dev team before architecture decision Apr 1. Supported by Hydrogen shared carts / phased approach. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] | TBD |
| **Discount Logic Audit: WooCommerce's most complex 10 discount scenarios can be mapped to Shopify's combination rules (Product, Order, Shipping) without exceeding the ~5 concurrent Functions limit** | Audit before Apr 1. [[Ref](https://help.shopify.com/en/manual/discounts/combining-discounts)] | TBD |
| **WooCommerce URL structures (`/product-category/*`, `/product/*`) can be fully mapped to Shopify equivalents (`/collections/*`, `/products/*`) with 301 redirects** | SEO redirect map before go-live | TBD |
| **Multipass SSO is active on the Shopify Plus account and can be implemented within the build timeline (required for seamless headless login)** | Verify with Shopify account rep; included in Plus but requires implementation time | TBD |
| **If wholesale/B2B is in scope, Shopify B2B features meet requirements in the chosen architecture (headed supports natively; headless requires custom API work)** | Evaluate during agency discovery phase | TBD |
