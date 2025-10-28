// CheeseChocolateRiviera.tsx

import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ImageGallery from "@/components/ImageGallery";
import HeroHeader from "@/components/HeroHeader";
import { cheeseChocolateRiviera, OptionalActivity } from "@/data/cheeseChocolateRiviera";
import { Bed, CheckCircle2, PlusCircle, Utensils, ChevronDown, ChevronUp, Clock, Check, AlertCircle, DollarSign } from "lucide-react";
import BookNowButton from "@/components/BookNowButton";

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

type OptionalActivityCardProps = {
  activity: OptionalActivity;
  dayNumber: number;
};

const OptionalActivityCard: React.FC<OptionalActivityCardProps> = ({ activity, dayNumber }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-2 border-alpine-green rounded-lg overflow-hidden bg-alpine-green-50/30 hover:border-alpine-green-300 transition-all">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-alpine-green-50/50 transition-colors"
      >
        <div className="flex items-start gap-3 text-left flex-1">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                OPTIONAL
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-1">{activity.name}</h4>
            {activity.duration && (
              <div className="flex items-center gap-1 text-sm text-slate-600 mt-1">
                <Clock className="w-4 h-4" />
                <span>{activity.duration}</span>
              </div>
            )}
          </div>
        </div>
        <div className="ml-4">
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-alpine-green" />
          ) : (
            <ChevronDown className="w-6 h-6 text-alpine-green" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 animate-fadeIn">
          {/* Description */}
          <div className="bg-white rounded-lg p-4 border border-amber-100">
            <p className="text-slate-700 leading-relaxed">{activity.description}</p>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* What's Included */}
            {activity.included && activity.included.length > 0 && (
              <div className="bg-white rounded-lg p-4 border border-amber-100">
                <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-alpine-green" />
                  What's Included
                </h5>
                <ul className="space-y-2">
                  {activity.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-alpine-green mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Info */}
            <div className="bg-white rounded-lg p-2 border border-amber-100 space-y-3">
              {/* Extra Charge */}
              <div>
                <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <h5 className="text-md font-bold text-alpine-green" />
                  Extra Charge
                </h5>
                <p className="text-md font-bold text-alpine-green">{activity.price}</p>
                {activity.duration && (
                  <p className="text-sm text-slate-600 mt-1">Duration: {activity.duration}</p>
                )}
              </div>
              
              {/* Important Notes */}
              {activity.bookingNote && (
                <div className="pt-3 border-t border-amber-100">
                  <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    Important Notes
                  </h5>
                  <p className="text-sm text-slate-700">{activity.bookingNote}</p>
                </div>
              )}
            </div>
          </div>

          {/* Images */}
          {activity.images && activity.images.length > 0 && (
            <div>
              <ImageGallery images={activity.images} />
            </div>
          )}

        </div>
      )}
    </div>
  );
};

const CheeseChocolateRiviera: React.FC = () => {
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

  // Collect all optional activities for summary section
  const allOptionalActivities = cheeseChocolateRiviera.itinerary
    .filter(day => day.optionalActivitiesDetailed && day.optionalActivitiesDetailed.length > 0)
    .map(day => ({
      day: day.day,
      dayTitle: day.title,
      activities: day.optionalActivitiesDetailed || []
    }));

  return (
    <div className="space-y-10 p-6">
      <HeroHeader
        images={cheeseChocolateRiviera.heroImages}
        title={cheeseChocolateRiviera.name}
        subtitle={`${cheeseChocolateRiviera.theme} · ${cheeseChocolateRiviera.durationDays} days`}
      />

      <h1 className="text-3xl font-extrabold">{cheeseChocolateRiviera.name}</h1>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-3">
          {cheeseChocolateRiviera.summary.map((para, idx) => (
            <p key={idx} className="text-slate-600">{para}</p>
          ))}
        </div>

        <aside className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-alpine-green mb-2">Key Details</h2>

          {/* Price */}
          {cheeseChocolateRiviera.price && Array.isArray(cheeseChocolateRiviera.price) && (
            <div className="text-slate-700 mb-2">
              <p>
                <strong>Price:</strong> {cheeseChocolateRiviera.price[0]}
              </p>
              {cheeseChocolateRiviera.price[1] && (
                <p className="ml-6 text-sm text-slate-600">
                  {cheeseChocolateRiviera.price[1]}
                </p>
              )}
            </div>
          )}

          {/* Single Supplement */}
          {cheeseChocolateRiviera.singleSupplement && (
            <p className="text-slate-700 mb-2">
              <strong>Single Supplement:</strong> {cheeseChocolateRiviera.singleSupplement}
            </p>
          )}

          {/* Departure Dates */}
          <div className="mt-3">
            <strong>Departure Dates:</strong>
            <ul className="mt-2 space-y-1">
              {cheeseChocolateRiviera.departureDates?.map((dep, idx) => {
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

          {/* Book Now button */}
          <div className="text-center mt-6">
            <BookNowButton size="md" />
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
          {cheeseChocolateRiviera.itinerary.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              ref={(el) => { dayRefs.current[`day-${day.day}`] = el; }}
            >
              <AccordionTrigger>
                Day {day.day}: {day.title}
              </AccordionTrigger>
              <AccordionContent>
                {/* Day Description */}
                {day.description.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-slate-700">{paragraph}</p>
                ))}

                {/* Optional Activities Detailed Section */}
                {day.optionalActivitiesDetailed && day.optionalActivitiesDetailed.length > 0 && (
                  <div className="my-4 space-y-2">
                    {day.optionalActivitiesDetailed.map((activity, idx) => (
                      <OptionalActivityCard 
                        key={idx} 
                        activity={activity} 
                        dayNumber={day.day}
                      />
                    ))}
                  </div>
                )}

                {/* Image Gallery */}
                <ImageGallery images={day.images} />

                {/* Info Items Grid */}
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
                  {day.optionalActivities && day.optionalActivities[0] !== "-" && (
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
          <li>Services of an experienced tour leader born and raised in Switzerland and fluent in the main languages of Switzerland</li>
          <li>Insights and explanations from a baker and chef with more than 30 years experience in the food industry</li>
          <li>Hotel accommodation (twin share)</li>
          <li>Daily breakfasts</li>
          <li>4 dinners and a multitude of Swiss delicacies along the way</li>

          <li>
            Activities and entries including:
            <ul className="list-[circle] pl-6 mt-1 space-y-1">
              <li>Transportation in an air-conditioned coach</li>
              <li>GoldenPass Express train, 1st class seat</li>
              <li>Interlaken Express train, 1st class seat</li>
              <li>Chocolate making class and entry to Maison Cailler chocolate factory</li>
              <li>Tour and dining experience at Fumoir de Champoz</li>
              <li>Entry to Glasi Hergiswil and glass blowing experience</li>
              <li>Bakery tour and tasting in Willisau</li>
              <li>Cultural show in Luzern</li>
              <li>Funicular and dinner on Harder Kulm</li>
              <li>Boat journey on Lake Geneva (Lac Léman)</li>
              <li>Vineyard tour of the World Heritage listed Lavaux Terraces</li>
            </ul>
          </li>

          <li>Guided walking tours of destinations including Bern, Basel, Interlaken, Luzern, and Lausanne</li>
          <li>All applicable taxes</li>
          <li>Luggage transfers between hotels</li>
          <li>Advice and support prior to and during the tour including travel tips, plus lots of foodie and insider recommendations</li>
          <li>Small group size (max 12)</li>
          <li>A few extra surprises and mementos along the way</li>
          <li>
            Optional additions of:
          <ul className="list-[circle] pl-6 mt-1 space-y-1"> 
            <li>Winery and farmshop tour</li>
            <li>Funicular ride up the Niesen</li>
            <li>Entry to caves of St. Beatus</li>
        </ul>
        </li>
        </ul>
      </section>   
    
    </div>
  );
};

export default CheeseChocolateRiviera;