import { notFound } from 'next/navigation';
import { getCarBySlug } from '@/lib/cars';
import InterceptedCarModal from '@/components/InterceptedCarModal';

export default async function InterceptedCarModalPage({ params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  return <InterceptedCarModal car={car} />;
}
