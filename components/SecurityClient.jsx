'use client';

import { securityServices, securityTypeColors } from '@/data/security';
import { useTranslation } from '@/lib/i18n';
import { WHATSAPP_URL } from '@/lib/config';
import CTASection from './CTASection';

const BG = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80";

const SERVICE_KEYS = [
  { key: 'bodyguard', Icon: BodyguardIcon },
  { key: 'airport',   Icon: AirportIcon },
  { key: 'chauffeur', Icon: ChauffeurIcon },
  { key: 'executive', Icon: ExecutiveIcon },
  { key: 'event',     Icon: EventIcon },
  { key: 'escort',    Icon: EscortIcon },
  { key: 'allday',    Icon: AlldayIcon },
];

const STYLES = `
  .security-hero-overlay {
    background: linear-gradient(110deg, rgba(5,5,7,0.97) 0%, rgba(5,5,7,0.80) 55%, rgba(5,5,7,0.52) 100%);
  }
  @keyframes secFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sec-a1 { animation: secFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .sec-a2 { animation: secFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .sec-a3 { animation: secFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
  .sec-card {
    transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s, box-shadow 0.3s;
  }
  .sec-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 40px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,168,108,0.14);
  }
  .sec-card--escort:hover  { border-color: rgba(251,191,36,0.45); }
  .sec-card--personal:hover { border-color: rgba(201,168,108,0.45); }
  .sec-icon-ring { transition: box-shadow 0.32s; }
  .sec-card:hover .sec-icon-ring { box-shadow: 0 0 36px rgba(201,168,108,0.22); }
  .sec-book-btn { transition: background 0.2s, transform 0.18s; }
  .sec-book-btn:hover { background: #DFC08A !important; transform: translateY(-1px); }
  .svc-tile {
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), border-color 0.22s, box-shadow 0.28s;
  }
  .svc-tile:hover {
    transform: translateY(-5px);
    border-color: rgba(201,168,108,0.3) !important;
    box-shadow: 0 24px 64px rgba(0,0,0,0.52);
  }
  .svc-icon { transition: box-shadow 0.28s; }
  .svc-tile:hover .svc-icon { box-shadow: 0 0 32px rgba(201,168,108,0.22); }
  .why-row { transition: transform 0.22s ease; cursor: default; }
  .why-row:hover { transform: translateX(5px); }
`;

export default function SecurityClient() {
  const { t } = useTranslation();
  const why = t('security.page.why');

  return (
    <>
      <style>{STYLES}</style>

      {/* HERO */}
      <section
        className="relative bg-cover"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: 'center 40%',
          minHeight: '72vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: '148px',
          paddingBottom: '88px',
        }}
      >
        <div className="security-hero-overlay absolute inset-0" />
        <div className="absolute bottom-0 inset-x-0 h-[140px] bg-gradient-to-b from-transparent to-dark" />
        <div
          className="absolute pointer-events-none"
          style={{ right: '6%', top: '28%', width: '480px', height: '480px', background: 'radial-gradient(ellipse, rgba(201,168,108,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full box-border">
          <p
            className="sec-a1 m-0 mb-4"
            style={{ color: 'var(--orange)', fontSize: '0.77rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)' }}
          >
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--orange)', borderRadius: '1px', flexShrink: 0 }} />
            {t('security.page.sectionLabel')}
          </p>
          <h1
            className="sec-a2 m-0 mb-5 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(2.4rem,5.5vw,4rem)', maxWidth: '700px', letterSpacing: '-0.025em', lineHeight: 1.07, fontFamily: 'var(--font-sans)' }}
          >
            {t('security.page.title')}
          </h1>
          <p
            className="sec-a3 m-0 mb-10"
            style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.97rem', lineHeight: 1.78, maxWidth: '560px', fontFamily: 'var(--font-sans)' }}
          >
            {t('security.page.description')}
          </p>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section style={{ background: 'var(--bg)', paddingTop: '88px', paddingBottom: '72px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ marginBottom: '52px' }}>
            <p
              className="m-0 mb-3 font-bold uppercase"
              style={{ color: 'var(--amber)', fontSize: '0.73rem', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)' }}
            >
              {t('security.page.ourServicesLabel')}
            </p>
            <h2
              className="m-0 font-sans font-bold text-white"
              style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              {t('security.page.ourServicesTitle')}
            </h2>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {SERVICE_KEYS.map(({ key, Icon }) => (
              <div
                key={key}
                className="svc-tile"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  className="svc-icon"
                  style={{
                    width: '50px', height: '50px', borderRadius: '13px',
                    background: 'rgba(201,168,108,0.08)', border: '1px solid rgba(201,168,108,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  <Icon />
                </div>
                <div>
                  <h3
                    className="m-0 mb-[9px] font-sans font-bold text-white"
                    style={{ fontSize: '1.02rem', lineHeight: 1.25, letterSpacing: '-0.015em' }}
                  >
                    {t(`security.services.${key}.name`)}
                  </h3>
                  <p
                    className="m-0"
                    style={{ color: 'var(--muted)', fontSize: '0.84rem', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}
                  >
                    {t(`security.services.${key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: 'var(--surface)', paddingTop: '72px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div style={{ flexShrink: 0, maxWidth: '340px' }}>
              <p
                className="m-0 mb-3 font-bold uppercase"
                style={{ color: 'var(--amber)', fontSize: '0.73rem', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)' }}
              >
                {t('security.page.whyLabel')}
              </p>
              <h2
                className="m-0 font-sans font-bold text-white"
                style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.025em', lineHeight: 1.15 }}
              >
                {t('security.page.whyTitle')}
              </h2>
              <div style={{ width: '32px', height: '2px', background: 'var(--amber)', borderRadius: '1px', marginTop: '18px' }} />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Array.isArray(why) && why.map((item, i) => (
                <div
                  key={i}
                  className="why-row flex items-start gap-4"
                  style={{ padding: '16px 20px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px' }}
                >
                  <span
                    style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      background: 'rgba(201,168,108,0.1)', border: '1px solid rgba(201,168,108,0.22)',
                      color: 'var(--amber)', fontSize: '0.72rem', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.93rem', lineHeight: 1.55, fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PACKAGES */}
      <section style={{ background: 'var(--bg)', paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ marginBottom: '48px' }}>
            <p
              className="m-0 mb-3 font-bold uppercase"
              style={{ color: 'var(--amber)', fontSize: '0.73rem', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)' }}
            >
              {t('security.page.packagesLabel')}
            </p>
            <h2
              className="m-0 font-sans font-bold text-white"
              style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              {t('security.page.packagesTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {securityServices.map(svc => (
              <SecurityCard key={svc.id} id={svc.id} typeKey={svc.typeKey} />
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="security" />
    </>
  );
}

function SecurityCard({ id, typeKey }) {
  const { t } = useTranslation();
  const color = securityTypeColors[typeKey];
  const included = t(`security.${id}.included`) || [];
  const isEscort = typeKey === 'ESCORT';

  return (
    <div className={`sec-card sec-card--${isEscort ? 'escort' : 'personal'} bg-surface border border-divider rounded-[20px] p-8 flex flex-col gap-6`}>
      <div className="flex flex-col gap-4">
        <div
          className="sec-icon-ring w-[56px] h-[56px] rounded-[14px] flex items-center justify-center shrink-0"
          style={{ background: 'rgba(201,168,108,0.08)', border: `1px solid ${color.border}` }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div>
          <span
            className="inline-block text-[0.68rem] font-bold tracking-[0.14em] uppercase px-[10px] py-[4px] rounded-full mb-3 font-sans"
            style={{ color: color.text, background: `${color.text}18`, border: `1px solid ${color.border}` }}
          >
            {t(`security.${id}.typeLabel`)}
          </span>
          <h3 className="m-0 text-[1.45rem] font-bold text-white tracking-[-0.02em] leading-[1.2] font-sans">
            {t(`security.${id}.name`)}
          </h3>
        </div>
      </div>

      <div className="h-px bg-divider" />
      <p className="m-0 text-[0.9rem] text-white/[0.68] leading-[1.75]">
        {t(`security.${id}.description`)}
      </p>

      {included.length > 0 && (
        <div className="flex flex-col gap-[10px]">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="mt-[2px] w-[18px] h-[18px] rounded-[5px] flex items-center justify-center shrink-0 text-[0.65rem] font-bold"
                style={{ background: 'rgba(201,168,108,0.12)', color: color.text }}
              >
                ✓
              </span>
              <span className="text-[0.85rem] text-white/75 leading-[1.55]">{item}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-[7px] px-[12px] py-[7px] rounded-full text-[0.78rem] font-medium font-sans"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          {`${t(`security.${id}.team`)} ${t('security.labels.team')}`}
        </div>
        <div className="flex items-center gap-[7px] px-[12px] py-[7px] rounded-full text-[0.78rem] font-medium font-sans"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {t(`security.${id}.coverage`)}
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sec-book-btn mt-auto flex items-center justify-center gap-[9px] bg-amber text-dark font-bold text-[0.9rem] py-[13px] rounded-full no-underline font-sans"
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {t('security.labels.book')}
      </a>
    </div>
  );
}

function BodyguardIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
}
function AirportIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2 3.5 6.5l7 4L9 14 6 13l-1 1 3 2 2 3 1-1-1-3 3.5-1.5z"/></svg>;
}
function ChauffeurIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="11" width="22" height="9" rx="2"/><path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/></svg>;
}
function ExecutiveIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;
}
function EventIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>;
}
function EscortIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>;
}
function AlldayIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
