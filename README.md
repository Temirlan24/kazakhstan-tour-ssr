# Tour SSR

A multilingual (RU/EN/KZ) travel services website built with Next.js — tours in Kazakhstan and Kyrgyzstan, car rental (self-drive and with driver), airport/city transfers, short-stay apartments, and VIP security services. All bookings go through WhatsApp.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- Tailwind CSS v4
- Deployed on Vercel

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server (after build)
npm run lint     # Run ESLint
```

## Project structure

- `app/` — routes (Server Components with SEO metadata, delegate rendering to `components/*Client.jsx`)
- `components/` — UI components
- `data/` — structured data (images, filters, groupings)
- `locales/` — translated content (`en.json`, `ru.json`, `kz.json`)
- `lib/` — i18n and shared config
