import CarRentClient from '@/components/CarRentClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/car-rent`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Car Rental Almaty — Comfort, Business, Luxury & Minivan',
  description:
    'Rent a car in Almaty without a driver: Comfort, Business, Premium, Luxury and Minivan classes. Toyota Camry, Lexus LX and more. Book via WhatsApp.',
  keywords: [
    'car rental Almaty',
    'rent a car Almaty',
    'car hire Almaty',
    'Toyota Camry rental Almaty',
    'Lexus rental Almaty',
    'self-drive rental Almaty',
    'luxury car rental Almaty',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Car Rental Almaty — Comfort, Business, Luxury & Minivan',
    description:
      'Rent a car in Almaty: Comfort, Business, Premium, Luxury and Minivan classes. Toyota Camry, Lexus LX and more.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Car rental in Almaty' }],
  },
  twitter: {
    title: 'Car Rental Almaty — Comfort, Business, Luxury & Minivan',
    description: 'Rent a car in Almaty: Toyota Camry, Lexus LX and more.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Car Rental Almaty', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Rental in Almaty',
  description: 'Self-drive car rental in Almaty: Comfort, Business, Premium, Luxury and Minivan classes.',
  provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Almaty', addressCountry: 'KZ' },
  serviceType: 'Car Rental',
};

export default function CarRentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <CarRentClient />
    </>
  );
}
