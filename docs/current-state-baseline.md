---
comments: true
---

# Current State Baseline

> Extracted from the [Migration Decision Framework](decision-framework.md) — WooCommerce pain points and pre-migration performance metrics.

---

## Known Pain Points Driving Migration

| Pain Point | Business Impact | Priority |
| --- | --- | --- |
| Rapid growth has outpaced WooCommerce capabilities | Platform instability, missed opportunities | High |
| Teams making high-impact decisions with limited system support | Operational risk, slow response | High |
| Manual workarounds for bundles, SKUs, and promotions | Error-prone, slows launches | High |
| No US storefront with compliant pricing and payment routing | Revenue ceiling | High |
| Fulfil integration fragility — **action: confirm Shopify connector or API path; sandbox test for inventory sync and order flow via Admin API** [[Ref](https://shopify.dev/docs/admin-api)] | Inventory and fulfillment risk | High |
| CA French-language storefront not live | Regulatory and market risk | Medium |
| Limited B2B / wholesale ordering capability | Revenue opportunity gap | Medium |

---

## Site Performance (Pre-Migration)

| Metric | Current Value | Target Post-Migration |
| --- | --- | --- |
| Annual GMV | TBD | |
| Core Web Vitals — LCP | TBD | <2.5s — measure Lighthouse + field data on staging. Headed: leverage OS2.0 performance best practices [[Ref](https://shopify.dev/docs/storefronts/themes/os20)]; Headless: Hydrogen edge rendering [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Core Web Vitals — CLS | TBD | <0.1 |
| Core Web Vitals — INP | TBD | <200ms |
| Conversion Rate | TBD | |
| Average Page Load Time | TBD | |
| Organic Search Sessions (monthly) | TBD | Maintain or grow |
