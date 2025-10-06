import React from 'react';
import { Link } from 'react-router-dom';
import { Tour } from '../constants';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={tour.heroImage} 
        alt={tour.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-alpine-green mb-3">
          {tour.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          {tour.summary.map((line, index) => (
            <p 
              key={index} 
              className={line.className || "text-gray-700"}
            >
              {line.text}
            </p>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
         
          {tour.price && tour.price.length > 0 && (
            <span className="font-semibold">{tour.price[0]}</span>
          )}
        </div>

        <Link 
          to={tour.route}
          className="block w-full text-center bg-alpine-green text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;