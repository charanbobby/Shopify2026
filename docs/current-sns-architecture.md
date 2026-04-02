---
comments: true
---

# **Silk & Snow - End-to-End Architecture (Updated Markdown Version)**

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

```text
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

All WooCommerce connector code (plugins, PHP hooks, webhooks) is WooCommerce-specific. **None of it is reusable on Shopify.** Every integration must be rebuilt regardless of architecture.

What IS preserved: vendor accounts/contracts, configurations, business rules, and domain knowledge. This reduces ramp-up time but not rebuild effort.

For the full integration-by-integration Shopify migration plan with headed vs. headless effort ratings, see the **[Integration Complexity Map](integration-map.md)**. For the phased migration approach (Phase 0-3), see the **[Developer Analysis](short-term-strategy.md)**.

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
