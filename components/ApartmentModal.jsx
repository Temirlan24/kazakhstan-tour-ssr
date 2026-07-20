'use client';

import { useTranslations } from 'next-intl';
import UnifiedModal from './UnifiedModal';

const BedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 012 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
);

const FloorIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>
);

export default function ApartmentModal({ apartment, onClose }) {
  const t = useTranslations();
  const title = t(`apartments.${apartment.id}.name`);
  const description = t(`apartments.${apartment.id}.description`);
  const districtLabel = t(`apartments.${apartment.id}.districtLabel`);

  return (
    <UnifiedModal
      images={[apartment.image]}
      title={title}
      subtitle={districtLabel}
      description={description}
      price={t(`apartments.${apartment.id}.price`)}
      priceUnit={t('apartments.labels.perNight')}
      meta={[
        { icon: <BedIcon />, label: t(`apartments.${apartment.id}.rooms`) },
        { icon: <FloorIcon />, label: t(`apartments.${apartment.id}.floor`) },
      ]}
      bookLabel={t('apartments.labels.book')}
      onClose={onClose}
    />
  );
}
