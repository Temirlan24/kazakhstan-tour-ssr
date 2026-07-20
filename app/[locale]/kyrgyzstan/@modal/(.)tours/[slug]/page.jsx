import { notFound } from 'next/navigation';
import { getKgTourBySlug } from '@/lib/kgTours';
import InterceptedKgTourModal from '@/components/InterceptedKgTourModal';

export default async function InterceptedKgTourModalPage({ params }) {
  const { slug } = await params;
  const tour = getKgTourBySlug(slug);
  if (!tour) notFound();

  return <InterceptedKgTourModal tour={tour} />;
}
