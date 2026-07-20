'use client';

import { useTranslations } from 'next-intl';
import UnifiedModal from './UnifiedModal';

const SeatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M22 12h-2M2 12h2"/>
  </svg>
);

export default function CarModal({ car, onClose }) {
  const t = useTranslations();
  const title = t(`carRent.${car.id}.name`);
  const description = t(`carRent.${car.id}.description`);
  const classLabel = t(`carRent.${car.id}.classLabel`);
  const seats = t(`carRent.${car.id}.seats`);
  const transmission = t(`carRent.${car.id}.transmission`);

  return (
    <UnifiedModal
      images={car.images}
      title={title}
      subtitle={classLabel}
      description={description}
      meta={[
        { icon: <SeatIcon />, label: `${seats} ${t('carRent.labels.seats')}` },
        { icon: <GearIcon />, label: transmission },
      ]}
      bookLabel={t('carRent.labels.book')}
      onClose={onClose}
    />
  );
}
