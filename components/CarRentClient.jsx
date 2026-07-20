'use client';

import Image from 'next/image';
import { cars } from '@/data/cars';
import { useTranslations } from 'next-intl';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';

const BG = "/assets/cars/lexus/lexus_lx_2.jpg";

const STYLES = `
  .car-hero-overlay {
    background: linear-gradient(105deg, rgba(5,5,7,0.94) 0%, rgba(5,5,7,0.72) 60%, rgba(5,5,7,0.45) 100%);
  }
  @keyframes phUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ph-a1 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .ph-a2 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .ph-a3 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
`;

const SeatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M22 12h-2M2 12h2"/>
  </svg>
);

export default function  CarRentClient() {
  const t = useTranslations();

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="relative"
        style={{
          minHeight: '62vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: '148px',
          paddingBottom: '80px',
        }}
      >
        <Image src={BG} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: 'center 50%' }} />
        <div className="car-hero-overlay absolute inset-0" />
        <div className="absolute bottom-0 inset-x-0 h-[130px] bg-gradient-to-b from-transparent to-dark" />
        <div
          className="absolute pointer-events-none"
          style={{ right: '8%', top: '28%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(201,168,108,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full box-border">
          <p
            className="ph-a1 m-0 mb-4"
            style={{ color: 'var(--orange)', fontSize: '0.77rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)' }}
          >
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--orange)', borderRadius: '1px', flexShrink: 0 }} />
            {t('carRent.page.sectionLabel')}
          </p>
          <h1
            className="ph-a2 m-0 mb-4 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)', maxWidth: '700px', letterSpacing: '-0.025em', lineHeight: 1.08 }}
          >
            {t('carRent.page.title')}
          </h1>
          <p
            className="ph-a3 m-0"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.96rem', lineHeight: 1.72, maxWidth: '520px' }}
          >
            {t('carRent.page.description')}
          </p>
        </div>
      </section>

      <section className="bg-dark pt-16 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {cars.map(car => (
              <ServiceCard
                key={car.id}
                images={car.images}
                categoryKey={null}
                categoryLabel={t(`carRent.${car.id}.classLabel`)}
                title={t(`carRent.${car.id}.name`)}
                description={t(`carRent.${car.id}.description`)}

                meta={[
                  { icon: <SeatIcon />, label: `${t(`carRent.${car.id}.seats`)} ${t('carRent.labels.seats')}` },
                  { icon: <GearIcon />, label: t(`carRent.${car.id}.transmission`) },
                ]}
                bookLabel={t('carRent.labels.book')}
                detailsHref={car.slug ? `/car-rent/cars/${car.slug}` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="carRent" />
    </>
  );
}
