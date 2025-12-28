import React, { useState } from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { BedIcon, BathIcon, UsersIcon, StarIcon } from '../../constants/index';

const Card: React.FC<CardProps> = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % listing.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        {listing.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={listing.title}
            fill
            className={`object-cover transition-opacity duration-300 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {listing.discount && (
          <div className="absolute top-3 left-3 bg-white text-green-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md">
            {listing.discount}% Off
          </div>
        )}
        
        {listing.images.length > 1 && (
            <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                    {listing.images.map((_, index) => (
                        <div key={index} className={`w-1.5 h-1.5 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}></div>
                    ))}
                </div>
            </>
        )}
      </div>

      <div className="py-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-800 text-base leading-tight pr-2">{listing.title}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">{listing.rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1">{listing.location}</p>

        <div className="flex items-center space-x-2 mt-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
            <BedIcon className="w-4 h-4" /> <span>{listing.details.beds}</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
            <BathIcon className="w-4 h-4" /> <span>{listing.details.baths}</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
            <UsersIcon className="w-4 h-4" /> <span>{listing.details.guests}</span>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
            <div className="flex space-x-2">
                {listing.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
          <p className="text-lg font-bold text-gray-900">
            ${listing.price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/n</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
