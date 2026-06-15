import HomePageClient from '@/components/HomePageClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

export const metadata = {
  title: 'Crown Services — Premium Tours, Car Rent & More in Almaty',
  description:
    'Book premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartments in Almaty. Fast booking via WhatsApp.',
  keywords: [
    'Crown Services',
    'tours Kazakhstan',
    'Almaty tours',
    'car rent Almaty',
    'transfer Almaty',
    'security escort Kazakhstan',
    'apartments Almaty',
    'Kyrgyzstan tours',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Crown Services — Premium Tours, Car Rent & More in Almaty',
    description:
      'Book premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartments in Almaty.',
    url: SITE_URL,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Premium tours in Kazakhstan — Crown Services',
      },
    ],
  },
  twitter: {
    title: 'Crown Services — Premium Tours, Car Rent & More in Almaty',
    description:
      'Book premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, airport transfer, security escort and apartments in Almaty.',
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Crown Services',
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={websiteSchema} />
      <HomePageClient />
    </>
  );
}
