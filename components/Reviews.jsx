'use client';

import { useState } from 'react';
import { reviews } from '@/data/reviews';
import { useTranslations } from 'next-intl';

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #C9A86C, #8B6914)',
  'linear-gradient(135deg, #7B9EA8, #3D6B7A)',
  'linear-gradient(135deg, #A87B9E, #6B3D6B)',
  'linear-gradient(135deg, #9EA87B, #6B7A3D)',
];

const VISIBLE = 3;
const GAP = 16;

const STYLES = `
  .review-card {
    transition: border-color 0.2s;
  }
  .review-card:hover {
    border-color: rgba(201,168,108,0.25);
  }
  .arrow-btn:not(:disabled):hover {
    background: rgba(201,168,108,0.1);
  }
`;

function Stars({ n }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" fill={i < n ? '#F59E0B' : '#2A2A2E'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

function ArrowBtn({ dir, disabled, onClick }) {
  const icon = dir === 'prev'
    ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/>
    : <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`arrow-btn w-[42px] h-[42px] rounded-full border-[1.5px] bg-transparent flex items-center justify-center transition-colors duration-200 shrink-0
        ${disabled
          ? 'border-divider text-divider cursor-default'
          : 'border-amber text-amber cursor-pointer'}`}
    >
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {icon}
      </svg>
    </button>
  );
}

export default function Reviews() {
  const t = useTranslations();
  const [index, setIndex] = useState(0);
  const max = Math.max(0, reviews.length - VISIBLE);

  return (
    <section id="reviews" className="bg-surface py-16 border-t border-divider">
      <style>{STYLES}</style>
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="flex items-end justify-between mb-7 gap-4 flex-wrap">
          <div>
            <p className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase m-0 mb-2">
              {t('reviews.sectionLabel')}
            </p>
            <h2 className="m-0 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white font-sans tracking-[-0.02em] leading-[1.1]">
              {t('reviews.title')}
            </h2>
          </div>
          <div className="flex gap-2">
            <ArrowBtn dir="prev" disabled={index === 0} onClick={() => setIndex(i => Math.max(0, i - 1))} />
            <ArrowBtn dir="next" disabled={index === max} onClick={() => setIndex(i => Math.min(max, i + 1))} />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${index} * (100% + ${GAP}px) / ${VISIBLE}))`,
              transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={r.id}
                className="review-card bg-surface-2 border border-divider rounded-[14px] p-5 flex flex-col"
                style={{ flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
              >
                <Stars n={r.rating} />
                <p className="mt-3 text-white/75 text-[0.875rem] leading-[1.65] flex-1 italic">
                  &ldquo;{t(`reviewsData.${r.id}.text`)}&rdquo;
                </p>
                <div className="mt-4 pt-[14px] border-t border-divider flex items-center gap-[10px]">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[0.75rem] font-bold shrink-0"
                    style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-[0.82rem]">{r.name}</div>
                    <div className="text-muted text-[0.72rem]">{r.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-surface-2 border border-divider rounded-full py-2 px-[18px]">
            <svg width="13" height="13" fill="#F59E0B" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-white text-[0.82rem] font-semibold">{t('reviews.rating')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
