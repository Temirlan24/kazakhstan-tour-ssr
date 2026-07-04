import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
    // Old lib/i18n.jsx t() silently returned undefined on a missing key
    // (callers fall back with `|| []`); keep that fail-soft behavior
    // instead of next-intl's default throw-on-missing-message.
    onError: (error) => {
      console.error(error);
    },
    getMessageFallback: ({ key }) => key,
  };
});
