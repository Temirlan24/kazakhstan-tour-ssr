import Hero from '@/components/Hero';
import TourCatalog from '@/components/TourCatalog';
import CustomItinerary from '@/components/CustomItinerary';
import Guides from '@/components/Guides';
import Reviews from '@/components/Reviews';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';
import { getTranslations } from 'next-intl/server';
import { localizedUrl, languageAlternates, LOCALE_TO_OG } from '@/i18n/routing';

const ROUTE = '/kazakhstan';
const OG_IMAGE = '/assets/tours/almaty/kolsay_2.jpg';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.kazakhstan' });
  const pageUrl = localizedUrl(SITE_URL, locale, ROUTE);

  return {
    title: t('title'),
    description: t('description'),
    keywords: t.raw('keywords'),
    alternates: {
      canonical: pageUrl,
      languages: languageAlternates(SITE_URL, ROUTE),
    },
    openGraph: {
      type: 'website',
      siteName: 'Crown Services',
      title: t('title'),
      description: t('description'),
      url: pageUrl,
      locale: LOCALE_TO_OG[locale],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: [OG_IMAGE],
    },
  };
}

export default async function KazakhstanToursPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  const pageUrl = localizedUrl(SITE_URL, locale, ROUTE);
  const homeUrl = localizedUrl(SITE_URL, locale);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('common.home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: t('kazakhstan.breadcrumb'), item: pageUrl },
    ],
  };

  const toursSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('kazakhstan.breadcrumb'),
    description: t('kazakhstan.description'),
    url: pageUrl,
    itemListElement: t.raw('kazakhstan.tourItems').map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={toursSchema} />
      <Hero />
      <TourCatalog />
      <CustomItinerary />
      <Guides />
      <Reviews />
      <CTASection variant="kazakhstan" />
    </>
  );
}
