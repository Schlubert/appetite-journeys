import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CalendarHeart, X } from "lucide-react";

interface FloatingBookButtonProps {
  tourName?: string;
  price?: string;
}

const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({ tourName, price }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px down
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <>
      {/* Desktop Version - Bottom Right */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-alpine-green overflow-hidden">
          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 p-1 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>

          <div className="p-4 pr-8">
            {tourName && (
              <p className="text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                {tourName}
              </p>
            )}
            {price && (
              <p className="text-lg font-bold text-alpine-green mb-3">{price}</p>
            )}
            <Link
              to="/book"
              className="flex items-center justify-center gap-2 bg-alpine-green text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <CalendarHeart className="w-5 h-5" />
              Book This Tour
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version - Bottom Sticky Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white border-t-2 border-alpine-green shadow-2xl">
          <div className="flex items-center justify-between p-3 gap-3">
            {/* Price Info */}
            <div className="flex-1 min-w-0">
              {price && (
                <p className="text-sm font-bold text-alpine-green truncate">{price}</p>
              )}
              {tourName && (
                <p className="text-xs text-slate-600 truncate">{tourName}</p>
              )}
            </div>

            {/* Book Button */}
            <Link
              to="/book"
              className="flex items-center gap-2 bg-alpine-green text-white font-bold px-5 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg whitespace-nowrap"
            >
              <CalendarHeart className="w-4 h-4" />
              Book Now
            </Link>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingBookButton;