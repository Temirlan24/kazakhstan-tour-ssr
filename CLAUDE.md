# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, port 3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** with React 19 and Tailwind CSS v4, deployed to Vercel.

### SSR + Client split pattern

Every page route (`app/*/page.jsx`) is a **Server Component** responsible for:
- Exporting `metadata` for SEO (title, description, OG tags)
- Injecting JSON-LD structured data via `<JsonLd />`
- Delegating all rendering to a `*Client.jsx` component in `components/`

Example: `app/kazakhstan/page.jsx` → renders `<KyrgyzstanClient />`. This pattern lets Next.js generate static metadata server-side while keeping interactive UI client-side.

### i18n

Custom client-side i18n in [lib/i18n.jsx](lib/i18n.jsx):
- `I18nProvider` wraps the entire app in `app/layout.jsx`, default language is `RU`
- `useTranslation()` returns `{ lang, setLang, t, locale }`
- `t('nav.home')` resolves dot-notation keys against the active locale
- Locale files: `locales/en.json`, `locales/ru.json`, `locales/kz.json`
- Tour content (titles, descriptions, itineraries, included items) is stored **in the locale files** under numeric keys (e.g. `tours.1.title`), not in the data files

### Data layer

`data/` JS files export arrays of item objects with numeric `id` fields. These IDs are used to look up translated strings from the locale JSON. For example, `data/tours.js` holds images, duration filter tags, and city groupings; the human-readable text for each tour lives in `locales/*.json` under `tours.<id>`.

### Shared modal

`components/UnifiedModal.jsx` is the single reusable detail modal used by all service pages (tours, cars, apartments, security). It accepts `images`, `title`, `subtitle`, `description`, `price`, `params`, `included`, `whatToBring`, and CTA labels as props.

### Global config

`lib/config.js` exports `WHATSAPP_URL`, `SITE_URL` (falls back to `NEXT_PUBLIC_SITE_URL` env var), and `PHONE`. All CTA links point to WhatsApp — there is no backend booking system.

### Design system

Tailwind v4 with custom `@theme` tokens defined in `app/globals.css`:

| Token | Value |
|---|---|
| `amber` | `#C9A86C` (primary gold accent) |
| `brand-orange` | `#E07840` |
| `dark` | `#0A0A0B` (page background) |
| `surface` | `#141416` |
| `surface-2` | `#1C1C1F` |
| `divider` | `#2A2A2E` |
| `muted` | `#8A8A90` |

Fonts: **DM Sans** (`font-sans`) for UI, **Playfair Display** (`font-serif`) for display headings — loaded via Google Fonts in `app/layout.jsx`.

Component-specific CSS animations and hover states are injected as inline `<style>{STYLES}</style>` inside the component rather than in global CSS.

### Routes

| Path | Service |
|---|---|
| `/` | Home (all services overview) |
| `/kazakhstan` | Kazakhstan tours |
| `/kyrgyzstan` | Kyrgyzstan tours |
| `/car-rent` | Car rental (self-drive) |
| `/car-rent-with-driver` | Chauffeur hire |
| `/transfer` | Airport & city transfers |
| `/apartments` | Short-stay apartments |
| `/security` | VIP security & escort |

Sitemap and robots.txt are generated dynamically via `app/sitemap.js` and `app/robots.js`.

## gstack

Use the `/browse` skill from gstack for all web browsing tasks. **Never** use `mcp__claude-in-chrome__*` tools directly.

Available gstack skills:

| Skill | Skill | Skill |
|---|---|---|
| `/office-hours` | `/plan-ceo-review` | `/plan-eng-review` |
| `/plan-design-review` | `/design-consultation` | `/design-shotgun` |
| `/design-html` | `/review` | `/ship` |
| `/land-and-deploy` | `/canary` | `/benchmark` |
| `/browse` | `/connect-chrome` | `/qa` |
| `/qa-only` | `/design-review` | `/setup-browser-cookies` |
| `/setup-deploy` | `/setup-gbrain` | `/retro` |
| `/investigate` | `/document-release` | `/document-generate` |
| `/codex` | `/cso` | `/autoplan` |
| `/plan-devex-review` | `/devex-review` | `/careful` |
| `/freeze` | `/guard` | `/unfreeze` |
| `/gstack-upgrade` | `/learn` | |
