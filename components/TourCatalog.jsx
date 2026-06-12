'use client';

import { useState } from 'react';
import { tours } from '@/data/tours';
import TourCard from './TourCard';
import TourModal from './TourModal';
import { useTranslation } from '@/lib/i18n';

const CITIES = ['all', 'almaty', 'astana', 'aktau'];

export default function TourCatalog() {
  const { t } = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);
  const [activeCity, setActiveCity] = useState('all');
  const [hoveredCity, setHoveredCity] = useState(null);

  const filtered = activeCity === 'all'
    ? tours
    : tours.filter(tour => tour.city === activeCity);

  return (
    <>
      <section id="catalog" className="bg-dark pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">

          <p style={{ color: 'var(--orange)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, marginBottom: '0.75rem' }}>
            {t('catalog.sectionLabel')}
          </p>

          <div className="flex flex-wrap items-end justify-between gap-5 mb-3">
            <h2 style={{ margin: 0, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: 'white', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {t('catalog.title')}
            </h2>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', margin: 0, marginBottom: '2rem', maxWidth: 560, lineHeight: 1.6 }}>
            {t('catalog.description')}
          </p>

          <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
            {CITIES.map(city => {
              const isActive = activeCity === city;
              const isHovered = hoveredCity === city && !isActive;
              return (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  style={{
                    padding: '0.5rem 1.375rem',
                    borderRadius: '999px',
                    border: `1px solid ${isActive ? 'rgba(201,168,108,0.45)' : 'var(--border)'}`,
                    background: isActive
                      ? 'rgba(201,168,108,0.1)'
                      : isHovered
                        ? 'rgba(255,255,255,0.04)'
                        : 'var(--surface2)',
                    color: isActive
                      ? 'var(--amber)'
                      : isHovered
                        ? 'rgba(255,255,255,0.75)'
                        : 'var(--muted)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 400,
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    boxShadow: isActive ? '0 0 12px rgba(201,168,108,0.08)' : 'none',
                  }}
                >
                  {t(`catalog.cityFilters.${city}`)}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '4rem 0', fontSize: '0.95rem' }}>
              {t('catalog.noResults')}
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(268px,1fr))] gap-5">
              {filtered.map(tour => (
                <TourCard key={tour.id} tour={tour} onOpen={setSelectedTour} />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedTour && (
        <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
      )}
    </>
  );
}
