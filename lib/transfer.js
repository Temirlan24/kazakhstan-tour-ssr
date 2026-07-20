import { transfers } from '@/data/transfer';

export function getTransferBySlug(slug) {
  return transfers.find((transfer) => transfer.slug === slug) ?? null;
}
