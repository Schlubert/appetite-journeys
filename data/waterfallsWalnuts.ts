// waterfallsWalnuts.ts

export type ItineraryStop = {
  day: number;
  title: string;
  description: string[];
  accommodation?: string;
  includedActivities?: string[];
  optionalActivities?: string[];
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
  price?: string;
  departureDates?: DepartureDate[];
  summary: string[]; // array of paragraphs
  heroImages: string[];
  itinerary: ItineraryStop[];
};

export const waterfallsWalnuts: Tour = {
  name: "Waterfalls and Walnuts",
  theme: "Food & Wine",
  durationDays: 12,
  price: "From CHF 3,250 per person",
  departureDates: [
    { date: "May 12, 2025", status: "sold-out" },
    { date: "June 23, 2025", status: "limited" },
    { date: "Sept 14, 2025", status: "available" },
  ],
  summary: [
    "Explore the East of Switzerland and discover flavours like Kirsch (Cherry Brandy), the walnut and caramel tart from Graubünden, and Swiss-made whiskey.",
    "Along the way we'll learn how to make liqueur-filled chocolates, taste a slightly boozy cake, and sample wines from the country's easternmost wineries.",
    "This journey also crosses into Germany, Austria and Liechtenstein — plenty of opportunities to sample regional delicacies."
  ],
  heroImages: [
    "/images/banner-waterfalls.jpg",
    "/images/basel.jpeg",
    "/images/stgallenlibrary2.jpg",
    "/images/black_forest_gat.jpg"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich",
      description: [
        'Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If youre looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.',
        'This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.',
        'Its very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip. If you are going to be late, please let us know.'
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: ["/images/schaffhausen3.jpg", "/images/gottlieben1.jpeg" ]
    },
    {
      day: 2,
      title: "Zurich to Gottlieben via Rhine Falls & Stein am Rhein",
      description: [
      "After enjoying breakfast at the hotel, board the bus as the journey begins. We head north, towards the Rhine River and the most powerful waterfalls in mainland Europe.","We then head to Shaffhausen, and the view from its hilltop fortress known as the Munot before wandering down through the old town and the chance for something to eat.", 
      "Stein am Rhein is our next, and last stop for the day. Complete with timber-framed houses, some of which date back as far as the 15th century, Stein a. R. is a feast for the eyes.",
      "After arriving at the hotel, the rest of the day is yours to relax and wander the streets and discover this beautiful place before dinner at a restaurant that offers some local specialties."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/rhinefalls.jpg", "/images/schaffhausen.jpg", "/images/munotview.jpg"]
    },
   {
      day: 3,
      title: "Morning course at Gottlieben Huppe Afternoon Freetime in Konstanz ",
      description: [
        "A short drive to the nearby village of Gottlieben, where we will have the first of our chocolate-making classes at the renowned Huppe chocolatier.",
        "All chocolated up, we head to Konstanz, just across the border in Germany. Here you can explore the old town, visit the Sea Life Centre, or simply relax by the lake."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/gottlieben1.jpeg", "/images/gottlieben2.jpeg", "/images/Konstanz1.jpeg"]
    },
    {
      day: 4,
      title: "Gottlieben to St Gallen (Boat from Knstanz to Lindau – Lunch at Wissingers – wine tour at Wetli Winery",
      description: [
        "Today we take to the water as we board a boat to travel across Lake Constance to the Bavarian town of Lindau.",
        "After lunch in the old town of Lindau island, we rejoin the bus and make our way, through Austria and back into Switzerland, to the Wetli Winery and a tour of their cellar, the world of winemaking and, of course, some tastings.",
        "Then, relax as we head to our hotel in St Gallen, where the rest of the evening is free to relax",
        "If fine dining is something that appeals, then you have the option of joining us for wine tasting in the hotel cellar followed by a gourmet dinner at the hotel's two Michelin-starred restaurant.",
        "Please let us know in advance if you would like to join this optional activity as there is an extra charge associated with it."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/bodensee.jpeg", "/images/lindau.jpeg", "/images/wetliweinkeller.jpg"]
    },
    {
      day: 5,
      title: "Säntis then Appensell and the brewer/distillery",
      description: [
        "Today we head 'up'. A short drive through the hills of the Appenzeller countryside, we arrive at the foot of Säntis. At more than 2.5 km (1.5 miles) above sea level, it provides spectacular views of six countries on a clear day. The cable car takes us to the summit where we can enjoy a coffee and a slice of cake while taking in the views.",
        "Back to the bus and on to Appensell for a late lunch, before heading off to Brauerei Locher - home of both Appenzeller beer and Säntis whiskey. We will have a tour of the brewery and distillery, followed by some tastings.",
        "Then it's back to St Gallen for a free evening to relax."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/appenzell.jpeg", "/images/santisccar.jpeg", "/images/santisbarrel.jpg"]
    },
    {
      day: 6,
      title: "Abbey then free time",
      description: [
        "A more relaxed day today, with a visit to the UNESCO World Heritage-listed Abbey of St Gallen, founded in 612 AD. The library is one of the oldest and most beautiful in the world, and contains more than 170,000 texts, some dating back to the 8th century.",
        "After the visit, the rest of the day is free to explore St Gallen at your own pace. Maybe visit the Textile Museum, or simply wander the streets and discover the many shops and cafes."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/stgallen1.jpeg", "/images/stgallen2.jpg", "/images/abbey.jpg"]
    },
    {
      day: 7,
      title: "To St Moritz via Vaduz and Davos (Bundner Nusstorte)",
      description: [
        "Heading south, we cross into the tiny country of Liechtenstein, and its capital Vaduz. After a short stop to explore the old town and maybe grab a coffee, we cross back into Switzerland and the Graubünden region where we arrive in Davos for lunch.",
        "After lunch, there is time to explore Davos, before we continue our journey to St Moritz, our home for the next couple of nights. On the way, we will stop at a bakery to sample the famous Bündner Nusstorte (walnut and caramel tart)."
        
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/vaduz.jpg", "/images/davos.jpg", "/images/engadiner.jpg"]
    },
    {
      day: 8,
      title: "St. Moritz free day (Muottas Muragl optional)",
      description: [
        "Today is for you to explore and enjoy the luxury alpine resort of St Moritz.",
        "Maybe you wish to relax and pamper yourself at one of the many spas, or perhaps take a walk around the lake, or indulge in some shopping. The choice is yours but remember to keep your eyes open for celebrities, as St Moritz is a favourite destination for the rich and famous.",
        "If you would like to join us for an optional excursion to Muottas Muragl, please let us know in advance. The funicular takes you up to a viewpoint with stunning views of the Engadin valley and the surrounding mountains. There is a restaurant at the top where you can enjoy a coffee or a meal while taking in the views, or spread your legs, and take one of the many walking trails that start from the top.",
        "Please note that there is an extra charge for this optional activity."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      optionalActivities: ["Muottas Muragl excursion"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/st_moritz.jpg", "/images/muottas_muragl.jpg", "/images/muottas_muragl2.jpg"]
    },
    {
      day: 9,
      title: "St Moritz to Andermatt (Glacier Express)",
      description: [
        "All aboard the Glacier Express! One of the most scenic train journeys in the world, the Glacier Express takes us from St Moritz to Andermatt, crossing 291 bridges and 91 tunnels along the way. Sit back, relax and enjoy the stunning scenery as we make our way through the Swiss Alps and the Oberalp Pass.",
        "Arriving in Andermatt, we'll be collected by the bus and taken to our hotel. For those wanting to stretch their legs, there is a short walk from the hotel to the village centre where you can explore the shops and cafes.",
        "Dinner, this evening, is at a local restaurant that specialises in Swiss cuisine and is very weell known for its cheese fondue."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/GlacierLandwasser.jpg", "/images/gexpress1.jpg", "/images/gexpress2.jpg"]
    },
    {
      day: 10,
      title: "Andermatt to Zug via Glarus and Oberarth",
      description: [
        "Leaving Andermatt we head towards Zug and through the territory if William Tell. We’ll stop in on the statue memorializing the legend in the town where he made is stand – Altdorf before grabbing some lunch.",
        "Next is the smallest cantonal capital in Switzerland that dates back to the 9th century and is one of the last places that still practice Landsgemeindeplatz - Glarus.",
        "We then head to the oldest distillery in Switzerland, take a tour and taste our way through some of their offerings - be sure to try their Chrüter (Kevin's favourite is the honey one).",
        "Relax as we then head to our stop for the night - Zug."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/andermatt.jpg", "/images/glarus.jpg", "/images/fassbind.jpeg"]
    },
    {
      day: 11,
      title: "Zug (class at Speck in the morning, Etter in the afternoon) Final Dinner",
      description: [
        "After breakfast we head to the workshop at Speck where we’ll learn how to make two iconic Swiss desserts – the Zuger Kirschtorte and the Kirsch Stangeli. Both contain cherries and alcohol (Kirsch) and are synonymous with the canton of Zug.",
        "In the afternoon we'll head to Etter, a distillery that specialises in fruit brandies. We will see how they make their products and taste a few of them.",
        "Then it's time for our farewell dinner."
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/etter.jpeg", "/images/kirschtorte.jpg", "/images/kirschstaengeli.jpg"]
    },
    {
      day: 12,
      title: "Zurich drop off",
      description: [
        "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Zurich where the tour, sadly, ends. ",
        "If you have a late flight, consider a visit to the Lindt Home of Chocolate, or the beautiful lakeside city of Rapperswil, known as the town of roses.",
        "We hope to see you again on another of our tours. Auf Wiederluege!"
     
      ],
      accommodation: "Boutique hotel in Basel city center",
      includedActivities: ["Walnut farm visit", "Old town walking tour"],
      meals: ["Breakfast", "Dinner"],
      images: ["/images/rhinefalls2.jpg", "/images/basel1.jpg"]
    },
  ]
};
