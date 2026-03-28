# OliveNoor Limited Corporate Website

High-performance, responsive corporate website built with **Astro** and **Tailwind CSS**. Designed for the "Enterprise Modern" aesthetic with "Ireland Emerald" highlights.

## 🚀 Tech Stack

- **Framework:** [Astro 4.x](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** Inter (via Google Fonts)
- **Forms:** Netlify Forms (`data-netlify="true"`)
- **Icons:** SVG-based Heroicons-style

## 📂 Project Structure

- `src/layouts/`: Base HTML templates and global styles.
- `src/components/`: Modular UI components (Hero, Services, Products, etc.).
- `src/pages/`: Route definitions (Landing page at `index.astro`).
- `src/styles/`: Global CSS and Tailwind directives.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- NPM

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development

```bash
# Start the local development server
npm run dev
```

### Build & Deployment

```bash
# Build for production
npm run build

# Preview the build locally
npm run preview
```

## 🔒 Security & Privacy

- **Netlify Forms:** Handles form submissions without a backend.
- **Environment Variables:** Confidential company details (CRO, Contact Email) are managed via `.env` files.
- **Legal Compliance:** Includes mandatory trademark disclaimers and registration details in the footer.

## 📝 Configuration

Key brand colors are configured in `tailwind.config.mjs`:
- `deep-navy`: `#0f172a`
- `slate-on`: `#334155`
- `ireland-emerald`: `#10b981`

---
© 2026 OliveNoor Limited. Registered in Ireland.
