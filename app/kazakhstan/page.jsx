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
  title: 'Туры по Казахстану — Алматы, Астана и Актау',
  description:
    'Частные и групповые туры по Казахстану: Большое Алматинское озеро, Чарынский каньон, Кольсайские озёра, Бурабай, Астана и Актау. Организация туров из Алматы.',
  keywords: [
    'туры Казахстан',
    'туры Алматы',
    'Чарынский каньон тур',
    'Кольсайские озёра тур',
    'Большое Алматинское озеро',
    'тур Астана',
    'Бурабай тур',
    'Актау тур',
    'путешествие Казахстан',
    'групповые туры Казахстан',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Туры по Казахстану — Алматы, Астана и Актау',
    description:
      'Частные и групповые туры по Казахстану: Большое Алматинское озеро, Чарынский каньон, Кольсайские озёра, Бурабай, Астана и Актау.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Туры по Казахстану — Большое Алматинское озеро' }],
  },
  twitter: {
    title: 'Туры по Казахстану — Алматы, Астана, Актау',
    description:
      'Туры по Казахстану: Большое Алматинское озеро, Чарынский каньон, Кольсайские озёра, Бурабай, Астана и Актау.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Туры по Казахстану', item: PAGE_URL },
  ],
};

const toursSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Туры по Казахстану',
  description: 'Частные и групповые туры по Казахстану из Алматы',
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
