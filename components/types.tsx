// Fix: Import React to resolve the "Cannot find namespace 'React'" error.
import React from 'react';

export interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  images: string[];
  rating: number;
  price: number;
  tags: string[];
  details: {
    beds: number;
    baths: number;
    guests: number;
  };
  discount?: number;
}