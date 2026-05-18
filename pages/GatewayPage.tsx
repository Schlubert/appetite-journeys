// GatewayPage.tsx
//
// Gateway landing page for Appetite Journeys.
// Visitors arrive here, choose their language (auto-detected from browser),
// then select a destination region. Europe expands to a sub-region picker.

// DEPENDENCIES
// ────────────
// - react-router-dom
// - lucide-react   
// - tailwind + existing index.css

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Globe } from 'lucide-react';
import { getImagePath } from '../utils/paths';
import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';

// ─── Supported languages ──────────────────────────────────────────────────────
type Lang = 'en' | 'fr' | 'de';

// ─── Route mapupdate paths to match your routing structure ────────────────
const ROUTES: Record<string, (lang: Lang) => string> = {
  'new-zealand': (_lang) => `/new-zealand`,
  france:        (_lang) => `/tours`,
  germany:       (_lang) => `/tours`,
  switzerland:   (_lang) => `/tours`,
  europe:        (_lang) => `/tours`,
};

// ─── All UI copy in EN / FR / DE ─────────────────────────────────────────────
const COPY: Record<Lang, {
  tagline: string;
  heroTitle: string;
  heroSub: string;
  chooseDestination: string;
  languageNote: string;
  europeTitle: string;
  europeBack: string;
  nzGuideBadge: string;
  destinations: Record<string, { label: string; sub: string; image: string }>;
  europeRegions: Record<string, { label: string; sub: string; image: string }>;
}> = {
  en: {
    tagline:          'Food & Wine Travel Specialists',
    heroTitle:        'Where Would You Like to Travel?',
    heroSub:          'Intimate culinary journeyscrafted for travellers with taste.',
    chooseDestination:'Choose your destination',
    languageNote:     'Guided throughout in English.',
    europeTitle:      'Choose Your European Destination',
    europeBack:       'Back',
    nzGuideBadge:     'French & German-speaking guides available',
    destinations: {
      'new-zealand': {
        label: 'New Zealand',
        sub:   'Marlborough · Central Otago · Hawke\'s Bay',
        image: getImagePath('nz/nz-hero.jpg'),
      },
      europe: {
        label: 'Europe',
        sub:   'Switzerland · Multi-country',
        image: getImagePath('ch/bern1.jpg'),
      },
    },
    europeRegions: {
      switzerland: {
        label: 'Switzerland',
        sub:   'Valais · Graubünden · Lake Geneva',
        image: getImagePath('about-banner.jpg'), // reuse existing image
      },
      europe: {
        label: 'Multi-country',
        sub:   'Grand European food & wine tours',
        image: getImagePath('europe_flag.png'),
      },
    },
  },

  fr: {
    tagline:          'Spécialistes des voyages gastronomiques',
    heroTitle:        'Où souhaitez-vous voyager ?',
    heroSub:          'Des voyages gastronomiques intimesconçus pour les voyageurs passionnés.',
    chooseDestination:'Choisissez votre destination',
    languageNote:     'Guidé en français tout au long du voyage.',
    europeTitle:      'Choisissez votre destination européenne',
    europeBack:       'Retour',
    nzGuideBadge:     'Guides francophones disponibles',
    destinations: {
      'new-zealand': {
        label: 'Nouvelle-Zélande',
        sub:   'Marlborough · Central Otago · Hawke\'s Bay',
        image: getImagePath('nz/nz-hero.jpg'),
      },
      europe: {
        label: 'Europe',
        sub:   'France · Allemagne · Suisse · Multi-pays',
        image: getImagePath('ch/bern1.jpg'),
      },
    },
    europeRegions: {
switzerland: {
        label: 'Suisse',
        sub:   'Valais · Grisons · Lac Léman',
        image: getImagePath('about-banner.jpg'),
      },
      europe: {
        label: 'Multi-pays',
        sub:   'Grands circuits gastronomiques européens',
        image: getImagePath('europe_flag.png'),
      },
    },
  },

  de: {
    tagline:          'Spezialisten für kulinarische Reisen',
    heroTitle:        'Wohin möchten Sie reisen?',
    heroSub:          'Exklusive Gourmetreisengestaltet für reiselustige Genießer.',
    chooseDestination:'Wählen Sie Ihr Reiseziel',
    languageNote:     'Durchgehend auf Deutsch geführt.',
    europeTitle:      'Wählen Sie Ihr europäisches Reiseziel',
    europeBack:       'Zurück',
    nzGuideBadge:     'Deutschsprachige Reiseführer verfügbar',
    destinations: {
      'new-zealand': {
        label: 'Neuseeland',
        sub:   'Marlborough · Central Otago · Hawke\'s Bay',
        image: getImagePath('nz/nz-hero.jpg'),
      },
      europe: {
        label: 'Europa',
        sub:   'Frankreich · Deutschland · Schweiz · Mehrere Länder',
        image: getImagePath('ch/bern1.jpg'),
      },
    },
    europeRegions: {
      switzerland: {
        label: 'Schweiz',
        sub:   'Wallis · Graubünden · Genfersee',
        image: getImagePath('about-banner.jpg'),
      },
      europe: {
        label: 'Mehrere Länder',
        sub:   'Große europäische Gourmetreisen',
        image: getImagePath('europe_flag.png'),
      },
    },
  },
};

// ─── Detect browser language → EN / FR / DE ──────────────────────────────────
function detectLanguage(): Lang {
  const code = (navigator.language || 'en').toLowerCase().slice(0, 2);
  if (code === 'fr') return 'fr';
  if (code === 'de') return 'de';
  return 'en';
}

// ─── Destination card ─────────────────────────────────────────────────────────
interface DestinationCardProps {
  label: string;
  sub: string;
  image: string;
  badge?: string;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ label, sub, image, badge, onClick }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
  >
    {/* Background image */}
    <div className="relative h-64 sm:h-72 lg:h-80 w-full">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-300" />
    </div>

    {/* Badge (e.g. guide language note for NZ) */}
    {badge && (
      <div className="absolute top-4 left-4 bg-alpine-green/90 text-white text-xs font-medium px-3 py-1 rounded-full">
        {badge}
      </div>
    )}

    {/* Text content */}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg mb-1">
            {label}
          </h3>
          <p className="text-sm text-white/75 font-light leading-relaxed">
            {sub}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 bg-white/20 group-hover:bg-alpine-green transition-colors duration-300 rounded-full p-2">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  </button>
);

// ─── Main page component ──────────────────────────────────────────────────────
const GatewayPage: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;
const copy = COPY[lang];
  const [step, setStep] = useState<'destinations' | 'europe'>('destinations');

  // Signal to navbar (matching the pattern used in HomePage)
  useEffect(() => {
    document.body.setAttribute('data-page', 'gateway');
    return () => document.body.removeAttribute('data-page');
  }, []);

const handleDestinationSelect = (key: string) => {
  if (key === 'europe') {
    setStep('europe');
  } else {
    navigate(ROUTES[key](lang));
  }
};

  const handleRegionSelect = (key: string) => {
    navigate(ROUTES[key](lang));
  };

  const LANG_LABELS: Record<Lang, string> = { en: 'EN', fr: 'FR', de: 'DE' };

  return (
    <div className="space-y-16">

      {/* ── Hero Banner ──────────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] sm:h-[52vh] -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
        <img
          src={getImagePath('about-banner.jpg')}
          alt="Appetite Journeys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center px-4 text-center">

          {/* 

          {/* Wordmark */}
          <p className="text-white/80 text-sm font-light tracking-[0.3em] uppercase mb-3">
            Appetite Journeys
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl mb-3 leading-tight">
            {copy.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl drop-shadow-lg font-light">
            {copy.heroSub}
          </p>
        </div>
      </section>

      {/* ── Destination selection ─────────────────────────────────────────────── */}
      <section className="scroll-mt-20">

        {/* Section heading + back button */}
        <div className="text-center mb-8 relative">
          {step === 'europe' && (
            <button
              onClick={() => setStep('destinations')}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sm text-gray-500 hover:text-alpine-green transition-colors duration-200 font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              {copy.europeBack}
            </button>
          )}

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-2">
            {step === 'destinations' ? copy.chooseDestination : copy.europeTitle}
          </h2>

          <p className="text-base text-gray-500 font-light italic">
            {copy.languageNote}
          </p>
        </div>

        {/* ── Main destination cards ─────────────────────────────────────────── */}
        {step === 'destinations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(copy.destinations).map(([key, dest]) => (
              <DestinationCard
                key={key}
                label={dest.label}
                sub={dest.sub}
                image={dest.image}
                badge={key === 'new-zealand' ? copy.nzGuideBadge : undefined}
                onClick={() => handleDestinationSelect(key)}
              />
            ))}
          </div>
        )}

        {/* ── Europe sub-region cards ────────────────────────────────────────── */}
        {step === 'europe' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(copy.europeRegions).map(([key, region]) => (
              <DestinationCard
                key={key}
                label={region.label}
                sub={region.sub}
                image={region.image}
                onClick={() => handleRegionSelect(key)}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── What Makes Us Different  */}
      <section className="py-7 bg-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-alpine-green mb-4">
            Blah
          </h2>
          <p className="text-lg text-rock-gray leading-relaxed">
            Blah
          </p>
        </div>
      </section>

    </div>
  );
};

export default GatewayPage;