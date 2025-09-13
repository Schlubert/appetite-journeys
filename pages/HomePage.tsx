import React from 'react';
import { TOURS_DATA } from '../constants';
import TourCard from '../components/TourCard';
import { Users, MapPin, ChefHat, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Groups Only",
      description: "Maximum 12 guests ensures personalized attention and authentic experiences"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Culinary Expertise",
      description: "With more than 50 years combined culinary and hospitality experience, we know food and travel.  We have the knowledge and connections to create unforgettable experiences."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hidden Gems",
      description: "Visit places tourists seldom see - from family-run distilleries to traditional artisans practicing centuries-old crafts. Discover the authentic Switzerland."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Local Knowledge",
      description: "Benefit from the knowledge of someone who was born and raised in Switzerland mixed with the insight of an internationaly experienced industry professional."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] -mx-4 sm:-mx-6 lg:-mx-8 -mt-8">
        <img 
          src="/images/banner.png" 
          alt="Scenic view of the Swiss Alps" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">Taste the Alps. See the Beauty.</h1>
            <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Intimate culinary and scenic tours through the heart of Switzerland. Limited to 12 guests for an unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours">
        <h2 className="text-4xl font-serif font-bold text-center text-alpine-green mb-10">Our Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS_DATA.slice(0, 3).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-alpine-green mb-4">What Makes Us Different</h2>
            <p className="text-xl text-rock-gray max-w-3xl mx-auto">
              We're not just another tour company. Our deep Swiss roots and passion for authentic experiences create journeys that connect you with the real Switzerland.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-white hover:shadow-md transition-all">
                <div className="text-alpine-green mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-rock-gray mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-alpine-green mb-4">The Gilbert's Tours Promise</h3>
              <p className="text-lg text-rock-gray leading-relaxed">
                Every tour is crafted with the eyes of a local, and the expertise of more than 30 years in the international culinary industry. We don't just show you Switzerland - we help you taste, feel, and understand it. From the distiller who becomes your friend to the chocolatier who shares family recipes, these are connections that last long after you return home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;