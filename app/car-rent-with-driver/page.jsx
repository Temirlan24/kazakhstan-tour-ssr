import CarWithDriverClient from '@/components/CarWithDriverClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/car-rent-with-driver`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Авто с Водителем в Алматы — Персональный Шофёр',
  description:
    'Профессиональный шофёрский сервис в Алматы. Автомобили классов Комфорт, Премиум и Люкс с опытными водителями. Почасовая и суточная аренда. Заказ через WhatsApp.',
  keywords: [
    'авто с водителем Алматы',
    'шофёрский сервис Алматы',
    'нанять водителя Алматы',
    'персональный водитель Алматы',
    'VIP водитель Алматы',
    'личный водитель Казахстан',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Авто с Водителем в Алматы — Персональный Шофёр',
    description:
      'Профессиональный шофёрский сервис в Алматы. Комфорт, Премиум и Люкс с опытными водителями.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Авто с водителем в Алматы' }],
  },
  twitter: {
    title: 'Авто с Водителем в Алматы — Персональный Шофёр',
    description: 'Профессиональный шофёрский сервис в Алматы. Классы Комфорт, Премиум и Люкс.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Авто с Водителем в Алматы', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аренда авто с водителем в Алматы',
  description: 'Профессиональный шофёрский сервис в Алматы: классы Комфорт, Премиум и Люкс.',
  provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
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
