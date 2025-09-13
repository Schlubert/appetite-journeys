import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TOURS_DATA } from '../constants';
import { useGemini } from '../hooks/useGemini';
import LoadingSpinner from '../components/LoadingSpinner';
import ContentDisplay from '../components/ContentDisplay';

const dedicatedPages = ['waterfalls']; 
// 👆 Add IDs here for any tours that have their own .tsx page

const TourDetailPage: React.FC = () => {
  const { tourId } = useParams<{ tourId: string }>();

  // 🚨 If this tour has a dedicated page, redirect there instead
  if (tourId && dedicatedPages.includes(tourId)) {
    return <Navigate to={`/${tourId}`} replace />;
  }

  const tour = TOURS_DATA.find(t => t.id === tourId);

  const tourPrompt = tour ? `
    Generate a compelling and detailed tour itinerary for a small group (max 12 people) in Switzerland.
    The tour is called "${tour.name}".
    The focus is on food, beverage culture, natural scenery, and heritage.
    The tone should be inviting, luxurious, and evocative.
    Please structure the response with a captivating introduction, followed by a sample day-by-day itinerary (e.g., Day 1, Day 2, etc.).
    For each day, describe the key activities, culinary experiences (like cheese tasting, vineyard visits, special dinners), and scenic highlights.
    End with a concluding paragraph about the unique experience guests will have.
  ` : null;

  const { data: tourContent, isLoading, error } = useGemini(tourPrompt);

  if (!tour) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <section className="relative h-[50vh] -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
        <img 
          src={tour.imageUrl}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">{tour.name}</h1>
            <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">{tour.tagline}</p>
          </div>
        </div>
      </section>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-swiss-red text-center">{error}</p>}
        {tourContent && <ContentDisplay content={tourContent} />}
      </div>
    </div>
  );
};

export default TourDetailPage;
