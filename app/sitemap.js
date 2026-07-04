import { SITE_URL } from '@/lib/config';
import { routing, localizedUrl, languageAlternates } from '@/i18n/routing';

const ROUTES = [
  { path: '',                          priority: 1.0, changeFrequency: 'weekly' },
  { path: '/kazakhstan',               priority: 0.9, changeFrequency: 'weekly' },
  { path: '/kyrgyzstan',               priority: 0.9, changeFrequency: 'weekly' },
  { path: '/car-rent',                 priority: 0.8, changeFrequency: 'monthly' },
  { path: '/car-rent-with-driver',     priority: 0.8, changeFrequency: 'monthly' },
  { path: '/transfer',                 priority: 0.8, changeFrequency: 'monthly' },
  { path: '/apartments',               priority: 0.8, changeFrequency: 'monthly' },
  { path: '/security',                 priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap() {
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(SITE_URL, locale, route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: languageAlternates(SITE_URL, route.path) },
    }))
  );
}
