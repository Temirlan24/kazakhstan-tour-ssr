import ApartmentsClient from '@/components/ApartmentsClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/apartments`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80';

export const metadata = {
  title: 'Apartments for Rent in Almaty — Daily & Monthly Rental',
  description:
    'Premium furnished apartments for rent in Almaty city center, Medeu, and other districts. Comfortable daily and monthly rentals. Book via WhatsApp.',
  keywords: [
    'apartments Almaty',
    'rent apartment Almaty',
    'short term rental Almaty',
    'daily apartment Almaty',
    'furnished apartment Almaty',
    'Almaty accommodation',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Apartments for Rent in Almaty — Daily & Monthly Rental',
    description:
      'Premium furnished apartments for rent in Almaty city center, Medeu, and other districts. Daily and monthly rentals.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Apartments for rent in Almaty' }],
  },
  twitter: {
    title: 'Apartments for Rent in Almaty — Daily & Monthly Rental',
    description: 'Premium furnished apartments in Almaty. Daily and monthly rentals.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Apartments in Almaty', item: PAGE_URL },
  ],
};

export default function ApartmentsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ApartmentsClient />
    </>
  );
}
