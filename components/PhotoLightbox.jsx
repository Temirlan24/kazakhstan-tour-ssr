'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

const STYLES = `
  @keyframes _lbIn { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
  @keyframes _lbUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  .lb-topbar { animation: _lbUp 0.32s 0.06s both ease; }
  .lb-img { animation: _lbIn 0.22s ease both; }
  .lb-thumbs { animation: _lbUp 0.36s 0.1s both ease; }
  .lb-close-btn:hover { background: rgba(255,255,255,0.18) !important; color: #fff !important; }
  .lb-arrow:hover { background: rgba(201,168,108,0.14) !important; border-color: rgba(201,168,108,0.5) !important; }
  .lb-thumb:not(.lb-thumb--active):hover { opacity: 0.72 !important; transform: scale(1.04) !important; }
`;

export default function PhotoLightbox({ images, initialIdx = 0, title, onClose }) {
  const [idx, setIdx] = useState(initialIdx);
  const [ready, setReady] = useState(false);
  const thumbsRef = useRef(null);
  const touchStartX = useRef(null);

  const prev = useCallback(() => setIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx(i => Math.min(images.length - 1, i + 1)), [images.length]);

  const handleTouchStart = useCallback(e => { touchStartX.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback(e => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) { delta > 0 ? next() : prev(); }
    touchStartX.current = null;
  }, [next, prev]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const saved = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = saved; };
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose, prev, next]);

  useEffect(() => {
    const strip = thumbsRef.current;
    if (!strip) return;
    const active = strip.children[idx];
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [idx]);

  const padded = n => String(n).padStart(2, '0');

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center"
      style={{
        background: ready ? 'rgba(5,5,7,0.97)' : 'rgba(5,5,7,0)',
        backdropFilter: ready ? 'blur(14px)' : 'blur(0px)',
        transition: 'background 0.28s ease, backdrop-filter 0.28s ease',
      }}
    >
      <style>{STYLES}</style>

      <div
        onClick={e => e.stopPropagation()}
        className="lb-topbar absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 py-[18px] bg-gradient-to-b from-[rgba(5,5,7,0.88)] to-transparent"
      >
        <span className="text-[0.78rem] font-semibold tracking-[0.08em] text-white/[0.45] uppercase font-sans">
          {title}
        </span>
        <div className="flex items-baseline gap-[2px] font-sans">
          <span className="text-[1.05rem] font-bold text-white">{padded(idx + 1)}</span>
          <span className="text-[0.75rem] font-bold text-amber mx-[3px]">/</span>
          <span className="text-[0.85rem] font-medium text-white/[0.35]">{padded(images.length)}</span>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onClose(); }}
          className="lb-close-btn w-[38px] h-[38px] rounded-full bg-white/[0.08] border border-white/[0.15] text-white/[0.75] cursor-pointer flex items-center justify-center transition-colors duration-200"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full flex items-center justify-center pt-[80px] px-4 md:px-[80px] pb-4 relative touch-pan-y"
      >
        <img
          key={idx}
          src={images[idx]}
          alt={title ? `${title} ${idx + 1}` : `Photo ${idx + 1}`}
          className="lb-img max-w-full max-h-[calc(100vh-210px)] object-contain block rounded-[6px] shadow-[0_28px_72px_rgba(0,0,0,0.65)]"
        />
        {idx > 0 && (
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="lb-arrow hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.14] text-white cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}
        {idx < images.length - 1 && (
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="lb-arrow hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.14] text-white cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div
          ref={thumbsRef}
          onClick={e => e.stopPropagation()}
          className="lb-thumbs flex gap-2 px-6 pt-[10px] pb-[22px] overflow-x-auto w-full [scrollbar-width:none]"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); }}
              className={`lb-thumb shrink-0 w-20 h-[54px] rounded-[8px] overflow-hidden p-0 cursor-pointer border-2 transition-[border-color,opacity,transform] duration-200 ${
                i === idx
                  ? 'lb-thumb--active border-amber opacity-100 scale-[1.08]'
                  : 'border-white/[0.08] opacity-40 scale-100'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover block" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}
