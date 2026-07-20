'use client';

import { useRouter } from '@/i18n/navigation';
import KgTourModal from './KgTourModal';

export default function InterceptedKgTourModal({ tour }) {
  const router = useRouter();
  return <KgTourModal tour={tour} onClose={() => router.back()} />;
}
