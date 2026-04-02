---
comments: true
---

# Shopify Migration - Short-Term Strategy

> Sources: Shopify headless migration phase list.docx, Shopify migration to headless to do list.xlsx

## Phase Summary

| Phase | Description | Tasks | ETA |
| --- | --- | --- | --- |
| 0 | Preparatory | 1-2 | TBD |
| 0.5 | Testing Phase 0 | 3 | TBD |
| 1 | Product Catalogue on Shopify | 4-15 | TBD |
| 1.5 | Testing Phase 1 | 17 | TBD |
| 2 | Checkout, Cart & Integrations | 18-34 | TBD |
| 2.5 | Testing Phase 2 | 35 | TBD |
| 3 | Legacy Removal & Cutover | 36-37 | TBD |
| 3.5 | Testing Phase 3 | 38 | TBD |
| **Release** | **August 31, 2026** | | TBD |
| 4 | Nice to Haves | 39-43 | TBD |

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
| 1 | Decision on which product information should be on Shopify (carousel images, custom fields, dimensions, etc.) | TBD |
| 2 | Set up development store on Shopify with current catalogue | TBD |

### Phase 0.5 - Testing Phase 0

| ID | Task | ETA |
| --- | --- | --- |
| 3 | Validate development store setup and catalogue accuracy | TBD |

### Phase 1 - Product Catalogue on Shopify

| ID | Task | ETA |
| --- | --- | --- |
| 4 | Set up and populate custom fields and images in Shopify (or migrate to WordPress page) | TBD |
| 5 | Set up product page template using Shopify catalogue and Storefront API | TBD |
| 6 | Additional modularization of product page components (carousel image, size/colour selector, details, etc.) | TBD |
| 7 | All product pages using Shopify catalogue | TBD |
| 8 | Verify Shopify Functions to confirm all promotions are fully supported | TBD |
| 9 | Verify Silk&Snow bundling | TBD |
| 10 | Set up landing page template using Shopify catalogue and Storefront API | TBD |
| 11 | Landing pages using Shopify catalogue | TBD |
| 12 | Search function using Shopify catalogue | TBD |
| 13 | Home page and remaining pages using Shopify catalogue | TBD |
| 14 | GMC feed from Shopify catalogue | TBD |
| 15 | Locale-specific stock/availability per locale ([DEV-2387](https://app.clickup.com/t/9014235134/DEV-2387), [DEV-2383](https://app.clickup.com/t/9014235134/DEV-2383)) | TBD |

### Phase 1.5 - Testing Phase 1

| ID | Task | ETA |
| --- | --- | --- |
| 17 | End-to-end validation: product pages, landing pages, search, GMC feed, promotions, bundles | TBD |

### Phase 2 - Checkout, Cart & Integrations

| ID | Task | ETA |
| --- | --- | --- |
| 18 | Shopping cart using Shopify Storefront API | TBD |
| 19 | Checkout on Shopify | TBD |
| 20 | Fulfil OMS integration (order lifecycle, webhooks, Admin API) | TBD |
| 21 | Rate shopping - repoint custom FedEx app to pull dimensions/product details from Shopify catalogue | TBD |
| 22 | ClaimLane based on Shopify | TBD |
| 23 | Sending tracking number through Shopify | TBD |
| 24 | ActiveCampaign integration with Shopify | TBD |
| 25 | Payment processor - PayPal connection | TBD |
| 26 | Payment processor - Affirm financing | TBD |
| 27 | Signifyd / fraud detection at Shopify checkout | TBD |
| 28 | Avalara tax - validate if Shopify Tax replaces Avalara or if reconnection needed | TBD |
| 29 | Google Tag Manager / Google Ads - conversion tracking through Shopify checkout | TBD |
| 30 | Impact Radius - affiliate conversion pixel at checkout | TBD |
| 31 | Xero accounting sync (order/refund data from Shopify) | TBD |
| 32 | RaveCapture / reviews widget update for Shopify catalogue | TBD |
| 33 | Zendesk order data - confirm if already connected via Shopify POS or if repointing needed | TBD |
| 34 | Cutover order continuity - validate how orders placed on WooCommerce before cutover receive confirmations/tracking from the new Shopify platform | TBD |

### Phase 2.5 - Testing Phase 2

| ID | Task | ETA |
| --- | --- | --- |
| 35 | End-to-end validation: cart, checkout, payments, fulfillment, tracking, integrations | TBD |

### Phase 3 - Legacy Removal & Cutover

| ID | Task | ETA |
| --- | --- | --- |
| 36 | Remove WooCommerce from WordPress | TBD |
| 37 | Plan for cutover | TBD |

### Phase 3.5 - Testing Phase 3

| ID | Task | ETA |
| --- | --- | --- |
| 38 | End-to-end testing | TBD |

### Release - August 31, 2026

### Phase 4 - Nice to Haves

| ID | Task | ETA |
| --- | --- | --- |
| 39 | Upgrade PHP to 8.3 and fix deprecated code | TBD |
| 40 | Plugin updates and customization port | TBD |
| 41 | Cross-sell and upsell handling - confirm frontend or Shopify ([DEV-2360](https://app.clickup.com/t/9014235134/DEV-2360)) | TBD |
| 42 | Gift Card purchase & redemption - works on headless via Storefront API `cartGiftCardCodesAdd` mutation (API 2025-10+); redeemed on Shopify-hosted checkout | TBD |
| 43 | Shop Pay accelerated checkout - works on headless; appears as payment option on Shopify-hosted checkout via `checkoutUrl` redirect. No custom UI needed | TBD |

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
