import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTopHandler from '@/components/ScrollToTopHandler';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import kz from '@/locales/kz.json';

const messages = { EN: en, RU: ru, KZ: kz };

export const metadata = {
  title: 'Crown Almaty Services — Tours, Car Rent, Security & Apartments',
  description: 'Premium tours in Kazakhstan & Kyrgyzstan, luxury car rental, transfer, security escort and apartment booking. Based in Almaty.',
  keywords: 'tours Kazakhstan, Almaty tours, car rent Almaty, transfer, security escort, apartments Almaty',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://drive.google.com/thumbnail?id=1Ruoprk8P8DLCSYibesti599hx4VpCxR2&sz=w64" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider messages={messages}>
          <ScrollToTopHandler />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </I18nProvider>
      </body>
    </html>
  );
}
