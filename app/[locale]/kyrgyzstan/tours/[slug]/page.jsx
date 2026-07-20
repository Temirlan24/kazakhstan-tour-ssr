import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { localizedUrl, languageAlternates } from '@/i18n/routing';
import { SITE_URL, WHATSAPP_URL } from '@/lib/config';
import { getKgTourBySlug } from '@/lib/kgTours';
import { kgTours } from '@/data/kgTours';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return kgTours
    .filter((tour) => tour.slug)
    .map((tour) => ({ slug: tour.slug }));
}

function tourRoute(slug) {
  return `/kyrgyzstan/tours/${slug}`;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const tour = getKgTourBySlug(slug);
  if (!tour) return {};

  const t = await getTranslations({ locale, namespace: `kgTours.${tour.id}` });
  const pageUrl = localizedUrl(SITE_URL, locale, tourRoute(slug));

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: pageUrl,
      languages: languageAlternates(SITE_URL, tourRoute(slug)),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl,
      images: [{ url: tour.images[0], width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: [tour.images[0]],
    },
  };
}

export default async function KgTourDetailPage({ params }) {
  const { locale, slug } = await params;
  const tour = getKgTourBySlug(slug);
  if (!tour) notFound();

  const t = await getTranslations({ locale, namespace: `kgTours.${tour.id}` });
  const tSeo = await getTranslations({ locale, namespace: 'seo' });
  const tModal = await getTranslations({ locale, namespace: 'modal' });
  const tCard = await getTranslations({ locale, namespace: 'card' });

  const title = t('title');
  const pageUrl = localizedUrl(SITE_URL, locale, tourRoute(slug));
  const kyrgyzstanUrl = localizedUrl(SITE_URL, locale, '/kyrgyzstan');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tSeo('common.home'), item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: tSeo('kyrgyzstan.breadcrumb'), item: kyrgyzstanUrl },
      { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
    ],
  };

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: title,
    description: t('description'),
    image: tour.images,
    url: pageUrl,
    touristType: t('groupSize'),
    provider: {
      '@type': 'TravelAgency',
      name: 'Crown Services',
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={tripSchema} />

      <div className="bg-dark pt-28 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-[0.8rem] text-muted mb-6 font-sans">
            <Link href="/kyrgyzstan" className="text-muted hover:text-amber transition-colors no-underline">
              {tSeo('kyrgyzstan.breadcrumb')}
            </Link>
            <span>/</span>
            <span className="text-white/70">{title}</span>
          </nav>

          <div className="relative h-[360px] rounded-[20px] overflow-hidden mb-4 bg-black">
            <Image
              src={tour.images[0]}
              alt={title}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          {tour.images.length > 1 && (
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {tour.images.slice(1).map((src, i) => (
                <div key={i} className="relative shrink-0 w-[110px] h-[76px] rounded-lg overflow-hidden">
                  <Image src={src} alt="" fill sizes="110px" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <p className="m-0 mb-2 text-[0.72rem] font-bold tracking-[0.1em] uppercase text-amber font-sans">
            {t('durationDisplay')} · {tour.category}
          </p>
          <h1 className="m-0 mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white tracking-[-0.02em] leading-[1.1] font-sans">
            {title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4 items-start">
            <Section title={tModal('description')}>
              <p className="m-0 text-[0.92rem] text-white/75 leading-[1.75]">{t('description')}</p>
            </Section>

            <Section title={tModal('parameters')}>
              <div className="flex flex-col gap-2">
                <ParamItem label={tModal('duration')} value={t('durationDisplay')} />
                <ParamItem label={tModal('group')} value={t('groupSize')} />
              </div>
            </Section>
          </div>

          <div className="flex gap-3 mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-amber text-dark font-bold text-[0.95rem] py-[14px] rounded-full no-underline font-sans"
            >
              {tModal('bookTour')}
            </a>
          </div>

          <Link
            href="/kyrgyzstan"
            className="inline-block mt-8 text-[0.85rem] text-muted hover:text-amber transition-colors no-underline font-sans"
          >
            ← {tCard('details')} — {tSeo('kyrgyzstan.breadcrumb')}
          </Link>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-surface-2 border border-divider rounded-[14px] px-5 py-[18px]">
      <h2 className="m-0 mb-[14px] text-[0.95rem] font-bold text-white font-sans tracking-[-0.01em]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ParamItem({ label, value }) {
  return (
    <div className="bg-surface border border-divider rounded-[10px] px-[14px] py-[10px]">
      <p className="m-0 mb-[3px] text-[0.68rem] font-bold tracking-[0.1em] text-muted uppercase">{label}</p>
      <p className="m-0 text-[0.92rem] font-semibold text-amber">{value}</p>
    </div>
  );
}
