export const transferTypeColors = {
  ECONOMY:  { bg: 'rgba(34,197,94,0.2)',   text: '#4ADE80', border: 'rgba(34,197,94,0.35)' },
  BUSINESS: { bg: 'rgba(56,189,248,0.2)',  text: '#38BDF8', border: 'rgba(56,189,248,0.35)' },
  MINIVAN:  { bg: 'rgba(167,139,250,0.2)', text: '#A78BFA', border: 'rgba(167,139,250,0.35)' },
  VIP:      { bg: 'rgba(251,191,36,0.2)',  text: '#FBB724', border: 'rgba(251,191,36,0.35)' },
};

export const transfers = [
  {
    id: 1,
    slug: 'economy-airport-transfer',
    typeKey: 'ECONOMY',
    images: [
      '/assets/cars/sonata/sonata_1.webp',
      '/assets/cars/sonata/sonata_2.webp',
      '/assets/cars/sonata/sonata_3.webp',
    ],
  },
  {
    id: 2,
    slug: 'business-transfer',
    typeKey: 'BUSINESS',
    images: [
      '/assets/cars/camry_75/camry_75_1.webp',
      '/assets/cars/camry_75/camry_75_2.webp',
      '/assets/cars/camry_75/camry_75_3.webp',
      '/assets/cars/camry_75/camry_75_4.webp',
      '/assets/cars/camry_75/camry_75_5.webp',
    ],
  },
  {
    id: 3,
    slug: 'group-transfer',
    typeKey: 'MINIVAN',
    images: [
      '/assets/cars/staria/staria_1.webp',
      '/assets/cars/staria/staria_2.webp',
      '/assets/cars/staria/staria_3.webp',
      '/assets/cars/staria/staria_4.webp',
    ],
  },
  {
    id: 4,
    slug: 'vip-transfer',
    typeKey: 'VIP',
    images: [
      '/assets/cars/lexus/lexus_lx_1.webp',
      '/assets/cars/lexus/lexus_lx_2.webp',
      '/assets/cars/lexus/lexus_lx_3.webp',
      '/assets/cars/lexus/lexus_lx_4.webp',
      '/assets/cars/lexus/lexus_lx_5.webp',
    ],
  },
];
