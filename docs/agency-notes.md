---
comments: true
---

# Agency Evaluation Notes

> Extracted from the [Migration Decision Framework](decision-framework.md) - detailed team observations from agency meetings and discovery sessions.

---

## Agency E (eHouse)

- **Recommended by Shopify account representative** and by Kavya; positioned as safe, proven Shopify Plus partner
- Steers 99%+ of projects to headed - treats headless as edge case
- Shopify is investing heavily in headed (Online Store 2.0 + Checkout Extensibility); Agency E aligned with that direction. [[Ref: OS2.0](https://shopify.dev/docs/storefronts/themes/os20)] [[Ref: Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout)]
- Headless quoted at $250K+; team flags this may be over-estimated
- Concerns: potential over-reliance on Shopify platform; AI tooling and advanced landing page/blog capabilities not confirmed; no impact on redundancy protocols
- **Key open question before Apr 1: Does Agency E support a co-development / consultancy engagement model? This is now a qualifying criterion.**

### Team Perspectives

- **Alex:** Developer preference leans headed (move fast); Shopify Markets being new is a positive; headed may not achieve pixel-perfect parity with current site
- **Sri:** Headless keeps options open for disruptive platforms 5 years out
- **JJ:** TCO is lighter with headed; need 3-year headless TCO (initiation + annual maintenance) before deciding

---

## Agency D (Domaine)

- **Recommended by Shopify account representative**; two formal meetings (Dec 10, Dec 18); most thorough discovery of the three agencies
- Presented four options: (1) Headed with React, (2) Headed, (3) Headless with Hydrogen + Oxygen, (4) Headless
- Co-development (Option 2) and consulting-only (Option 3) engagement models available
- Suggested 2-prong approach: BBBY on headed; S&S on WordPress + Shopify cart - learnings transferable
- **Pricing is significantly higher than Agency E and Agency S** - confirmed as the most expensive option across all engagement models
- Key open question: Shopify Functions cannot stack multiple discount types in a single cart (e.g., mattress + bed frame + GC redemption + promo code) - needs validation before architecture is locked. Hard ceiling of ~5 concurrent custom discount functions. WooCommerce allows virtually unlimited coupon stacking - audit the top 10 complex scenarios against Shopify [combination rules](https://help.shopify.com/en/manual/discounts/combining-discounts). **Action: Discount Logic Audit before Apr 1 + technical spike using Shopify Functions and discount APIs.** [[Ref: Shopify Functions](https://shopify.dev/docs/api/functions)] [[Ref: Discount Functions](https://shopify.dev/docs/apps/discounts/functions)]
- **Checkout Extensibility branding gap (headless):** In a headless setup, UI Extensions only exist inside the Shopify-hosted checkout pages, not in the Hydrogen frontend. This creates a design gap between the React-based storefront and the checkout. **Action: If headless is selected, Agency D must provide a design plan to skin the Checkout Extensibility branding to match the Hydrogen frontend.** [[Ref: Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout)]
- **B2B evaluation:** If wholesale is in scope, validate whether Shopify B2B features (company profiles, bulk ordering, price lists) meet requirements. Headed supports B2B natively; headless requires custom Storefront API work.

### Team Perspectives

- **Jason:** Co-dev is good; CMS advantage depends on copy volume; lowest risk path
- **Kavya:** Co-dev is valuable; search/filtering/product indexing and upsell widget are 2026 priorities - may be easier in headed; concerned about losing capabilities in headless
- **Alex:** Open to any involvement level

---

## Agency S (StreamCommerce)

- Did strong pre-meeting homework; liked Shopify discovery approach and sample site
- Rebuilt Casper Canada on Shopify - relevant reference
- GA4 attribution was painful on previous builds; need due diligence on Shopify analytics
- No headless experience - could not articulate headless benefits
- Not flexible for co-development model

### Team Perspectives

- **Justin G:** Appears to sell their ecosystem rather than advising; design system hard with existing theme
- **Justin C:** Not flexible for co-development model
- **Sri:** Good preparation but headless capability gap is disqualifying for that option
- **Jason:** Server-side WooCommerce plugin; redirect history needs SEO impact audit; headless could be done internally with their guidance on promo bundles / integrations

---

## Self-Build (Internal)

- Explored in developer analysis (see [Headless Migration - Developer Analysis](developer-analysis.md)) as a phased approach
- Phase 1: product pages via Storefront API while WooCommerce handles cart/checkout
- Phase 2: cart and checkout migrate to Shopify; WooCommerce remains on standby
- Phase 3: WooCommerce removed; full Shopify stack

### Pros

- Full ownership, no agency lock-in, lowest cash outlay
- Architectural consistency between S&S and BBBY easier to maintain if both internally owned (Justin G)

### Cons

- Internal team bandwidth is the hard constraint; co-development with any agency reduces this risk
