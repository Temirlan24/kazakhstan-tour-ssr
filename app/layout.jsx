import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTopHandler from '@/components/ScrollToTopHandler';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, PHONE } from '@/lib/config';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import kz from '@/locales/kz.json';

const messages = { EN: en, RU: ru, KZ: kz };

const OG_IMAGE = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Crown Services — Tours, Car Rent, Security & Apartments',
    template: '%s | Crown Services',
  },
  description:
    'Premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartment booking in Almaty. Book via WhatsApp.',
  keywords: [
    'tours Kazakhstan',
    'Almaty tours',
    'car rent Almaty',
    'transfer Almaty',
    'security escort Kazakhstan',
    'apartments Almaty',
    'Kyrgyzstan tours',
    'Issyk-Kul tour',
    'Charyn Canyon tour',
    'Burabay tour',
  ],
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
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
    url: SITE_URL,
    siteName: 'Crown Services',
    title: 'Crown Services — Tours, Car Rent, Security & Apartments',
    description:
      'Premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartment booking in Almaty.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Crown Services — Premium tours in Kazakhstan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crown Services — Tours, Car Rent, Security & Apartments',
    description:
      'Premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartment booking in Almaty.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'JtFAZczBxH2wxk1grL0mO0RHsw4HqpXi5OFr4R1kc0A',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Crown Services',
  url: SITE_URL,
  telephone: PHONE,
  description:
    'Premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartment booking.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Almaty',
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
    availableLanguage: ['English', 'Russian', 'Kazakh'],
  },
  sameAs: ['https://wa.me/77072293635'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Travel & Transport Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Tours in Kazakhstan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Tours in Kyrgyzstan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Rental in Almaty' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airport Transfer Almaty' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Escort Kazakhstan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Accommodation', name: 'Apartments in Almaty' } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
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
        <I18nProvider messages={messages}>
          <ScrollToTopHandler />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </I18nProvider>
      </body>
    </html>
  );
}
