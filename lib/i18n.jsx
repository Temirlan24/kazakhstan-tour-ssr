'use client';

import { createContext, useContext, useState } from 'react';

const I18nContext = createContext(null);

export function I18nProvider({ children, messages }) {
  const [lang, setLang] = useState('EN');
  const locale = messages[lang];

  function t(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], locale) ?? key;
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t, locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
