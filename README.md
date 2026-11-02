# Ilmify Tutorial Centre - Responsive Pricing Page

A modern, responsive, and performance-optimized pricing page built for **Ilmify Tutorial Centre** using **React**, **Vite**, and the latest **Tailwind CSS v4** architecture.

This project was engineered following modular architecture principles, decoupling data models from presentational views to achieve clean, maintainable code. This was built as part of a requirement on the completion of Tailwind css with Zihntech Academy

---

## 🚀 Features

- **Tailwind CSS v4 Architecture:** Fully configured using v4 workflows, defining custom brand tokens directly within the CSS layer via the `@theme` directive.
- **State-Driven Mobile Menu:** Features a responsive navigation bar utilizing React's `useState` hook to control a mobile hamburger menu toggle.
- **Dynamic Array Mapping:** Implements JavaScript's `.map()` array iterator to render distinct pricing plans dynamically without hardcoded code duplication.
- **Conditional Layout Highlighting:** Automatically scales and redesigns the featured "Standard Plan" card using clean ternary conditional class handling.
- **Accessible Interaction States:** Optimized with native `hover:` transitions, keyboard focus selectors (`focus:ring-2`), and `dark:` utility theme adaptations for all active anchors and buttons.
- **Fluid Layout Grids:** Built mobile-first using a fluid CSS grid layout that dynamically expands from a 1-column stack on phones to a 3-column configuration on large displays.

---

## 📂 Project Architecture

The codebase splits individual user interface concerns into modular, standalone functional components:

```text
src/

├── Navbar.jsx       # Stateful top navigation bar & mobile menu layout
├── Hero.jsx         # Branding intro section & primary call-to-action
├── PricingCard.jsx  # Reusable blueprint card processing explicit props
└── Footer.jsx       # Semantic bottom baseline container
├── index.css            # Global application styles & Tailwind v4 brand configurations
├── App.jsx              # Central state engine, core dataset matrix, & grid assembly
└── main.jsx             # React framework entry point
```

---

## 🛠️ Tech Stack

- **Framework:** React 18+ (via Vite)
- **Styling Engine:** Tailwind CSS v4
- **Language:** JavaScript (ES6+ / JSX)

---

## 💻 Getting Started Locally

Follow these sequential steps to clone the project repository and launch the local development server:

### 1. Clone the repository and navigate into the folder
```bash
cd IlmifyPricingPage
```

### 2. Install node dependencies
```bash
npm install
```

### 3. Start the Vite local development server
```bash
npm run dev
```

### 4. Preview the Application
Open your browser and navigate to the local address outputted in your terminal.

---

## 📝 Configuration Insights (Tailwind v4 Setup)

This project strictly bypasses outdated legacy `tailwind.config.js` script models. Custom brand tokens are declared natively within the system style sheets (`src/index.css`):

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #8a2be2;    /* Custom Educational Purple */
  --color-brand-secondary: #2c1b4d;  /* Deep Midnight Accent */
}
```

---

## 👥 Contributor
- **Developer:** [Aishat Orewa]
