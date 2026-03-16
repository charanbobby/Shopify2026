---
comments: true
---

# SEO Risk Assessment

> Extracted from the [Migration Decision Framework](decision-framework.md) — detailed SEO risk analysis for the Shopify migration.

---

| Area | Current State | Risk Level | Mitigation |
| --- | --- | --- | --- |
| Organic Traffic Value (monthly) | TBD | — | |
| High-Value URLs requiring redirects | TBD | High | Full redirect map before go-live; Hydrogen migration guidance stresses redirect setup when routes change. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| CA French / EN-FR hreflang | TBD | High | Validate hreflang on staging before launch; Shopify Markets provides built-in locale routing — validate behavior in sandbox. [[Ref](https://help.shopify.com/en/manual/markets)] |
| Blog & Content Migration | TBD | Medium | Map all content URLs; preserve slugs where possible |
| Canonical URL Strategy | TBD | Medium | Define canonical rules for CA vs US markets; Shopify Markets may handle locale routing natively — confirm. [[Ref](https://help.shopify.com/en/manual/markets)] |
| Structured Data / Schema | TBD | Medium | Audit and reimplement JSON-LD via theme or app blocks (OS2.0). [[Ref](https://shopify.dev/docs/storefronts/themes/os20)] [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| Site Speed Impact Post-Migration | Headed likely neutral; Headless likely improved (edge rendering via Oxygen) | Medium | Run CWV benchmarks on staging (Lighthouse, Web Vitals); deploy staging with noindex until validated. [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] |
| Post-Launch SEO Monitoring | N/A | Medium | Run Google Search Console URL inspection post-migration; SEO recovery can take weeks — add contingency buffer |
