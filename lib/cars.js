import { cars } from '@/data/cars';

export function getCarBySlug(slug) {
  return cars.find((car) => car.slug === slug) ?? null;
}
