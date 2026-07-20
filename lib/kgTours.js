import { kgTours } from '@/data/kgTours';

export function getKgTourBySlug(slug) {
  return kgTours.find((tour) => tour.slug === slug) ?? null;
}
