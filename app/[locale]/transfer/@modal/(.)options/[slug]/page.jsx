import { notFound } from 'next/navigation';
import { getTransferBySlug } from '@/lib/transfer';
import InterceptedTransferModal from '@/components/InterceptedTransferModal';

export default async function InterceptedTransferModalPage({ params }) {
  const { slug } = await params;
  const transfer = getTransferBySlug(slug);
  if (!transfer) notFound();

  return <InterceptedTransferModal transfer={transfer} />;
}
