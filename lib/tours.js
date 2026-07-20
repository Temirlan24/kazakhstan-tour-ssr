import { tours } from '@/data/tours';

export function getTourBySlug(slug) {
  return tours.find((tour) => tour.slug === slug) ?? null;
}
