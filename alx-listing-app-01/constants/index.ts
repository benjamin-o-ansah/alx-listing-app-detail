import React from 'react';
import { Category, Listing } from '../interfaces';

// SVG Icons as React Components - Replaced with Image Placeholders
export const BedIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <img src="/assets/bed-icon.svg" alt="Bed Icon" className={className} />
);
export const BathIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <img src="/assets/bath-icon.svg" alt="Bath Icon" className={className} />
);
export const UsersIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <img src="/assets/users-icon.svg" alt="Users Icon" className={className} />
);
export const StarIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <img src="/assets/star-icon.svg" alt="Star Icon" className={className} />
);

// Category Icons
const RoomsIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const MansionIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5h-4z" /></svg>;
const CountrysideIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>;
const VillaIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const TropicalIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.721 16.542A9.955 9.955 0 0112 15c1.423 0 2.774.305 4.022.858m-7.792 3.124A12.023 12.023 0 0112 18c1.61 0 3.123.328 4.5.908m-9.155 2.152A14.983 14.983 0 0112 20c1.748 0 3.393.352 4.88.954" /></svg>;
const NewIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const PoolIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l-3 9M12 16V6.5" /></svg>;
const BeachIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5l17-1 2 19-17 1-2-19zM8 9v10M16 9v10M11 9v10M13 9v10" /></svg>;
const IslandIcon = ({className = 'w-6 h-6'}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;


export const categories: Category[] = [
  { name: 'Rooms', icon: RoomsIcon },
  { name: 'Mansion', icon: MansionIcon },
  { name: 'Countryside', icon: CountrysideIcon },
  { name: 'Villa', icon: VillaIcon },
  { name: 'Tropical', icon: TropicalIcon },
  { name: 'New', icon: NewIcon },
  { name: 'Amazing pool', icon: PoolIcon },
  { name: 'Beach house', icon: BeachIcon },
  { name: 'Island', icon: IslandIcon },
];

const placeholderImages = ['/assets/placeholder-1.jpg', '/assets/placeholder-2.jpg', '/assets/placeholder-3.jpg'];

export const listings: Listing[] = [
    { id: 1, title: 'Villa Arrecife Beach House', location: 'Sidemen, Bali, Indonesia', images: placeholderImages, rating: 4.76, price: 2450, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 4, baths: 2, guests: 4 }, discount: 60, },
    { id: 2, title: 'Entire cabin', location: 'Nova Friburgo, Brazil', images: placeholderImages.slice(0,2), rating: 4.76, price: 62, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 1, baths: 1, guests: 3 }, },
    { id: 3, title: 'Earthen home', location: 'Santa Marta, Colombia', images: placeholderImages, rating: 4.76, price: 386, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 4, baths: 2, guests: 6 }, },
    { id: 4, title: 'Private room', location: 'Moeda, Brazil', images: placeholderImages.slice(0,2), rating: 4.76, price: 134, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 1, baths: 1, guests: 2 }, },
    { id: 5, title: 'Gokce Gemile Estate', location: 'Kayaköy, Turkey', images: placeholderImages.slice(0,2), rating: 4.76, price: 980, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 5, baths: 5, guests: 10 }, },
    { id: 6, title: 'Luxury 1000 sqm Villa...', location: 'Marrakech, Morocco', images: placeholderImages, rating: 4.76, price: 1430, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 6, baths: 6, guests: 12 }, },
    { id: 7, title: 'Palais Hassoun Marrakech', location: 'Marrakech, Morocco', images: placeholderImages.slice(0,2), rating: 4.76, price: 3450, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 13, baths: 13, guests: 26 }, },
    { id: 8, title: 'Villa Lamp', location: 'Benahavis, Spain', images: placeholderImages, rating: 4.76, price: 2041, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 7, baths: 7, guests: 12 }, },
    { id: 9, title: "Villa l'Oui d'Or", location: 'Marrakech, Morocco', images: placeholderImages.slice(0,2), rating: 4.76, price: 1009, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 8, baths: 7, guests: 14 }, },
    { id: 10, title: 'Designer villa, pool not ...', location: 'Marrakech, Morocco', images: placeholderImages, rating: 4.76, price: 1289, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 6, baths: 6, guests: 12 }, },
    { id: 11, title: 'Royal Zephyr - Marrakech', location: 'Marrakesh, Morocco', images: placeholderImages.slice(0,2), rating: 4.76, price: 1692, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 6, baths: 7, guests: 12 }, },
    { id: 12, title: 'Riad Mayo & Bungalows', location: 'Sidi Abdallah Ghiat, Morocco', images: placeholderImages, rating: 4.76, price: 865, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 21, baths: 18, guests: 16 }, },
    { id: 13, title: 'Casa de Carolina', location: 'Playas de Vera, Spain', images: placeholderImages.slice(0,2), rating: 4.76, price: 215, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 1, baths: 1, guests: 4 }, },
    { id: 14, title: 'Happy Valley Villa, Tuni...', location: 'Qaroun, Egypt', images: placeholderImages, rating: 4.76, price: 100, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 7, baths: 3, guests: 8 }, },
    { id: 15, title: 'Almyros Residence', location: 'Lasithi, Greece', images: placeholderImages.slice(0,2), rating: 4.76, price: 747, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 6, baths: 4, guests: 10 }, },
    { id: 16, title: 'Villa White Stone mode...', location: 'Marrakech, Morocco', images: placeholderImages, rating: 4.76, price: 1798, tags: ['Top Villa', 'Self Checkin', 'Free Reschedule'], details: { beds: 7, baths: 6, guests: 12 }, },
];