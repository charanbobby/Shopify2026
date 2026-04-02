---
comments: true
---

# Shopify Migration - Short-Term Strategy

> Sources: Shopify headless migration phase list.docx, Shopify migration to headless to do list.xlsx

## Phase Summary

| Phase | Description | Tasks | ETA |
| --- | --- | --- | --- |
| 0 | Preparatory | 1-2 | |
| 0.5 | Testing Phase 0 | 3 | |
| 1 | Product Catalogue on Shopify | 4-15 | |
| 1.5 | Testing Phase 1 | 17 | |
| 2 | Checkout, Cart & Integrations | 18-34 | |
| 2.5 | Testing Phase 2 | 35 | |
| 3 | Legacy Removal & Cutover | 36-37 | |
| 3.5 | Testing Phase 3 | 38 | |
| **Release** | **August 31, 2026** | | |
| 4 | Nice to Haves | 39-43 | |

---

## Migration Phases

### Phase 0 - Preparatory Stage

- Information gathering
- Set up development environment

### Phase 1 - Product Information Retrieved from Shopify

Shopping cart and all ecommerce functions still run by WooCommerce. Product information (pricing, attributes, name, SKU, etc.) sourced from Shopify.

Note: During Phase 1, catalogues from both Shopify and WooCommerce need to be updated near-simultaneously.

#### Pros

- Product team can be gradually phased into the new system
- Impact of mistakes initially minimized
- Pages can be launched gradually to ease transition

#### Cons

- Extra workload temporarily
- Potentially two sources of truth

### Phase 2 - Shopping Cart, Ordering, and All Integrations from Shopify

The site should be running solely on Shopify and not rely on WooCommerce. WooCommerce and product-related integrations will remain on site for reference and to minimize impact in case any platform was forgotten during migration.

### Phase 3 - Legacy Removal & Cutover

- Remove WooCommerce and any integrations/plugins that are no longer necessary
- Plan for cutover

### Phase 4 - Nice to Haves

- Upgrade PHP to 8.3 and fix deprecated code
- Plugin updates and customization port
- Cross-sell and upsell handling
- Gift Card purchase & redemption
- Shop Pay accelerated checkout

---

## To Do List

### Phase 0 - Preparatory

| ID | Task | ETA |
| --- | --- | --- |
| 1 | Decision on which product information should be on Shopify (carousel images, custom fields, dimensions, etc.) | |
| 2 | Set up development store on Shopify with current catalogue | |

### Phase 0.5 - Testing Phase 0

| ID | Task | ETA |
| --- | --- | --- |
| 3 | Validate development store setup and catalogue accuracy | |

### Phase 1 - Product Catalogue on Shopify

| ID | Task | ETA |
| --- | --- | --- |
| 4 | Set up and populate custom fields and images in Shopify (or migrate to WordPress page) | |
| 5 | Set up product page template using Shopify catalogue and Storefront API | |
| 6 | Additional modularization of product page components (carousel image, size/colour selector, details, etc.) | |
| 7 | All product pages using Shopify catalogue | |
| 8 | Verify Shopify Functions to confirm all promotions are fully supported | |
| 9 | Verify Silk&Snow bundling | |
| 10 | Set up landing page template using Shopify catalogue and Storefront API | |
| 11 | Landing pages using Shopify catalogue | |
| 12 | Search function using Shopify catalogue | |
| 13 | Home page and remaining pages using Shopify catalogue | |
| 14 | GMC feed from Shopify catalogue | |
| 15 | Locale-specific stock/availability per locale ([DEV-2387](https://app.clickup.com/t/9014235134/DEV-2387), [DEV-2383](https://app.clickup.com/t/9014235134/DEV-2383)) | |

### Phase 1.5 - Testing Phase 1

| ID | Task | ETA |
| --- | --- | --- |
| 17 | End-to-end validation: product pages, landing pages, search, GMC feed, promotions, bundles | |

### Phase 2 - Checkout, Cart & Integrations

| ID | Task | ETA |
| --- | --- | --- |
| 18 | Shopping cart using Shopify Storefront API | |
| 19 | Checkout on Shopify | |
| 20 | Fulfil OMS integration (order lifecycle, webhooks, Admin API) | |
| 21 | Rate shopping - repoint custom FedEx app to pull dimensions/product details from Shopify catalogue | |
| 22 | ClaimLane based on Shopify | |
| 23 | Sending tracking number through Shopify | |
| 24 | ActiveCampaign integration with Shopify | |
| 25 | Payment processor - PayPal connection | |
| 26 | Payment processor - Affirm financing | |
| 27 | Signifyd / fraud detection at Shopify checkout | |
| 28 | Avalara tax - validate if Shopify Tax replaces Avalara or if reconnection needed | |
| 29 | Google Tag Manager / Google Ads - conversion tracking through Shopify checkout | |
| 30 | Impact Radius - affiliate conversion pixel at checkout | |
| 31 | Xero accounting sync (order/refund data from Shopify) | |
| 32 | RaveCapture / reviews widget update for Shopify catalogue | |
| 33 | Zendesk order data - confirm if already connected via Shopify POS or if repointing needed | |
| 34 | Cutover order continuity - validate how orders placed on WooCommerce before cutover receive confirmations/tracking from the new Shopify platform | |

### Phase 2.5 - Testing Phase 2

| ID | Task | ETA |
| --- | --- | --- |
| 35 | End-to-end validation: cart, checkout, payments, fulfillment, tracking, integrations | |

### Phase 3 - Legacy Removal & Cutover

| ID | Task | ETA |
| --- | --- | --- |
| 36 | Remove WooCommerce from WordPress | |
| 37 | Plan for cutover | |

### Phase 3.5 - Testing Phase 3

| ID | Task | ETA |
| --- | --- | --- |
| 38 | End-to-end testing | |

### Release - August 31, 2026

### Phase 4 - Nice to Haves

| ID | Task | ETA |
| --- | --- | --- |
| 39 | Upgrade PHP to 8.3 and fix deprecated code | |
| 40 | Plugin updates and customization port | |
| 41 | Cross-sell and upsell handling - confirm frontend or Shopify ([DEV-2360](https://app.clickup.com/t/9014235134/DEV-2360)) | |
| 42 | Gift Card purchase & redemption - works on headless via Storefront API `cartGiftCardCodesAdd` mutation (API 2025-10+); redeemed on Shopify-hosted checkout | |
| 43 | Shop Pay accelerated checkout - works on headless; appears as payment option on Shopify-hosted checkout via `checkoutUrl` redirect. No custom UI needed | |

---

## Key Exploratory Questions

### Phase 0/1 Questions

| Question | Answer / Reference |
| --- | --- |
| Should product page carousel images be stored on Shopify? | Yes, unless loading/performance issues arise. [DEV ticket](https://app.clickup.com/t/86b8fehhb) |
| Should landing page carousel images be stored on Shopify? | Yes, unless loading/performance issues arise. [DEV ticket](https://app.clickup.com/t/86b8fehhb) |
| Should we store front-end product information (details, certifications) on Shopify as product information? | [DEV ticket](https://app.clickup.com/t/86b8fevjm) |
| Can we put a SKU out of stock / back-ordered in one locale but not the other? | [DEV-2387](https://app.clickup.com/t/9014235134/DEV-2387) |
| Do we handle cross-sell and upsell in the frontend or Shopify? | [DEV-2360](https://app.clickup.com/t/9014235134/DEV-2360) |
| Is it possible to disable a discontinued SKU from one locale but not the other? | [DEV-2383](https://app.clickup.com/t/9014235134/DEV-2383) |
| How can we handle SKU changes? | [DEV-2384](https://app.clickup.com/t/9014235134/DEV-2384) |
| How do we handle two-packs? (Pillows, washcloths, hand towels) | [DEV-2385](https://app.clickup.com/t/9014235134/DEV-2385) |

### Phase 2 Questions

| Question | Answer |
| --- | --- |
| How do we handle bundled SKUs (e.g., furniture SKUs with multiple boxes)? | Use a BOM SKU (e.g., SNSFNWO5005AC3BDL) - same concept as WooCommerce. Fulfil has a BOM automation that explodes the bundle into individual components. |
| How do we handle bundle discounts? | Shopify Function |
| How to handle BOGO (Eco Soy Pillows)? | Shopify Function |
| Mattress, adj bed bundle (sheets bundle, eco soy, etc.) and flash sale discounts? | Shopify Function |
| How to handle Veritree? | SNS1TREE, SNS3TREE, SNS5TREE SKUs already exist on Shopify. |
| How to handle discounts with product combinations (bed frame per mattress, nightstand per bed frame, etc.)? | Shopify Function |
| How to handle White Gloves? | Set up White Gloves as a shipping rate; use Shopify Function to hide it outside the postal code range. |
| Accounting reports? | Review Michael's requirements. Shopify Analytics, native exports, Matrixify for cleaner exports, Eziz pulls data from API to Power BI. Retail Shopify has been in use for accounting for some time. |
| ActiveCampaign integration? | [Shopify App](https://apps.shopify.com/activecampaign) / [ActiveCampaign native integration](https://www.activecampaign.com/apps/shopify-integration) |
| TrackShip integration - can we provide tracking information page and shipping email through Shopify? | [Shopify App](https://apps.shopify.com/trackship) |
| ClaimLane integration? | No answer yet - to be investigated. |
| How to handle Affirm and PayPal financing? | These are payment methods added in Shopify admin. Affirm is already set up on production (Canada). |

### Other Questions

| Question | Answer |
| --- | --- |
| Do we need to migrate old orders to Shopify? | No. The real concern is cutover continuity: if a customer places an order on WooCommerce just before cutover, how do they receive confirmation/tracking from the new Shopify platform? This needs to be tested during Phase 3 cutover planning. |
