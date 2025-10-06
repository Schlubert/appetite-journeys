import React from "react";
import { getImagePath } from '../utils/paths';

const AboutPage: React.FC = () => {
  return (
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
              Esther’s warmth and hospitality shine through on every journey.
              She has a keen eye for creating meaningful connections with local
              artisans and communities, making each tour feel authentic,
              welcoming, and unforgettable.
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
              With a background in business and a lifelong passion for food and
              travel, Kevin brings both expertise and enthusiasm to every tour.
              He ensures every detail is thoughtfully planned, so guests can
              relax and immerse themselves in the beauty and flavors of
              Switzerland.
            </p>
          </div>


        </div>
      </section>
            {/* Philosophy Section */}
      <section className="bg-snow-white py-16 px-6 lg:px-12">
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
  );
};

export default AboutPage;
