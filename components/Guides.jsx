'use client';

import { guides } from '@/data/guides';
import { useTranslation } from '@/lib/i18n';

const BADGE_ICONS = ['🛡️', '🗣️', '⏱️', '🌿'];

const STYLES = `
  .guide-card {
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .guide-card:hover {
    border-color: rgba(201,168,108,0.3);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  }
`;

export default function Guides() {
  const { t } = useTranslation();
  const badges = t('guides.badges') || [];

  return (
    <section id="guides" className="bg-dark py-24 border-t border-divider">
      <style>{STYLES}</style>
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="mb-14">
          <p className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase m-0 mb-3">
            {t('guides.sectionLabel')}
          </p>
          <h2 className="m-0 mb-[14px] text-[clamp(2rem,4vw,2.8rem)] font-bold text-white font-sans tracking-[-0.02em] leading-[1.1]">
            {t('guides.titleLine1')}<br />{t('guides.titleLine2')}
          </h2>
          <p className="text-muted text-[0.95rem] max-w-[520px] leading-[1.65] m-0">
            {t('guides.description')}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {guides.map(guide => (
            <div
              key={guide.id}
              className="guide-card bg-surface border border-divider rounded-2xl p-8"
            >
              <img
                src={guide.image}
                alt={guide.name}
                className="w-[72px] h-[72px] rounded-full object-cover mb-5 border-2 border-divider"
              />
              <h3 className="m-0 mb-1 text-white text-[1.1rem] font-bold font-sans">
                {guide.name}
              </h3>
              <span className="inline-block text-amber text-[0.75rem] font-semibold mb-[14px] tracking-[0.04em]">
                {t(`guidesData.${guide.id}.role`)}
              </span>
              <p className="m-0 text-muted text-[0.85rem] leading-[1.65]">
                {t(`guidesData.${guide.id}.bio`)}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[1px] mt-16 bg-divider rounded-[14px] overflow-hidden">
          {badges.map((b, i) => (
            <div key={i} className="bg-surface py-7 px-5 text-center">
              <div className="text-[1.6rem] mb-[10px]">{BADGE_ICONS[i]}</div>
              <div className="text-white font-bold text-[0.85rem] mb-1">{b.label}</div>
              <div className="text-muted text-[0.75rem]">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
