'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import UnifiedModal from './UnifiedModal';
import PhotoLightbox from './PhotoLightbox';
import { WHATSAPP_URL } from '@/lib/config';

const STYLES = `
  .sc-card {
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s, box-shadow 0.25s;
  }
  .sc-card:hover {
    transform: translateY(-5px);
    border-color: rgba(201,168,108,0.32);
    box-shadow: 0 24px 64px rgba(0,0,0,0.55);
  }
  .sc-details-btn:hover {
    border-color: rgba(255,255,255,0.2) !important;
    color: #fff !important;
  }
  .sc-book-btn:hover {
    background: #DFC08A !important;
  }
`;

export default function ServiceCard({
  image, images, categoryLabel, topBadge,
  title, description, meta, price, priceUnit,
  bookLabel,
}) {
  const t = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const allImages = images?.length ? images : (image ? [image] : []);
  const subtitle = topBadge ? `${topBadge} · ${categoryLabel}` : categoryLabel;

  function openLightbox(e) {
    e.stopPropagation();
    setLightboxIdx(0);
    setLightboxOpen(true);
  }

  return (
    <>
      <style>{STYLES}</style>
      <div
        onClick={() => setModalOpen(true)}
        className="sc-card group/card bg-surface border border-divider rounded-[20px] overflow-hidden flex flex-col cursor-pointer"
      >
        <div
          onClick={openLightbox}
          className="relative h-[220px] overflow-hidden shrink-0 cursor-zoom-in group/photo"
        >
          <Image
            src={allImages[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.08] to-black/[0.48] pointer-events-none" />

          <div className="absolute inset-0 bg-dark/0 group-hover/photo:bg-dark/[0.28] transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center text-amber scale-75 opacity-0 group-hover/photo:scale-100 group-hover/photo:opacity-100 transition-all duration-[250ms] bg-amber/0 group-hover/photo:bg-amber/[0.18] border border-transparent group-hover/photo:border-amber/60 group-hover/photo:backdrop-blur-[8px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>

          {allImages.length > 1 && (
            <div className="absolute bottom-[10px] right-[10px] bg-dark/[0.72] backdrop-blur-[6px] border border-white/10 rounded-[20px] px-[9px] py-[3px] flex items-center gap-[5px] group-hover/photo:opacity-0 transition-opacity pointer-events-none">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span className="text-[0.72rem] font-semibold text-white/75 font-sans">
                {allImages.length}
              </span>
            </div>
          )}
        </div>

        <div className="px-5 pt-[18px] pb-5 flex-1 flex flex-col gap-3">
          {price && (
            <div className="flex items-baseline gap-1">
              <span className="text-amber font-bold text-[1.05rem] font-sans">{price}</span>
              {priceUnit && <span className="text-muted text-[0.78rem]">{priceUnit}</span>}
            </div>
          )}
          <div>
            <h3 className="m-0 mb-[5px] text-[1.05rem] font-bold text-white tracking-[-0.015em] leading-[1.3] font-sans">
              {title}
            </h3>
            <p className="m-0 text-[0.81rem] text-muted leading-[1.65] line-clamp-2">
              {description}
            </p>
          </div>
          {meta && meta.length > 0 && (
            <div className="flex flex-col gap-1.5">
              {meta.map((m, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-muted shrink-0 flex">{m.icon}</span>
                  <span className="text-[0.8rem] text-muted">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-1 flex gap-[9px]">
            <button
              onClick={e => { e.stopPropagation(); setModalOpen(true); }}
              className="sc-details-btn flex-1 flex items-center justify-center gap-[5px] bg-surface-2 text-white/[0.88] border border-divider text-[0.84rem] font-semibold py-[10px] rounded-full cursor-pointer font-sans transition-colors duration-200"
            >
              {t('card.details')}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="sc-book-btn flex-1 flex items-center justify-center gap-[7px] bg-amber text-dark border border-transparent text-[0.84rem] font-bold py-[10px] rounded-full cursor-pointer no-underline font-sans transition-colors duration-200"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {bookLabel}
            </a>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <PhotoLightbox
          images={allImages}
          initialIdx={lightboxIdx}
          title={title}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {modalOpen && (
        <UnifiedModal
          images={allImages}
          title={title}
          subtitle={subtitle}
          description={description}
          price={price}
          priceUnit={priceUnit}
          meta={meta}
          bookLabel={bookLabel}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
