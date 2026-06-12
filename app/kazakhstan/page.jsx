import Hero from '@/components/Hero';
import TourCatalog from '@/components/TourCatalog';
import CustomItinerary from '@/components/CustomItinerary';
import Guides from '@/components/Guides';
import Reviews from '@/components/Reviews';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Tours in Kazakhstan — Crown Almaty Services',
  description: 'Discover Kazakhstan with our guided tours: Almaty mountains, Astana city tours, Aktau steppe adventures. Book via WhatsApp.',
};

export default function KazakhstanToursPage() {
  return (
    <>
      <Hero />
      <TourCatalog />
      <CustomItinerary />
      <Guides />
      <Reviews />
      <CTASection variant="kazakhstan" />
    </>
  );
}
