import KyrgyzstanClient from '@/components/KyrgyzstanClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';
import { getTranslations } from 'next-intl/server';
import { localizedUrl, languageAlternates, LOCALE_TO_OG } from '@/i18n/routing';

const ROUTE = '/kyrgyzstan';
const OG_IMAGE = '/assets/tours/kyrgyzstan/kel_su_1.webp';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.kyrgyzstan' });
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

export default async function KyrgyzstanToursPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  const pageUrl = localizedUrl(SITE_URL, locale, ROUTE);
  const homeUrl = localizedUrl(SITE_URL, locale);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('common.home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: t('kyrgyzstan.breadcrumb'), item: pageUrl },
    ],
  };

  const toursSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('kyrgyzstan.breadcrumb'),
    description: t('kyrgyzstan.description'),
    url: pageUrl,
    itemListElement: t.raw('kyrgyzstan.tourItems').map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={toursSchema} />
      <KyrgyzstanClient />
    </>
  );
}
