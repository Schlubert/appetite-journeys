// data/cakes.ts
import { getImagePath } from '../utils/paths';

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

// Simplified Tour type - only data NOT in constants.ts
export type TourDetails = {
  name: string;
  heroImages: string[];
  summary: string[];
  itinerary: ItineraryStop[];
};

export const cakes: TourDetails = {
  name: "The Cakes Trail",
  heroImages: [
    getImagePath('banner.jpg'),
  ],
  summary: [
    "Indulge your sweet tooth on a delectable 17-day journey through Central Europe, exploring the rich culinary traditions of Switzerland, France, Germany, and Austria. From the iconic Black Forest Cake in Germany to the exquisite Sachertorte in Austria, this tour is a celebration of the region's most famous cakes and pastries.",
    "Along the way, immerse yourself in the local culture, visit historic landmarks, and enjoy hands-on baking workshops with expert pastry chefs.",
    "Whether you're a seasoned baker or simply a lover of all things sweet, this tour promises an unforgettable experience filled with delicious treats and cultural delights."
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich",
      description: [
        "Guten Tag, Bonjour, and Grüezi mitenand! Welcome to an unforgettable culinary journey through 5 countries as we go in search of some of the worlds most famous and delicious cakes and pastries, all while exploring the rich culture and stunning landscapes of Central Europe",
        "Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
        "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
        "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip."
      ],
      accommodation: "Zurich",
      includedActivities: ["Welcome Dinner"],      
      meals: ["Dinner"],
      images: [
        getImagePath('abbey.jpg'),
      ]
    },
    {
      day: 2,
      title: "Zurich to Strasbourg via The Black Forest",
      description: [
        "Dive straight into a tour dedicated to cakes and pastries with a visit to the world-famous Black Forest region, home of the iconic Black Forest Cake (Schwarzwälder Kirschtorte).",
        "Continue towards Strasbourg, stopping at a winery & distillery to learn about the production of a variety of local wines & spirits, and enjoy a tasting session.",
        "Arrive in Strasbourg in the evening and check into your accommodation before heading out for a group dinner at a local restaurant."
      ],
      accommodation: "Strasbourg",
      includedActivities: ["Guided city tour", "Local bakery visit"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('triberg2.jpg'),
        getImagePath('black_forest_gat.jpg'),
        getImagePath('StrasbourgCathedral.jpg'),
      ]
    },
    {
      day: 3,
      title: "Strasbourg",
      description: [
        "Spend the morning on a guided walking tour of Strasbourg's historic center, a UNESCO World Heritage site, exploring its charming streets and iconic landmarks. Along the way, visit bicuiteries, patisseries, andbe introduced to a very Alsatian specialty: the Kougelhopf, a delightful cake that perfectly encapsulates the region's rich culinary heritage.",
        "The afternoon is then yours to explore Strasbourg at your leisure. "
      ],
      accommodation: "Strasbourg",
      includedActivities: ["Morning pastry workshop", "Afternoon free time"],
      optionalActivities: ["Mountain excursion"],
      meals: ["Breakfast"],
      images: [
        getImagePath('stras1.jpg'),
        getImagePath('stras2.jpg'),
        getImagePath('biscuiterie.jpg'),
      ]
    },
    {
      day: 4,
      title: "Strasbourg to Zug",
      description: [
        "Today, journey from Strasbourg to Zug, Switzerland, known for its picturesque landscapes and rich culinary traditions.",
        "Along the way we stop at one of the most photographed cities in France, Colmar. A place so like a fairytale that Disney is said to have used it as inspiration for the setting of Beauty and the Beast.",
        "There is one more stop on the way to Zug - a visit to Läckerli Huus in Basel, where you can learn about and sample Basel's famous spiced cookies, Läckerli.",
      ],
      accommodation: "Zug",
      includedActivities: ["Chocolate factory tour", "Tasting session"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath('colmar.jpg'),
        getImagePath('BaselOldTown.jpg'),
        getImagePath('Lackerli.jpeg'),
      ]
    },
    {
      day: 5,
      title: "Zug",
      description: [
        "Learn how to make Zuger Kirschtorte, a delectable cherry cake that is a specialty of the region, during a hands-on baking workshop with a local pastry chef.",
        "Another distillery beckons today, this time to learn about the production of Kirsch in Zug and sample a selection of schnapps.",
      ],
      accommodation: "Zug",
      includedActivities: ["Historic bakery visit", "Traditional baking demonstration"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('kirschtorte.jpg'),
        getImagePath('etter.jpeg'),
      ]
    },
    {
      day: 6,
      title: "Zug to the Bavarian Alps",
      description: [
        "Four countries in one day!",
        "Today we travel from Switzerland, stopping at in Liechtenstein for a visit to the Princely Winery and sample some wines from the royal estate, then on to Austria for lunch, before crossing into Germany and arriving in the Bavarian Alps."
      ],
      accommodation: "Garmisch-Partinkirchen",
      includedActivities: ["Morning market tour", "Cooking class"],
      optionalActivities: ["-"],
      meals: ["Breakfast"],
      images: [
        getImagePath('hoffkeller_li.jpg'),
        getImagePath('hoffkeller_li2.jpg'),
      ]
    },
    {
      day: 7,
      title: "Up the Zugspitze",
      description: [
        "Today we ascend Germany's highest peak, the Zugspitze, via cogwheel train and cable car, taking in breathtaking alpine views along the way.",
        "The afternoon is yours to enjoy. Maybe you want to explore the charming alpine village at the base of the mountain, spend some time at (or on) lake Eibsee, or relax and soak in the scenery."
      ],
      accommodation: "Garmisch-Partinkirchen",
      includedActivities: ["Scenic train journey", "Village exploration"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('zugspitze.jpg'),
        getImagePath('zugspitze2.jpg'),
      ]
    },
    {
      day: 8,
      title: "To Salzburg",
      description: [
        "Spend a relaxing day travelling through the bavarian region, visiting various villages, towns, and lakes along the way.",
        "Enjoy lunch in a Bräustüberl (brewery/pub) that dates back to 1675 and savour some traditional Bavarian cuisine like weisswurst, pretzels, pork knuckles, apple Kiacherl (doughnut) and, of course, a stein of locally brewed beer.",
        "After enjoying the hospitality of the region, we continue our journey taking in the stunning scenery, visiting a few more villages, and stopping at Bavaria's largest lake, before arriving in Salzburg."
      ],
      accommodation: "Salzburg",
      includedActivities: ["Patisserie workshop", "Afternoon tea experience"],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath('beer_bretzel.jpg'),
        getImagePath('seebruck.jpg'),
      ]
    },
    {
      day: 9,
      title: "Salzburg and Surrounds",
      description: [
        "Plenty to do today starting with a visit to one of the salt mines that give the city its name.",
        "Then, off to a konditorei for lunch and an introduction to Mozartkugeln, a local specialty created in Salzburg in 1890.",
        "In the afternoon, we have another hands-on workshop, this time learning how to make another local specialty - nockerln - and the world famousApfelstrudel"
      ],
      accommodation: "Salzburg",
      includedActivities: ["Museum visit", "Guided walking tour"],
      meals: ["Breakfast"],
      images: [
        getImagePath('strudel.jpg'),
        getImagePath('nockerl.jpg'),
      ]
    },
    {
      day: 10,
      title: "Salzburg Free Day",
      description: [
        "A day to explore Salzburg at your leisure. Maybe visit the Hohensalzburg Fortress, Mirabell Palace, Mozart's birthplace, or take a Sound of Music tour.",
        "There are plenty of options and no shortage of cafes and patisseries to discover.",
        "Remember that Salzburg is the birthplace of Mozart and a great place to take in a classical music concert."
      ],
      accommodation: "Salzburg",
      includedActivities: ["Cheese dairy visit", "Tasting session"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('salzburg1.jpg'),
        getImagePath('mozartkugeln.jpg'),
        getImagePath('salzburg2.jpg'),
      ]
    },
    {
      day: 11,
      title: "Salzburg to Linz",
      description: [
        "With plenty of stops and much to see along the way, we spend today driving through some of the most photographed villages and mountain vistas in Austria.",
        "Along the way we visit postcard-perfect villages with histories dating back thousands of years, including the home of the world's oldest salt mine - Hallstatt.",
        "Continuing on, we visit the picturesque town of Gmunden on the shores of Lake Traunsee, known for its beautiful ceramics and stunning lakeside views.",
        "Finally, after a day of exploring, we head to the home of what is reported to be the oldest known cake recipe in the world - Linz and the Linzertorte." 
      ],
      accommodation: "Linz",
      includedActivities: ["Artisan bakery tour", "Bread making workshop"],
      meals: ["Breakfast"],
      images: [
        getImagePath('hallstatt.jpg'),
        getImagePath('gmunder.jpg'),
        getImagePath('gosau.jpg'),
      ]
    },
    {
      day: 12,
      title: "Linz",
      description: [
        "Learn how to make the famous Linzertorte in a hands-on baking workshop with a local pastry chef, discovering the secrets behind this delicious treat.",
        "The afternoon is yours to explore the city. Maybe stroll along the Danube River, marvel at the architecture of the Mariendom (New Cathedral), or take in a performance at the Brucknerhaus.",
        "If art is your thing, then visit the Lentos Art Museum, or wander one of the biggest Graffiti parks in Europe - the Mural Harbor."],
      accommodation: "Linz",
      includedActivities: ["Morning at leisure", "Evening cultural performance"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('linzer.jpg'),
        getImagePath('linz.jpg'),
        getImagePath('linz2.jpg'),
      ]
    },
    {
      day: 13,
      title: "Linz to Vienna",
      description: [
        "Follow the Danube as we drive through the Wachau Valley, a UNESCO World Heritage site, before taking to the water and enjoying a cruise along the river, passing vineyards, charming villages, and historic castles.",
        "The bus meets us at the other end of the cruise and we head off to visit  a local winery to sample some of the regions finest wines.",
        "Then, on to another regional specialty - Marillonlikör - a delicious apricot liqueur produced in the Wachau Valley. We'll visit a distillery to learn about the production process and enjoy a tasting session.",
      "Then, relax and enjoy the scenic drive to Vienna.",
      "Finish the day with dinner at the restaurant that actually created the famous Wiener Schnitzel and, dessert at one of Vienna's most famous coffee houses."],
      accommodation: "Vienna ",
      includedActivities: ["Confectionery workshop", "Sweet treats tasting"],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath('wachau1.jpg'),
        getImagePath('melk.jpg'),
        getImagePath('cafe_central.jpg'),
      ]
    },
    {
      day: 14,
      title: "Vienna",
      description: [
        "Start the day with a walking tour of Vienna's historic center, a UNESCO World Heritage site, exploring iconic landmarks such as St. Stephen's Cathedral, Hofburg Palace, and the State Opera House.",
        "Along the way we'll visit both The Hotel Sacher and Demel, the two most famous patisseries in Vienna, and the participants in what has become known as the 'Vienna Cake War' - a rivalry that has lasted over 100 years.",
        "The afternoon is then yours to start exploring Vienna."
      ],
      accommodation: "Vienna",
      includedActivities: ["Historic site visit", "Traditional lunch experience"],
      optionalActivities: ["-"],
      meals: ["Breakfast", "Lunch"],
      images: [
        getImagePath('vienna1.jpg'),
        getImagePath('demel1.jpg'),
        getImagePath('sacher1.jpg'),
      ]
    },
    {
      day: 15,
      title: "Vienna Free Day",
      description: [
        "There is so much to see and do in Vienna and one day is not enough to experience it all. So, today is yours to explore as much of as you can.",
        "The list of things to see and do is endless - visit the Belvedere Palace, explore the Kunsthistorisches Museum, stroll through the Naschmarkt, walk in the Prater park, or take in a classical music concert at one of the city's many venues.",
        "we'll happily provide suggestions and assistance to help you make the most of your day."
      ],
      accommodation: "Vienna",
      includedActivities: ["Morning baking session", "Farewell market visit"],
      meals: ["Breakfast", "Dinner"],
      images: [
        getImagePath('vienna5.jpg'),
        getImagePath('naschmarkt.jpg'),
        getImagePath('vienna3.jpg'),
        
      ]
    },
    {
      day: 16,
      title: "Schönbrunn Palace and farewell dinner",
      description: [
        "Visit the magnificent Schönbrunn Palace, a UNESCO World Heritage site and former imperial summer residence, exploring its opulent rooms and stunning gardens.",
        "Take a break from touring the palace and enjoy a special demonstration by the team from Gerstner Imperial and Royal Court Confectionery, demonstrating how they make apfelstrudel fit for the imperial court.",
        "In the evening, gather with your fellow travellers for a farewell dinner to celebrate the end of an unforgettable journey through Central Europe."
      ],
      accommodation: "Vienna",
      includedActivities: ["breakfast", "Free time for shopping"],
      meals: ["Breakfast"],
      images: [
        getImagePath('schoenbrunn.jpg'),
        getImagePath('schoenbrunn2.jpg'),
        getImagePath('gerstner.jpg'),
      ]
    },
    {
      day: 17,
      title: "Departure",
      description: [
        "After the last group breakfast, and a chance to say goodbye to your new friends, our tour, sadly, comes to an end.",
        "If you can extend your stay in Vienna, we highly recommend it - there is so much more to see and do in this incredible city.",
        "For those needing airport or train station transfers, group transport will be provided."
      ],
      accommodation: "-",
      includedActivities: ["Group transfer to airport", "Tour concludes"],
      meals: ["Breakfast"],
      images: [
        getImagePath('placeholder16.jpg'),
      ]
    },
  ]
};