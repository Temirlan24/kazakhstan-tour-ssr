import CarWithDriverClient from '@/components/CarWithDriverClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/car-rent-with-driver`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Car with Driver Almaty — Chauffeur Service',
  description:
    'Professional chauffeur service in Almaty. Comfort, Premium, and Luxury cars with experienced English-speaking drivers. Hourly and daily rates. Book via WhatsApp.',
  keywords: [
    'car with driver Almaty',
    'chauffeur service Almaty',
    'hire driver Almaty',
    'private driver Almaty',
    'VIP driver Almaty',
    'personal driver Kazakhstan',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Car with Driver Almaty — Chauffeur Service',
    description:
      'Professional chauffeur service in Almaty. Comfort, Premium, and Luxury cars with experienced drivers.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Chauffeur service in Almaty' }],
  },
  twitter: {
    title: 'Car with Driver Almaty — Chauffeur Service',
    description: 'Professional chauffeur service in Almaty. Comfort to Luxury class vehicles.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Car with Driver Almaty', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Rental with Driver in Almaty',
  description: 'Professional chauffeur service in Almaty with Comfort, Premium, and Luxury vehicles.',
  provider: { '@type': 'TravelAgency', name: 'Crown Almaty Services', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Almaty', addressCountry: 'KZ' },
  serviceType: 'Chauffeur Service',
};

export default function CarWithDriverPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <CarWithDriverClient />
    </>
  );
}
