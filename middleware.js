import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing, {
    // Only next-intl's per-locale routing needs auto Link headers off — we
    // already emit correct hreflang (kk for the kz locale) via each page's
    // generateMetadata()/alternates.languages, so avoid the mismatched
    // auto-generated ones (which use the raw 'kz' locale id, an invalid
    // hreflang code) that next-intl adds by default.
    alternateLinks: false,
});

export const config = {
  // Skip API routes, Next internals, Vercel internals, and any path with a
  // file extension (this also keeps /sitemap.xml and /robots.txt, which
  // live outside the [locale] segment, out of locale negotiation).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
