'use client';

import { useRouter } from '@/i18n/navigation';
import ApartmentModal from './ApartmentModal';

export default function InterceptedApartmentModal({ apartment }) {
  const router = useRouter();
  return <ApartmentModal apartment={apartment} onClose={() => router.back()} />;
}
