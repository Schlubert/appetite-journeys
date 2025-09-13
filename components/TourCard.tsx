import React from "react"
import { Link } from "react-router-dom"
import { Tour } from "@/constants"

interface TourCardProps {
  tour: Tour
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Link 
      to={tour.route}
      className="block rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition h-full"
    >
      <div className="h-full flex flex-col">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-sm text-slate-500">
            {tour.theme} · {tour.durationDays} days
          </div>
          <h3 className="text-xl font-bold mt-1 group-hover:text-alpine-green transition-colors">{tour.name}</h3>

          <div className="flex-grow">
            {Array.isArray(tour.summary) ? (
              tour.summary.map((para, idx) => (
                <p key={idx} className="text-slate-600 mt-2">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-slate-600 mt-2">{tour.summary}</p>
            )}
          </div>

          <div className="flex justify-between items-center mt-4 bg-slate-300 p-2 rounded-lg">
            <span className="text-sm font-semibold text-alpine-green">
              {tour.price}
            </span>
            <span className="text-sm text-alpine-green font-semibold">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourCard