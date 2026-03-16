---
comments: true
---

# Risk Register & Open Assumptions

> Extracted from the [Migration Decision Framework](decision-framework.md) — full risk and assumption tracking for the Shopify migration.

---

## Risk Register

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
| Discount stacking limitation (Shopify Functions) | Medium | High | Shopify Functions enable custom discount logic but have constraints on stacking multiple discount types in a single cart — validate with technical spike. [[Ref](https://shopify.dev/docs/api/functions)] [[Ref](https://shopify.dev/docs/apps/discounts/functions)] | TBD |
| Agency delivery delays | Medium | High | Define milestone-based payment schedule in SOW; milestones should align with Shopify deployment artifacts (theme branches, preview stores, Hydrogen preview links). Require acceptance criteria using Shopify CLI / Theme Check. [[Ref](https://shopify.dev/docs/themes/tools/cli)] | TBD |
| Internal team bandwidth insufficient for co-development | **Low** | Medium | Co-dev + consultancy model is the chosen engagement; internal headcount commitment must be defined before contract; agency carries architecture and complex integration load | TBD |

---

## Open Assumptions

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
