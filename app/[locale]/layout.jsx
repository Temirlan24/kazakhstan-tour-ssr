import '../globals.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTopHandler from '@/components/ScrollToTopHandler';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, PHONE } from '@/lib/config';
import { Analytics } from '@vercel/analytics/next';
import { routing, LOCALE_TO_LANG, LOCALE_TO_OG } from '@/i18n/routing';

const OG_IMAGE = '/assets/tours/almaty/charyn_1.jpg';

// DM Sans has no Cyrillic subset on Google Fonts — this matches the prior
// hotlinked behavior, where RU/KZ body text already fell back to the system font.
const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

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
    // Mirrors the "5.0 · 60+ reviews on Google" rating shown in the Reviews section (components/Reviews.jsx).
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      reviewCount: '60',
    },
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
    <html lang={LOCALE_TO_LANG[locale]} className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/premium-service.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0A0A0B" />
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
