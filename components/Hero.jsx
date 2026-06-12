'use client';

import { useTranslation } from '@/lib/i18n';

const HERO_IMAGE = "https://www.pelago.com/img/products/KZ-Kazakhstan/full-day-private-tour-in-big-almaty-lake/a94846f9-2685-485c-a7f9-e5101d2da7fc_full-day-private-tour-in-big-almaty-lake-xlarge.jpg";

const STYLES = `
  .hero-overlay {
    background: linear-gradient(105deg, rgba(5,5,7,0.92) 0%, rgba(5,5,7,0.75) 50%, rgba(5,5,7,0.45) 100%);
  }
`;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundPosition: 'center 30%' }}
    >
      <style>{STYLES}</style>
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-dark" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        <div className="max-w-[720px] pt-[140px] pb-20">
          <p className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase m-0 mb-3">
            {t('hero.breadcrumbPage')}
          </p>
          <h1 className="m-0 mb-4 leading-[1.05] font-sans font-bold">
            <span className="block text-[clamp(2.2rem,5vw,3.6rem)] text-white tracking-[-0.02em]">
              {t('hero.titleLine1')}{' '}
              <em className="font-serif italic font-normal text-amber tracking-normal">
                {t('hero.titleAccent')}
              </em>
            </span>
            <span className="block text-[clamp(2.2rem,5vw,3.6rem)] text-white tracking-[-0.02em]">
              {t('hero.titleLine2')}
            </span>
          </h1>
          <p className="text-base text-white/70 leading-[1.65] m-0 max-w-[520px]">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
