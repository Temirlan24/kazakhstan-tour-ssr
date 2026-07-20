'use client';

import { useRouter } from '@/i18n/navigation';
import TransferModal from './TransferModal';

export default function InterceptedTransferModal({ transfer }) {
  const router = useRouter();
  return <TransferModal transfer={transfer} onClose={() => router.back()} />;
}
