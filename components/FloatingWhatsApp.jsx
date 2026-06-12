'use client';

import { WHATSAPP_URL } from '@/lib/config';

const STYLES = `
  @keyframes wa-ping {
    0%   { transform: scale(1);    opacity: 0.65; }
    80%  { transform: scale(1.75); opacity: 0; }
    100% { transform: scale(1.75); opacity: 0; }
  }
  .wa-pulse { animation: wa-ping 2.4s ease-out infinite; }
  .wa-btn {
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.4);
  }
  .wa-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.5);
  }
  .wa-btn:hover ~ .wa-pulse { opacity: 0 !important; animation-play-state: paused; }
`;

export default function FloatingWhatsApp() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="fixed bottom-7 right-7 z-[900] flex items-center gap-[10px] group">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
          bg-dark/[0.92] backdrop-blur-[10px] border border-[#25D366]/25 text-white
          text-[0.82rem] font-semibold py-2 px-[14px] rounded-[10px] whitespace-nowrap font-sans
          shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          Write to us on WhatsApp
        </div>

        <div className="relative w-14 h-14">
          <div className="wa-pulse absolute inset-0 rounded-full bg-[#25D366] pointer-events-none group-hover:opacity-0" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="wa-btn absolute inset-0 z-[1] rounded-full bg-[#25D366] flex items-center justify-center no-underline"
          >
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
