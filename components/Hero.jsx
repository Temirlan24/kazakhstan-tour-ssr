'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { WHATSAPP_URL } from '@/lib/config';

// One representative image per tour/destination — used in the scrolling strip
const MARQUEE_IMAGES = [
  '/assets/tours/almaty/issyl_lake_1.webp',
  '/assets/tours/almaty/medeu_shymbulak_1.webp',
  '/assets/tours/almaty/almarasan_1.webp',
  '/assets/tours/almaty/kolsay_1.webp',
  '/assets/tours/almaty/charyn_1.webp',
  '/assets/tours/almaty/plateau_assy_1.webp',
  '/assets/tours/almaty/almaty_1.webp',
  '/assets/tours/astana/astana_tour_1.webp',
  '/assets/tours/astana/burabay_1.webp',
  '/assets/tours/aktau/altyn_emel_1.webp',
  '/assets/tours/aktau/aktau_tour_1.webp',
  '/assets/tours/aktau/caspian_sea_1.webp',
];

// Framer-motion variant: fades up, delay driven by `custom` prop
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 85, damping: 18, delay: delay ?? 0 },
  }),
};

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function Hero() {
  const t = useTranslations();

  // Duplicate for seamless loop
  const allImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
      style={{ paddingTop: '88px' }}
    >
      <Image
        src="/assets/tours/almaty/kolsay_2.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 55%' }}
      />
      {/* Dark overlay — heavy at top for text, fades out so photo bleeds into marquee */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.52) 52%, rgba(10,10,11,0.12) 100%)' }}
      />
      {/* Fade bottom edge to page bg so the section transitions cleanly */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, #0A0A0B)' }}
      />
      {/* Subtle amber radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '38%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(201,168,108,0.07) 0%, transparent 68%)',
        }}
      />

      {/* ── Text content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 w-full"
        style={{ paddingBottom: 'clamp(280px, 30vh, 340px)' }}
      >
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial="hidden"
          animate="show"
          custom={0.04}
          variants={fadeUp}
          className="mb-5"
        >
          <ol className="flex items-center gap-1.5 list-none p-0 m-0">
            <li>
              <Link href="/" className="text-white/45 text-[0.78rem] font-medium hover:text-white/75 transition-colors no-underline">
                {t('hero.breadcrumbHome')}
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/25 text-[0.78rem]">/</li>
            <li aria-current="page" className="text-brand-orange text-[0.78rem] font-bold tracking-[0.12em] uppercase">
              {t('hero.breadcrumbPage')}
            </li>
          </ol>
        </motion.nav>

        {/* Section label pill */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-[7px] text-[0.72rem] font-bold uppercase tracking-[0.13em] backdrop-blur-sm"
          style={{
            borderColor: 'rgba(201,168,108,0.28)',
            background: 'rgba(201,168,108,0.07)',
            color: '#C9A86C',
          }}
        >
          <span
            className="rounded-full"
            style={{ width: '18px', height: '1.5px', background: '#C9A86C', flexShrink: 0 }}
          />
          {t('hero.breadcrumbPage')}
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.18}
          variants={fadeUp}
          className="m-0 mb-5 leading-[1.05] font-sans"
        >
          <span
            className="block font-bold text-white tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
          >
            {t('hero.titleLine1')}{' '}
            <em className="font-serif italic font-normal text-amber tracking-normal">
              {t('hero.titleAccent')}{' '}
            </em>
          </span>
          <span
            className="block font-bold text-white tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
          >
            {t('hero.titleLine2')}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="text-white/62 leading-[1.72] m-0 mb-8"
          style={{ fontSize: '0.97rem', maxWidth: '500px' }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-dark font-bold text-[0.9rem] py-[13px] px-[26px] rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
          >
            {t('hero.viewTours')}
            <ArrowRightIcon />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-amber font-semibold text-[0.9rem] py-[13px] px-[26px] rounded-full no-underline border border-white/18 hover:border-amber transition-all duration-200 hover:-translate-y-0.5"
          >
            {t('hero.messageWhatsapp')}
          </a>
        </motion.div>

      </div>

      {/* ── Animated marquee image strip ── */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{
          height: 'clamp(240px, 28vh, 300px)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        }}
      >
        {/* Soft top fade — transparent so the photo background shows through */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(10,10,11,0.12), transparent)',
          }}
        />

        <motion.div
          className="flex gap-3 h-full items-end"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 38, repeat: Infinity }}
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-[16px] overflow-hidden"
              style={{
                width: '150px',
                height: 'clamp(190px, 22vh, 240px)',
                transform: `rotate(${i % 2 === 0 ? -1.8 : 2.2}deg)`,
                boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
              }}
            >
              <Image
                src={src}
                alt={`Kazakhstan landscape ${(i % MARQUEE_IMAGES.length) + 1}`}
                fill
                sizes="150px"
                className="object-cover"
              />
              {/* Darkening vignette on each card */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
