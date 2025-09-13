// WaterfallsWalnuts.tsx

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ImageGallery from "@/components/ImageGallery";
import HeroHeader from "@/components/HeroHeader";
import { waterfallsWalnuts } from "@/data/waterfallsWalnuts";
import { Bed, CheckCircle2, PlusCircle, Utensils } from "lucide-react";

type InfoItemProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, children }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-8 h-8 text-alpine-green mb-2">{icon}</div>
    <p className="text-sm font-bold">{title}</p>
    <div className="text-xs text-slate-600">{children}</div>
  </div>
);

const WaterfallsWalnuts: React.FC = () => {
  return (
    <div className="space-y-10 p-6">
      <HeroHeader
        images={waterfallsWalnuts.heroImages}
        title={waterfallsWalnuts.name}
        subtitle={`${waterfallsWalnuts.theme} · ${waterfallsWalnuts.durationDays} days`}
      />

      <h1 className="text-3xl font-extrabold">{waterfallsWalnuts.name}</h1>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-3">
          {waterfallsWalnuts.summary.map((para, idx) => (
            <p key={idx} className="text-slate-600">
              {para}
            </p>
          ))}
        </div>

        <aside className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-alpine-green mb-2">Key Details</h2>
          {waterfallsWalnuts.price && (
            <p className="text-slate-700"><strong>Price:</strong> {waterfallsWalnuts.price}</p>
          )}

          <div className="mt-3">
            <strong>Departure Dates:</strong>
            <ul className="mt-2 space-y-1">
              {waterfallsWalnuts.departureDates?.map((dep, idx) => {
                const isSold = dep.status === "sold-out";
                const isLimited = dep.status === "limited";
                return (
                  <li key={idx} className="text-sm">
                    <span className={isSold ? "line-through text-slate-500" : "text-slate-700"}>
                      {dep.date}
                    </span>
                    {isSold && <span className="ml-2 text-red-600 font-semibold">Sold Out</span>}
                    {isLimited && <span className="ml-2 text-orange-600 font-semibold">Limited</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Daily Itinerary</h2>
        <Accordion type="single" collapsible defaultValue="day-1">
          {waterfallsWalnuts.itinerary.map((day) => (
            <AccordionItem key={day.day} value={`day-${day.day}`}>
              <AccordionTrigger>
                Day {day.day}: {day.title}
              </AccordionTrigger>
              <AccordionContent>
                {day.description.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-slate-700">
                    {paragraph}
                  </p>
                ))}

                <ImageGallery images={day.images} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  {day.accommodation && <InfoItem icon={<Bed />} title="Accommodation">{day.accommodation}</InfoItem>}
                  {day.includedActivities && (
                    <InfoItem icon={<CheckCircle2 />} title="Included Activities">
                      <ul className="list-disc list-inside">
                        {day.includedActivities.map((a, idx) => <li key={idx}>{a}</li>)}
                      </ul>
                    </InfoItem>
                  )}
                  {day.meals && <InfoItem icon={<Utensils />} title="Meals">
                    <div className="space-y-1">
                      {Array.isArray(day.meals) ? day.meals.map((m, idx) => <div key={idx}>{m}</div>) : <div>{day.meals}</div>}
                    </div>
                  </InfoItem>}
                  {day.optionalActivities && (
                    <InfoItem icon={<PlusCircle />} title="Optional Activities">
                      <ul className="list-disc list-inside">
                        {day.optionalActivities.map((a, idx) => <li key={idx}>{a}</li>)}
                      </ul>
                    </InfoItem>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-yellow-300 border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">What's Included</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>Guided waterfall excursions and nature walks</li>
          <li>Walnut farm visits with tastings and workshops</li>
          <li>All scheduled transfers between stops</li>
          <li>Handpicked boutique accommodations with breakfast</li>
          <li>Small group size (max 12)</li>
          <li>Professional nature guide</li>
        </ul>
      </section>
    </div>
  );
};

export default WaterfallsWalnuts;
