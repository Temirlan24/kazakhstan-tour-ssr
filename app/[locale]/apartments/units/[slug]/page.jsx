import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { localizedUrl, languageAlternates, LOCALE_TO_OG } from '@/i18n/routing';
import { SITE_URL, WHATSAPP_URL } from '@/lib/config';
import { getApartmentBySlug } from '@/lib/apartments';
import { apartments } from '@/data/apartments';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return apartments
    .filter((apartment) => apartment.slug)
    .map((apartment) => ({ slug: apartment.slug }));
}

function apartmentRoute(slug) {
  return `/apartments/units/${slug}`;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const apartment = getApartmentBySlug(slug);
  if (!apartment) return {};

  const t = await getTranslations({ locale, namespace: `apartments.${apartment.id}` });
  const pageUrl = localizedUrl(SITE_URL, locale, apartmentRoute(slug));

  return {
    title: t('name'),
    description: t('description'),
    alternates: {
      canonical: pageUrl,
      languages: languageAlternates(SITE_URL, apartmentRoute(slug)),
    },
    openGraph: {
      type: 'website',
      siteName: 'Crown Services',
      title: t('name'),
      description: t('description'),
      url: pageUrl,
      locale: LOCALE_TO_OG[locale],
      images: [{ url: apartment.image, width: 1200, height: 630, alt: t('name') }],
    },
    twitter: {
      title: t('name'),
      description: t('description'),
      images: [apartment.image],
    },
  };
}

export default async function ApartmentDetailPage({ params }) {
  const { locale, slug } = await params;
  const apartment = getApartmentBySlug(slug);
  if (!apartment) notFound();

  const t = await getTranslations({ locale, namespace: `apartments.${apartment.id}` });
  const tSeo = await getTranslations({ locale, namespace: 'seo' });
  const tLabels = await getTranslations({ locale, namespace: 'apartments.labels' });
  const tModal = await getTranslations({ locale, namespace: 'modal' });

  const title = t('name');
  const pageUrl = localizedUrl(SITE_URL, locale, apartmentRoute(slug));
  const homeUrl = localizedUrl(SITE_URL, locale);
  const apartmentsUrl = localizedUrl(SITE_URL, locale, '/apartments');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tSeo('common.home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: tSeo('apartments.breadcrumb'), item: apartmentsUrl },
      { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
    ],
  };

  const apartmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: title,
    description: t('description'),
    image: [apartment.image],
    url: pageUrl,
    numberOfRooms: t('rooms'),
    floorLevel: t('floor'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Almaty',
      addressRegion: t('districtLabel'),
      addressCountry: 'KZ',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: t('price').replace(/[^0-9.]/g, ''),
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Crown Services',
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={apartmentSchema} />

      <div className="bg-dark pt-28 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-[0.8rem] text-muted mb-6 font-sans">
            <Link href="/apartments" className="text-muted hover:text-amber transition-colors no-underline">
              {tSeo('apartments.breadcrumb')}
            </Link>
            <span>/</span>
            <span className="text-white/70">{title}</span>
          </nav>

          <div className="relative h-[360px] rounded-[20px] overflow-hidden mb-4 bg-black">
            <Image
              src={apartment.image}
              alt={title}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          <p className="m-0 mb-2 text-[0.72rem] font-bold tracking-[0.1em] uppercase text-amber font-sans">
            {t('districtLabel')}
          </p>
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <h1 className="m-0 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white tracking-[-0.02em] leading-[1.1] font-sans">
              {title}
            </h1>
            <p className="m-0 font-sans">
              <span className="text-[1.3rem] font-bold text-amber">{t('price')}</span>
              <span className="text-[0.85rem] text-white/60 ml-1">{tLabels('perNight')}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4 items-start">
            <Section title={tModal('description')}>
              <p className="m-0 text-[0.92rem] text-white/75 leading-[1.75]">{t('description')}</p>
            </Section>

            <Section title={tModal('parameters')}>
              <div className="flex flex-col gap-2">
                <ParamItem label={t('rooms')} />
                <ParamItem label={t('floor')} />
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
              {tLabels('book')}
            </a>
          </div>

          <Link
            href="/apartments"
            className="inline-block mt-8 text-[0.85rem] text-muted hover:text-amber transition-colors no-underline font-sans"
          >
            ← {tSeo('apartments.breadcrumb')}
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

function ParamItem({ label }) {
  return (
    <div className="bg-surface border border-divider rounded-[10px] px-[14px] py-[10px]">
      <p className="m-0 text-[0.92rem] font-semibold text-amber">{label}</p>
    </div>
  );
}
