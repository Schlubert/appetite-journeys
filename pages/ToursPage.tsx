import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React from "react";
import { TOURS_DATA } from "../constants";
import TourCard from "../components/TourCard";
import { getImagePath } from '../utils/paths'; 
import BookNowButton from "@/components/BookNowButton";

const ToursPage: React.FC = () => {
  return (
    <>
    <SEO {...seoConfig.tours} />
 <div className="space-y-16">
            {/* Hero Banner */}
      <section className="relative h-[45vh] -mx-4 sm:-mx-6 lg:-mx-8">
        <img
          src={getImagePath('about-banner.jpg')} 
          alt="Scenic Swiss Alps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">
             Our Tours
            </h1>
          </div>
        </div>
       
      </section>
      <div className="py-2 max-w-7xl mx-auto text-center mb-2">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          From alpine peaks to charming villages, food trails to festive
          adventures — explore our handcrafted tours designed to showcase the
          best of Switzerland.
        <div className="sm:absolute sm:right-0 sm:top-3/4 sm:-translate-y-0 mt-0 sm:mt-0">
      <BookNowButton size="md" />
    </div></p>
      </div>
      

      {/* Grid of tours */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TOURS_DATA.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ToursPage;
