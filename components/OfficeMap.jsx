'use client';

import { useTranslations } from 'next-intl';
import { GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL } from '@/lib/config';

function PinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function OfficeMap() {
  const t = useTranslations();

  return (
    <section className="relative bg-dark py-20 md:py-24 border-t border-divider overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          left: '6%',
          top: '15%',
          width: '440px',
          height: '440px',
          background: 'radial-gradient(ellipse, rgba(201,168,108,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-14 items-center">

          <div>
            <p className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase m-0 mb-[14px]">
              {t('footer.office.eyebrow')}
            </p>
            <h2 className="m-0 mb-4 text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold text-white font-sans tracking-[-0.02em] leading-[1.15]">
              {t('footer.office.headingLine1')}<br />{t('footer.office.headingLine2')}
            </h2>
            <p className="text-muted text-[0.92rem] leading-[1.7] m-0 mb-8 max-w-[380px]">
              {t('footer.office.address')}
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] bg-amber hover:bg-amber-light text-dark font-bold text-[0.9rem] py-[13px] px-7 rounded-full no-underline transition-colors duration-200 hover:-translate-y-px"
            >
              <PinIcon />
              {t('footer.office.directions')}
            </a>
          </div>

          <div className="relative">
            <div
              className="absolute -top-4 -left-4 z-10 rounded-full flex items-center justify-center"
              style={{
                width: '46px',
                height: '46px',
                background: '#C9A86C',
                boxShadow: '0 10px 28px rgba(201,168,108,0.38)',
              }}
              aria-hidden="true"
            >
              <span className="text-dark">
                <PinIcon size={20} />
              </span>
            </div>
            <div
              className="rounded-[16px] overflow-hidden border border-divider bg-surface-2"
              style={{ height: '320px' }}
            >
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crown Almaty Travel — office location on Google Maps"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
