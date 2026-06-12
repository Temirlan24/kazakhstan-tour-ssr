export const transferTypeColors = {
  ECONOMY:  { bg: 'rgba(34,197,94,0.2)',   text: '#4ADE80', border: 'rgba(34,197,94,0.35)' },
  BUSINESS: { bg: 'rgba(56,189,248,0.2)',  text: '#38BDF8', border: 'rgba(56,189,248,0.35)' },
  MINIVAN:  { bg: 'rgba(167,139,250,0.2)', text: '#A78BFA', border: 'rgba(167,139,250,0.35)' },
  VIP:      { bg: 'rgba(251,191,36,0.2)',  text: '#FBB724', border: 'rgba(251,191,36,0.35)' },
};

export const transfers = [
  {
    id: 1,
    typeKey: 'ECONOMY',
    images: [
      '/assets/cars/sonata/sonata_1.jpg',
      '/assets/cars/sonata/sonata_2.jpg',
      '/assets/cars/sonata/sonata_3.jpg',
    ],
  },
  {
    id: 2,
    typeKey: 'BUSINESS',
    images: [
      '/assets/cars/camry_75/camry_75_1.jpg',
      '/assets/cars/camry_75/camry_75_2.jpg',
      '/assets/cars/camry_75/camry_75_3.jpg',
      '/assets/cars/camry_75/camry_75_4.jpg',
      '/assets/cars/camry_75/camry_75_5.jpg',
    ],
  },
  {
    id: 3,
    typeKey: 'MINIVAN',
    images: [
      '/assets/cars/staria/staria_1.jpg',
      '/assets/cars/staria/staria_2.jpg',
      '/assets/cars/staria/staria_3.jpg',
      '/assets/cars/staria/staria_4.jpg',
    ],
  },
  {
    id: 4,
    typeKey: 'VIP',
    images: [
      '/assets/cars/lexus/lexus_lx_1.jpg',
      '/assets/cars/lexus/lexus_lx_2.jpg',
      '/assets/cars/lexus/lexus_lx_3.jpg',
      '/assets/cars/lexus/lexus_lx_4.jpg',
      '/assets/cars/lexus/lexus_lx_5.jpg',
    ],
  },
];
