import '../globals.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTopHandler from '@/components/ScrollToTopHandler';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, PHONE } from '@/lib/config';
import { Analytics } from '@vercel/analytics/next';
import { routing, LOCALE_TO_LANG, LOCALE_TO_OG } from '@/i18n/routing';

const OG_IMAGE = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('home.title'),
      template: '%s | Crown Services',
    },
    description: t('home.description'),
    keywords: t.raw('home.keywords'),
    authors: [{ name: 'Crown Services', url: SITE_URL }],
    creator: 'Crown Services',
    publisher: 'Crown Services',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_TO_OG[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => LOCALE_TO_OG[l]),
      url: SITE_URL,
      siteName: 'Crown Services',
      title: t('home.title'),
      description: t('home.description'),
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: t('home.title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: [OG_IMAGE],
    },
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      google: 'JtFAZczBxH2wxk1grL0mO0RHsw4HqpXi5OFr4R1kc0A',
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'seo.business' });

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: t('name'),
    url: SITE_URL,
    telephone: PHONE,
    description: t('description'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: t('addressLocality'),
      addressRegion: t('addressRegion'),
      addressCountry: 'KZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.238949,
      longitude: 76.889709,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: ['Russian', 'Kazakh', 'English'],
    },
    sameAs: ['https://wa.me/77072293635'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('catalogName'),
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: messages.seo.kazakhstan.breadcrumb } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: messages.seo.kyrgyzstan.breadcrumb } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: messages.seo.carRent.breadcrumb } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: messages.seo.transfer.breadcrumb } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: messages.seo.security.breadcrumb } },
        { '@type': 'Offer', itemOffered: { '@type': 'Accommodation', name: messages.seo.apartments.breadcrumb } },
      ],
    },
  };

  return (
    <html lang={LOCALE_TO_LANG[locale]}>
      <head>
        <link
          rel="icon"
          href="https://drive.google.com/thumbnail?id=1Ruoprk8P8DLCSYibesti599hx4VpCxR2&sz=w64"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ScrollToTopHandler />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
