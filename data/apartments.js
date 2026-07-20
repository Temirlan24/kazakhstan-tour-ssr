export const apartmentDistrictColors = {
  CENTER: { bg: 'rgba(201,168,108,0.2)', text: '#C9A86C', border: 'rgba(201,168,108,0.35)' },
  BOSTAN: { bg: 'rgba(56,189,248,0.2)',  text: '#38BDF8', border: 'rgba(56,189,248,0.35)' },
  MEDEU:  { bg: 'rgba(34,197,94,0.2)',   text: '#4ADE80', border: 'rgba(34,197,94,0.35)' },
  UPPER:  { bg: 'rgba(167,139,250,0.2)', text: '#A78BFA', border: 'rgba(167,139,250,0.35)' },
};

export const apartments = [
  { id: 1, slug: 'studio-almaty-center',           districtKey: 'CENTER', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' },
  { id: 2, slug: '1br-apartment-bostandyk',        districtKey: 'BOSTAN', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
  { id: 3, slug: '2br-apartment-medeu',            districtKey: 'MEDEU',  image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80' },
  { id: 4, slug: '3br-penthouse-almaty-center',    districtKey: 'CENTER', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: 5, slug: '1br-apartment-near-shymbulak',   districtKey: 'UPPER',  image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80' },
];
