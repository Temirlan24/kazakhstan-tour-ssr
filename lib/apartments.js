import { apartments } from '@/data/apartments';

export function getApartmentBySlug(slug) {
  return apartments.find((apartment) => apartment.slug === slug) ?? null;
}
