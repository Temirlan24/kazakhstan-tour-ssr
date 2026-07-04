'use client';

import { useTranslations } from 'next-intl';
import { WHATSAPP_URL } from '@/lib/config';

const FEATURE_ICONS = ['🗺️', '👥', '🏔️', '💬'];

export default function CustomItinerary() {
  const t = useTranslations();
  const features = t.raw('customItinerary.features') || [];

  return (
    <section className="bg-surface py-24 border-t border-b border-divider">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 items-center">

          <div>
            <p className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase m-0 mb-[14px]">
              {t('customItinerary.sectionLabel')}
            </p>
            <h2 className="m-0 mb-5 text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white font-sans tracking-[-0.02em] leading-[1.15]">
              {t('customItinerary.titleLine1')}<br />{t('customItinerary.titleLine2')}
            </h2>
            <p className="text-muted text-[0.95rem] leading-[1.7] m-0 mb-8 max-w-[420px]">
              {t('customItinerary.description')}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] bg-amber hover:bg-amber-light text-dark font-bold text-[0.9rem] py-[13px] px-7 rounded-full no-underline transition-colors duration-200 hover:-translate-y-px"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('customItinerary.requestRoute')}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((item, i) => (
              <div key={i} className="bg-surface-2 border border-divider rounded-[14px] p-[22px]">
                <span className="text-[1.8rem] block mb-3">{FEATURE_ICONS[i]}</span>
                <h4 className="m-0 mb-1.5 text-white text-[0.9rem] font-bold font-sans">
                  {item.title}
                </h4>
                <p className="m-0 text-muted text-[0.8rem] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
