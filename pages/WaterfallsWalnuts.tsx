// WaterfallsWalnuts.tsx

import React, { useRef } from "react";
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
  const [openDay, setOpenDay] = React.useState<string>("day-1");
  const dayRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleValueChange = (value: string) => {
    setOpenDay(value);
    
    // Scroll to the opened accordion item
    if (value && dayRefs.current[value]) {
      setTimeout(() => {
        const element = dayRefs.current[value];
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

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
        <Accordion 
          type="single" 
          collapsible 
          value={openDay}
          onValueChange={handleValueChange}
        >
          {waterfallsWalnuts.itinerary.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              ref={(el) => { dayRefs.current[`day-${day.day}`] = el; }}
            >
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

       <section className="bg-gray-200 border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">What's Included</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>Services of an experienced tour leader fluent in the languages of Switzerland</li>
        <li>Insights and explanations from a baker and chef with more than 30 years experience in the food industry</li> <li>Accommodation in 4-5 star hotels (twin share)</li>
        <li>Daily breakfasts</li>
        <li>7 dinners and a multitude of Swiss delicaies along the way</li>
        <li>Activites and entries including:
        <ul className="list-[circle] pl-6 mt-1 space-y-1">
          <li>Transportation in an air conditioned coach</li>
          <li>Glacier Express train, 1st class seat</li>
          <li>Chocolate making class and entry to Gottlieben Huppe chocolate factory</li>
          <li>Cake and chocolate making class in Zug</li>
          <li>Boat journey on the Bodensee</li>
          <li>Cablecar up Säntis</li>
          <li>Entry to Library and Museum of the Abbey of St. Gall</li>
          <li>Tours and tastings at 3 distilleries, 1 Brewery, and a winery</li>
          </ul></li>
        <li>Optional additions of:
          <ul className="list-[circle] pl-6 mt-1 space-y-1"> 
            <li>Funicular up to Muottas Muragl</li>
            <li>Wine tasting followed by dinner at a 2 Michelin starred restaurant</li></ul></li>
            
        <li>Guided walking tours of destinations including Shaffhausen, St. Gallen, and Appensell</li>
        <li>All applicable taxes </li>
        <li>Luggage transfers between hotels</li>
        <li>Advice and support prior to and during the tour including travel tips, plus lots of foodie and insider recommendations</li>
        <li>Small group size (max 12)</li>
        <li>A few extra surprises and mementos along the way</li>
        </ul>
      </section>
    </div>
  );
};

export default WaterfallsWalnuts;