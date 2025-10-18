// data/waterfallsWalnuts.ts
import { getImagePath } from "../utils/paths";

export type OptionalActivity = {
  name: string;
  description: string;
  price: string;
  duration?: string;
  included?: string[];
  images?: string[];
  bookingNote?: string;
};

export type ItineraryStop = {
  day: number;
  title: string;
  description: string[];
  accommodation?: string;
  includedActivities?: string[];
  optionalActivities?: string[];
  optionalActivitiesDetailed?: OptionalActivity[];
  meals?: string[];
  images?: string[];
};

export type DepartureDate = {
  date: string;
  status?: "sold-out" | "limited" | "available";
};

export type Tour = {
  name: string;
  theme: string;
  durationDays: number;
  price?: string[];
  singleSupplement?: string;
  departureDates?: DepartureDate[];
  summary: string[];
  heroImages: string[];
  itinerary: ItineraryStop[];
};

export const waterfallsWalnuts: Tour = {
  name: "Waterfalls and Walnuts",
  theme: "Food & Wine",
  durationDays: 12,
  price: ["From NZ$13,800", "per person (twin share)"],
  singleSupplement: "NZ$4,750",
  departureDates: [{ date: "September 13th, 2026", status: "limited" }],
  summary: [
    "Explore the East of Switzerland and discover flavours like Kirsch (Cherry Brandy), the walnut and caramel tart from Graubünden, and Swiss-made whiskey.",
    "Along the way we'll learn how to make liqueur-filled chocolates, taste a slightly boozy cake, and sample wines from the country's easternmost wineries.",
    "This journey also crosses into Germany, Austria and Liechtenstein — plenty of opportunities to sample regional delicacies.",
  ],
  heroImages: [
    getImagePath("davos.jpg"),
    getImagePath("kirschstaengeli.jpg"),
    getImagePath("stgallenlibrary2.jpg"),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich",
      description: [
        "Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
        "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
        "Its very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip."
      ],
      accommodation: "Radisson Blu Hotel, Zurich Airport",
      includedActivities: ["Welcome dinner"],
      optionalActivities: ["-"],
      meals: ["Dinner"],
      images: [getImagePath('schaffhausen3.jpg'), getImagePath('gottlieben1.jpeg') ]
    },
    {
      day: 2,
      title: "Zurich to Gottlieben via Rhine Falls & Stein am Rhein",
      description: [
      "After enjoying breakfast at the hotel, board the bus as the journey begins. We head north, towards the Rhine River and the most powerful waterfalls in mainland Europe.","We then head to Shaffhausen, and the view from its hilltop fortress known as the Munot before wandering down through the old town and the chance for something to eat.", 
      "Stein am Rhein is our next, and last stop for the day. Complete with timber-framed houses, some of which date back as far as the 15th century, Stein a. R. is a feast for the eyes.",
      "After arriving at the hotel, the rest of the day is yours to relax and wander the streets and discover this beautiful place before dinner at a restaurant that offers some local specialties."
      ],
      accommodation: "Hotel Constantia, Konstanz",
      includedActivities: [""],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath('rhinefalls.jpg'), getImagePath('schaffhausen.jpg'), getImagePath('munotview.jpg')]
    },
   {
      day: 3,
      title: "Chocolate making course and Konstanz visit",
      description: [
        "A short drive to the nearby village of Gottlieben, where we will have the first of our chocolate-making classes at the renowned Huppe chocolatier.",
        "All chocolated up, we head to Konstanz, just across the border in Germany. Here you can explore the old town, visit the Sea Life Centre, or simply relax by the lake."
      ],
      accommodation: "Hotel Constantia, Konstanz",
      includedActivities: [""],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [getImagePath('gottlieben1.jpeg'), getImagePath('gottlieben2.jpeg'), getImagePath('Konstanz1.jpeg')]
    },
    {
      day: 4,
      title: "Konstanz to St Gallen",
      description: [
        "Today we take to the water as we board a boat to travel across Lake Constance to the Bavarian town of Lindau.",
        "After lunch in the old town of Lindau island, we rejoin the bus and make our way, through Austria and back into Switzerland, to the Wetli Winery and a tour of their cellar, the world of winemaking and, of course, some tastings.",
        "Then, relax as we head to our hotel in St Gallen, where the rest of the evening is free to relax",
       
      ],
      accommodation: "Einstein St.Gallen",
      includedActivities: ["Boat trip on Lake Constance","Lunch at Wissingers im Schlechterbräu", "Winery Tour and tasting"],
      optionalActivities: ["-"],
      meals: ["Breakfast","Lunch",],
      images: [getImagePath('bodensee.jpeg'), getImagePath('lindau.jpeg'), getImagePath('wetliweinkeller.jpg')]
    },{
      day: 5,
      title: "Säntis then Appenzell and the brewer/distillery",
      description: [
        "Today we head 'up'...",
        "If fine dining is something that appeals, then you have the option of joining us for wine tasting in the hotel cellar followed by a gourmet dinner at the hotel's two Michelin-starred restaurant.",
      ],
      accommodation: "Einstein St.Gallen",
      includedActivities: ["Cable car up Säntis", "Tour & tasting at Appenzeller brewery/distillery"],
      optionalActivities: ["2 Michelin-star dinner at Einstein hotel"],
      optionalActivitiesDetailed: [
        {
          name: "Einstein Gourmet Dinner Experience",
          description:
            "Begin with a private wine tasting in the hotel's cellar before indulging in a multi-course tasting menu crafted by the Einstein Gourmet team (2 Michelin Stars, 18 GaultMillau points). An unforgettable evening of flavour and finesse in St Gallen.",
          price: "NZ$420 per person",
          duration: "3–4 hours",
          included: [
            "Private wine tasting with sommelier",
            "7-course tasting menu",
            "Paired wines",
            "Coffee and petit fours",
          ],
          bookingNote:
            "Limited availability. Must be booked at least 14 days in advance. Formal dress required.",
        },
      ],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath("appenzell.jpeg"), getImagePath("santisccar.jpeg"), getImagePath("santisbarrel.jpg")],
    },
    {
      day: 6,
      title: "Old town and Abbey tour then free time",
      description: [
        "A more relaxed day today, with a visit to the UNESCO World Heritage-listed Abbey of St Gallen, founded in 612 AD. The library is one of the oldest and most beautiful in the world, and contains more than 170,000 texts, some dating back to the 8th century.",
        "After the visit, the rest of the day is free to explore St Gallen at your own pace. Maybe visit the Textile Museum, or simply wander the streets and discover the many shops and cafes."
      ],
      accommodation: "Einstein St.Gallen",
      includedActivities: ["Walking tour of Old town St. Gallen", "'All Abbey Pass' for Abbey of St Gallen"],
      optionalActivities: ["-"],
      meals: ["Breakfast",],
      images: [getImagePath('stgallen1.jpeg'), getImagePath('stgallen2.jpg'), getImagePath('abbey.jpg')]
    },
    {
      day: 7,
      title: "To St Moritz via Liechtenstein",
      description: [
        "Heading south, we cross into the tiny country of Liechtenstein, and its capital Vaduz. After a short stop to explore the old town and maybe grab a coffee, we cross back into Switzerland and the Graubünden region where we arrive in Davos for lunch.",
        "After lunch, there is time to explore Davos, before we continue our journey to St Moritz, our home for the next couple of nights. On the way, we will stop at a bakery to sample the famous Bündner Nusstorte (walnut and caramel tart)."
        
      ],
      accommodation: "Soldanella Boutique Hotel, St Moritz",
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath('vaduz.jpg'), getImagePath('davos.jpg'), getImagePath('engadiner.jpg')]
    },
    {
      day: 8,
      title: "St. Moritz Free Day",
      description: [
        "Your day to relax or join an optional excursion to Muottas Muragl for panoramic views of the Engadin valley.",
      ],
      accommodation: "Soldanella Boutique Hotel, St Moritz",
      optionalActivities: ["Muottas Muragl funicular and scenic lunch"],
      optionalActivitiesDetailed: [
        {
          name: "Muottas Muragl Scenic Experience",
          description:
            "Ride the historic funicular to 2,456 meters for breathtaking alpine views. Enjoy a gourmet lunch at the panoramic restaurant or explore one of several summit walking trails.",
          price: "NZ$195 per person",
          duration: "Half day (4–5 hours)",
          included: [
            "Return funicular tickets",
            "Lunch at panoramic restaurant",
            "Local guide and transfers",
          ],
          bookingNote:
            "Weather dependent. Operates May–October. Warm clothing recommended.",
        },
      ],
      meals: ["Breakfast"],
      images: [getImagePath("muottas_muragl.jpg"), getImagePath("muottas_muragl2.jpg")],
    },
    {
      day: 9,
      title: "St Moritz to Andermatt (Glacier Express)",
      description: [
        "All aboard the Glacier Express! One of the most scenic train journeys in the world, the Glacier Express takes us from St Moritz to Andermatt, crossing 291 bridges and 91 tunnels along the way. Sit back, relax and enjoy the stunning scenery as we make our way through the Swiss Alps and the Oberalp Pass.",
        "Arriving in Andermatt, we'll be collected by the bus and taken to our hotel. For those wanting to stretch their legs, there is a short walk from the hotel to the village centre where you can explore the shops and cafes.",
        "Dinner, this evening, is at a local restaurant that specialises in Swiss cuisine and is very weell known for its cheese fondue."
      ],
      accommodation: "Radisson Blu Hotel Reussen, Andermatt",
      includedActivities: ["1st-Class Glacier Express seat",],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath('GlacierLandwasser.jpg'), getImagePath('gexpress1.jpg'), getImagePath('gexpress2.jpg')]
    },
    {
      day: 10,
      title: "Andermatt to Zug via Glarus and Oberarth",
      description: [
        "Leaving Andermatt we head towards Zug and through the territory of William Tell. We’ll stop in on the statue memorializing the legend in the town where he made his stand – Altdorf – before grabbing some lunch.",
        "Next is the smallest cantonal capital in Switzerland that dates back to the 9th century and is one of the last places that still practice Landsgemeindeplatz - Glarus.",
        "We then head to the oldest distillery in Switzerland, take a tour and taste our way through some of their offerings - be sure to try their Chrüter (Kevin's favourite is the honey one).",
        "Relax as we then head to our stop for the night - Zug."
      ],
      accommodation: "Residence Hotel, Zug",
      includedActivities: ["Tour & tasting at Fassbind distillery", "Visit to Glarus", "Visit to Altdorf"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath('andermatt.jpg'), getImagePath('glarus.jpg'), getImagePath('fassbind.jpeg')]
    },
    {
      day: 11,
      title: "Zug & final dinner",
      description: [
        "After breakfast we head to the workshop at Speck where we’ll learn how to make two iconic Swiss desserts – the Zuger Kirschtorte and the Kirschstängeli. Both contain cherries and alcohol (Kirsch) and are synonymous with the canton of Zug.",
        "In the afternoon we'll head to Etter, a distillery that specialises in fruit brandies. We will see how they make their products and taste a few of them.",
        "Then it's time for our farewell dinner."
      ],
      accommodation: "Residence Hotel, Zug",
      includedActivities: ["Combined course at a confiserie", "Tour and tasting a Etter distillery"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath('etter.jpeg'), getImagePath('kirschtorte.jpg'), getImagePath('kirschstaengeli.jpg')]
    },
    {
      day: 12,
      title: "Zurich drop off",
      description: [
        "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Zurich where the tour, sadly, ends. ",
        "If you have a late flight, consider a visit to the Lindt Home of Chocolate, or the beautiful lakeside city of Rapperswil, known as the town of roses.",
        "We hope to see you again on another of our tours. Uf widerluege!"
     
      ],
      includedActivities: ["Return to Zurich airport or train station"],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [getImagePath('rhinefalls2.jpg'), getImagePath('basel1.jpg')]
    },
  ]
};
