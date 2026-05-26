import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React from "react";
import { TOURS_DATA } from "../constants";
import TourCard from "../components/TourCard";
import { getImagePath } from '../utils/paths';
import BookNowButton from "@/components/BookNowButton";
import { useTranslation } from 'react-i18next';

type Region = 'switzerland' | 'new-zealand' | 'europe';

interface RegionConfig {
  key: Region;
  titleKey: string;
  subKey: string;
  flag: string;
  flagAlt: string;
}

const REGION_CONFIG: RegionConfig[] = [
  {
    key: 'new-zealand',
    titleKey: 'toursPage.newZealand',
    subKey: 'toursPage.newZealandSub',
    flag: getImagePath('nz/nz_flag.png'),
    flagAlt: 'New Zealand flag',
  },
  {
    key: 'switzerland',
    titleKey: 'toursPage.switzerland',
    subKey: 'toursPage.switzerlandSub',
    flag: getImagePath('ch/swiss_flag.png'),
    flagAlt: 'Swiss flag',
  },
  {
    key: 'europe',
    titleKey: 'toursPage.europe',
    subKey: 'toursPage.europeSub',
    flag: getImagePath('europe_flag.png'),
    flagAlt: 'Europe flag',
  },
];

const ToursPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO {...seoConfig.tours} />
      <div className="space-y-16">

        {/* Hero Banner */}
        <section className="relative h-[45vh] -mx-4 sm:-mx-6 lg:-mx-8">
          <img
            src={getImagePath('about-banner.jpg')}
            alt="Scenic Alps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">
                {t('toursPage.title')}
              </h1>
              <p className="text-lg md:text-xl mt-3 drop-shadow max-w-2xl mx-auto font-light">
                {t('toursPage.sub')}
              </p>
            </div>
          </div>
        </section>

        {/* Book Now */}
        <div className="text-center -mt-8">
          <BookNowButton size="md" />
        </div>

        {/* Regional sections */}
        {REGION_CONFIG.map((region) => {
          const tours = TOURS_DATA.filter(t => t.region === region.key);
          if (tours.length === 0) return null;

          return (
            <section key={region.key} className="space-y-6">

              {/* Region header */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                <img
                  src={region.flag}
                  alt={region.flagAlt}
                  className="h-10 w-auto drop-shadow-sm"
                />
                <div>
                  <h2 className="text-3xl font-serif font-bold text-alpine-green">
                    {t(region.titleKey)}
                  </h2>
                  <p className="text-sm text-gray-500 italic mt-0.5">
                    {t(region.subKey)}
                  </p>
                </div>
              </div>

              {/* Tour cards */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {TOURS_DATA.filter(tour => tour.active !== false).map(tour => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>

            </section>
          );
        })}

      </div>
    </>
  );
};

export default ToursPage;