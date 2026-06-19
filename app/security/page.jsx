import SecurityClient from '@/components/SecurityClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

const PAGE_URL = `${SITE_URL}/security`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80';

export const metadata = {
  title: 'Охрана и Сопровождение в Казахстане — Телохранитель и Защита',
  description:
    'Профессиональная охрана в Казахстане: личный телохранитель, сопровождение делегаций, охрана мероприятий. Уникально: охрана + трансфер в одном пакете. Заказ через WhatsApp.',
  keywords: [
    'охрана Казахстан',
    'телохранитель Алматы',
    'личная охрана Казахстан',
    'охрана делегаций Казахстан',
    'VIP охрана Казахстан',
    'сопровождение Алматы',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Охрана и Сопровождение в Казахстане — Телохранитель и Защита',
    description:
      'Профессиональная охрана в Казахстане: личный телохранитель, сопровождение делегаций, охрана мероприятий. Охрана + трансфер в одном пакете.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Охрана и сопровождение в Казахстане' }],
  },
  twitter: {
    title: 'Охрана и Сопровождение в Казахстане',
    description: 'Профессиональная охрана в Казахстане: телохранитель, сопровождение делегаций, охрана мероприятий.',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Охрана в Казахстане', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Охрана и сопровождение в Казахстане',
  description: 'Профессиональная охрана в Казахстане: личный телохранитель, сопровождение делегаций, охрана мероприятий.',
  provider: { '@type': 'TravelAgency', name: 'Crown Services', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'Kazakhstan' },
  serviceType: 'Security Services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какие услуги охраны предоставляет Crown Services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crown Services предлагает: личный телохранитель, сопровождение корпоративных делегаций, охрана мероприятий, корпоративная охрана, суточное сопровождение. Уникально на рынке: охрана и трансфер в одном скоординированном пакете.',
      },
    },
    {
      '@type': 'Question',
      name: 'В каких городах Казахстана работает охрана Crown Services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Охрана доступна в Алматы, Астане, Актау и Шымкенте. Обеспечиваем охват по всему Казахстану для корпоративных делегаций и мероприятий.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чем Crown Services отличается от других охранных агентств?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Единственная компания в Казахстане, которая объединяет охрану и трансфер в одном пакете. Все специалисты работают в режиме полной конфиденциальности.',
      },
    },
  ],
};

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <SecurityClient />
    </>
  );
}
