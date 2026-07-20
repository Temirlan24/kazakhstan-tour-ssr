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
      '/assets/cars/sonata/sonata_1.jpg',
      '/assets/cars/sonata/sonata_2.jpg',
      '/assets/cars/sonata/sonata_3.jpg',
    ],
  },
  {
    id: 2,
    slug: 'toyota-camry-75',
    classKey: 'BUSINESS',
    images: [
      '/assets/cars/camry_75/camry_75_1.jpg',
      '/assets/cars/camry_75/camry_75_2.jpg',
      '/assets/cars/camry_75/camry_75_3.jpg',
      '/assets/cars/camry_75/camry_75_4.jpg',
      '/assets/cars/camry_75/camry_75_5.jpg',
      '/assets/cars/camry_75/camry_75_6.jpg',
      '/assets/cars/camry_75/camry_75_7.jpg',
      '/assets/cars/camry_75/camry_75_8.jpg',
      '/assets/cars/camry_75/camry_75_9.jpg',
    ],
  },
  {
    id: 3,
    slug: 'toyota-camry-80',
    classKey: 'PREMIUM',
    images: [
      '/assets/cars/camry_80/camry_80_1.jpg',
      '/assets/cars/camry_80/camry_80_2.jpg',
      '/assets/cars/camry_80/camry_80_3.jpg',
      '/assets/cars/camry_80/camry_80_4.jpg',
      '/assets/cars/camry_80/camry_80_5.jpg',
      '/assets/cars/camry_80/camry_80_6.jpg',
      '/assets/cars/camry_80/camry_80_7.jpg',
      '/assets/cars/camry_80/camry_80_8.jpg',
      '/assets/cars/camry_80/camry_80_9.jpg',
      '/assets/cars/camry_80/camry_80_10.jpg',
      '/assets/cars/camry_80/camry_80_11.jpg',
      '/assets/cars/camry_80/camry_80_12.jpg',
      '/assets/cars/camry_80/camry_80_13.jpg',
    ],
  },
  {
    id: 4,
    slug: 'lexus-lx',
    classKey: 'LUXURY',
    images: [
      '/assets/cars/lexus/lexus_lx_1.jpg',
      '/assets/cars/lexus/lexus_lx_2.jpg',
      '/assets/cars/lexus/lexus_lx_3.jpg',
      '/assets/cars/lexus/lexus_lx_4.jpg',
      '/assets/cars/lexus/lexus_lx_5.jpg',
    ],
  },
  {
    id: 5,
    slug: 'hyundai-staria',
    classKey: 'MINIVAN',
    images: [
      '/assets/cars/staria/staria_1.jpg',
      '/assets/cars/staria/staria_2.jpg',
      '/assets/cars/staria/staria_3.jpg',
      '/assets/cars/staria/staria_4.jpg',
    ],
  },
];
