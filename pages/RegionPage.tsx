// pages/RegionPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TOURS_DATA } from '@/constants';
import TourCard from '@/components/TourCard';
import TravelPartner from '@/components/TravelPartner';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { getImagePath } from '@/utils/paths';

type RegionKey = 'switzerland' | 'new-zealand' | 'europe' | 'france' | 'germany';

interface RegionConfig {
  id: RegionKey;
  countryNameKey: string;
  tagline1Key: string;
  tagline2Key: string;
  descriptionKey: string;
  heroImages: string[];
  flagImage: string;
  seoConfig: keyof typeof seoConfig;
}

// Region-specific configuration
const REGION_CONFIGS: Record<RegionKey, RegionConfig> = {
  switzerland: {
    id: 'switzerland',
    countryNameKey: 'regions.switzerland.countryName',
    tagline1Key: 'regions.switzerland.tagline1',
    tagline2Key: 'regions.switzerland.tagline2',
    descriptionKey: 'regions.switzerland.description',
    heroImages: [
      getImagePath('ch/ragusa.jpg'),
      getImagePath('ch/schaffhausen.jpg'),
      getImagePath('ch/appenzell.jpeg'),
    ],
    flagImage: getImagePath('ch/swiss_flag.png'),
    seoConfig: 'cheeseChocolateRiviera',
  },
  europe: {
    id: 'europe',
    countryNameKey: 'regions.europe.countryName',
    tagline1Key: 'regions.europe.tagline1',
    tagline2Key: 'regions.europe.tagline2',
    descriptionKey: 'regions.europe.description',
    heroImages: [
      getImagePath('black_forest_gat.jpg'),
      getImagePath('linzer.jpg'),
      getImagePath('vienna1.jpg'),
    ],
    flagImage: getImagePath('europe_flag.png'),
    seoConfig: 'cake',
  },
  'new-zealand': {
    id: 'new-zealand',
    countryNameKey: 'nzHome.hero.country',
    tagline1Key: 'nzHome.hero.tagline1',
    tagline2Key: 'nzHome.hero.tagline2',
    descriptionKey: 'nzHome.hero.sub',
    heroImages: [
      getImagePath('nz/nz-hero.jpg'),
      getImagePath('nz/station.jpg'),
      getImagePath('nz/queenstown.jpg'),
    ],
    flagImage: getImagePath('nz/nz_flag.png'),
    seoConfig: 'southernDelights',
  },
  france: {
    id: 'france',
    countryNameKey: 'regions.france.countryName',
    tagline1Key: 'regions.france.tagline1',
    tagline2Key: 'regions.france.tagline2',
    descriptionKey: 'regions.france.description',
    heroImages: [getImagePath('france-hero.jpg')],
    flagImage: getImagePath('france_flag.png'),
    seoConfig: 'southernDelights',
  },
  germany: {
    id: 'germany',
    countryNameKey: 'regions.germany.countryName',
    tagline1Key: 'regions.germany.tagline1',
    tagline2Key: 'regions.germany.tagline2',
    descriptionKey: 'regions.germany.description',
    heroImages: [getImagePath('germany-hero.jpg')],
    flagImage: getImagePath('germany_flag.png'),
    seoConfig: 'southernDelights',
  },
};

const RegionPage: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const { t, i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language)
    ? i18n.language
    : 'en') as 'en' | 'fr' | 'de';

  // Normalize region param and validate
  const normalizedRegion = region?.toLowerCase() as RegionKey;
  const regionConfig = REGION_CONFIGS[normalizedRegion];

  if (!regionConfig) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-alpine-green mb-4">
          {t('regions.notFound')}
        </h1>
        <p className="text-slate-600">
          {t('regions.regionDoesNotExist')}
        </p>
      </div>
    );
  }

  // Filter tours by region
  const regionTours = TOURS_DATA.filter(
    tour => tour.region === normalizedRegion
  );

  return (
    <>
      {/* SEO */}
      <SEO {...seoConfig[regionConfig.seoConfig]} />

      {/* Hero Section with Flag and Multi-line Title */}
      <section className="relative h-[52vh] sm:h-[52vh] lg:h-[52vh] mt-1 -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
        <div className="w-full h-full">
          <img
            src={regionConfig.heroImages[0]}
            alt={`${normalizedRegion} hero`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay text box */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4 sm:px-6 lg:px-12">
          <div className="text-center text-white max-w-4xl mx-auto">

            {/* Mobile: Flag above country name */}
            <div className="sm:hidden flex flex-col items-center gap-2 mb-2">
              <img
                src={regionConfig.flagImage}
                alt={`${normalizedRegion} flag`}
                className="h-8 w-auto drop-shadow-md"
              />
              <span className="text-3xl font-semibold drop-shadow-2xl leading-tight">
                {t(regionConfig.countryNameKey)}
              </span>
            </div>

            {/* Desktop: Country name above */}
            <div className="hidden sm:flex justify-center -mb-1">
              <span className="inline-flex items-center justify-center gap-3 text-5xl md:text-6xl font-semibold drop-shadow-2xl leading-tight">
                <img
                  src={regionConfig.flagImage}
                  alt={`${normalizedRegion} flag`}
                  className="h-10 md:h-12 w-auto drop-shadow-md"
                />
                {t(regionConfig.countryNameKey)}
              </span>
            </div>

            {/* Main headline with flag and taglines */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold drop-shadow-2xl mb-1 leading-tight">
              <span className="inline-flex items-center justify-center gap-3">
              {t(regionConfig.tagline1Key)}
              </span>
              <br />
              {t(regionConfig.tagline2Key)}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg mb-6 leading-relaxed">
              {t(regionConfig.descriptionKey)}
            </p>

            {/* CTA Button */}
            <a 
              href="#tours"
              className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-2xl transition-all transform hover:scale-105"
            >
              {t('regions.exploreTours')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="space-y-12 p-6">
        {/* Tours Grid */}
        {regionTours.length > 0 ? (
          <div id="tours" className="scroll-mt-20">
            <div className="mb-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-4">
                {t('regions.availableTours')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600">
              {t('regions.noToursAvailable')}
            </p>
          </div>
        )}

        {/* Travel Partner Section */}
        <TravelPartner />
      </div>
    </>
  );
};

export default RegionPage;