'use client';

import Image from 'next/image';
import { apartments } from '@/data/apartments';
import { useTranslations } from 'next-intl';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';

const BG = "/assets/hero/apartments.webp";

const STYLES = `
  .apt-hero-overlay {
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

const BedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 012 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
);

const FloorIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>
);

export default function ApartmentsClient() {
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
        <Image src={BG} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: 'center 40%' }} />
        <div className="apt-hero-overlay absolute inset-0" />
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
            {t('apartments.page.sectionLabel')}
          </p>
          <h1
            className="ph-a2 m-0 mb-4 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)', maxWidth: '700px', letterSpacing: '-0.025em', lineHeight: 1.08 }}
          >
            {t('apartments.page.title')}
          </h1>
          <p
            className="ph-a3 m-0"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.96rem', lineHeight: 1.72, maxWidth: '520px' }}
          >
            {t('apartments.page.description')}
          </p>
        </div>
      </section>

      <section className="bg-dark pt-16 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {apartments.map(apt => (
              <ServiceCard
                key={apt.id}
                image={apt.image}
                categoryKey={null}
                categoryLabel={t(`apartments.${apt.id}.districtLabel`)}
                title={t(`apartments.${apt.id}.name`)}
                description={t(`apartments.${apt.id}.description`)}
                price={t(`apartments.${apt.id}.price`)}
                priceUnit={t('apartments.labels.perNight')}
                meta={[
                  { icon: <BedIcon />, label: t(`apartments.${apt.id}.rooms`) },
                  { icon: <FloorIcon />, label: t(`apartments.${apt.id}.floor`) },
                ]}
                bookLabel={t('apartments.labels.book')}
                detailsHref={apt.slug ? `/apartments/units/${apt.slug}` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="apartments" />
    </>
  );
}
