export const carClassColors = {
  COMFORT:  { bg: 'rgba(34,197,94,0.2)',   text: '#4ADE80', border: 'rgba(34,197,94,0.35)' },
  BUSINESS: { bg: 'rgba(56,189,248,0.2)',  text: '#38BDF8', border: 'rgba(56,189,248,0.35)' },
  PREMIUM:  { bg: 'rgba(201,168,108,0.2)', text: '#C9A86C', border: 'rgba(201,168,108,0.35)' },
  LUXURY:   { bg: 'rgba(251,191,36,0.2)',  text: '#FBB724', border: 'rgba(251,191,36,0.35)' },
  MINIVAN:  { bg: 'rgba(167,139,250,0.2)', text: '#A78BFA', border: 'rgba(167,139,250,0.35)' },
};

export const cars = [
  {
    id: 1,
    slug: 'hyundai-sonata',
    classKey: 'COMFORT',
    images: [
      '/assets/cars/sonata/sonata_1.webp',
      '/assets/cars/sonata/sonata_2.webp',
      '/assets/cars/sonata/sonata_3.webp',
    ],
  },
  {
    id: 2,
    slug: 'toyota-camry-75',
    classKey: 'BUSINESS',
    images: [
      '/assets/cars/camry_75/camry_75_1.webp',
      '/assets/cars/camry_75/camry_75_2.webp',
      '/assets/cars/camry_75/camry_75_3.webp',
      '/assets/cars/camry_75/camry_75_4.webp',
      '/assets/cars/camry_75/camry_75_5.webp',
      '/assets/cars/camry_75/camry_75_6.webp',
      '/assets/cars/camry_75/camry_75_7.webp',
      '/assets/cars/camry_75/camry_75_8.webp',
      '/assets/cars/camry_75/camry_75_9.webp',
    ],
  },
  {
    id: 3,
    slug: 'toyota-camry-80',
    classKey: 'PREMIUM',
    images: [
      '/assets/cars/camry_80/camry_80_1.webp',
      '/assets/cars/camry_80/camry_80_2.webp',
      '/assets/cars/camry_80/camry_80_3.webp',
      '/assets/cars/camry_80/camry_80_4.webp',
      '/assets/cars/camry_80/camry_80_5.webp',
      '/assets/cars/camry_80/camry_80_6.webp',
      '/assets/cars/camry_80/camry_80_7.webp',
      '/assets/cars/camry_80/camry_80_8.webp',
      '/assets/cars/camry_80/camry_80_9.webp',
      '/assets/cars/camry_80/camry_80_10.webp',
      '/assets/cars/camry_80/camry_80_11.webp',
      '/assets/cars/camry_80/camry_80_12.webp',
      '/assets/cars/camry_80/camry_80_13.webp',
    ],
  },
  {
    id: 4,
    slug: 'lexus-lx',
    classKey: 'LUXURY',
    images: [
      '/assets/cars/lexus/lexus_lx_1.webp',
      '/assets/cars/lexus/lexus_lx_2.webp',
      '/assets/cars/lexus/lexus_lx_3.webp',
      '/assets/cars/lexus/lexus_lx_4.webp',
      '/assets/cars/lexus/lexus_lx_5.webp',
    ],
  },
  {
    id: 5,
    slug: 'hyundai-staria',
    classKey: 'MINIVAN',
    images: [
      '/assets/cars/staria/staria_1.webp',
      '/assets/cars/staria/staria_2.webp',
      '/assets/cars/staria/staria_3.webp',
      '/assets/cars/staria/staria_4.webp',
    ],
  },
];
