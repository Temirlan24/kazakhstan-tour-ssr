import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, Vercel internals, and any path with a
  // file extension (this also keeps /sitemap.xml and /robots.txt, which
  // live outside the [locale] segment, out of locale negotiation).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
