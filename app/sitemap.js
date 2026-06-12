import { SITE_URL } from '@/lib/config';

export default function sitemap() {
  const now = new Date();

  const routes = [
    { url: SITE_URL,                            priority: 1.0, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/kazakhstan`,            priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/kyrgyzstan`,            priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/car-rent`,              priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/car-rent-with-driver`,  priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/transfer`,              priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/apartments`,            priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/security`,              priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map(route => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
