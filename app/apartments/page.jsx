import ApartmentsClient from '@/components/ApartmentsClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/apartments`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80';

export const metadata = {
  title: 'Апартаменты Бизнес-Класса в Алматы — Посуточная Аренда',
  description:
    'Меблированные апартаменты для деловых гостей в Алматы: центр города, Медеу и другие районы. Посуточная и помесячная аренда. Заказ через WhatsApp.',
  keywords: [
    'апартаменты Алматы',
    'снять апартаменты Алматы',
    'посуточная аренда Алматы',
    'апартаменты посуточно Алматы',
    'меблированные апартаменты Алматы',
    'жильё для командировки Алматы',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Апартаменты Бизнес-Класса в Алматы — Посуточная Аренда',
    description:
      'Меблированные апартаменты для деловых гостей в Алматы: центр города, Медеу и другие районы. Посуточная и помесячная аренда.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Апартаменты в Алматы' }],
  },
  twitter: {
    title: 'Апартаменты Бизнес-Класса в Алматы — Посуточная Аренда',
    description: 'Меблированные апартаменты в Алматы. Посуточная и помесячная аренда.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Апартаменты в Алматы', item: PAGE_URL },
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
