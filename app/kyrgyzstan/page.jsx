import KyrgyzstanClient from '@/components/KyrgyzstanClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/kyrgyzstan`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80';

export const metadata = {
  title: 'Туры в Кыргызстан — Иссык-Куль, Бишкек и Горы',
  description:
    'Туры в Кыргызстан из Алматы: обзорные экскурсии по Бишкеку, озеро Иссык-Куль, горные треккинги и многодневные приключения. Частные и групповые туры. Заказ через WhatsApp.',
  keywords: [
    'туры Кыргызстан',
    'Иссык-Куль тур',
    'тур Бишкек',
    'путешествие Кыргызстан',
    'туры из Алматы в Кыргызстан',
    'горный треккинг Кыргызстан',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Туры в Кыргызстан — Иссык-Куль, Бишкек и Горы',
    description:
      'Туры в Кыргызстан из Алматы: экскурсии по Бишкеку, озеро Иссык-Куль, горные треккинги.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Туры в Кыргызстан — Иссык-Куль' }],
  },
  twitter: {
    title: 'Туры в Кыргызстан — Иссык-Куль, Бишкек и Горы',
    description: 'Туры в Кыргызстан из Алматы: Бишкек, Иссык-Куль, горные треккинги.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Туры в Кыргызстан', item: PAGE_URL },
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
