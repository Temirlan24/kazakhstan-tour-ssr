'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PhotoLightbox from './PhotoLightbox';
import { WHATSAPP_URL } from '@/lib/config';

const STYLES = `
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal-img { animation: fadeIn 0.3s ease; }
  .modal-arrow-btn:hover { background: rgba(30,30,34,0.9) !important; }
  .modal-close-btn:hover { background: rgba(40,40,44,0.9) !important; }
  .modal-ask-btn:hover { border-color: rgba(255,255,255,0.2) !important; color: #fff !important; }
  .modal-book-btn:hover { background: #DFC08A !important; }
  .modal-thumb:hover { opacity: 0.8 !important; }
  @media (max-width: 700px) { .modal-grid { grid-template-columns: 1fr !important; } }
`;

export default function UnifiedModal({
  images,
  title,
  subtitle,
  description,
  price,
  priceUnit,
  params,
  meta,
  included,
  whatToBring,
  bookLabel,
  askQuestion,
  onClose,
}) {
  const t = useTranslations();
  const [imgIdx, setImgIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(null);

  const prev = useCallback(() => setImgIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setImgIdx(i => Math.min(images.length - 1, i + 1)), [images.length]);

  const handleTouchStart = useCallback(e => { touchStartX.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback(e => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) { delta > 0 ? next() : prev(); }
    touchStartX.current = null;
  }, [next, prev]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (lightboxOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next, lightboxOpen]);

  const hasParams = params?.length > 0 || meta?.length > 0;
  const hasRightCol = hasParams || whatToBring?.length > 0;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-[6px] flex items-center justify-center p-6 py-6 overflow-y-auto"
      style={{ paddingLeft: '16px', paddingRight: '16px' }}
    >
      <style>{STYLES}</style>
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-[1100px] bg-surface rounded-[20px] overflow-hidden border border-divider shadow-[0_32px_80px_rgba(0,0,0,0.7)] flex flex-col mb-6"
        style={{ maxHeight: 'calc(100vh - 48px)' }}
      >
        <div className="overflow-y-auto flex-1 min-h-0">
          <div
            className="group/photo relative h-[480px] overflow-hidden bg-black cursor-zoom-in touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setLightboxOpen(true)}
          >
            {/* Blurred background fill — hides dark letterbox bars for portrait images */}
            <Image
              src={images[imgIdx]}
              alt=""
              fill
              sizes="200px"
              className="object-cover scale-110 blur-[28px] opacity-70 pointer-events-none"
              aria-hidden
            />
            {/* Sharp main image */}
            <Image
              key={imgIdx}
              src={images[imgIdx]}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="modal-img object-contain transition-transform duration-[400ms] group-hover/photo:scale-[1.04]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/[0.08] via-black/50 to-[rgba(10,10,11,0.92)] pointer-events-none" />

            <div className="absolute top-[14px] left-[14px] flex items-center gap-1.5 bg-dark/[0.68] backdrop-blur-[6px] border border-white/10 rounded-[20px] py-[5px] pl-2 pr-[11px] opacity-0 -translate-y-1 group-hover/photo:opacity-100 group-hover/photo:translate-y-0 transition-all duration-200 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              <span className="text-[0.72rem] font-semibold text-white/80 font-sans">Full screen</span>
            </div>

            <div className="absolute bottom-6 left-7">
              <p className="m-0 mb-1 text-[0.72rem] font-bold tracking-[0.1em] text-amber uppercase font-sans">
                {subtitle}
              </p>
              <h2 className="m-0 text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-white tracking-[-0.02em] leading-[1.1] font-sans">
                {title}
              </h2>
              {price && (
                <p className="m-0 mt-2 font-sans">
                  <span className="text-[1.05rem] font-bold text-amber">{price}</span>
                  {priceUnit && <span className="text-[0.82rem] text-white/60 ml-1">{priceUnit}</span>}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <div onClick={e => e.stopPropagation()} className="absolute bottom-7 right-7 flex gap-1.5 items-center">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setImgIdx(i); }}
                    className="h-[7px] rounded-full border-none p-0 cursor-pointer transition-all duration-300"
                    style={{
                      width: i === imgIdx ? '20px' : '7px',
                      background: i === imgIdx ? '#C9A86C' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            )}

            {imgIdx > 0 && (
              <button
                onClick={e => { e.stopPropagation(); prev(); }}
                className="modal-arrow-btn absolute left-4 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-[rgba(20,20,22,0.72)] backdrop-blur-[8px] border border-white/[0.12] text-white cursor-pointer flex items-center justify-center transition-colors duration-200"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            )}
            {imgIdx < images.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); next(); }}
                className="modal-arrow-btn absolute right-4 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-[rgba(20,20,22,0.72)] backdrop-blur-[8px] border border-white/[0.12] text-white cursor-pointer flex items-center justify-center transition-colors duration-200"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            )}

            <button
              onClick={e => { e.stopPropagation(); onClose(); }}
              className="modal-close-btn absolute top-[14px] right-[14px] w-9 h-9 rounded-[10px] bg-[rgba(20,20,22,0.72)] backdrop-blur-[8px] border border-white/[0.12] text-white/80 cursor-pointer flex items-center justify-center transition-colors duration-200"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 px-5 py-3 bg-dark/60 border-b border-divider overflow-x-auto">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`modal-thumb relative shrink-0 w-[72px] h-[50px] rounded-lg overflow-hidden border-2 p-0 cursor-pointer transition-all duration-200
                    ${i === imgIdx ? 'border-amber opacity-100' : 'border-white/[0.08] opacity-50'}`}
                >
                  <Image src={src} alt="" fill sizes="72px" className="object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="p-6 pb-7">
            <div
              className="modal-grid items-start"
              style={{ display: 'grid', gridTemplateColumns: hasRightCol ? '1fr 320px' : '1fr', gap: '16px' }}
            >
              <div className="flex flex-col gap-4">
                <ContentCard title={t('modal.description')}>
                  <p className="m-0 text-[0.88rem] text-white/75 leading-[1.75]">{description}</p>
                </ContentCard>

                {included?.length > 0 && (
                  <ContentCard title={t('modal.included')}>
                    <div className="flex flex-col gap-2">
                      {included.map((item, i) => <CheckItem key={i} label={item} />)}
                    </div>
                  </ContentCard>
                )}
              </div>

              {hasRightCol && (
                <div className="flex flex-col gap-4">
                  {hasParams && (
                    <ContentCard title={t('modal.parameters')}>
                      <div className="flex flex-col gap-2">
                        {params?.map((p, i) => <ParamItem key={i} label={p.label} value={p.value} color={p.color} />)}
                        {meta?.map((m, i) => <MetaItem key={i} icon={m.icon} label={m.label} />)}
                      </div>
                    </ContentCard>
                  )}
                  {whatToBring?.length > 0 && (
                    <ContentCard title={t('modal.whatToBring')}>
                      <div className="flex flex-col gap-2">
                        {whatToBring.map((item, i) => <CheckItem key={i} label={item} />)}
                      </div>
                    </ContentCard>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-surface border-t border-divider px-6 py-[14px] flex gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-book-btn flex-1 flex items-center justify-center gap-[9px] bg-amber text-dark font-bold text-[0.92rem] py-[13px] rounded-full no-underline font-sans transition-colors duration-200"
          >
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {bookLabel}
          </a>
          {askQuestion && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-ask-btn flex-1 flex items-center justify-center bg-surface-2 text-white/85 font-semibold text-[0.92rem] py-[13px] rounded-full no-underline border border-divider font-sans transition-all duration-200"
            >
              {t('modal.askQuestion')}
            </a>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <PhotoLightbox
          images={images}
          initialIdx={imgIdx}
          title={title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

function ContentCard({ title, children }) {
  return (
    <div className="bg-surface-2 border border-divider rounded-[14px] px-5 py-[18px]">
      <h4 className="m-0 mb-[14px] text-[0.95rem] font-bold text-white font-sans tracking-[-0.01em]">
        {title}
      </h4>
      {children}
    </div>
  );
}

function ParamItem({ label, value, color }) {
  return (
    <div className="bg-surface border border-divider rounded-[10px] px-[14px] py-[10px]">
      <p className="m-0 mb-[3px] text-[0.68rem] font-bold tracking-[0.1em] text-muted uppercase">{label}</p>
      <p className="m-0 text-[0.92rem] font-semibold" style={{ color: color || '#C9A86C' }}>{value}</p>
    </div>
  );
}

function MetaItem({ icon, label }) {
  return (
    <div className="bg-surface border border-divider rounded-[10px] px-[14px] py-[10px] flex items-center gap-[10px]">
      <span className="text-amber shrink-0 flex">{icon}</span>
      <span className="text-[0.88rem] text-white/85 font-medium">{label}</span>
    </div>
  );
}

function CheckItem({ label }) {
  return (
    <div className="flex items-center gap-[10px] bg-surface border border-divider rounded-[10px] px-[13px] py-[9px]">
      <span className="text-amber text-[0.82rem] font-bold shrink-0">✓</span>
      <span className="text-[0.84rem] text-white/80">{label}</span>
    </div>
  );
}
