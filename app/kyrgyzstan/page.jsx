import KyrgyzstanClient from '@/components/KyrgyzstanClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/kyrgyzstan`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80';

export const metadata = {
  title: 'Tours in Kyrgyzstan — Issyk-Kul, Bishkek & Mountains',
  description:
    'Explore Kyrgyzstan: Bishkek city tours, Issyk-Kul lake, mountain treks and multi-day adventures. Private guided tours from Almaty. Book via WhatsApp.',
  keywords: [
    'Kyrgyzstan tours',
    'Issyk-Kul lake tour',
    'Bishkek city tour',
    'Kyrgyzstan travel',
    'tours from Almaty to Kyrgyzstan',
    'mountain trek Kyrgyzstan',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tours in Kyrgyzstan — Issyk-Kul, Bishkek & Mountains',
    description:
      'Explore Kyrgyzstan: Bishkek city tours, Issyk-Kul lake, mountain treks and multi-day adventures.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Tours in Kyrgyzstan — Issyk-Kul Lake' }],
  },
  twitter: {
    title: 'Tours in Kyrgyzstan — Issyk-Kul, Bishkek & Mountains',
    description: 'Explore Kyrgyzstan: Bishkek city tours, Issyk-Kul lake, mountain treks.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Tours in Kyrgyzstan', item: PAGE_URL },
  ],
};

export default function KyrgyzstanToursPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <KyrgyzstanClient />
    </>
  );
}
