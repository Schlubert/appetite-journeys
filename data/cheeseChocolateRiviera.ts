// data/cheeseChocolateRiviera.ts

import { getImagePath } from '../utils/paths';

export type OptionalActivity = {
  name: string;
  description: string;
  price: string;
  duration?: string;
  extra?: string;
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

// Simplified Tour type - only data NOT in constants.ts
export type TourDetails = {
  name: string;
  summary: string[];
  heroImages: string[];
  itinerary: ItineraryStop[];
  durationDays?: number;
  singleSupplement?: string;
};

export const cheeseChocolateRiviera: TourDetails = {
  name: "Cheese, Chocolate and the Swiss Riviera",
  durationDays: 12,
  summary: [
    "Explore the north and west of Switzerland. From lakefront to mountain tops, distilleries and bakeries to cheesemakers and chocolate factories, this tour has it all.",
    "Discover the cities of Zurich, Basel, Bern, Lucerne, Interlaken, Montreux and Geneva as well as the towns of Murten and Vevey. Experience the UNESCO World Heritage sites of Bern and Lavaux. Ride on the GoldenPass Express and the Interlaken Express. Visit traditional smokehouses, glass factories, biscuit manufacturers, wineries and more.",
    "Indulge in Swiss specialities such as fondue, raclette, rösti, läckerli, Nidlechueche, Kafi Lutz and of course, chocolate.",
    "With a mix of included activities and free time to explore on your own, this tour offers the perfect balance of structure and flexibility.",
    "Join us for an unforgettable journey through one of Europe's most beautiful and delicious countries."
  ],
  heroImages: [
    getImagePath("Fumoir.jpg"),
    getImagePath("Basel.jpeg"),
    getImagePath("bern1.jpg"),
    getImagePath("kambly.jpeg"),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich",
      description:[
        "Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
        "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
        "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip."
      ],
      accommodation: "Zurich",
      includedActivities: ["Welcome dinner"],
      optionalActivities: ["-"],
      meals: ["Dinner"],
      images: [
        getImagePath("ragusa.jpg"),
        getImagePath("niesen.jpeg"),
        getImagePath("luzern.jpg")
      ]
    },
    {
      day: 2,
      title: "Zurich to Basel",
      description:[ 
        "After enjoying breakfast at the hotel, board the bus as the journey begins. After our first crossing of the Aare river (we'll see her several more times) we travel through the Canton of Aargau and into the Jurapark Aargau – a regional nature park. After a few stops to soak up the view, we arrive at the doors of the Swiss icon – Läckerlihuus and your first taste of the most famous version of this biscuit specific to Switzerland.",
        "We then head into the medieval city of Basel but not before visiting the oldest biscuit manufacturer in Switzerland and a family business for over 270 years.",
        "After arriving at the hotel, we'll go for a walking tour of some of the highlights of the old town before having some free time to explore.",
        "Then, dinner at a restaurant that offers some local specialties."
      ],
      accommodation: "Basel",
      includedActivities: [
        "Bakery visits and läckerli tastings",
        "Walking tour of Basel's Old Town"
      ],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [getImagePath("Basel.jpeg"), getImagePath("BaselOldTown.jpg"), getImagePath("Lackerli.jpeg")]
    },
    {
      day: 3,
      title: "Basel Free Day",
      description:[ 
        "Your opportunity to explore the city of Basel at your leisure. You can visit the Kunstmuseum, the Fondation Beyeler, or the Vitra Design Museum. If those don't interest you, then you can take a walk along the Rhine river or visit the Tinguely Fountain.",
        "You also have the opportunity to join us for a tour of some local wineries and farm shops.",
        "If you would like to join us on this excursion, please let us know as there is an extra charge associated with it."
      ],
      accommodation: "Basel",
      includedActivities: ["-"],
      optionalActivities: [
        "Excursion to some of the wineries and farm shops in the Basel-Landschaft region"
      ],
      optionalActivitiesDetailed: [
        {
          name: "Basel-Landschaft Wine & Farm Experience",
          description: "Escape the city for a delightful journey through the rolling hills of Basel-Landschaft, where centuries-old winemaking traditions meet modern Swiss agriculture. This half-day excursion takes you to two carefully selected family-run estates that epitomize the region's commitment to quality and sustainability. Begin at a boutique winery where you'll walk through sun-drenched vineyards, learn about the unique terroir that gives these wines their distinctive character, and enjoy a guided tasting of 4-5 wines including Pinot Noir, Riesling-Silvaner, and the region's specialty Chasselas. Next, visit a traditional farm shop bursting with local produce – artisanal cheeses, cured meats, fresh preserves, and seasonal vegetables. Meet the farmers, hear their stories, and have the opportunity to purchase authentic Swiss products to take home. The experience includes transportation by private coach, all tastings, and light refreshments.",
          price: "NZ$255 per person",
          duration: "4-5 hours",
          included: [
            "Private coach transportation",
            "Guided winery tour with English-speaking guide",
            "Wine tasting of 4-5 regional wines",
            "Visit to traditional farm shop"
          ],
          images: [],
          bookingNote: "Minimum 4 participants required. Must be booked at least 7 days in advance. Not suitable for children under 18."
        }
      ],
      meals: ["Breakfast"],
      images: [getImagePath("basel-landschaft.jpg"), getImagePath("farmshop.jpg"), getImagePath("Weinbau-Rebschule-Melbinger-12.jpg")]
    },
    {
      day: 4,
      title: "Basel to Bern",
      description:[ 
        "Today, we head to the UNESCO World Heritage Site of Bern. Considered Switzerland's capital, it is one of the most photographed cities in the world.",
        "On the way, we'll stop in on a smokehouse that has been operating a traditional-style operation for more than 300 years. Then, on towards our first chocolate stop – Camille Bloch – makers of chocolate creations such as Ragusa and Torino.",
        "Our final stop on the journey is Murten, an amazingly picturesque village and home of the Nidlechueche. Nobody makes it better than here.",
        "After we arrive at the hotel, there is a little time to relax and recharge before heading off to restaurant where you can try iconic dishes like fondue and raclette, or regional ones like the rösti."
      ],
      accommodation: "Bern",
      includedActivities: [
        "Fumoir Champoz tasting",
        "Visit to Camille Bloch chocolate factory",
        "Slice of Nidlechueche in Murten"
      ],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      images: [
        getImagePath("Fumoir.jpg"), 
        getImagePath("nidle.jpg"), 
        getImagePath("ragusa.jpg")
      ]
    },
    {
      day: 5,
      title: "Bern",
      description:[ 
        "Start with breakfast overlooking the Aare River and the city before a walking tour of the highlights of the old city including seeing the bears that give the city its name.",
        "The rest of the day is for you to explore this picturesque city."
      ],
      accommodation: "Bern",
      includedActivities: [
        "Walking tour of Bern's Old Town",
      ],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [
        getImagePath("bern1.jpg"), 
        getImagePath("bern2.jpg"), 
        getImagePath("bern_munster.jpg")
      ]
    },
    {
      day: 6,
      title: "Bern to Lucerne",
      description:[ 
        "Today, we head from the beautiful city of Bern to what is often described as one of the most attractive destinations in Europe – Luzern (Lucerne).",
        "Home to the subject of more photos that probably any other wooden bridge in the world (Chapel Bridge); the Lion Monument; and outstanding views from the Musegg Wall, Luzern is like a scene from a fairytale.",
        "On the way we'll explore more of the Swiss love for biscuits at the country's largest biscuit manufacturer – Kambly. Sample from their huge array of biscuits before heading off to discover the secrets behind the Willisauer Ringli, still being made the same way since 1848.",
        "Then we go in search of something to wash it down at the Willisau distillery where you will tour their facility, taste some of their wares, and learn how to make a Kafi Lutz – think of it as the Swiss version of an Irish coffee but with more rules.",
        "Our day finishes with a stroll along the lakefront on the way to dinner and a show of traditional Swiss entertainment."
      ],
      accommodation: "Luzern",
      includedActivities: [
        "Kambly biscuit factory visit", 
        "Willisau distillery tour and class",
        "Bakery tour and tasting", 
        "Cultural dinner with entertainment"
      ],
      optionalActivities: ["-"],
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
        "After leaving Luzern we first head for the glass manufacturer found in many a Swiss household – Glasi Hergiswil. Operating since 1817, Hergiswil offer a wide array of product in their outlet store as well as being able to view the masters at work.",
        "We then catch the Interlaken Express from Luzern. On the way, we'll make a quick detour to the Reichenbach Falls made famous in the Sherlock Holmes stories, and enjoy afternoon tea in the birthplace of meringues – Meiringen.",
        "After looking around the beautiful town of Meiringen we'll head towards our final stop for the night in Interlaken."
      ],
      accommodation: "Interlaken",
      includedActivities: [
        "Glasi Hergiswil glass factory visit",
        "Interlaken Express Train",
        "Reichenbach Falls visit (weather permitting)",
        "Dinner above Interlaken, at Harder Kulm"
      ],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
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
        "Your chance to explore the town of Interlaken in your own way and at your own pace. Maybe you want to head up Mount Pilatus or take a boat ride on Lake Thun or Lake Brienz. If you're feeling adventurous, then why not try paragliding or canyoning.",
        "If those aren't your thing, you can choose to join us on a day trip around the lake, enjoy breakfast at the top of the pyramid of Switzerland - Mount Niesen - with one of the steepest funiculars in Switzerland (68% incline), then a stop in Thun before heading to the St. Beatus caves.",
        "If you would like to join us on this excursion, please let us know as there is an extra charge associated with it."
      ],
      accommodation: "Interlaken",
      includedActivities: ["-"],
      optionalActivities: [
        "Mount Niesen funicular and breakfast excursion",
        "A visit to Thun",
        "St. Beatus caves visit"
      ],
      optionalActivitiesDetailed: [
        {
          name: "Mount Niesen Pyramid Breakfast & Lake Thun Experience",
          description: "Embark on an unforgettable morning adventure to the 'Swiss Pyramid' – Mount Niesen. Board one of the world's steepest funiculars (68% gradient!) for a breathtaking 30-minute ascent through alpine meadows and forests to the 2,362-meter summit. At the top, enjoy a hearty Swiss breakfast on the panoramic terrace with 360-degree views spanning the Bernese Alps, including the Eiger, Mönch, and Jungfrau. On clear days, you can see over 200 mountain peaks! After breakfast and time to explore the summit, descend and travel along the shores of Lake Thun to the charming medieval town of Thun. Wander the cobblestone streets, visit the 12th-century castle, or enjoy a coffee by the waterfront. The excursion concludes with a visit to the mystical St. Beatus Caves, where you'll explore a stunning underground world of stalactites, stalagmites, and underground waterfalls that have formed over millions of years. Legend says these caves were once home to a dragon defeated by the Irish monk, St. Beatus.",
          price: "NZ$295 per person",
          duration: "Full day (8-9 hours)",
          included: [
            "Return funicular tickets to Mount Niesen summit",
            "Swiss breakfast at the summit restaurant",
            "Private coach transportation",
            "Entry to St. Beatus Caves",
            "Tour escort throughout the day"
          ],
          images: [],
          bookingNote: "Weather dependent. Funicular operates May-October (weather permitting). Warm jacket recommended even in summer. Not recommended for those with mobility issues or claustrophobia. Minimum 6 participants required."
        }
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
      description:[ 
        "Board the GoldenPass Express, one of Switzerland's most picturesque train routes. The journey on the panoramic train of the GoldenPass Express takes you through the Bernese Oberland before arriving in Montreux. After wandering through Montreux, we take to the water and take the ferry to Lausanne."
      ],
      accommodation: "Lausanne",
      includedActivities: ["GoldenPass Express scenic train journey"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath("gpass.jpg"), 
        getImagePath("gpass2.jpeg"), 
        getImagePath("gpass3.jpeg")
      ]
    },
    {
      day: 10,
      title: "Vevey and Lavaux",
      description: [
        "The morning is yours to explore the area. Maybe it's the Alimentarium (Food Museum) or the Charlie Chaplin museum - both nearby in Vevey - that takes your fancy. Or perhaps you just want to visit the Olympic Museum before finding a spot on the lake front and enjoy the view. There is plenty to choose from.",
        "In the afternoon we head for the UNESCO World Heritage site of Lavaux. Here, we'll take a walk through the vineyards and learn about the history of wine production in the region before finishing up with a tasting of some of the local offerings."
      ],
      accommodation: "Lausanne",
      includedActivities: ["Lavaux vineyard walk", "Wine tasting session"],
      optionalActivities: ["-"],
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
      description: [
        "Head to Montreux where you can choose to wander the lakefront, visit the Queen museum or have your photo taken with the band's singer - Freddie Mercury.",
        "We'll then head to Maison Cailler – Switzerland's oldest chocolate factory and the place that invented milk chocolate. Here, you'll learn about the history of chocolate in Switzerland and how it's made, before having the opportunity to make your own chocolate bar.",
        "Finally, we head back to Montreux for a farewell dinner with the group"
      ],
      accommodation: "Lausanne",
      includedActivities: [
        "Maison Cailler chocolate experience",
        "Make your own chocolate bar",
        "Farewell dinner with entertainment"
      ],
      optionalActivities: ["-"],
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
        "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Geneva where the tour, sadly, ends.",
        "If you have time before your flight, then maybe visit the United Nations headquarters or the Red Cross museum"
      ],
      includedActivities: ["Transfer to Geneva airport or train station"],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [
        getImagePath("geneva.jpeg"), 
        getImagePath("geneva2.jpeg"), 
        getImagePath("geneva3.jpeg")
      ]
    }
  ]
}