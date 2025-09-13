// components/TourMapItinerary.tsx
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
{stop.details.map((paragraph, i) => (
  <p key={i} className="itinerary-paragraph">
    {paragraph}
  </p>
))}

// Define your itinerary data here
const ITINERARY = [
  {
    day: "Day 1",
    title: "Zurich → Lucerne",
    description: "Arrive in Zurich, explore the old town, then transfer to Lucerne for lakeside views.",
    route: "M100,150 L250,200 L300,220", // SVG path for driving route
    stops: [
      { name: "Zurich", cx: 100, cy: 150 },
      { name: "Lucerne", cx: 300, cy: 220 },
    ],
  },
  {
    day: "Day 2",
    title: "Lucerne → Interlaken → Bern",
    description: "Journey through the Bernese Oberland, with stops in Interlaken before arriving in Bern.",
    route: "M300,220 L280,300 L200,250",
    stops: [
      { name: "Interlaken", cx: 280, cy: 300 },
      { name: "Bern", cx: 200, cy: 250 },
    ],
  },
  {
    day: "Day 3",
    title: "Bern → Zermatt",
    description: "Head south into the Alps for breathtaking views of the Matterhorn in Zermatt.",
    route: "M200,250 L150,350",
    stops: [
      { name: "Zermatt", cx: 150, cy: 350 },
    ],
  },
];

const TourMapItinerary: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Accordion Section */}
      <div>
        <h2 className="text-3xl font-serif font-bold text-alpine-green mb-6">
          Itinerary
        </h2>
        <Accordion
          type="single"
          collapsible
          value={activeDay ?? ""}
          onValueChange={(val) => setActiveDay(val || null)}
          className="space-y-4"
        >
          {ITINERARY.map((day, idx) => (
            <AccordionItem
              key={idx}
              value={day.day}
              className="border rounded-xl shadow-sm bg-white"
            >
              <AccordionTrigger className="px-4 py-3 text-lg font-semibold">
                {day.day}: {day.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-700">
                {day.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Map Section */}
      <div className="relative">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-[400px] md:h-[500px] bg-blue-50 rounded-xl shadow-lg"
        >
          {/* Switzerland outline (simplified polygon path) */}
          <path
            d="M120,100 L400,120 L450,250 L350,400 L150,380 L80,250 Z"
            fill="#e5f4ec"
            stroke="#2d6a4f"
            strokeWidth="2"
          />

          {/* Show active route and stops */}
          {ITINERARY.filter((d) => d.day === activeDay).map((day, idx) => (
            <g key={idx}>
              {/* Driving Route */}
              <motion.path
                d={day.route}
                fill="none"
                stroke="#e63946"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* Stops (Cities) */}
              {day.stops.map((stop, i) => (
                <motion.circle
                  key={i}
                  cx={stop.cx}
                  cy={stop.cy}
                  r="6"
                  fill="#1d3557"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  <title>{stop.name}</title>
                </motion.circle>
              ))}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default TourMapItinerary;
