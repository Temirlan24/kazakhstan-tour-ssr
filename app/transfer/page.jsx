import TransferClient from '@/components/TransferClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/transfer`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Airport Transfer in Almaty — Economy, Business & VIP',
  description:
    'Reliable airport and city transfers in Almaty. Economy, Business, Minivan and VIP class vehicles with professional drivers. Meet & greet service. Book via WhatsApp.',
  keywords: [
    'airport transfer Almaty',
    'Almaty airport taxi',
    'transfer from Almaty airport',
    'VIP transfer Almaty',
    'city transfer Almaty',
    'meet and greet Almaty',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Airport Transfer Almaty — Economy, Business & VIP',
    description:
      'Reliable airport and city transfers in Almaty. Economy, Business, Minivan and VIP options.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Airport transfer service in Almaty' }],
  },
  twitter: {
    title: 'Airport Transfer Almaty — Economy, Business & VIP',
    description: 'Reliable airport and city transfers in Almaty. Economy to VIP options.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Airport Transfer Almaty', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Airport Transfer Almaty',
  description: 'Reliable airport and city transfer service in Almaty with Economy, Business, Minivan and VIP options.',
  provider: { '@type': 'TravelAgency', name: 'Crown Almaty Services', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Almaty', addressCountry: 'KZ' },
  serviceType: 'Airport Transfer',
};

export default function TransferPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <TransferClient />
    </>
  );
}
