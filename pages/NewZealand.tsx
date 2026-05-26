// New Zealand HomePage.tsx
import React, { useEffect } from 'react';
import { TOURS_DATA } from '../constants';
import TourCard from '../components/TourCard';
import FloatingContactButton from '../components/FloatingContactButton';
import SocialMediaSection from '../components/SocialMediaSection';
import { Users, MapPin, ChefHat, Award } from 'lucide-react';
import { getImagePath } from '../utils/paths';
import BookNowButton from "@/components/BookNowButton";
import { useTranslation } from 'react-i18next';

const NewZealand: React.FC = () => {
  // Signal to navbar that we're on homepage
  useEffect(() => {
    document.body.setAttribute('data-page', 'home');
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, []);
const { t, i18n } = useTranslation();
const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as 'en' | 'fr' | 'de';
  const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: t('nzHome.features.smallGroups.title'),
    description: t('nzHome.features.smallGroups.description'),
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: t('nzHome.features.culinary.title'),
    description: t('nzHome.features.culinary.description'),
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: t('nzHome.features.hiddenGems.title'),
    description: t('nzHome.features.hiddenGems.description'),
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: t('nzHome.features.localKnowledge.title'),
    description: t('nzHome.features.localKnowledge.description'),
  },
];

  return (
    <>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative h-[52vh] sm:h-[52vh] lg:h-[52vh] mt-1 -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
          <div className="w-full h-full grid grid-cols-1 gap-2">
            {[
              getImagePath("nz/nz-hero.jpg"),
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Hero image ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Overlay text box */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4 sm:px-6 lg:px-12">
            <div className="text-center text-white max-w-4xl mx-auto">

              {/* Mobile: Flag above Switzerland */}
              <div className="sm:hidden flex flex-col items-center gap-2 mb-2">
                <img
                  src={getImagePath("nz/nz_flag.png")}
                  alt="New Zealand flag"
                  className="h-8 w-auto drop-shadow-md"
                />
                <span className="text-3xl font-semibold drop-shadow-2xl leading-tight">
                  {t('nzHome.hero.country')}
                </span>
              </div>

              {/* Desktop: Flag to the left of Country name */}
              {/* Desktop: Flag inline with headline */}
<div className="hidden sm:flex justify-center -mb-1">
  <span className="inline-flex items-center justify-center gap-3 text-5xl md:text-6xl font-semibold drop-shadow-2xl leading-tight">
    <img
      src={getImagePath("nz/nz_flag.png")}
      alt="New Zealand flag"
      className="h-10 md:h-12 w-auto drop-shadow-md"
    />
    {t('nzHome.hero.country')}
  </span>
</div>

<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold drop-shadow-2xl mb-1 leading-tight">
  <span className="inline-flex items-center justify-center gap-3">
   {t('nzHome.hero.tagline1')}
  </span>
  <br />{t('nzHome.hero.tagline2')}
</h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg mb-1 sm:mb-1 lg:mb-1 leading-relaxed">
                {t('nzHome.hero.sub')}
              </p>

              <a 
                href="#tours"
                className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-2xl transition-all transform hover:scale-105"
              >
                {t('nzHome.hero.cta')}
              </a>
            </div>
          </div>
        </section>

        {/* Tours Section */}
<section id="tours" className="scroll-mt-20 relative">
  <div className="text-center mb-3 relative">
    {/* Title */}
    <h2 className="text-5xl font-serif font-bold text-alpine-green mb-2">
      {t('nzHome.tours.title')}
    </h2>

    {/* Subtitle */}
    <p className="text-lg text-gray-600 mb-6">
      {t('nzHome.tours.sub')}
    </p>

    {/* Book Now button (floats right on desktop, below on mobile) */}
    <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-4 sm:mt-0">
      <BookNowButton size="sm" />
    </div>
  </div>

  {/* Tour cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {TOURS_DATA.filter(t => t.region === 'new-zealand'&& t.active !== false).map(tour => (
      <TourCard key={tour.id} tour={tour} />
    ))}
  </div>
</section>


        {/* Social Media Section */}
        <SocialMediaSection />

        {/* What Makes Us Different Section */}
        <section className="py-7 bg-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-serif font-bold text-alpine-green mb-6">{t('nzHome.different.title')}</h2>
              <p className="text-xl text-rock-gray max-w-3xl mx-auto">
                {t('nzHome.different.sub')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-alpine-green mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rock-gray mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white rounded-xl p-10 max-w-4xl mx-auto shadow-lg">
                <h3 className="text-3xl font-serif font-bold text-alpine-green mb-4">{t('nzHome.promise.title')}</h3>
                <p className="text-lg text-rock-gray leading-relaxed">
                  {t('nzHome.promise.body')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Contact Button - Only on Homepage */}
      <FloatingContactButton onlyOnHomepage={true} />
    </>
  );
};

export default NewZealand;