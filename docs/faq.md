---
comments: true
---

# FAQ - Terminology & Concepts

> Quick reference for terms used across the Shopify migration documentation. Organized by topic.

---

## Architecture

**What is "Headed" vs "Headless"?**

- **Headed (OS 2.0):** Shopify controls both the storefront (what customers see) and the checkout. You build using Shopify's theme system (Liquid templates, sections, JSON templates). Drag-and-drop editing in the theme customizer. Single domain for the entire experience.
- **Headless (Hydrogen/Oxygen):** You build a custom React frontend (using Shopify's Hydrogen framework) that talks to Shopify's backend via APIs. Shopify still hosts the checkout on its own subdomain. Two domains = more complexity.

**What is OS 2.0 (Online Store 2.0)?**

Shopify's current theme architecture. Introduced JSON templates, sections everywhere (not just the homepage), and app blocks - which let apps inject UI into themes without editing code. This is the foundation for headed builds.

**What is Hydrogen?**

Shopify's React-based framework for building headless storefronts. It provides components, hooks, and utilities optimized for Shopify's Storefront API. Think of it as "Shopify's version of Next.js."

**What is Oxygen?**

Shopify's hosting platform for Hydrogen storefronts. It handles deployment, edge rendering (serving pages from servers close to users), and CI/CD pipelines. Hydrogen builds deploy to Oxygen.

---

## Checkout & Payments

**What is Checkout Extensibility?**

Shopify's system for customizing the checkout experience. It replaced the old `checkout.liquid` (which allowed full HTML/CSS control). Checkout Extensibility uses UI Extensions - sandboxed components that Shopify renders inside its hosted checkout pages. You can add custom fields, banners, payment options, and logic, but within Shopify's constraints.

**What is "Checkout Ownership"?**

Who controls the checkout experience. In headed, the checkout lives on the same domain as the storefront - seamless for customers and analytics. In headless, customers are redirected to a Shopify-hosted checkout subdomain (e.g., `checkout.yourstore.com`), creating a cross-domain transition. This causes:

- A visual "branding gap" between your custom React storefront and Shopify's checkout UI
- Analytics attribution issues (GA4 sees the domain change as a new session, inflating "Direct" traffic)

**What is "Checkout Routing"?**

The mechanism that directs a customer from the storefront to the checkout page. In headed, this is seamless - the customer clicks "Checkout" and stays on the same domain. In headless, the storefront (Hydrogen) and checkout (Shopify-hosted) are on different domains, so your code must: (1) create a checkout via the Storefront API, (2) redirect the customer to Shopify's checkout URL on a separate subdomain, and (3) pass the cart, customer session (via Multipass), and tracking context across the domain boundary. This cross-domain redirect is the root cause of analytics attribution challenges and requires careful configuration.

**What does "Checkout-Adjacent" mean in the Integration Map?**

Integrations that operate at or near the checkout layer (tax calculation, payment methods, carbon offsets) but are constrained by Shopify's hosted checkout. The effort is capped at storefront UI changes since Shopify controls the actual checkout.

---

## APIs & Technical Concepts

**What is the Storefront API?**

A public-facing GraphQL API for building custom shopping experiences. Used by headless storefronts (Hydrogen) to fetch products, manage carts, and initiate checkout. Does not require authentication for read operations.

**What is the Admin API?**

Shopify's backend API for managing store data - orders, products, customers, inventory, fulfillments. Used by apps, integrations, and backend services. Requires authentication. Available in both REST and GraphQL.

**What are Webhooks?**

Automated notifications Shopify sends to your server when something happens (order created, product updated, customer registered). Backend integrations like Fulfil, Xero, and TrackShip rely on webhooks to stay in sync with Shopify.

**What is the Web Pixels API / Customer Events?**

Shopify's system for tracking customer behavior (page views, add-to-cart, purchases) and sending that data to analytics/marketing tools (Google Analytics, Facebook, Klaviyo). In headed, this is mostly automatic. In headless, you must manually instrument every event in your React code.

**What are Shopify Functions?**

Server-side code that runs inside Shopify's infrastructure to customize business logic - most commonly discount calculations. They replace the need for custom apps to intercept checkout. Key limitation: hard ceiling of ~5 concurrent custom discount functions per cart.

**What is Multipass?**

A single sign-on (SSO) mechanism included with Shopify Plus. It lets you authenticate customers on an external system and seamlessly log them into Shopify without a separate login. Critical for headless: if a customer logs in on your Hydrogen frontend, Multipass passes that session to Shopify's checkout so they don't have to log in again.

---

## Integrations

**What do the integration types mean?**

| Type | What it means |
| --- | --- |
| **Backend-API** | Server-to-server communication via Admin API and webhooks. Same effort whether headed or headless. |
| **Storefront-Widget** | Visible UI component on the storefront (chat widgets, review stars, financing messaging). In headed, apps inject these via Theme App Extensions (drag-and-drop). In headless, you manually embed React components. |
| **Checkout-Adjacent** | Operates at the checkout layer (tax, payment methods). Shopify controls checkout, so effort is capped regardless of architecture. |

**What does "MVP Parity" mean?**

Whether the integration must be live and functional on Shopify at launch to match current WooCommerce operations. Integrations marked "No" are either Shopify-native out of the box (no build work needed) or net-new capabilities that don't exist on WooCommerce today.

**What is Theme App Extensions / App Blocks?**

The OS 2.0 mechanism that lets Shopify apps add UI components to your theme without editing theme code. Merchants can drag and drop these "app blocks" in the theme customizer. This is why headed integrations like chat widgets, review displays, and financing messages are rated "Low" effort.

---

## Migration & Risk

**What is the standard Shopify migration path?**

Shopify's official migration approach is a one-time data cutover — not running two platforms simultaneously. Methods include CSV import, the Store Migration app, third-party migration apps, or hiring a Shopify Partner. You migrate products, customers, and order history, then cut over to Shopify. Running WooCommerce and Hydrogen in parallel with synchronized carts is not a standard Shopify pattern and would require fully custom middleware.

**Why is SEO continuity risk higher for headless?**

- **Headed:** storefront and checkout live on the same domain (e.g., `yourstore.com`). Standard Shopify URL structures (`/products`, `/collections`, `/cart`). Analytics tracking is straightforward — one domain, seamless cookies and session persistence, simple customer journey attribution.
- **Headless:** your custom Hydrogen storefront and Shopify's checkout are on separate domains. This requires careful cross-domain tracking configuration, redirect handling between your frontend and Shopify's checkout, and additional setup for tools like Google Analytics, Meta Pixel, etc. to track the full customer journey. More moving parts = more potential points of failure in tracking and attribution.

"Lower risk" for headed means fewer technical requirements and less chance of losing attribution data during the customer journey.

**What is "cross-domain analytics attribution loss"?**

When the storefront (Hydrogen) and checkout (Shopify-hosted) are on different domains, Google Analytics 4 treats the domain change as a new session. This inflates "Direct" traffic numbers and breaks conversion attribution (you can't tell which ad or campaign led to the purchase). Fixing this requires Web Pixels API configuration and advanced GTM cross-domain tracking setup.

**What is the "Discount Logic Audit"?**

A pre-decision validation exercise: take the 10 most complex WooCommerce coupon/discount scenarios (e.g., mattress + bed frame bundle + gift card redemption + promo code) and verify they can be replicated using Shopify's discount combination rules and Functions, without exceeding the ~5 concurrent Functions limit.

**What does the "Oct 15 - Jan 5 holiday freeze" mean?**

No production launches allowed during peak shopping season (Black Friday, Cyber Monday, holiday period). If the Aug 31 hard deadline is missed, the next available launch window is January 2027.

---

## Agencies & Engagement

**What is "co-development" (co-dev)?**

An engagement model where the agency and internal team build together. The agency handles architecture decisions, complex integrations, and specialized Shopify work. The internal team handles components they're capable of, reducing cost and building internal knowledge. This is the chosen engagement model.

**What is a "consultancy" model?**

The agency provides guidance, code reviews, and architectural decisions, but the internal team does most of the building. Lower agency cost, higher internal effort.

**Why were some agencies disqualified?**

The co-development model is a qualifying criterion. Agency S (StreamCommerce) was effectively disqualified because they are not flexible on engagement model - they want to own the full build. Any agency that cannot support co-dev is out.

---

## Shopify Plus Specifics

**What is Shopify Plus?**

Shopify's enterprise tier (~$2,300/mo). Includes features not available on standard plans: Checkout Extensibility, Multipass SSO, Shopify Functions, B2B capabilities, Shopify Flow (automation), and dedicated account management.

**What is the GMV fee?**

Gross Merchandise Value fee. Shopify Plus charges 0.40% on monthly sales above the $800K USD/month threshold. This is on top of the base subscription and payment processing fees.

**What is Shopify Markets?**

Shopify's built-in system for selling internationally. Handles multi-currency pricing, locale routing (e.g., Canadian French), duties/taxes, and domain/subfolder strategies. Relevant for the CA/US dual-market setup and hreflang SEO requirements.

**What are Shopify Collabs?**

A native Shopify feature for managing influencer and creator partnerships. Marked as "net-new" in the integration map because it doesn't exist on WooCommerce today - it's a bonus of moving to Shopify, not a migration requirement.

---

## SEO

**What is hreflang?**

An HTML tag that tells search engines which language/region a page targets. Critical for the CA French / EN-FR setup. Example: a page might have `hreflang="en-ca"` for English Canada and `hreflang="fr-ca"` for French Canada. If these are wrong after migration, Google may show the wrong language version in search results.

**What is a 301 redirect map?**

A comprehensive list mapping every old WooCommerce URL to its new Shopify equivalent. WooCommerce uses paths like `/product-category/mattresses/` and `/product/hybrid-mattress/`; Shopify uses `/collections/mattresses` and `/products/hybrid-mattress`. Without 301 redirects, all existing Google rankings and external links break.

**What are Core Web Vitals (CWV)?**

Google's metrics for page experience: loading speed (LCP), interactivity (INP), and visual stability (CLS). These are ranking factors. Need to benchmark before and after migration to ensure no regression.

---

## Tools & Integrations Referenced

| Term | What it is |
| --- | --- |
| **Fulfil** | Order Management System (OMS) - handles order lifecycle, inventory, fulfillment for all channels |
| **ClaimLane** | Returns and warranty management platform |
| **Avalara** | Automated tax calculation service |
| **Xero** | Accounting software (connects to Shopify for order/refund sync) |
| **Signifyd** | Fraud detection and chargeback protection |
| **Impact Radius** | Affiliate marketing and partnership tracking platform |
| **Zowie** | AI chatbot for storefront customer support; connects to Zendesk on the backend for ticketing |
| **Dscopify** | DSCO integration for connecting with retailers, marketplaces, and dropshipping partners via EDI/API. Not a B2B wholesale tool. Not MVP - evaluate post-launch. |
| **RaveCapture** | Customer review collection and display platform |
| **MyRegistry** | Gift registry widget integration |
| **TrackShip** | Shipment tracking and delivery notifications |
| **Sprout Social** | Social media management and analytics |
| **MessageMedia** | SMS notification service for order updates |
| **GTM** | Google Tag Manager - container for managing analytics and marketing tags |
| **GA4** | Google Analytics 4 - current version of Google Analytics |
