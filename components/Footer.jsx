'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { WHATSAPP_URL, PHONE, SOCIAL_LINKS } from '@/lib/config';

const LOGO_URL = "/main_logo.webp";

function TikTokIcon() {
  return (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations();

  const tourLinks = [
    { href: '/kazakhstan', label: t('footer.links.kzTours') },
    { href: '/kyrgyzstan', label: t('footer.links.kgTours') },
  ];

  const serviceLinks = [
    { href: '/car-rent',             label: t('footer.links.carRental') },
    { href: '/car-rent-with-driver', label: t('footer.links.carWithDriver') },
    { href: '/transfer',             label: t('footer.links.transfer') },
    { href: '/apartments',           label: t('footer.links.apartments') },
    { href: '/security',             label: t('footer.links.security') },
  ];

  return (
    <footer className="bg-surface border-t border-divider">
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-[10px] no-underline" aria-label="Crown Services — Home">
              <Image
                src={LOGO_URL}
                alt="Crown Services"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-brand-orange font-semibold text-[0.9rem]">Crown Services</span>
            </Link>
            <p className="text-muted text-[0.82rem] leading-[1.6] m-0 max-w-[220px]">
              {t('footer.tagline')}
            </p>
            <address className="not-italic">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex items-center gap-2 text-amber hover:text-amber-light text-[0.875rem] font-semibold no-underline transition-colors duration-200"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {PHONE}
              </a>
              <p className="text-muted text-[0.78rem] m-0 mt-1">{t('footer.city')}</p>
            </address>
          </div>

          {/* Tours */}
          <nav aria-label={t('footer.sections.tours')}>
            <h3 className="text-white text-[0.8rem] font-bold tracking-[0.1em] uppercase m-0 mb-4">
              {t('footer.sections.tours')}
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {tourLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white text-[0.87rem] no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={t('footer.sections.services')}>
            <h3 className="text-white text-[0.8rem] font-bold tracking-[0.1em] uppercase m-0 mb-4">
              {t('footer.sections.services')}
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white text-[0.87rem] no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[0.8rem] font-bold tracking-[0.1em] uppercase m-0 mb-4">
              {t('footer.sections.contact')}
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white text-[0.87rem] no-underline transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-muted text-[0.87rem]">{t('footer.available')}</li>
            </ul>

            <div className="mt-5 pt-4 border-t border-divider/60">
              <p className="text-white text-[0.72rem] font-bold tracking-[0.1em] uppercase m-0 mb-3">
                {t('footer.social.title')}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={SOCIAL_LINKS.tiktokCarRent}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TikTok — ${t('footer.social.carRent')}`}
                  className="flex flex-col items-center gap-1.5 text-muted hover:text-white no-underline transition-colors duration-200"
                >
                  <TikTokIcon />
                  <span className="text-[0.68rem] leading-none">{t('footer.social.carRent')}</span>
                </a>
                <a
                  href={SOCIAL_LINKS.instagramCarRent}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram — ${t('footer.social.carRent')}`}
                  className="flex flex-col items-center gap-1.5 text-muted hover:text-white no-underline transition-colors duration-200"
                >
                  <InstagramIcon />
                  <span className="text-[0.68rem] leading-none">{t('footer.social.carRent')}</span>
                </a>
                <a
                  href={SOCIAL_LINKS.instagramTours}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram — ${t('footer.social.tours')}`}
                  className="flex flex-col items-center gap-1.5 text-muted hover:text-white no-underline transition-colors duration-200"
                >
                  <InstagramIcon />
                  <span className="text-[0.68rem] leading-none">{t('footer.social.tours')}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-divider pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-[0.78rem] m-0">
            {t('footer.copyright')}
          </p>
          <p className="text-muted text-[0.78rem] m-0">
            {t('footer.city')}
          </p>
        </div>
      </div>
    </footer>
  );
}
