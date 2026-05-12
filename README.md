# Quiet Engine

The site for **Quiet Engine** — a done-for-you product build + email engine for creators with audience.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)

**Live:** [quiet-engine.vercel.app](https://quiet-engine.vercel.app/)

## What It Is

A 3-tier creator-agency site that turns 10K–100K audiences into productized revenue.

- **Ghost Operating** — $0 upfront, 60/40 rev share. We build a digital product on your existing content + audience.
- **Email Engine** — $2,000/mo retainer. 12 emails/month written from your voice memos.
- **Full Stack** — $1,500/mo + 65/35 rev share. Both services bundled. The closed loop: product + the engine that sells it.

## What's On The Page

- **Hero** — three-line headline, ambient motion, stat strip
- **Problem** — three pain points (audience but no product, product but no email engine, both = impossible solo)
- **Process** — three-step launch flow
- **Packages** — three-tier pricing with Full Stack visually amplified
- **Calculator** — interactive audience-to-revenue projection, toggle between Ghost / Full Stack splits
- **Social Proof** — honest "founding partners" framing (no fake testimonials)
- **FAQ** — 10 questions covering service selection, pricing logic, risk math
- **CTA** — Calendly booking

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel (auto-deploy on push to `master`) |

## Local Dev

```bash
gh repo clone Jesseman-418/quiet-engine
cd quiet-engine
npm install
npm run dev
# http://localhost:3000
```

Edit → commit → push → Vercel auto-deploys.

## Design Conventions

- Dark theme. Background: gray-950 (`#030712`) with subtle 32px brand-green dot grid.
- Accent: brand-emerald palette (`#10b981` base).
- Glass utility classes: `glass`, `glass-hover`, `glass-strong`.
- Highlighted CTA card uses `glass-strong` + scale 1.04 + y-offset.
- Section dividers between every major section via `<Divider />` component.

## License

MIT
