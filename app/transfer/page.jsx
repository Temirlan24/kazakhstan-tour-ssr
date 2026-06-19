import TransferClient from '@/components/TransferClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/transfer`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80';

export const metadata = {
  title: 'Трансфер в Алматы с Водителем — Аэропорт, VIP, 24/7',
  description:
    'Надёжный трансфер с водителем в Алматы. Эконом, Бизнес, Минивэн и VIP. Встреча в аэропорту, деловые поездки. Подача от 15 минут, 24/7. Заказ через WhatsApp.',
  keywords: [
    'трансфер Алматы',
    'трансфер из аэропорта Алматы',
    'VIP трансфер Алматы',
    'трансфер с водителем Алматы',
    'встреча в аэропорту Алматы',
    'такси аэропорт Алматы',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Трансфер в Алматы с Водителем — Аэропорт, VIP, 24/7',
    description:
      'Надёжный трансфер с водителем в Алматы. Эконом, Бизнес, Минивэн и VIP. Подача от 15 минут.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Трансфер с водителем в Алматы' }],
  },
  twitter: {
    title: 'Трансфер в Алматы с Водителем — Аэропорт, VIP, 24/7',
    description: 'Надёжный трансфер с водителем в Алматы. Эконом, Бизнес, Минивэн и VIP. 24/7.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Трансфер в Алматы', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Трансфер в Алматы с водителем',
  description: 'Надёжный трансфер с водителем в Алматы: Эконом, Бизнес, Минивэн и VIP. Встреча в аэропорту, деловые поездки.',
  provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Almaty', addressCountry: 'KZ' },
  serviceType: 'Airport Transfer',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит трансфер из аэропорта Алматы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость трансфера из аэропорта Алматы зависит от класса автомобиля. Цены фиксируются до поездки — без счётчиков и скрытых надбавок. Свяжитесь с нами в WhatsApp для уточнения актуального тарифа.',
      },
    },
    {
      '@type': 'Question',
      name: 'За сколько минут подают машину в Алматы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Подача автомобиля в Алматы — от 15 минут. Crown Services работает 24/7, включая праздники и ночное время.',
      },
    },
    {
      '@type': 'Question',
      name: 'Доступен ли трансфер в другие города Казахстана?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, Crown Services выполняет межгородские трансферы: Алматы — Астана, Алматы — Актау, Алматы — Шымкент, Алматы — Бишкек и другие маршруты.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какие классы автомобилей доступны для трансфера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Доступны классы: Эконом, Бизнес, Минивэн (до 8 мест) и VIP. Все автомобили чистые, подготовленные, водители — в деловом стиле.',
      },
    },
  ],
};

export default function TransferPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <TransferClient />
    </>
  );
}
