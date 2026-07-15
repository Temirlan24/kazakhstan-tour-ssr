'use client';

import Image from 'next/image';
import { transfers, transferTypeColors } from '@/data/transfer';
import { useTranslations } from 'next-intl';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';
import FAQAccordion from './FAQAccordion';

const BG = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80";

const STYLES = `
  .transfer-hero-overlay {
    background: linear-gradient(108deg, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.72) 58%, rgba(5,5,7,0.45) 100%);
  }
  @keyframes phUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ph-a1 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .ph-a2 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .ph-a3 { animation: phUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
`;

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3v-5l2-5h14l2 5v5h-2"/>
    <circle cx="7.5" cy="17.5" r="1.5"/>
    <circle cx="16.5" cy="17.5" r="1.5"/>
    <path d="M5 12h14"/>
  </svg>
);

export default function TransferClient() {
  const t = useTranslations();
  const faqItems = t.raw('seo.transfer.faq');

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
        <Image src={BG} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: 'center 35%' }} />
        <div className="transfer-hero-overlay absolute inset-0" />
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
            {t('transfer.page.sectionLabel')}
          </p>
          <h1
            className="ph-a2 m-0 mb-4 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,3.8rem)', maxWidth: '700px', letterSpacing: '-0.025em', lineHeight: 1.08 }}
          >
            {t('transfer.page.title')}
          </h1>
          <p
            className="ph-a3 m-0"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.96rem', lineHeight: 1.72, maxWidth: '520px' }}
          >
            {t('transfer.page.description')}
          </p>
        </div>
      </section>

      <section className="bg-dark pt-16 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {transfers.map(tr => (
              <ServiceCard
                key={tr.id}
                images={tr.images}
                categoryLabel={t(`transfer.${tr.id}.typeLabel`)}
                title={t(`transfer.${tr.id}.name`)}
                description={t(`transfer.${tr.id}.description`)}

                meta={[
                  { icon: <PersonIcon />, label: `${t(`transfer.${tr.id}.passengers`)} ${t('transfer.labels.passengers')}` },
                  { icon: <CarIcon />,    label: t(`transfer.${tr.id}.vehicle`) },
                ]}
                bookLabel={t('transfer.labels.book')}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion label={t('transfer.page.faqLabel')} title={t('transfer.page.faqTitle')} items={faqItems} />

      <CTASection variant="transfer" />
    </>
  );
}
