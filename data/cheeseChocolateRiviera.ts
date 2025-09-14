// data/cheeseChocolateRiviera.ts

import { getImagePath } from '../utils/paths';

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

export const cheeseChocolateRiviera: Tour = {
  name: "Cheese, Chocolate and the Swiss Riviera",
  theme: "Food & Wine",
  durationDays: 12,
  price: "From CHF 3,250 per person",
  departureDates: [
    { date: "May 12, 2025", status: "sold-out" },
    { date: "June 23, 2025", status: "limited" },
    { date: "Sept 14, 2025", status: "available" },
  ],
  summary: [
    "Explore the north and west of Switzerland. From lakefront to mountain tops, distilleries and bakeries to cheesemakers and chocolate factories, this tour has it all."
  ],
  heroImages: [
    getImagePath("Fumoir.jpg"),
    getImagePath("Basel.jpeg"),
    getImagePath("bern1.jpg"),
    getImagePath("kambly.jpeg"),
  ],
  itinerary: <ItineraryStop[]>[
    {
      day: 1,
      title: "Arrival in Zurich",
      description:[
        'Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If youre looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.',
        'This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.',
        'Its very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip. If you are going to be late, please let us know.'
      ],
      accommodation: "Hotel Schweizerhof, Bahnhofplatz, Zurich",
      meals: ["Dinner"],
      images: [
        getImagePath("Basel-Switzerland-Happy-to-Wander-0278.jpg"),
        getImagePath("IMG20250705153206.jpg"),
        getImagePath("IMG20250720125834.jpg")
      ]
    },
    {
      day: 2,
      title: "Zurich to Basel",
      description:[ 
        'After enjoying breakfast at the hotel, board the bus as the journey begins. After our first crossing of the Aare river (well see her several more times) we travel through the Canton of Aargau and into the Jurapark Aargau – a regional nature park. After a few stops to soak up the view, we arrive at the doors of the Swiss icon – Läckerlihuus and your first taste of the most famous version of this biscuit specific to Switzerland.',
        'We then head into the medieval city of Basel but not before visiting the oldest biscuit manufacturer in Switzerland and a family business for over 270 years.',
        'After arriving at the hotel, well go for a walking tour of some of the highlights of the old town before having some free time to explore.',
        'Then, dinner at a restaurant that offers some local specialties.'
      ],
      accommodation: "Hotel Basel or similar",
      includedActivities: [
        "Bakery visits and läckerli tastings",
        "Walking tour of Basel's Old Town"
      ],
      meals: ["Breakfast", "Dinner"],
      images: [getImagePath("Basel.jpeg"), getImagePath("BaselOldTown.jpg"), getImagePath("Lackerli.jpeg")]
    },
    {
      day: 3,
      title: "Basel Free Day",
      description:[ `Your opportunity to explore the city of Basel at your leisure. You can visit the Kunstmuseum, the Fondation Beyeler, or the Vitra Design Museum. 
If those don't interest you, then you can take a walk along the Rhine river or visit the Tinguely Fountain.`,
"You also have the opportunity to cross the border into Germany and venture into the Black Forest to visit Café Schäfer where it is said that they make the original recipe of one of the worlds most famous cakes – the Black Forest Gateau (Schwarzwalder Kirschtorte).",
'If you would like to join us on this excursion, please let us know as there is an extra charge associated with it.'
],
      accommodation: "Hotel Basel or similar",
      includedActivities: ["Museum entry suggestions", "City walking map provided"],
      optionalActivities: [
        "Excursion to the Black Forest (Germany) to visit Café Schäfer and taste the original Schwarzwälder Kirschtorte (Black Forest Gateau)"
      ],
      meals: ["Breakfast"],
      images: [getImagePath("black_forest_gat.jpg"), getImagePath("triberg1.jpg"), getImagePath("triberg2.jpg")]
    },
    {
      day: 4,
      title: "Basel to Bern",
      description:[ 
        'Today, we head to the UNESCO World Heritage Site of Bern. Switzerlands capital city and one of the most photographed cities in the world.',
        'On the way, well stop in on a smokehouse that has been operating a traditional style operation for more than 300 years. Then, on towards our first chocolate stop – Camille Bloch – makers of some chocolate creations such as Ragusa and Torino.',
        'Our final stop on the journey is Murten, an amazingly picturesque village and home of the Nidlechüche. Nobody makes it better than here. ',
        'After we arrive at the hotel there is a little time to relax and recharge before heading off to restaurant where you can try iconic dishes like fondue and raclette, or regional ones like the rösti.'
      ],
      accommodation: "Hotel Allegro Bern or similar",
      includedActivities: [
        "Fumoir Champoz tasting",
        "Visit to Camille Bloch chocolate factory",
        "Slice of Nidlechüche in Murten"
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
      images: [
        getImagePath("Fumoir.jpg"), 
        getImagePath("nidle.jpg"), 
        getImagePath("ragusa.jpg")]
    },
    {
      day: 5,
      title: "Bern to Gruyères",
      description:[ 
        'Start with breakfast overlooking the Aare River and the city before a walking tour of the highlights of the old city including seeing the bears that give the city its name.',
        'After exploring Bern, we head to the picturesque medieval town of Gruyères, famous for its cheese production and stunning castle.'
      ],
      accommodation: "Gruyères Hostellerie St-Georges or similar",
      includedActivities: [
        "Walking tour of Bern's Old Town",
        "Gruyère cheese factory visit",
        "Entry to Gruyères Castle"
      ],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath("bern1.jpg"), 
        getImagePath("bern2.jpg"), 
        getImagePath("bern3.jpg")
      ]
    },
    {
      day: 6,
      title: "Gruyères to Lucerne",
      description:[ 
      'Today, we head from Gruyères to what is often described as one of the most attractive destinations in Europe – Luzern (Lucerne).',
      'Home to the subject of more photos that probably any other wooden bridge in the world (Chapel Bridge); the Lion Monument; and outstanding views from the Musegg Wall, Luzern is like a scene from a fairytale.',
      'On the way well explore more of the Swiss love for biscuits at the countrys largest biscuit manufacturer – Kambly. Sample from their huge array of biscuits before heading off for something to wash it down with at the Willisau distillery where you will tour their facility, taste some of their wares, and learn how to make a Kafi Lutz – Think of it as the Swiss version of an Irish coffee but with more rules.'
      ],
      accommodation: "Hotel des Balances, Lucerne",
      includedActivities: ["Kambly biscuit factory visit", "Willisau distillery tour"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath("kambly.jpeg"), 
        getImagePath("luzern.jpg"), 
        getImagePath("diwisa.png")
      ]
    },
    {
      day: 7,
      title: "Lucerne to Interlaken",
      description: [
        'After leaving Luzern we first head for the glass manufacturer found in many a Swiss household –Glasi Hergiswil. Operating since 1817, Hergiswil offer a wide array of offerings in their outlet store as well as being able to view the masters at work.',
        'We then head to the birthplace of meringues - Meiringen - for lunch. A wander through the Aare Gorge and a quick detour to the Reichenbach Falls made famous in the Sherlock Holmes stories, before ending up in Interlaken.'
        ],
      accommodation: "Hotel Interlaken or similar",
      includedActivities: [
        "Glasi Hergiswil glass factory visit",
        "Meringue tasting in Meiringen",
        "Aare Gorge walk",
        "Reichenbach Falls visit"
      ],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath("hergiswil.jpg"), 
        getImagePath("meringue.jpg"), 
        getImagePath("meiringen.jpg")
      ]
    },
    {
      day: 8,
      title: "Interlaken Free Day",
      description:[ 
        'Your chance to explore the town of Interlaken in your own way and at your own pace. Maybe you want to head up Mount Pilatus or take a boat ride on Lake Thun or Lake Brienz. If youre feeling adventurous, then why not try paragliding or canyoning.',
      'If those arent your thing, you can choose to join us on a day trip around the lake, enjoy breakfast at the top of the pyramid of Switzerland -Mount Niesen- with one of the steepest funiculars in Switzerland (68% incline), then a stop in Thun before heading to the St. Beatus caves.',
      'If you would like to join us on this excursion, please let us know as there is an extra charge associated with it.'
      ],
      accommodation: "Hotel Interlaken or similar",
      optionalActivities: [
        "Mount Niesen funicular and breakfast excursion",
        "Lake Thun boat cruise",
        "St. Beatus caves visit",
        "Paragliding or canyoning adventures"
      ],
      meals: ["Breakfast"],
      images: [
        getImagePath("niesen.jpeg"), 
        getImagePath("niesen_view.jpg"), 
        getImagePath("beatus.jpg"), 
        getImagePath("niesenbfast.jpg")
      ]
    },
    {
      day: 9,
      title: "Interlaken to Montreux",
      description:[ `Board the GoldenPass Express, one of Switzerland's most picturesque train routes. The journey on the panoramic train of the GoldenPass Express takes you through the Bernese Oberland before arriving in Montreux, where the bus will be waiting with your luggage to take you to the hotel.`],
      accommodation: "Hotel Eden Palace au Lac, Montreux",
      includedActivities: ["GoldenPass Express scenic train journey"],
      meals: ["Breakfast"],
      images: [
        getImagePath("gpass.jpg"), 
        getImagePath("gpass2.jpeg"), 
        getImagePath("gpass3.jpeg")
      ]
    },
    {
      day: 10,
      title: "Vevey and Lavaux",
      description: ["The morning is yours to explore the town of Vevey. Maybe it's the Alimentarium (Food Museum) or the Charlie Chaplin museum that takes your fancy. Or perhaps you just want to stroll along the lakefront and take in the views of the Alps across the water (hint: look out for the fork in the lake).",
      'In the afternoon we head for the UNESCO World Heritage site of Lavaux. Here, well take a walk through the vineyards and learn about the history of wine production in the region before finishing up with a tasting of some of the local offerings.'
      ],
      accommodation: "Hotel Eden Palace au Lac, Montreux",
      includedActivities: ["Lavaux vineyard walk", "Wine tasting session"],
      optionalActivities: [
        "Alimentarium Food Museum visit",
        "Charlie Chaplin museum visit"
      ],
      meals: ["Breakfast"],
      images: [
        getImagePath("lavaux.jpeg"), 
        getImagePath("lavaux2.jpg"), 
        getImagePath("lavaux3.jpeg")
      ]
    },
    {
      day: 11,
      title: "Montreux and Maison Cailler",
      description: [`Head to Montreux where you can choose to wander the lakefront, visit the Queen museum or have your photo taken with the band's singer - Freddie Mercury.`,
      'Well then head to Maison Cailler – Switzerlands oldest chocolate factory and the place that invented milk chocolate. Here, youll learn about the history of chocolate in Switzerland and how it is made before having the opportunity to make your own chocolate bar.',
      'Finally, we head back to Montreux for a farewell dinner with the group'
      ],
      accommodation: "Hotel Eden Palace au Lac, Montreux",
      includedActivities: [
        "Maison Cailler chocolate experience",
        "Make your own chocolate bar",
        "Farewell dinner with entertainment"
      ],
      optionalActivities: [
        "Queen museum visit",
        "Photo with Freddie Mercury statue"
      ],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath("freddie.jpeg"), 
        getImagePath("Cailler_3.jpg"), 
        getImagePath("cailler2.jpg")
      ]
    },
    {
      day: 12,
      title: "Geneva Departure",
      description:[ 
      'After the last group breakfast, and a chance to say goodbye to your new friends, we head to Geneva where the tour, sadly, ends.',
      'If you have time before your flight, then maybe visit the United Nations headquarters or the Red Cross museum'
        ],
      optionalActivities: [
        "United Nations headquarters visit",
        "Red Cross museum visit"
      ],
      meals: ["Breakfast"],
      images: [
        getImagePath("geneva.jpeg"), 
        getImagePath("geneva2.jpeg"), 
        getImagePath("geneva3.jpeg")
      ]
    }
  ]
}