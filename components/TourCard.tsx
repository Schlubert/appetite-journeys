import React from "react"
import { Link } from "react-router-dom"
import { Tour } from "./constants"
import AvailabilityDisplay from "./AvailabilityDisplay"

interface TourCardProps {
  tour: Tour
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Link 
      to={tour.route}
      className="block rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition h-full"
    >
      <div className="flex flex-col h-full">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mt-1 hover:text-alpine-green transition-colors">{tour.name}</h3>

          <div className="flex-grow">
            {tour.summary.map((line, idx) => (
              <p key={idx} className={line.className || "text-slate-600 mt-2"}>
                {line.text}
              </p>
            ))}
          </div>

          {/* Availability Display */}
          {tour.departureDates && tour.departureDates.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <AvailabilityDisplay departureDates={tour.departureDates} compact={true} />
            </div>
          )}

          <div className="flex justify-end items-center mt-4">
            <span className="text-alpine-green font-semibold hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourCard