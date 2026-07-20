import SecurityClient from '@/components/SecurityClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';
import { getTranslations } from 'next-intl/server';
import { localizedUrl, languageAlternates, LOCALE_TO_OG } from '@/i18n/routing';

const ROUTE = '/security';
const OG_IMAGE = '/assets/hero/security.jpg';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.security' });
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

export default async function SecurityPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  const pageUrl = localizedUrl(SITE_URL, locale, ROUTE);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('common.home'), item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: t('security.breadcrumb'), item: pageUrl },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('security.schemaName'),
    description: t('security.schemaDescription'),
    provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Kazakhstan' },
    serviceType: 'Security Services',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.raw('security.faq').map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <SecurityClient />
    </>
  );
}
