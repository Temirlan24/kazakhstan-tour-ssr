import CarRentClient from '@/components/CarRentClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/car-rent`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Аренда Авто в Алматы — Комфорт, Бизнес, Люкс и Минивэн',
  description:
    'Аренда автомобиля в Алматы без водителя: Toyota Camry, Lexus LX и другие. Классы Комфорт, Бизнес, Премиум и Люкс. Фиксированные цены. Заказ через WhatsApp.',
  keywords: [
    'аренда авто Алматы',
    'арендовать машину Алматы',
    'прокат авто Алматы',
    'Toyota Camry аренда Алматы',
    'Lexus аренда Алматы',
    'самостоятельная аренда авто Алматы',
    'люксовая аренда авто Алматы',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Аренда Авто в Алматы — Комфорт, Бизнес, Люкс и Минивэн',
    description:
      'Аренда автомобиля в Алматы без водителя: Toyota Camry, Lexus LX и другие. Классы Комфорт, Бизнес, Премиум и Люкс.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Аренда авто в Алматы' }],
  },
  twitter: {
    title: 'Аренда Авто в Алматы — Комфорт, Бизнес, Люкс и Минивэн',
    description: 'Аренда автомобиля в Алматы: Toyota Camry, Lexus LX и другие. Фиксированные цены.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Аренда Авто в Алматы', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аренда автомобиля в Алматы',
  description: 'Аренда авто без водителя в Алматы: классы Комфорт, Бизнес, Премиум, Люкс и Минивэн.',
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
