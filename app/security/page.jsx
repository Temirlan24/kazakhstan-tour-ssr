import SecurityClient from '@/components/SecurityClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/security`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80';

export const metadata = {
  title: 'Security & Escort Services Kazakhstan — Bodyguard & Protection',
  description:
    'Professional security escort, bodyguard, personal protection and executive security services in Kazakhstan. Discrete and reliable. Contact via WhatsApp.',
  keywords: [
    'security escort Kazakhstan',
    'bodyguard Almaty',
    'personal security Kazakhstan',
    'executive protection Kazakhstan',
    'security escort Almaty',
    'VIP protection Kazakhstan',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Security & Escort Services Kazakhstan — Bodyguard & Protection',
    description:
      'Professional security escort, bodyguard, personal protection and executive security services in Kazakhstan.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Security escort services in Kazakhstan' }],
  },
  twitter: {
    title: 'Security & Escort Services Kazakhstan',
    description: 'Professional security escort, bodyguard and executive protection in Kazakhstan.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Security Services', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Security & Escort Services in Kazakhstan',
  description: 'Professional security escort, bodyguard and executive protection services in Kazakhstan.',
  provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'Kazakhstan' },
  serviceType: 'Security Services',
};

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <SecurityClient />
    </>
  );
}
