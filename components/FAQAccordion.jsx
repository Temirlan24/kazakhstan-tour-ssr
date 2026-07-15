'use client';

import { useState } from 'react';

const STYLES = `
  .faq-item {
    transition: border-color 0.22s ease, background 0.22s ease;
  }
  .faq-item:hover {
    border-color: rgba(201,168,108,0.28) !important;
  }
  .faq-question {
    transition: color 0.18s ease;
  }
  .faq-chevron {
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
  }
  .faq-chevron--open {
    transform: rotate(180deg);
  }
  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.32s cubic-bezier(0.22,1,0.36,1);
  }
  .faq-answer--open {
    grid-template-rows: 1fr;
  }
  .faq-answer-inner {
    overflow: hidden;
  }
`;

export default function FAQAccordion({ label, title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section style={{ background: 'var(--surface)', paddingTop: '72px', paddingBottom: '88px' }}>
      <style>{STYLES}</style>
      <div className="max-w-[880px] mx-auto px-6">
        <div style={{ marginBottom: '40px' }}>
          <p
            className="m-0 mb-3 font-bold uppercase"
            style={{ color: 'var(--amber)', fontSize: '0.73rem', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)' }}
          >
            {label}
          </p>
          <h2
            className="m-0 font-sans font-bold text-white"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.025em', lineHeight: 1.15 }}
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item"
                style={{
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 bg-transparent border-0 cursor-pointer text-left"
                  style={{ padding: '18px 22px' }}
                >
                  <span
                    className="faq-question font-sans font-semibold"
                    style={{ color: open ? '#fff' : 'rgba(255,255,255,0.86)', fontSize: '0.95rem', lineHeight: 1.4 }}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`faq-chevron ${open ? 'faq-chevron--open' : ''}`}
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`faq-answer ${open ? 'faq-answer--open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p
                      className="m-0"
                      style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7, padding: '0 22px 20px' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
