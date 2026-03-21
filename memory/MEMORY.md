# Alan Phibbs Construction Site — Memory

## Stack
- Next.js 16 (App Router), Tailwind CSS v4, TypeScript, Framer Motion
- Fonts: Playfair Display (heading, 400/700/900), DM Sans (body, 300/400/500/700)
- Email: nodemailer API route at `app/api/contact/route.ts` — SMTP creds via SMTP_HOST/PORT/USER/PASS/SECURE/FROM env vars (see .env.local.example)
- Lightbox: yet-another-react-lightbox

## Design Direction (established Feb 2025)
**Visual personality:** Strong Irish craftsman editorial — left-anchored, typographically scaled, print-influenced. Not startup. Not SaaS.

Key decisions:
- All headings left-aligned by default (`SectionHeading` has opt-in `centered` prop)
- No `rounded-full` or `rounded-lg` anywhere in active UI (only dead code in SocialStrip/ChatWidget)
- No floating UI widgets (SocialStrip + ChatWidget removed from layout)
- No Navbar top bar (removed — was generic SME trope)
- Button has no border-radius, no hover shadow
- Hero h1: `font-black text-[4rem] md:text-[7rem] lg:text-[9rem]` with `leading-[0.88]`
- Inner page heroes: `items-end` bottom-anchored, left-aligned, `mt-20`, subtitle as `text-xs uppercase tracking-[0.2em]`
- Mosaic/project grids use `gap-px bg-cream-300` (thin separator lines) not `gap-4`
- AwardBanner: ghost "25" at `text-[7rem] text-white/8` overlapping "Years" in gold — editorial (no award-winning text — removed)
- Feature cards (About): `border-l-2 border-gold-500 pl-6` — no white cards, no icons, no shadows
- Project category badges: plain `text-[10px] uppercase tracking-[0.2em] text-maroon-800/35`
- ProjectFilter: sharp rectangular buttons with border, no `rounded-full`
- Footer column headers: `text-[10px] uppercase tracking-[0.2em] text-white/30` — de-emphasized
- Form inputs: sharp (no rounded), `focus:ring-1 focus:ring-maroon-800`
- Form labels: `text-[10px] uppercase tracking-[0.15em] text-maroon-800/45`

## Color Tokens
- `maroon-800` = #6B1D2A (primary brand)
- `gold-500` = #C9A84C (accent — used sparingly: borders, hover, "Years" text)
- `cream-50/100/200/300` = warm off-white backgrounds
- Body bg: `cream-50`

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
