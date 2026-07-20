import { SITE_URL } from '@/lib/config';
import { routing, localizedUrl, languageAlternates } from '@/i18n/routing';
import { tours } from '@/data/tours';
import { cars } from '@/data/cars';
import { kgTours } from '@/data/kgTours';
import { apartments } from '@/data/apartments';
import { transfers } from '@/data/transfer';

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

// Tours with a `slug` have a dedicated /kazakhstan/tours/<slug> page (see
// app/[locale]/kazakhstan/tours/[slug]/page.jsx) and belong in the sitemap
// alongside the top-level service routes.
const TOUR_ROUTES = tours
  .filter((tour) => tour.slug)
  .map((tour) => ({ path: `/kazakhstan/tours/${tour.slug}`, priority: 0.6, changeFrequency: 'monthly' }));

// Cars with a `slug` have a dedicated /car-rent/cars/<slug> page (see
// app/[locale]/car-rent/cars/[slug]/page.jsx).
const CAR_ROUTES = cars
  .filter((car) => car.slug)
  .map((car) => ({ path: `/car-rent/cars/${car.slug}`, priority: 0.6, changeFrequency: 'monthly' }));

// Kyrgyzstan tours with a `slug` have a dedicated /kyrgyzstan/tours/<slug>
// page (see app/[locale]/kyrgyzstan/tours/[slug]/page.jsx).
const KG_TOUR_ROUTES = kgTours
  .filter((tour) => tour.slug)
  .map((tour) => ({ path: `/kyrgyzstan/tours/${tour.slug}`, priority: 0.6, changeFrequency: 'monthly' }));

// Apartments with a `slug` have a dedicated /apartments/units/<slug> page
// (see app/[locale]/apartments/units/[slug]/page.jsx).
const APARTMENT_ROUTES = apartments
  .filter((apartment) => apartment.slug)
  .map((apartment) => ({ path: `/apartments/units/${apartment.slug}`, priority: 0.6, changeFrequency: 'monthly' }));

// Transfer options with a `slug` have a dedicated /transfer/options/<slug>
// page (see app/[locale]/transfer/options/[slug]/page.jsx).
const TRANSFER_ROUTES = transfers
  .filter((transfer) => transfer.slug)
  .map((transfer) => ({ path: `/transfer/options/${transfer.slug}`, priority: 0.6, changeFrequency: 'monthly' }));

export default function sitemap() {
  const lastModified = new Date();

  return [
    ...ROUTES,
    ...TOUR_ROUTES,
    ...CAR_ROUTES,
    ...KG_TOUR_ROUTES,
    ...APARTMENT_ROUTES,
    ...TRANSFER_ROUTES,
  ].flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(SITE_URL, locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: languageAlternates(SITE_URL, route.path) },
    }))
  );
}
