# Naano.com — B2B LinkedIn Creator Marketplace (Full Product Clone)

A high-fidelity, interactive reconstruction of [naano.com](https://naano.com) built for the **8x Engineering Assessment**.

This project delivers both the **marketing surface** and the **interactive core product**: an end-to-end creator discovery and campaign booking engine with full-funnel attribution analytics, real-time filtering, and persistent campaign state.

---

## 🚀 Live Demo & Quick Links

* **Live Deployment**: Ready for 1-click deployment on [Vercel](https://vercel.com)
* **Local Run**: `npm run dev` (starts on `http://localhost:3000`)

---

## 📐 Product Architecture & Core Features

### 1. The Marketing Engine & Social Proof
* **Sticky Pill Navigation**: Minimalist blurred glass navigation with dynamic cart badge indicator.
* **Hero Section**: 1:1 replica of Naano's value proposition, trust pills, and micro-metrics.
* **Infinite Brand Marquee**: CSS keyframe-driven continuous scroll featuring B2B SaaS logos (Lemlist, Attio, Folk, Ringover, BlogSEO case study).
* **High-Impact Social Proof**: Testimonial showcase with agency budget volume highlights.
* **Transparent Pricing Tiers**: Dual pricing architecture reflecting Naano's Self-Serve (€0/mo) and Done-For-You (€700/mo) models.

### 2. The Interactive Marketplace (Core Product)
* **Live Multi-Criteria Filtering**: Instantly filter across B2B categories (*SaaS, AI & Data, Growth & GTM, Engineering, FinTech, Product*).
* **Universal Search**: Real-time query matching across creator names, headlines, bios, skill tags, and previous brand collaborations.
* **Dynamic Sorting**: Sort by Recommended, Highest Follower Count, Engagement Rate, and Starting Price.
* **Creator Metric Cards**: Follower counts, verified engagement rates, fixed per-post rates, and previous brand tags.

### 3. Attribution Teardown Slide-Over Modal
* Demonstrates Naano's core differentiator: **Full-Funnel Pixel Attribution**.
* Shows tracked click-through rates, qualified leads generated, and pipeline value driven per creator.
* Real teardowns of sample sponsored posts with reach and conversion statistics.

### 4. Campaign Builder & Checkout Simulation
* **Persistent Campaign State**: Built with React state and hydrated with `localStorage` (persists on refresh without hydration flicker).
* **Reach & Budget Aggregation**: Live calculation of total estimated impressions, fixed per-post fees, and Stripe Connect escrow total.
* **Simulated Dispatch**: One-click dispatch simulating brief creation and tracking pixel deployment.

---

## 🛠️ Tech Stack & Design System

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Industry-standard React framework with optimal SEO and asset optimization |
| **Language** | **TypeScript (Strict)** | 100% type-safe data models and component contracts |
| **Styling** | **Tailwind CSS** | Custom design tokens matching Naano's `#FCFCFB` canvas and `#17181C` charcoal |
| **Icons** | **Lucide React** | Clean, lightweight SVG icon system |
| **State** | **React Hooks + LocalStorage** | Zero-latency, zero-external-dependency persistence |

### Design Tokens
* Canvas Background: `#FCFCFB`
* Deep Charcoal: `#17181C`
* Muted Foreground: `#55575E`
* LinkedIn Accent: `#0A66C2`
* Border Lines: `#E8E6E2`

---

## ⚡ Getting Started Locally

### Prerequisites
* **Node.js**: v18+ (tested on Node v24)
* **npm**: v9+

### Installation & Run
```bash
# 1. Clone or navigate to the directory
cd "f:/New folder"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build Verification
```bash
npm run build
npm run start
```

---

## 🎯 Alignment with 8x Values

1. **Ownership over Tickets**: Built as an end-to-end complete product rather than a partial static landing page.
2. **Speed & Execution**: Clean, modular components structured for rapid iteration and zero runtime overhead.
3. **Metric Accountability**: Focuses on business numbers (pipeline, leads, click-through attribution) which lies at the heart of 8x's product philosophy.
