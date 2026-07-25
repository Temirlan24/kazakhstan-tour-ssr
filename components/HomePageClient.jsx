'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CTASection from './CTASection';
import { WHATSAPP_URL } from '@/lib/config';

const HERO_BG  = "/assets/tours/almaty/charyn_1.webp";
const TOURS_BG = "/assets/tours/almaty/kolsay_1.webp";
const CARS_BG  = "/assets/cars/lexus/lexus_lx_1.webp";
const SEC_BG   = "/assets/hero/security.webp";
const APTS_BG  = "/assets/hero/apartments.webp";

const STYLES = `
  @keyframes homeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ha1 { animation: homeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .ha2 { animation: homeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .ha3 { animation: homeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
  .ha4 { animation: homeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.46s both; }
  .ha5 { animation: homeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.60s both; }
  .hsvc {
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s ease;
  }
  .hsvc:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,108,0.2);
  }
  .hsvc-item {
    transition: color 0.18s ease, transform 0.18s ease;
    display: flex;
    align-items: center;
    gap: 7px;
    color: rgba(255,255,255,0.55);
    font-size: 0.84rem;
    font-weight: 500;
    text-decoration: none;
  }
  .hsvc-item:hover { color: #DFC08A !important; transform: translateX(4px); }
  .hero-grad-1 {
    background: linear-gradient(135deg, rgba(5,5,7,0.96) 0%, rgba(5,5,7,0.72) 55%, rgba(5,5,7,0.45) 100%);
  }
  .hero-grad-2 {
    background: linear-gradient(to top, #0A0A0B 0%, transparent 32%);
  }
  .section-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .section-enter.visible { opacity: 1; transform: translateY(0); }
  .svc-enter {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .svc-enter.visible { opacity: 1; transform: translateY(0); }
`;

/* Fires once when the element enters the viewport */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Icons ─────────────────────────────────────────────────────────── */

function MountainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3l4 8 2.5-5L21 21H3L8 3z"/>
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="11" width="22" height="9" rx="2"/>
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/>
      <circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function ApartmentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M9 22V12h6v10"/>
      <path d="M9 7h1m4 0h1M9 11h1m4 0h1"/>
    </svg>
  );
}

function ArrowRightIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */

export default function HomePageClient() {
  const t = useTranslations();

  const [headingRef, headingInView] = useInView(0.3);
  const [cardsRef, cardsInView]     = useInView(0.1);

  const SERVICES = [
    {
      key: 'tours',
      bg: TOURS_BG,
      to: '/kazakhstan',
      Icon: MountainIcon,
      items: [
        { labelKey: 'nav.dropdown.kzTours', to: '/kazakhstan' },
        { labelKey: 'nav.dropdown.kgTours', to: '/kyrgyzstan' },
      ],
    },
    {
      key: 'cars',
      bg: CARS_BG,
      to: '/car-rent',
      Icon: CarIcon,
      items: [
        { labelKey: 'nav.dropdown.carRent',          to: '/car-rent' },
        { labelKey: 'nav.dropdown.carRentWithDriver', to: '/car-rent-with-driver' },
        { labelKey: 'nav.dropdown.transfer',          to: '/transfer' },
      ],
    },
    {
      key: 'security',
      bg: SEC_BG,
      to: '/security',
      Icon: ShieldIcon,
      items: [
        { labelKey: 'nav.dropdown.escort',           to: '/security' },
        { labelKey: 'nav.dropdown.personalSecurity', to: '/security' },
      ],
    },
    {
      key: 'apartments',
      bg: APTS_BG,
      to: '/apartments',
      Icon: ApartmentIcon,
      items: [
        { labelKey: 'nav.dropdown.apartments', to: '/apartments' },
      ],
    },
  ];

  return (
    <>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <Image src={HERO_BG} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: 'center 25%' }} />
        <div className="hero-grad-1 absolute inset-0" />
        <div className="hero-grad-2 absolute inset-0" />
        <div
          className="absolute pointer-events-none"
          style={{ left: '-80px', top: '28%', width: '520px', height: '520px', background: 'radial-gradient(ellipse, rgba(201,168,108,0.055) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full box-border pt-[148px] pb-16">
          <div className="ha1 flex items-center gap-3 mb-7">
            <div className="w-[34px] h-[2px] bg-brand-orange rounded-[1px] shrink-0" />
            <span className="text-brand-orange text-[0.73rem] font-bold tracking-[0.15em] uppercase">
              {t('home.hero.sectionLabel')}
            </span>
          </div>

          <h1 className="ha2 mb-[26px] m-0">
            <span className="block font-sans font-bold text-[clamp(2.8rem,6.5vw,5.2rem)] text-white tracking-[-0.03em] leading-[0.96]">
              {t('home.hero.title')}{' '}
            </span>
            <span className="block font-serif italic font-normal text-[clamp(2.8rem,6.5vw,5.2rem)] text-amber tracking-[-0.02em] leading-[1.02]">
              {t('home.hero.titleAccent')}{' '}
            </span>
            <span className="block font-sans font-bold text-[clamp(2.8rem,6.5vw,5.2rem)] text-white/30 tracking-[-0.03em] leading-[0.96]">
              {t('home.hero.titleSub')}
            </span>
          </h1>

          <p className="ha3 text-white/60 text-base leading-[1.75] max-w-[450px] mb-[38px]">
            {t('home.hero.description')}
          </p>

          <div className="ha4 flex flex-wrap gap-3 mb-[60px]">
            <Link
              href="/kazakhstan"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-dark font-bold text-[0.9rem] py-[13px] px-[26px] rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('home.hero.exploreTours')}
              <ArrowRightIcon />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/[0.82] hover:text-amber font-semibold text-[0.9rem] py-[13px] px-[26px] rounded-full no-underline border border-white/20 hover:border-amber transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('home.hero.contactUs')}
            </a>
          </div>

        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-dark pt-24 pb-[108px]">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Heading animates in on scroll */}
          <div
            ref={headingRef}
            className={`section-enter mb-[52px] ${headingInView ? 'visible' : ''}`}
          >
            <p className="text-amber text-[0.73rem] font-bold tracking-[0.15em] uppercase m-0 mb-[10px]">
              {t('home.services.sectionLabel')}
            </p>
            <h2 className="m-0 font-sans font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-white tracking-[-0.025em] leading-[1.1]">
              {t('home.services.title')}
            </h2>
          </div>

          {/* Cards stagger in when grid enters viewport */}
          <div ref={cardsRef} className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.key}
                className={`svc-enter h-full ${cardsInView ? 'visible' : ''}`}
                style={{ transitionDelay: cardsInView ? `${i * 100}ms` : '0ms' }}
              >
                <ServiceCard svc={svc} t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceCard({ svc, t }) {
  return (
    <div className="hsvc h-full relative bg-surface border border-divider rounded-[20px] overflow-hidden flex flex-col cursor-pointer">
      <Link href={svc.to} className="absolute inset-0 z-[1]" aria-label={t(`home.services.${svc.key}.title`)} />

      <div className="relative h-[215px] shrink-0">
        <Image src={svc.bg} alt={t(`home.services.${svc.key}.title`)} fill sizes="(max-width: 768px) 100vw, 290px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.12] to-black/[0.65]" />
        <div className="absolute bottom-[-22px] left-[22px] w-[46px] h-[46px] rounded-xl bg-surface-2 border border-divider flex items-center justify-center text-amber">
          <svc.Icon />
        </div>
      </div>

      <div className="pt-[34px] px-[22px] pb-[26px] flex-1 flex flex-col">
        <h3 className="m-0 mb-[10px] font-sans font-bold text-[1.22rem] text-white tracking-[-0.015em]">
          {t(`home.services.${svc.key}.title`)}
        </h3>
        <div className="w-[26px] h-[2px] bg-amber rounded-[1px] mb-[14px]" />
        <p className="text-muted text-[0.87rem] leading-[1.65] m-0 mb-5 flex-1">
          {t(`home.services.${svc.key}.description`)}
        </p>

        <div className="relative z-[2] flex flex-col gap-2">
          {svc.items.map((item, i) => (
            <Link key={i} href={item.to} className="hsvc-item">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
