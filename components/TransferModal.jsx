'use client';

import { useTranslations } from 'next-intl';
import UnifiedModal from './UnifiedModal';

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3v-5l2-5h14l2 5v5h-2"/>
    <circle cx="7.5" cy="17.5" r="1.5"/>
    <circle cx="16.5" cy="17.5" r="1.5"/>
    <path d="M5 12h14"/>
  </svg>
);

export default function TransferModal({ transfer, onClose }) {
  const t = useTranslations();
  const title = t(`transfer.${transfer.id}.name`);
  const description = t(`transfer.${transfer.id}.description`);
  const typeLabel = t(`transfer.${transfer.id}.typeLabel`);

  return (
    <UnifiedModal
      images={transfer.images}
      title={title}
      subtitle={typeLabel}
      description={description}
      price={t(`transfer.${transfer.id}.price`)}
      priceUnit={t('transfer.labels.perTrip')}
      meta={[
        { icon: <PersonIcon />, label: `${t(`transfer.${transfer.id}.passengers`)} ${t('transfer.labels.passengers')}` },
        { icon: <CarIcon />, label: t(`transfer.${transfer.id}.vehicle`) },
      ]}
      bookLabel={t('transfer.labels.book')}
      onClose={onClose}
    />
  );
}
