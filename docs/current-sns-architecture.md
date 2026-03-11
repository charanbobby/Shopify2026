
---

# **Silk & Snow – End-to-End Architecture (Updated Markdown Version)**

## **1. Scenario Overview**

E-commerce architecture for **silkandsnow.com**, including:

* Website hosted on **AWS EC2 (LAMP + WordPress + WooCommerce)**
* Perimeter security via **Cloudflare** and **COMODO SSL**
* Systems supporting order management, logistics, customer service, marketing, finance, HR
* **Centralized data & reporting** built on Azure + PowerBI
* **External POS (STORIS)** operated by parent company, with **manual order feed** to Fulfil and **Domo CSV exports** into analytics

Also included:

* Definition of resources
* Data flows
* Layout instructions
* Icon usage rules (including the **Architecture Diagram\Logos** folder)

---

## **2. Containers (High-Level Boxes)**

```
1. Public Internet
2. Perimeter & Hosting
3. Core Website & E-commerce
4. Order Management & Logistics
5. Customer Experience & Support
6. Marketing & Growth
7. Finance, Fraud & Tax
8. Data & Analytics
9. External Systems (STORIS POS)
10. SaaS Lifecycle
```

---

## **3. Resources**

### **Perimeter & Hosting**

* Cloudflare
* Namecheap
* COMODO SSL
* AWS EC2 (LAMP)

---

### **Core Website & E-commerce**

* WordPress
* WooCommerce
* Shopify POS
* **STORIS POS (External System)**

  * Independent system operated outside Silk & Snow
  * **Manual order feed into Fulfil.io**
  * **Domo CSV feed to Azure Data**

---

### **Customer Experience & Support**

* Google Workspace (Gmail)
* Zendesk
* Zowie
* Asana
* Assembled
* Oracle HR

---

### **Order Management & Logistics**

#### ERP

* Fulfil.io

#### Warehouses / 3PL

* NFI Distribution
* JD Logistics
* Caledonia

#### Sales Channels

* WooCommerce
* Shopify POS
* EQ3
* TSC
* SCC
* Costco
* **STORIS POS (manual feed)**

#### Carrier Invoice Feeds (CSV)

* FedEx – SFTP
* UPS – SFTP
* Canpar – Email

#### Carrier Tracking APIs

* FedEx
* UPS
* Canpar
* Frontier
* TrackShip

#### Warehouse Shipment Feeds

* NFI – CSV (email)
* JD – API

#### Warehouse Inventory Feeds

* NFI – CSV (email)
* JD – API

#### Shipping/Tracking Tools

* AST (WooCommerce plugin)
* TrackShip
* Outbound carriers (FedEx, UPS, Canada Post, Canpar, Frontier, HET, AIT, Metropolitan)

---

### **Marketing & Growth**

* Reputation
* Google My Business
* RaveCapture
* ActiveCampaign
* MessageMedia
* Sprout Social
* Google Ads
* Google Tag Manager
* Google Merchant Center
* **Reddit Ads (API – ad spend feed)**

---

### **Finance, Fraud & Tax**

* Xero
* Dext
* ApprovalMax
* PayPal
* Affirm
* Signifyd
* Avalara

**Retired**: NoFraud, ADP

---

### **Data & Analytics**

* Microsoft Azure
* PowerBI
* BoC (exchange rate API)
* Headcount CSV (SFTP)
* Domo CSV (STORIS POS feed)
* Courier & warehouse data feeds
* Paid ads & marketing APIs

---

## **4. Connections (Arrows)**

### **Customer Browsing & Checkout**

* Users → Cloudflare → AWS EC2 → WordPress + WooCommerce
* WooCommerce → PayPal / Affirm / Signifyd / Avalara

---

### **Order Flow**

* WooCommerce / Shopify POS / EQ3 / TSC / SCC / Costco → Fulfil.io
* **STORIS POS → Fulfil.io (manual order feed)**
* Fulfil.io → NFI / JD / Caledonia
* Warehouses → Carriers

---

### **Courier & Warehouse Data Flows**

* Courier invoices

  * FedEx (SFTP) → Azure
  * UPS (SFTP) → Azure
  * Canpar (Email) → Azure
* Tracking status APIs → Azure
* Warehouse shipment/inventory

  * NFI CSV → Azure
  * JD API → Azure

---

### **Customer Support**

* Website → Zowie → Zendesk
* Email → Gmail → Zendesk
* Zendesk → Assembled (metrics)
* Zendesk → Asana (workflows)

---

### **Marketing & Reviews**

* WooCommerce/Shopify → Reputation
* Reputation → Google/Yelp/BBB/Trustpilot
* WordPress/WooCommerce → GTM → Ad platforms
* WooCommerce → Merchant Center → Google Ads
* WooCommerce → ActiveCampaign → MessageMedia
* Social Media ↔ Sprout Social
* Reddit Ads → Azure

---

### **Finance & Accounting**

* PayPal / Affirm / WooCommerce → Xero
* Dext → Xero
* ApprovalMax → Xero
* WooCommerce → Avalara
* WooCommerce / PayPal → Signifyd

---

### **HR & Payroll**

* HR data → Oracle HR
* Headcount CSV → Azure

---

### **Data & Reporting**

* WooCommerce / Fulfil.io / Xero / Zendesk → Azure
* Warehouse feeds → Azure
* Courier feeds → Azure
* Marketing feeds → Azure
* **STORIS → Domo CSV → Azure**
* Azure → PowerBI

---

## **5. Layout Instructions for Diagram Rendering**

### **Top**

* Users
* Cloudflare
* Search/social platforms

### **Second Layer**

* Namecheap
* COMODO SSL
* AWS EC2
* WordPress / WooCommerce

### **Middle Layer**

* Left: Order Management & Logistics
* Center: Support & CX
* Right: Marketing & Growth

### **Lower Layer**

* Finance / Fraud / Tax
* HR

### **Bottom**

* Data sources (file drops, SFTP, APIs, warehouses, STORIS via Domo)
* Azure
* PowerBI

### **External System Placement**

* **STORIS POS placed outside Silk & Snow network boundary**
* Lines:

  * **STORIS → Fulfil.io (manual order feed)**
  * **STORIS → Domo CSV → Azure**

### **Legend**

* Green – new systems
* Grey dashed – retired
* Default – active

---

## **7. Shopify Migration Notes**

### MVP Parity Integrations — Must Replicate at Launch

The following connections are **live today on WooCommerce** and must be re-established on Shopify to achieve parity at launch. All are considered **MVP Parity Required** in the [Migration Decision Framework](decision-framework.md).

| System | Current Connection | Shopify Path |
| --- | --- | --- |
| Fulfil.io (OMS) | WooCommerce → Fulfil API | Custom Shopify → Fulfil API (high effort) |
| Zendesk | WooCommerce orders/customer data | Native Shopify App |
| ClaimLane | WooCommerce returns/warranty | Custom / TBD |
| Signifyd | WooCommerce fraud checks | Shopify Fraud Protect (native) or Signifyd Shopify App |
| Avalara | WooCommerce tax calculation | Shopify Tax (native, likely replaces Avalara) or Avalara Shopify App |
| Xero | WooCommerce orders/payments → Xero | Xero native Shopify integration |
| ActiveCampaign | WooCommerce → ActiveCampaign | Native Shopify App |
| Google Tag Manager | WordPress GTM → ad platforms | Shopify Customer Events / web pixel |
| Google Ads | GTM conversion tracking | Shopify Google channel / GTM (high headless effort) |
| Affirm & PayPal | WooCommerce payment methods | Native Shopify payment methods |
| TrackShip | WooCommerce order tracking | Native Shopify App |
| Google Merchant Center | WooCommerce product feed | Native Shopify Feed |
| Impact Radius | WooCommerce affiliate pixel | Custom pixel / app |
| RaveCapture | WooCommerce reviews | Judge.me / Junip (migration of review data TBD) |
| Reputation | WooCommerce/Shopify → Reputation | Shopify App / webhook |
| Zowie Chatbot | WordPress embed | TBD — may be embed-compatible |
| MessageMedia (SMS) | Via ActiveCampaign | Klaviyo SMS or direct; routing decision needed |
| Sprout Social | Social channels | TBD — likely embed-compatible |

### Headless Architecture Reuse Opportunity

The current AWS/WooCommerce stack has already invested in API connections to Fulfil, Avalara, Signifyd, Xero, Zendesk, and others. A **phased headless migration** could preserve these connections during transition:

* **Phase 1:** Shopify Storefront API serves the frontend; WooCommerce backend remains live — existing connections stay intact, no rebuild required yet
* **Phase 2:** Cart and checkout migrate to Shopify; backend connections re-routed to Shopify APIs one by one
* **Phase 3:** WooCommerce decommissioned; all connections fully on Shopify

This means headless is not starting from zero on integrations — the existing infrastructure investment reduces rebuild cost and risk compared to a greenfield headless build. **This is under active investigation** as it materially affects the headed vs. headless architecture decision.

---

## **6. Icon Guidelines**

* Use official logos where available.
* **Icons are stored in: *Architecture Diagram\Logos* folder**
* Category colors:

  * Infrastructure – blue
  * ERP/Operations – dark orange
  * Customer Support – green
  * Marketing – purple
  * Finance/HR – teal
  * Retired – grey
