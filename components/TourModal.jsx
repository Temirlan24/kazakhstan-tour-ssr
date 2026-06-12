'use client';

import { categoryColors } from '@/data/tours';
import { useTranslation } from '@/lib/i18n';
import UnifiedModal from './UnifiedModal';

export default function TourModal({ tour, onClose }) {
  const { t } = useTranslation();
  const cat = categoryColors[tour.category] || categoryColors.MOUNTAINS;

  const title = t(`tours.${tour.id}.title`);
  const durationDisplay = t(`tours.${tour.id}.durationDisplay`);
  const fullDescription = t(`tours.${tour.id}.fullDescription`);
  const groupSize = t(`tours.${tour.id}.groupSize`);
  const _included = t(`tours.${tour.id}.included`);
  const _whatToBring = t(`tours.${tour.id}.whatToBring`);
  const included = Array.isArray(_included) ? _included : [];
  const whatToBring = Array.isArray(_whatToBring) ? _whatToBring : [];

  return (
    <UnifiedModal
      images={tour.images}
      title={title}
      subtitle={`${durationDisplay} · ${tour.category}`}
      description={fullDescription}
      params={[
        { label: t('modal.duration'), value: durationDisplay },
        { label: t('modal.group'),    value: groupSize },
        { label: t('modal.category'), value: tour.category, color: cat.text },
      ]}
      included={included}
      whatToBring={whatToBring}
      bookLabel={t('modal.bookTour')}
      askQuestion={true}
      onClose={onClose}
    />
  );
}
