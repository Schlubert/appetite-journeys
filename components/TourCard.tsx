import React from "react";
import { Link } from "react-router-dom";
import { Tour, SummaryLine } from "../constants";
import AvailabilityDisplay from "./AvailabilityDisplay";
import { useTranslation } from "react-i18next";

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { t, i18n } = useTranslation();

  const lang = (
    ['en', 'fr', 'de'].includes(i18n.language)
      ? i18n.language
      : 'en'
  ) as 'en' | 'fr' | 'de';

  return (
    <Link
      to={tour.route}
      className="block rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition h-full"
    >
      <div className="flex flex-col h-full">
        <img
          src={tour.heroImage}
          alt={tour.name[lang]}
          className="w-full h-48 object-cover"
        />

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mt-1 hover:text-alpine-green transition-colors">
            {tour.name[lang]}
          </h3>

          {/* Price */}
          {tour.price && (
            <p className="text-lg font-semibold text-alpine-green mt-2">
              {tour.price[lang]}
            </p>
          )}

          {/* Single Supplement */}
          {tour.singleSupplement && (
            <p className="text-sm text-rock-gray mb-3">
              {t('tourPage.singleSupplement')}: {tour.singleSupplement[lang]}
            </p>
          )}

          <div className="flex-grow">
            {tour.summary.map((line: SummaryLine, idx: number) => (
              <p
                key={idx}
                className={line.className || "text-slate-600 mt-2"}
              >
                {line.text[lang]}
              </p>
            ))}
          </div>

          {/* Availability Display */}
          {tour.departureDates && tour.departureDates.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <AvailabilityDisplay
                departureDates={tour.departureDates}
                compact={true}
              />
            </div>
          )}

          <div className="flex justify-end items-center mt-4">
            <span className="text-alpine-green font-semibold hover:underline">
              {t('tourPage.viewDetails')} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;