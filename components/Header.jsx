'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';
import { WHATSAPP_URL } from '@/lib/config';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Ruoprk8P8DLCSYibesti599hx4VpCxR2&sz=w200";
const languages = ["EN", "RU", "KZ"];

const tourItems = [
  { key: 'kzTours', to: '/kazakhstan' },
  { key: 'kgTours', to: '/kyrgyzstan' },
];

const carItems = [
  { key: 'carRent',           to: '/car-rent' },
  { key: 'carRentWithDriver', to: '/car-rent-with-driver' },
  { key: 'transfer',          to: '/transfer' },
];

const STYLES = `
  .header-dropdown-link {
    display: block;
    padding: 9px 14px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
  }
  .header-dropdown-link:hover:not(.header-dropdown-link--active) {
    background: rgba(255,255,255,0.06);
    color: #fff;
  }
  .header-dropdown-link--active {
    color: #C9A86C;
    background: rgba(201,168,108,0.1);
  }
  .header-dropdown-link:not(.header-dropdown-link--active) {
    color: rgba(255,255,255,0.82);
  }
  .lang-btn:hover:not(.lang-btn--open) {
    background: rgba(255,255,255,0.12) !important;
    color: #fff !important;
    border-color: rgba(255,255,255,0.2) !important;
  }
  .wa-btn:hover { background: #F0E5CE !important; }
`;

export default function Header() {
  const { lang, setLang, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = (name) => setOpenDropdown(prev => prev === name ? null : name);

  return (
    <>
      <style>{STYLES}</style>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms]"
        style={{
          background: scrolled ? 'rgba(10,10,11,0.97)' : 'rgba(10,10,11,0.75)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.55)' : 'none',
        }}
      >
        <div className="px-6 flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
            <img
              src={LOGO_URL}
              alt="Crown Services"
              className="h-9 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="hidden lg:block text-brand-orange font-semibold text-[0.95rem] tracking-[0.01em] font-sans">
              Crown Services
            </span>
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} aria-label="Main navigation" className="hidden md:flex items-center gap-4 lg:gap-7">
            <Link
              href="/"
              className={`flex items-center gap-1.5 text-[0.82rem] no-underline transition-colors duration-200 whitespace-nowrap
                ${pathname === '/' ? 'text-amber font-semibold' : 'text-white/[0.82] font-medium hover:text-white'}`}
            >
              <HomeIcon />
              {t('nav.home')}
            </Link>

            {/* Tours dropdown */}
            <div className="relative">
              <DropdownButton
                label={t('nav.tours')}
                icon={<MountainIcon />}
                open={openDropdown === 'tours'}
                onClick={() => toggle('tours')}
              />
              {openDropdown === 'tours' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-surface border border-divider rounded-[14px] p-[6px] min-w-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-[100]">
                  {tourItems.map(item => (
                    <Link
                      key={item.key}
                      href={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`header-dropdown-link ${pathname === item.to ? 'header-dropdown-link--active' : ''}`}
                    >
                      {t(`nav.dropdown.${item.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Car Services dropdown */}
            <div className="relative">
              <DropdownButton
                label={t('nav.carServices')}
                icon={<CarIcon />}
                open={openDropdown === 'cars'}
                onClick={() => toggle('cars')}
              />
              {openDropdown === 'cars' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-surface border border-divider rounded-[14px] p-[6px] min-w-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-[100]">
                  {carItems.map(item => (
                    <Link
                      key={item.key}
                      href={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`header-dropdown-link ${pathname === item.to ? 'header-dropdown-link--active' : ''}`}
                    >
                      {t(`nav.dropdown.${item.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/security"
              className={`flex items-center gap-1.5 text-[0.82rem] no-underline transition-colors duration-200 whitespace-nowrap
                ${pathname === '/security' ? 'text-amber font-semibold' : 'text-white/[0.82] font-medium hover:text-white'}`}
            >
              <ShieldIcon />
              {t('nav.security')}
            </Link>

            <Link
              href="/apartments"
              className={`flex items-center gap-1.5 text-[0.82rem] no-underline transition-colors duration-200 whitespace-nowrap
                ${pathname === '/apartments' ? 'text-amber font-semibold' : 'text-white/[0.82] font-medium hover:text-white'}`}
            >
              <BuildingIcon />
              {t('nav.dropdown.apartments')}
            </Link>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-white/[0.82] hover:text-white text-[0.82rem] font-medium no-underline transition-colors duration-200 whitespace-nowrap"
            >
              <PhoneIcon />
              {t('nav.contacts')}
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(v => !v)}
                className={`lang-btn w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer border
                  ${langOpen
                    ? 'lang-btn--open bg-amber/[0.12] border-amber/40 text-amber'
                    : 'bg-white/[0.08] border-white/10 text-white/65'}`}
                title={lang}
              >
                <GlobeIcon />
              </button>
              {langOpen && (
                <div className="absolute top-[calc(100%+10px)] right-0 bg-surface border border-divider rounded-xl p-[5px] min-w-[110px] shadow-[0_20px_56px_rgba(0,0,0,0.65)] z-[200]">
                  {languages.map(l => (
                    <LangOption key={l} l={l} current={lang} onSelect={() => { setLang(l); setLangOpen(false); }} />
                  ))}
                </div>
              )}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn flex items-center gap-2 font-semibold text-[0.875rem] py-2 px-[18px] rounded-full no-underline transition-colors duration-200"
              style={{ background: '#E8D9BC', color: '#1a1a1a' }}
            >
              <WhatsAppIcon color="#25D366" />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-white/80 bg-transparent border-0 cursor-pointer"
          >
            {menuOpen
              ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="bg-surface border-t border-divider px-6 pt-4 pb-5">
            <Link href="/" onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 py-[7px] text-[0.9rem] no-underline
                ${pathname === '/' ? 'text-amber font-semibold' : 'text-white/80 font-medium'}`}>
              <HomeIcon /> {t('nav.home')}
            </Link>
            <div className="border-t border-divider my-2" />

            <p className="flex items-center gap-1.5 text-muted text-[0.72rem] font-bold tracking-[0.1em] uppercase m-0 mb-1">
              <MountainIcon /> {t('nav.tours')}
            </p>
            {tourItems.map(item => (
              <Link key={item.key} href={item.to} onClick={() => setMenuOpen(false)}
                className={`block py-[7px] pl-[10px] text-[0.9rem] font-medium no-underline
                  ${pathname === item.to ? 'text-amber' : 'text-white/80'}`}>
                {t(`nav.dropdown.${item.key}`)}
              </Link>
            ))}

            <p className="flex items-center gap-1.5 text-muted text-[0.72rem] font-bold tracking-[0.1em] uppercase m-0 mt-3 mb-1">
              <CarIcon /> {t('nav.carServices')}
            </p>
            {carItems.map(item => (
              <Link key={item.key} href={item.to} onClick={() => setMenuOpen(false)}
                className="block py-[7px] pl-[10px] text-white/80 text-[0.9rem] font-medium no-underline">
                {t(`nav.dropdown.${item.key}`)}
              </Link>
            ))}

            <Link href="/security" onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 py-[7px] text-[0.9rem] no-underline
                ${pathname === '/security' ? 'text-amber font-semibold' : 'text-white/80 font-medium'}`}>
              <ShieldIcon /> {t('nav.security')}
            </Link>

            <div className="border-t border-divider mt-3 pt-2">
              <Link href="/apartments" onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 py-2 text-[0.9rem] font-medium no-underline
                  ${pathname === '/apartments' ? 'text-amber' : 'text-white/80'}`}>
                <BuildingIcon /> {t('nav.dropdown.apartments')}
              </Link>
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-white/80 text-[0.9rem] font-medium no-underline">
                <PhoneIcon /> {t('nav.contacts')}
              </a>
            </div>

            <div className="flex gap-3 mt-3 pt-3 border-t border-divider items-center">
              <div className="relative">
                <button
                  onClick={() => setLangOpen(v => !v)}
                  className={`w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border
                    ${langOpen
                      ? 'bg-amber/[0.12] border-amber/40 text-amber'
                      : 'bg-white/[0.08] border-white/10 text-white/65'}`}
                  title={lang}
                >
                  <GlobeIcon />
                </button>
                {langOpen && (
                  <div className="absolute bottom-[calc(100%+8px)] left-0 bg-surface border border-divider rounded-xl p-[5px] min-w-[110px] shadow-[0_-16px_48px_rgba(0,0,0,0.6)] z-[200]">
                    {languages.map(l => (
                      <LangOption key={l} l={l} current={lang} onSelect={() => { setLang(l); setLangOpen(false); }} />
                    ))}
                  </div>
                )}
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-semibold text-[0.85rem] py-[7px] px-4 rounded-full no-underline"
                style={{ background: '#E8D9BC', color: '#1a1a1a' }}>
                <WhatsAppIcon color="#25D366" size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function LangOption({ l, current, onSelect }) {
  const active = l === current;
  return (
    <button
      onClick={onSelect}
      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg border-0 cursor-pointer font-sans text-[0.85rem] transition-colors duration-150
        ${active
          ? 'bg-amber/10 text-amber font-bold'
          : 'bg-transparent text-white/75 font-medium hover:bg-white/[0.06] hover:text-white'}`}
    >
      {l}
      {active && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </button>
  );
}

function DropdownButton({ label, icon, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-0 cursor-pointer p-0 flex items-center gap-1.5 text-[0.82rem] font-medium transition-colors duration-200 whitespace-nowrap
        ${open ? 'text-white' : 'text-white/[0.82] hover:text-white'}`}
    >
      {icon}
      {label}
      <svg
        width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M5 17H3v-5l2-5h14l2 5v5h-2"/>
      <circle cx="7.5" cy="17.5" r="1.5"/>
      <circle cx="16.5" cy="17.5" r="1.5"/>
      <path d="M5 12h14"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M9 22V12h6v10"/>
      <path d="M9 7h1m4 0h1M9 11h1m4 0h1"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M21 15.46l-4.586-.557a1 1 0 00-.934.42l-2.065 2.787a15.045 15.045 0 01-7.512-7.512l2.79-2.067a1 1 0 00.418-.935L8.554 3H4.038A1 1 0 003 4.096C3.38 13.48 10.52 20.62 19.904 21a1 1 0 001.096-1.038v-4.516z"/>
    </svg>
  );
}

function WhatsAppIcon({ color = '#fff', size = 18 }) {
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
