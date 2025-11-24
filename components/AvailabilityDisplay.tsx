import React from 'react';
import { Calendar, Users, AlertCircle } from 'lucide-react';

export interface DepartureDate {
  date: string;
  status?: 'sold-out' | 'limited' | 'available';
  year?: number;
}

interface AvailabilityDisplayProps {
  departureDates: DepartureDate[];
  compact?: boolean;
}

const AvailabilityDisplay: React.FC<AvailabilityDisplayProps> = ({ 
  departureDates, 
  compact = false 
}) => {
  // Group dates by year
  const groupedByYear = departureDates.reduce((acc, dep) => {
    const year = dep.year || new Date(dep.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(dep);
    return acc;
  }, {} as Record<number, DepartureDate[]>);

  // Find next available date
  const nextAvailable = departureDates.find(
    dep => dep.status !== 'sold-out'
  );

  if (compact) {
    // Compact view for tour cards
    return (
      <div className="space-y-2">
        {nextAvailable && (
          <div className="flex items-start gap-2 bg-alpine-green bg-opacity-10 rounded-lg p-3">
            <Calendar className="w-5 h-5 text-alpine-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-alpine-green">Next Departure</p>
              <p className="text-sm text-rock-gray">{nextAvailable.date}</p>
              {nextAvailable.status === 'limited' && (
                <span className="text-xs text-orange-600 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  Only a few spots left
                </span>
              )}
            </div>
          </div>
        )}
        <p className="text-sm text-slate-600">
          {departureDates.length} departure dates available
        </p>
      </div>
    );
  }

  // Full view for tour detail pages
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-alpine-green" />
        <h3 className="text-xl font-bold text-rock-gray">Departure Dates</h3>
      </div>

      {/* Next Available Highlight */}
      {nextAvailable && (
        <div className="bg-alpine-green bg-opacity-10 border-2 border-alpine-green rounded-xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-alpine-green uppercase tracking-wide mb-1">
                Next Available Departure
              </p>
              <p className="text-2xl font-bold text-rock-gray mb-2">{nextAvailable.date}</p>
              {nextAvailable.status === 'limited' && (
                <div className="flex items-center gap-2 text-orange-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Limited spaces remaining</span>
                </div>
              )}
            </div>
            <a 
              href="/contact" 
              className="bg-alpine-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>
      )}

      {/* All Dates by Year */}
      <div className="space-y-4">
        {Object.entries(groupedByYear)
          .sort(([yearA], [yearB]) => Number(yearA) - Number(yearB))
          .map(([year, dates]) => (
            <div key={year} className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                <h4 className="font-bold text-lg text-rock-gray">{year} Departures</h4>
              </div>
              <div className="divide-y divide-slate-100">
                {dates.map((dep, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-3 flex items-center justify-between ${
                      dep.status === 'sold-out' ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span
                        className={`font-medium ${
                          dep.status === 'sold-out' ? 'line-through text-slate-500' : 'text-rock-gray'
                        }`}
                      >
                        {dep.date}
                      </span>
                    </div>
                    <div>
                      {dep.status === 'sold-out' ? (
                        <span className="text-sm text-red-600 font-semibold">Sold Out</span>
                      ) : dep.status === 'limited' ? (
                        <span className="text-sm text-orange-600 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Limited Availability
                        </span>
                      ) : (
                        <span className="text-sm text-alpine-green font-semibold">Available</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Join Waitlist for future years */}
      <div className="bg-slate-50 rounded-lg p-6 text-center">
        <p className="text-rock-gray mb-3">
          Looking for dates beyond {Math.max(...Object.keys(groupedByYear).map(Number))}?
        </p>
        <a 
          href="/contact?subject=Waitlist" 
          className="text-alpine-green font-semibold hover:underline"
        >
          Join our waitlist for future departures →
        </a>
      </div>
    </div>
  );
};

export default AvailabilityDisplay;