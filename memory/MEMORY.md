# Alan Phibbs Construction Site — Memory

## Stack
- Next.js 16 (App Router), Tailwind CSS v4, TypeScript, Framer Motion
- Fonts: Archivo (headings), Inter (body)
- Email: nodemailer API route at `app/api/contact/route.ts` — SMTP creds via SMTP_HOST/PORT/USER/PASS/SECURE/FROM env vars (see .env.local.example)
- Lightbox: yet-another-react-lightbox

## Brand
- Trading name: AP General Contractors Ltd — tagline "Residential | Commercial | Renovation" (constants in `lib/site.ts`)
- Logo: `public/logo-ap.png` (cropped/upscaled from `public/alanphibbslogo.png`), black line art; inverted to white on dark surfaces

## Design Direction (refreshed Oct 2026)
Bold, high-contrast contractor site: full-bleed video hero, Archivo headings + Inter body, brass accent.
- Semantic colour tokens in `app/globals.css` (`paper`, `ink`, `muted`, `line`, `accent`, `night`); dark mode swaps the CSS variables, so never add per-class dark overrides
- Every page opens on a dark image hero (`components/ui/PageHero.tsx`); the navbar is transparent over it and turns solid on scroll
- Mobile has a fixed Call / Discuss a Project bar (`components/layout/MobileActionBar.tsx`)
- Project galleries in `lib/projects.ts` list images explicitly; the first image is the cover, and finished work comes before in-progress shots

## File Structure
```
app/
  globals.css        — Tailwind + theme tokens + heading line-height
  layout.tsx         — Navbar + Footer only (no SocialStrip/ChatWidget)
  page.tsx           — Hero, ServiceCards, RecentWork, AwardBanner
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  contact/page.tsx
components/
  layout/  — Navbar, Footer, SocialStrip (dead), ChatWidget (dead)
  ui/      — Button, SectionHeading, Logo, ScrollIndicator, AnimateOnScroll
  home/    — Hero, ServiceCards, RecentWork, AwardBanner
  projects/ — ProjectGrid, ProjectCard, ProjectFilter
  contact/ — ContactForm
lib/       — projects.ts, services.ts data
```
