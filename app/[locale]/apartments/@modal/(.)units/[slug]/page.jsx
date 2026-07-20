import { notFound } from 'next/navigation';
import { getApartmentBySlug } from '@/lib/apartments';
import InterceptedApartmentModal from '@/components/InterceptedApartmentModal';

export default async function InterceptedApartmentModalPage({ params }) {
  const { slug } = await params;
  const apartment = getApartmentBySlug(slug);
  if (!apartment) notFound();

  return <InterceptedApartmentModal apartment={apartment} />;
}
