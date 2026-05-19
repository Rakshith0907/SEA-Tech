# SEA-Tech Innovations LLP — Refined Website

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
sea-tech-refined/
├── public/
│   └── assets/
│       ├── SEA-logo.png        # Navbar logo
│       ├── SEA-icon.png        # Favicon
│       └── hero-bg.jpg         # Hero background image
├── src/
│   ├── styles/
│   │   ├── globals.css         # CSS variables, reset, layout utilities, animations
│   │   ├── Navbar.css          # Navbar + mobile menu
│   │   ├── Footer.css          # Footer
│   │   ├── Home.css            # All Home page sections
│   │   └── Pages.css           # Shared inner page styles
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sustainability.jsx
│   │   ├── Energy.jsx
│   │   ├── Agriculture.jsx
│   │   └── StrategicSystems.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## What Changed

### CSS Architecture
- **No Tailwind** — all styles are in plain `.css` files under `src/styles/`
- No inline `style={{}}` props except for dynamic/data-driven values (colors from JS arrays, animation delays)
- CSS custom properties (`--green`, `--teal`, etc.) defined in `globals.css`

### Hero Section
- Background: hero image at very low opacity (0.18) with cinematic dark overlay
- Topology canvas animation runs as a live background layer at 0.28 opacity
- Atmospheric fog blobs animate slowly in the background
- Headline font-weight reduced to 700 (from 800)
- "Strategic Innovation" gradient is muted (sage green → slate blue), not neon
- Hero content max-width reduced to 640px for editorial feel
- Buttons: primary has glassmorphism shadow, secondary is a clean outline

### Navbar
- Starts fully transparent on homepage hero
- On scroll: frosted glass (backdrop-filter blur) dark treatment
- Mobile logo reduced ~15%

### Global
- Consistent section padding (120px desktop, 80px mobile)
- Smooth fade-up reveal animations via IntersectionObserver
- All section transitions use gradient backgrounds for visual flow
- Card hover states: elevated shadow + subtle green tint overlay
