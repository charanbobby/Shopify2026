# Headless Shopify Migration — Developer Analysis

*Sources: Shopify headless migration phase list.docx, Shopify migration to headless to do list.xlsx*

---

## Migration Phases

### Phase 0 — Preparatory Stage

- Information gathering
- Set up development environment

### Phase 1 — Product Information Retrieved from Shopify

Shopping cart and all ecommerce functions still run by WooCommerce. Product information (pricing, attributes, name, SKU, etc.) sourced from Shopify.

Note: During Phase 1, catalogues from both Shopify and WooCommerce need to be updated near-simultaneously.

**Pros**

- Product team can be gradually phased into the new system
- Impact of mistakes initially minimized
- Pages can be launched gradually to ease transition

**Cons**

- Extra workload temporarily
- Potentially two sources of truth

### Phase 2 — Shopping Cart, Ordering, and All Integrations from Shopify

The site should be running solely on Shopify and not rely on WooCommerce. WooCommerce and product-related integrations will remain on site for reference and to minimize impact in case any platform was forgotten during migration.

### Phase 3 — Legacy Plugins and Integrations Removed

- Remove WooCommerce and any integrations/plugins that are no longer necessary
- Plugin updates and customization port
- Upgrade PHP to 8.3 and fix deprecated code

---

## To Do List

### Phase 0

| ID | Task |
|---|---|
| 1 | Decision on which product information should be on Shopify (carousel images, custom fields, dimensions, etc.) |
| 2 | Set up development store on Shopify with current catalogue |

### Phase 1

| ID | Task |
|---|---|
| 3 | Set up and populate custom fields and images in Shopify (or migrate to WordPress page) |
| 4 | Set up product page template using Shopify catalogue and Storefront API |
| 5 | Additional modularization of product page components (carousel image, size/colour selector, details, etc.) |
| 6 | All product pages using Shopify catalogue |
| 7 | Set up landing page template using Shopify catalogue and Storefront API |
| 8 | Landing pages using Shopify catalogue |
| 9 | Search function using Shopify catalogue |
| 10 | Home page and remaining pages using Shopify catalogue |
| 11 | GMC feed from Shopify catalogue |

### Phase 2

| ID | Task |
|---|---|
| 12 | Shopping cart using Shopify Storefront API |
| 13 | Checkout on Shopify |
| 14 | Rate shopping based on Shopify catalogue and orders |
| 15 | ClaimLane based on Shopify |
| 16 | Sending tracking number through Shopify |
| 17 | ActiveCampaign integration with Shopify |

### Phase 3

| ID | Task |
|---|---|
| 18 | Remove WooCommerce from WordPress |
| 19 | Upgrade to PHP 8.0 and modify deprecated code |
| 20 | Update plugins and port customization |

---

## Key Exploratory Questions

### Phase 0/1

| Question | Answer / Reference |
|---|---|
| Should product page carousel images be stored on Shopify? | Yes, unless loading/performance issues arise. [DEV ticket](https://app.clickup.com/t/86b8fehhb) |
| Should landing page carousel images be stored on Shopify? | Yes, unless loading/performance issues arise. [DEV ticket](https://app.clickup.com/t/86b8fehhb) |
| Should we store front-end product information (details, certifications) on Shopify as product information? | [DEV ticket](https://app.clickup.com/t/86b8fevjm) |
| Can we put a SKU out of stock / back-ordered in one locale but not the other? | [DEV-2387](https://app.clickup.com/t/9014235134/DEV-2387) |
| Do we handle cross-sell and upsell in the frontend or Shopify? | [DEV-2360](https://app.clickup.com/t/9014235134/DEV-2360) |
| Is it possible to disable a discontinued SKU from one locale but not the other? | [DEV-2383](https://app.clickup.com/t/9014235134/DEV-2383) |
| How can we handle SKU changes? | [DEV-2384](https://app.clickup.com/t/9014235134/DEV-2384) |
| How do we handle two-packs? (Pillows, washcloths, hand towels) | [DEV-2385](https://app.clickup.com/t/9014235134/DEV-2385) |

### Phase 2

| Question | Answer |
|---|---|
| How do we handle bundled SKUs (e.g., furniture SKUs with multiple boxes)? | Use a BOM SKU (e.g., SNSFNWO5005AC3BDL) — same concept as WooCommerce. Fulfil has a BOM automation that explodes the bundle into individual components. |
| How do we handle bundle discounts? | Shopify Function |
| How to handle BOGO (Eco Soy Pillows)? | Shopify Function |
| Mattress, adj bed bundle (sheets bundle, eco soy, etc.) and flash sale discounts? | Shopify Function |
| How to handle Veritree? | SNS1TREE, SNS3TREE, SNS5TREE SKUs already exist on Shopify. |
| How to handle discounts with product combinations (bed frame per mattress, nightstand per bed frame, etc.)? | Shopify Function |
| How to handle White Gloves? | Set up White Gloves as a shipping rate; use Shopify Function to hide it outside the postal code range. |
| Accounting reports? | Review Michael's requirements. Shopify Analytics, native exports, Matrixify for cleaner exports, Eziz pulls data from API to Power BI. Retail Shopify has been in use for accounting for some time. |
| ActiveCampaign integration? | [Shopify App](https://apps.shopify.com/activecampaign) / [ActiveCampaign native integration](https://www.activecampaign.com/apps/shopify-integration) |
| TrackShip integration — can we provide tracking information page and shipping email through Shopify? | [Shopify App](https://apps.shopify.com/trackship) |
| ClaimLane integration? | No answer yet — to be investigated. |
| How to handle Affirm and PayPal financing? | These are payment methods added in Shopify admin. Affirm is already set up on production (Canada). |

### Other

| Question | Answer |
|---|---|
| Do we need to migrate old orders to Shopify? | Leaning towards no — new order ID naming convention makes it easy to differentiate when a customer calls. |
