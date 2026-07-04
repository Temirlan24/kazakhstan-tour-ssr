import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en', 'kz'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
});

// Internal locale ids ('kz') stay aligned with the existing locales/kz.json
// filename and UI label; these maps translate to the technically-correct
// BCP47/OG values only where external protocols require it.
export const LOCALE_TO_LANG = { ru: 'ru', en: 'en', kz: 'kk' };
export const LOCALE_TO_OG = { ru: 'ru_RU', en: 'en_US', kz: 'kk_KZ' };

// Russian (defaultLocale) stays unprefixed ("as-needed"); en/kz get a
// `/en` or `/kz` prefix. `path` should start with '/' (or be '' for home).
export function localizedUrl(siteUrl, locale, path = '') {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

// alternates.languages map for a given route path, covering every locale
// plus x-default (pointed at the default-locale URL).
export function languageAlternates(siteUrl, path = '') {
  const entries = routing.locales.map((l) => [LOCALE_TO_LANG[l], localizedUrl(siteUrl, l, path)]);
  entries.push(['x-default', localizedUrl(siteUrl, routing.defaultLocale, path)]);
  return Object.fromEntries(entries);
}
