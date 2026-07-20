import { notFound } from 'next/navigation';
import { getTourBySlug } from '@/lib/tours';
import InterceptedTourModal from '@/components/InterceptedTourModal';

export default async function InterceptedTourModalPage({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return <InterceptedTourModal tour={tour} />;
}
