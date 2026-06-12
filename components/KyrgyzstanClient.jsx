'use client';

import { kgTours } from '@/data/kgTours';
import { useTranslation } from '@/lib/i18n';
import ServiceCard from './ServiceCard';
import CustomItinerary from './CustomItinerary';
import Guides from './Guides';
import Reviews from './Reviews';
import CTASection from './CTASection';

const BG = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80";

const STYLES = `
  .kg-hero-overlay {
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

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const GroupIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default function KyrgyzstanClient() {
  const { t } = useTranslation();

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="relative bg-cover"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: 'center 40%',
          minHeight: '62vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: '148px',
          paddingBottom: '80px',
        }}
      >
        <div className="kg-hero-overlay absolute inset-0" />
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
            {t('kgTours.page.sectionLabel')}
          </p>
          <h1
            className="ph-a2 m-0 mb-4 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)', maxWidth: '700px', letterSpacing: '-0.025em', lineHeight: 1.08 }}
          >
            {t('kgTours.page.title')}
          </h1>
          <p
            className="ph-a3 m-0"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.96rem', lineHeight: 1.72, maxWidth: '520px' }}
          >
            {t('kgTours.page.description')}
          </p>
        </div>
      </section>

      <section className="bg-dark pt-16 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {kgTours.map(tour => (
              <ServiceCard
                key={tour.id}
                images={tour.images}
                categoryKey={tour.category}
                categoryLabel={tour.category}
                topBadge={t(`kgTours.${tour.id}.durationDisplay`)}
                title={t(`kgTours.${tour.id}.title`)}
                description={t(`kgTours.${tour.id}.description`)}
                meta={[
                  { icon: <ClockIcon />, label: t(`kgTours.${tour.id}.durationDisplay`) },
                  { icon: <GroupIcon />, label: t(`kgTours.${tour.id}.groupSize`) },
                ]}
                bookLabel={t('card.book')}
              />
            ))}
          </div>
        </div>
      </section>

      <CustomItinerary />
      <Guides />
      <Reviews />
      <CTASection variant="kyrgyzstan" />
    </>
  );
}
