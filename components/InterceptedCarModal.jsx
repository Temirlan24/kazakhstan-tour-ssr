'use client';

import { useRouter } from '@/i18n/navigation';
import CarModal from './CarModal';

export default function InterceptedCarModal({ car }) {
  const router = useRouter();
  return <CarModal car={car} onClose={() => router.back()} />;
}
