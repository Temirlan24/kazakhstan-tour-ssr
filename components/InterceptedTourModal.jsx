'use client';

import { useRouter } from '@/i18n/navigation';
import TourModal from './TourModal';

export default function InterceptedTourModal({ tour }) {
  const router = useRouter();
  return <TourModal tour={tour} onClose={() => router.back()} />;
}
