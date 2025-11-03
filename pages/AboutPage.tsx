import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React from "react";
import { getImagePath } from '../utils/paths';

const AboutPage: React.FC = () => {
  return (
    <>
    <SEO {...seoConfig.about} />
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
              Meet Your Hosts
            </h1>
          </div>
        </div>
      </section>
<section className="text-gray-700 text-lg leading-relaxed mt-4 mx-8 lg:mx-16">
             <p>Between them, Esther and Kevin ensure that every detail is thoughtfully planned, so guests can relax and immerse themselves in the beauty and flavours of Switzerland.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Both bring something special to each tour. Whether it is the insights of someone born and raised in Switzerland, or the knowledge from a lifetime in food and hospitality, their unique understanding of the food and culture of this area means that each tour is an enjoyable, rewarding, and tasty exploration.</p>
            </section>
      {/* Profiles Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                    {/* Esther */}
          <div>
            <img
              src={getImagePath('esther.jpg')} // ✅ circular profile image
              alt="Esther Gilbert"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6"
            />
            <h2 className="text-2xl font-serif font-bold text-alpine-green mb-2">
              Esther Gilbert
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Born and raised in Switzerland Esther brings a local's perspective to every tour. Her deep knowledge of Swiss culture, history, and cuisine ensures guests experience the very best of the country and culture.</p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              With the understanding and insights that come from a lifetime in hospitality, Esther is the day to day guide for all activities. Her keen eye for creating meaningful connections with local artisans and communities, along with her fluency in the main 4 languages of Switzerland, help to make each tour welcoming, and unforgettable.
            </p>
          </div>
          {/* Kevin */}
          <div>
            <img
              src={getImagePath('kevin.jpg')} // ✅ circular profile image
              alt="Kevin Gilbert"
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6"
            />
            <h2 className="text-2xl font-serif font-bold text-alpine-green mb-2">
              Kevin Gilbert
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kevin has spent his life in food, beverage, and hospitality. Be it as a baker, chef, pastry chef, managing hotels, wine bars, restaurants, it is fair to say that he has extensive experience.</p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
              His experience in the food and beverage industry, combined with his passion for travel, makes him the perfect partner to Esther in creating unforgettable culinary journeys through Switzerland.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">  Having judged at some the worlds most prestigious culinary competitions, and taught apprentices, bakers, and chefs around the world, Kevin brings a wealth of knowledge and expertise to every tour and is the perfect person to help translate, explain and teach the culinary side of your journey.</p>
                      </div>
      </div>
      </section>
            {/* Philosophy Section */}
      <section className="bg-snow-white py-6 px-6 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-alpine-green mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Appetite Journeys, we believe that travel is about more than just
            visiting beautiful places — it’s about creating experiences that
            leave lasting memories. Our tours are carefully designed to balance
            comfort with adventure, tradition with discovery, and fun with
            meaning. We want every guest to feel like they’re traveling with
            friends, not just guides.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From savoring the finest Swiss cheese and chocolate to uncovering
            hidden alpine villages, we strive to share the Switzerland we love
            — authentic, welcoming, and unforgettable.
          </p>
        </div>
        
      </section>
    </div>
    </>
  );
};

export default AboutPage;
