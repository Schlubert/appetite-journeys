// HomePage.tsx
import React, { useEffect } from 'react';
import { TOURS_DATA } from '../constants';
import TourCard from '../components/TourCard';
import FloatingContactButton from '../components/FloatingContactButton';
import SocialMediaSection from '../components/SocialMediaSection';
import { Users, MapPin, ChefHat, Award } from 'lucide-react';
import { getImagePath } from '../utils/paths';
import BookNowButton from "@/components/BookNowButton";
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('data-page', 'home');
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('chHome.features.smallGroups.title'),
      description: t('chHome.features.smallGroups.description'),
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: t('chHome.features.culinary.title'),
      description: t('chHome.features.culinary.description'),
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t('chHome.features.hiddenGems.title'),
      description: t('chHome.features.hiddenGems.description'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('chHome.features.localKnowledge.title'),
      description: t('chHome.features.localKnowledge.description'),
    },
  ];

  return (
    <>
      <div className="space-y-16">

        {/* Hero Section */}
        <section className="relative h-[52vh] sm:h-[52vh] lg:h-[52vh] mt-1 -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
          <div className="w-full h-full grid grid-cols-3 gap-2">
            {[
              getImagePath("ch/niesen.jpeg"),
              getImagePath("ch/cailler2.jpg"),
              getImagePath("ch/bern1.jpg"),
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Hero image ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4 sm:px-6 lg:px-12">
            <div className="text-center text-white max-w-4xl mx-auto">

              {/* Mobile: Flag above country name */}
              <div className="sm:hidden flex flex-col items-center gap-2 mb-2">
                <img
                  src={getImagePath("ch/swiss_flag.png")}
                  alt="Swiss flag"
                  className="h-8 w-auto drop-shadow-md"
                />
                <span className="text-3xl font-semibold drop-shadow-2xl leading-tight">
                  {t('chHome.hero.country')}
                </span>
              </div>

              {/* Desktop: Flag inline with country name */}
              <div className="hidden sm:flex justify-center -mb-1">
                <div className="relative mb-1">
                  <img
                    src={getImagePath("ch/swiss_flag.png")}
                    alt="Swiss flag"
                    className="h-10 md:h-12 w-auto absolute left-1/2 -translate-x-[calc(200%+2.5rem)] md:-translate-x-[calc(200%+4.5rem)] top-1/2 -translate-y-1/2 drop-shadow-md"
                  />
                  <span className="text-5xl md:text-6xl lg:text-6xl font-semibold drop-shadow-2xl leading-tight">
                    {t('chHome.hero.country')}
                  </span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold drop-shadow-2xl mb-1 sm:mb-1 leading-tight">
                {t('chHome.hero.tagline1')}<br />{t('chHome.hero.tagline2')}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg mb-1 sm:mb-1 lg:mb-1 leading-relaxed">
                {t('chHome.hero.sub')}
              </p>

              <a
                href="#tours"
                className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-2xl transition-all transform hover:scale-105"
              >
                {t('chHome.hero.cta')}
              </a>
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section id="tours" className="scroll-mt-20 relative">
          <div className="text-center mb-3 relative">
            <h2 className="text-5xl font-serif font-bold text-alpine-green mb-2">
              {t('chHome.tours.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('chHome.tours.sub')}
            </p>
            <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-4 sm:mt-0">
              <BookNowButton size="sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TOURS_DATA.filter(t => t.region === 'switzerland').slice(0, 3).map((tour) => (
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
              <h2 className="text-5xl font-serif font-bold text-alpine-green mb-6">
                {t('chHome.different.title')}
              </h2>
              <p className="text-xl text-rock-gray max-w-3xl mx-auto">
                {t('chHome.different.sub')}
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
                <h3 className="text-3xl font-serif font-bold text-alpine-green mb-4">
                  {t('chHome.promise.title')}
                </h3>
                <p className="text-lg text-rock-gray leading-relaxed">
                  {t('chHome.promise.body')}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <FloatingContactButton onlyOnHomepage={true} />
    </>
  );
};

export default HomePage;