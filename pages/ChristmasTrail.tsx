import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import ImageGallery from "../components/ImageGallery"
import { christmas } from "../data/christmas"   
import { Bed, CheckCircle2, PlusCircle, Utensils } from "lucide-react"

type InfoItemProps = {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, children }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-8 h-8 text-alpine-green mb-2">{icon}</div>
    <p className="text-med font-bold">{title}</p>
    <div className="text-xs text-slate-600">{children}</div>
  </div>
)

const ChristmasTrailPage: React.FC = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header Section */}
     <header className="rounded-2xl overflow-hidden border border-slate-200">
            {christmas.heroImage && (
              <img
                src={christmas.heroImage}
                alt={christmas.name}
                className="h-56 w-full object-cover"
              />
            )}
            <div className="p-4">
              <div className="text-sm text-slate-500">
                {christmas.theme} · {christmas.durationDays} days
              </div>
              <h1 className="text-3xl font-extrabold">{christmas.name}</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-3">
          {Array.isArray(christmas.summary) ? (
            christmas.summary.map((para, idx) => (
              <p key={idx} className="text-slate-600">
              {para}
            </p>
          ))
        ) : (
          <p className="text-slate-600">{christmas.summary}</p>
        )}
      </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-alpine-green mb-2">Key Details</h2>
        <p className="text-slate-700"><strong>Price:</strong> {christmas.price}</p>
        <div className="mt-2">
          <strong>Departure Dates:</strong>
    <ul className="list-disc list-inside text-slate-700 mt-1">
      {christmas.departureDates.map((dep, idx) => (
        <li key={idx}>
          {dep.status === "sold-out" ? (
            <>
              <span className="line-through text-slate-500">{dep.date}</span>{" "}
              <span className="text-red-600 font-semibold">Sold Out</span>
            </>
          ) : dep.status === "limited" ? (
            <>
              <span className="text-slate-700">{dep.date}</span>{" "}
              <span className="text-orange-600 font-semibold">Limited spaces</span>
            </>
          ) : (
          <span className="text-slate-700">{dep.date}</span>
          )}
        </li>
      ))}
    </ul>
    
        </div>
      </div>
      </div>
            </div>
      </header>

      {/* Itinerary Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Daily Itinerary</h2>
        <Accordion type="single" collapsible defaultValue="day-1">
          {christmas.itinerary.map((day) => (
            <AccordionItem key={day.day} value={`day-${day.day}`}>
              <AccordionTrigger>
                Day {day.day}: {day.title}
              </AccordionTrigger>
              <AccordionContent>
                {day.description.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-700">
                    {paragraph}
                  </p>
                ))}

                {/* ✅ Image gallery */}
                <ImageGallery images={day.images} />

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  {day.accommodation && (
                    <InfoItem icon={<Bed />} title="Accommodation">
                      {day.accommodation}
                    </InfoItem>
                  )}
                  {day.includedActivities && (
                    <InfoItem
                      icon={<CheckCircle2 />}
                      title="Included Activities"
                    >
                      <ul className="list-disc list-inside">
                        {day.includedActivities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </InfoItem>
                  )}
                  {day.meals && (
                    <InfoItem icon={<Utensils />} title="Meals">
                      {day.meals}
                    </InfoItem>
                  )}
                  {day.optionalActivities && (
                    <InfoItem
                      icon={<PlusCircle />}
                      title="Optional Activities"
                    >
                      <ul className="list-disc list-inside">
                        {day.optionalActivities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </InfoItem>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Included Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">What’s Included</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>Visits to Switzerland’s most magical Christmas markets</li>
          <li>Private transfers between festive destinations</li>
          <li>Boutique accommodations with breakfast</li>
          <li>Handpicked festive dinners and culinary tastings</li>
          <li>Small group size (max 12)</li>
        </ul>
      </section>
    </div>
  )
}

export default ChristmasTrailPage
