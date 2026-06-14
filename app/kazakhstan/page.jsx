import Hero from '@/components/Hero';
import TourCatalog from '@/components/TourCatalog';
import CustomItinerary from '@/components/CustomItinerary';
import Guides from '@/components/Guides';
import Reviews from '@/components/Reviews';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/kazakhstan`;
const OG_IMAGE =
  'https://www.pelago.com/img/products/KZ-Kazakhstan/full-day-private-tour-in-big-almaty-lake/a94846f9-2685-485c-a7f9-e5101d2da7fc_full-day-private-tour-in-big-almaty-lake-xlarge.jpg';

export const metadata = {
  title: 'Guided Tours in Kazakhstan — Almaty, Astana & Aktau',
  description:
    'Discover Kazakhstan with guided tours: Big Almaty Lake, Charyn Canyon, Kolsay Lakes, Burabay, Astana city and Aktau steppe. Private & group tours from Almaty.',
  keywords: [
    'tours Kazakhstan',
    'Almaty tours',
    'Charyn Canyon tour',
    'Kolsay Lakes tour',
    'Big Almaty Lake',
    'Astana city tour',
    'Burabay tour',
    'Aktau tour',
    'Kazakhstan travel',
    'guided tours Kazakhstan',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Guided Tours in Kazakhstan — Almaty, Astana & Aktau',
    description:
      'Discover Kazakhstan with guided tours: Big Almaty Lake, Charyn Canyon, Kolsay Lakes, Burabay, Astana city and Aktau steppe.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Tours in Kazakhstan — Big Almaty Lake' }],
  },
  twitter: {
    title: 'Tours in Kazakhstan — Almaty, Astana, Aktau',
    description:
      'Guided tours: Big Almaty Lake, Charyn Canyon, Kolsay Lakes, Burabay, Astana and Aktau steppe.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Tours in Kazakhstan', item: PAGE_URL },
  ],
};

const toursSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tours in Kazakhstan',
  description: 'Guided tours across Kazakhstan from Almaty',
  url: PAGE_URL,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Big Almaty Lake Tour' },
    { '@type': 'ListItem', position: 2, name: 'Charyn Canyon Tour' },
    { '@type': 'ListItem', position: 3, name: 'Kolsay Lakes Tour' },
    { '@type': 'ListItem', position: 4, name: 'Burabay National Park Tour' },
    { '@type': 'ListItem', position: 5, name: 'Astana City Tour' },
    { '@type': 'ListItem', position: 6, name: 'Aktau & Caspian Sea Tour' },
  ],
};

export default function KazakhstanToursPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={toursSchema} />
      <Hero />
      <TourCatalog />
      <CustomItinerary />
      <Guides />
      <Reviews />
      <CTASection variant="kazakhstan" />
    </>
  );
}
