---
comments: true
---

# Integration Complexity Map

> Extracted from the [Migration Decision Framework](decision-framework.md) - full integration-level detail for technical planning.

---

## Context

- **MVP Parity Required** = must be live and functional on Shopify at launch to match current WooCommerce operations. Any integration marked **No** is either Shopify-native out of the box (no build work) or a net-new capability beyond current state.
- **Headless architecture note:** All WooCommerce connector code (plugins, PHP hooks, webhooks) is WooCommerce-specific and cannot be reused on Shopify - every integration must be rebuilt regardless of headed or headless. [[Ref: Apps](https://shopify.dev/docs/apps)] [[Ref: Admin API](https://shopify.dev/docs/admin-api)] The real benefit of a phased headless approach is **risk mitigation, not cost savings**: shared carts and checkout routing allow WooCommerce to stay live during Phase 1 while Shopify connectors are built in parallel. [[Ref: Hydrogen migration](https://shopify.dev/docs/storefronts/headless/hydrogen/migrate)] The integration rebuild happens in Phase 2 regardless.
- **Multipass (headless):** Multipass SSO is included in Shopify Plus but requires implementation. For headless, Multipass is required for unified customer sessions between WooCommerce/Liquid and Hydrogen frontends during phased migration. Verify activation status with Shopify account rep and allocate implementation time.
- **Action required:** For each integration, validate the Shopify App Store listing and confirm migration effort with the vendor. [[Ref: Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout)]

### Integration Types

| Type | Description |
| --- | --- |
| **Backend-API** | Architecture-agnostic - same effort headed or headless. [[Ref: Admin API](https://shopify.dev/docs/api/admin-rest)] [[Ref: Webhooks](https://shopify.dev/docs/apps/build/webhooks)] |
| **Storefront-Widget** | Headed uses Theme App Extensions (drag-and-drop); headless requires manual React component embedding. [[Ref: Theme App Extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| **Checkout-Adjacent** | Constrained by Shopify-hosted checkout; effort is capped at storefront UI. [[Ref: Checkout for Headless](https://shopify.dev/docs/storefronts/headless/building-with-storefront-api/checkout)] |

---

## Integrations Where Architecture Matters (Headed ≠ Headless)

These integrations materially differ in effort between headed and headless - they are key inputs to the architecture decision.

| Integration | Type | MVP Parity | Shopify Native Equivalent | Headed | Headless | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Google Tag Manager | Storefront-Widget | **Yes** | Shopify Customer Events / GTM via web pixel | Low | **High** | Headless requires manual instrumentation of all frontend triggers (AddToCart, ViewProduct) via Hydrogen Analytics. [[Ref](https://shopify.dev/docs/api/pixels/customer-events)] [[Ref](https://shopify.dev/docs/storefronts/headless/hydrogen/analytics)] |
| Google Ads | Storefront-Widget | **Yes** | Shopify Google & YouTube channel / GTM conversion tracking | Low | **High** | Conversion pixels must be rewired via Web Pixels API or server-side conversions for headless. [[Ref](https://shopify.dev/docs/api/pixels/customer-events)] |
| ActiveCampaign / Klaviyo | Backend-API + Storefront | **Yes** | Native Shopify App | Low | **Medium** | Server-side sync (orders/customers) is Low/Low; client-side behavioral events (browse, add-to-cart) require Web Pixels API in headless. [[Ref](https://shopify.dev/docs/api/pixels/customer-events)] |
| Zendesk | Storefront-Widget | **Yes** | Native Shopify App | Low | **Medium** | Admin ticket sync is Low/Low; storefront chat widget needs manual embed in headless. [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| Signifyd (Fraud Detection) | Backend-API + Storefront | **Yes** | Shopify Fraud Protect (native) or Signifyd Shopify App | Low | **Medium** | Fraud decisioning is backend (Low/Low); headless requires manual device fingerprinting + IP/User-Agent delegation. [[Ref](https://shopify.dev/docs/api/storefront)] [[Ref](https://shopify.dev/docs/apps/build/checkout)] |
| Affirm & PayPal Financing | Checkout-Adjacent | **Yes** | Native payment methods | Low | **Medium** | Checkout payment handled by Shopify-hosted checkout (Low/Low); headless effort is for "As low as $X/mo" storefront messaging widgets. [[Ref](https://shopify.dev/docs/storefronts/headless/building-with-storefront-api/checkout)] [[Ref](https://shopify.dev/docs/apps/build/checkout)] |
| Reputation (Review Aggregator) | Backend-API + Storefront | **Yes** | Shopify App / webhook | Low | Low (sync) / **Medium** (widget) | Backend ingestion is Low/Low; storefront widget needs manual embed in headless. [[Ref](https://shopify.dev/docs/apps/build/webhooks)] |

---

## Integrations Where Architecture Doesn't Matter (Same Effort)

These integrations are architecture-agnostic - effort is identical whether headed or headless. They do not influence the architecture decision.

| Integration | Type | MVP Parity | Shopify Native Equivalent | Headed | Headless | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Fulfil (OMS) | Backend-API | **Yes** | Custom API | High | High | Admin API + webhooks for order lifecycle. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| ClaimLane (Returns/Warranty) | Backend-API | **Yes** | Custom / TBD | High | High | Admin API + webhooks. If ClaimLane has a storefront widget, headed would be simpler. |
| Impact Radius | Storefront-Widget | **Yes** | Custom Pixel / App | Medium | Medium | Affiliate conversion pixels via Web Pixels in both architectures. [[Ref](https://shopify.dev/docs/apps/build/marketing-analytics/pixels)] |
| RaveCapture / Review Platform | Storefront-Widget | **Yes** | TBD (Judge.me / Junip) | Medium | Medium | Both need widget embedding; headed uses app blocks, headless needs React/API. [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| Zowie Chatbot | Storefront-Widget | **Yes** | TBD | Medium | Medium | Chat widget requires manual embed in both; headed simpler via app blocks. [[Ref](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)] |
| MyRegistry | Storefront-Widget | **TBD** - confirm if live on WooCommerce today | TBD | Medium | Medium | Registry widget embedding similar in both. |
| Avalara (Tax) | Checkout-Adjacent | **Yes** | Shopify Tax - **validate with tax team** | Low | Low | Tax at Shopify-hosted checkout layer. [[Ref](https://help.shopify.com/en/manual/taxes/shopify-tax)] |
| Xero (Accounting) | Backend-API | **Yes** | Xero native Shopify integration | Low | Low | Admin API + webhooks for order/refund sync. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| MessageMedia (SMS) | Backend-API | **Yes** | Klaviyo SMS / direct; routing decision needed | Low | Low | Admin API + webhooks for order-triggered SMS. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| TrackShip | Backend-API | **Yes** | Native Shopify App | Low | Low | Fulfillment tracking via Admin API. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| Google Merchant Center | Backend-API | **Yes** | Native Shopify Feed | Low | Low | Product feed from Admin catalog. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| Sprout Social | Backend-API | **Yes** | TBD | Low | Low | Social management via API sync. [[Ref](https://shopify.dev/docs/api/admin-rest)] |
| Shopify Collabs | Backend-API | **No** - net-new; Shopify native | Native | Low | Low | Admin/channel feature. |
| Planet App (carbon shipping) | Checkout-Adjacent | **No** - net-new; Shopify native | Native Shopify App | Low | Low | Operates at checkout/order level. [[Ref](https://shopify.dev/docs/apps/build/checkout)] |
| Dscopify (B2B) | Storefront-Widget + Backend-API | **No** - not MVP; post-launch | **Shopify B2B (native)** - Dscopify reportedly sunsetting; Shopify Plus includes native B2B (company profiles, price lists, bulk ordering). | Low | Medium | **Not MVP.** Evaluate Shopify native B2B as replacement before investing in Dscopify migration. If native B2B covers requirements, no third-party integration needed. Headed supports B2B natively; headless requires custom Storefront API work. |

> **Notes:** Retail/wholesale channels (EQ3, TSC, SCC, Costco) all route through Fulfil - no separate Shopify integration needed. Finance tools (Dext, ApprovalMax) connect to Xero, not WooCommerce. Assembled (CX workforce) connects to Zendesk - unaffected by migration.
