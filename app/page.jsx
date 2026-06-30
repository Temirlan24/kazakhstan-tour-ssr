import HomePageClient from '@/components/HomePageClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

export const metadata = {
  title: 'Crown Services — Трансфер, Туры, Аренда Авто и Апартаменты в Алматы',
  description:
    'Премиальный сервис в Казахстане: VIP-трансфер из аэропорта, аренда авто, туры, охрана и апартаменты в Алматы. Один звонок — полная логистика. Заказ через WhatsApp.',
  keywords: [
    'Crown Services',
    'туры Казахстан',
    'туры Алматы',
    'аренда авто Алматы',
    'трансфер Алматы',
    'охрана Казахстан',
    'апартаменты Алматы',
    'туры Кыргызстан',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Crown Services — Трансфер, Туры, Аренда Авто и Апартаменты в Алматы',
    description:
      'Премиальный сервис в Казахстане: VIP-трансфер из аэропорта, аренда авто, туры, охрана и апартаменты в Алматы.',
    url: SITE_URL,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Crown Services — Премиальный сервис в Казахстане',
      },
    ],
  },
  twitter: {
    title: 'Crown Services — Трансфер, Туры, Аренда Авто и Апартаменты в Алматы',
    description:
      'Премиальный сервис в Казахстане: VIP-трансфер из аэропорта, аренда авто, туры, охрана и апартаменты в Алматы.',
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL }],
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
