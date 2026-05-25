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
  title: { en: string; fr: string; de: string };
  description: { en: string[]; fr: string[]; de: string[] };
  accommodation?: { en: string; fr: string; de: string };
  includedActivities?: { en: string[]; fr: string[]; de: string[] };
  optionalActivities?: { en: string[]; fr: string[]; de: string[] };
  optionalActivitiesDetailed?: OptionalActivity[];
  meals?: { en: string[]; fr: string[]; de: string[] };
  images?: string[];
};

export type TourDetails = {
  name: { en: string; fr: string; de: string };
  summary: { en: string[]; fr: string[]; de: string[] };
  heroImages: string[];
  itinerary: ItineraryStop[];
  durationDays?: number;
  singleSupplement?: string;
  mapImage?: string;
  whatsIncluded?: { en: string[]; fr: string[]; de: string[] };
  inclusions?: { en: string[]; fr: string[]; de: string[] };
};

export const cheeseChocolateRiviera: TourDetails = {
  name: {
    en: "Cheese, Chocolate and the Swiss Riviera",
    fr: "Fromage, Chocolat et la Riviera Suisse",
    de: "Käse, Schokolade und die Schweizer Riviera"
  },
  mapImage: getImagePath('West.png'),
  durationDays: 12,
  summary: {
    en: [
      "Explore the north and west of Switzerland. From lakefront to mountain tops, distilleries and bakeries to cheesemakers and chocolate factories, this tour has it all.",
      "Discover the cities of Zurich, Basel, Bern, Lucerne, Interlaken, Montreux and Geneva as well as the towns of Murten and Vevey. Experience the UNESCO World Heritage sites of Bern and Lavaux. Ride on the GoldenPass Express and the Interlaken Express. Visit traditional smokehouses, glass factories, biscuit manufacturers, wineries and more.",
      "Indulge in Swiss specialities such as fondue, raclette, rösti, läckerli, Nidlechueche, Kafi Lutz and of course, chocolate.",
      "With a mix of included activities and free time to explore on your own, this tour offers the perfect balance of structure and flexibility.",
      "Join us for an unforgettable journey through one of Europe's most beautiful and delicious countries.",
    ],
    fr: [
      "Explorez le nord et l'ouest de la Suisse. Du bord du lac aux sommets montagneux, des distilleries et boulangeries aux fromageries et fabriques de chocolat, ce circuit a tout pour plaire.",
      "Découvrez les villes de Zurich, Bâle, Berne, Lucerne, Interlaken, Montreux et Genève ainsi que les villes de Morat et Vevey. Vivez les sites du patrimoine mondial de l'UNESCO de Berne et du Lavaux. Montez à bord du GoldenPass Express et de l'Interlaken Express.",
      "Régalez-vous de spécialités suisses telles que la fondue, la raclette, le rösti, le läckerli, le Nidlechueche, le Kafi Lutz et bien sûr, le chocolat.",
      "Avec un mélange d'activités incluses et de temps libre pour explorer à votre rythme, ce circuit offre l'équilibre parfait entre structure et flexibilité.",
      "Rejoignez-nous pour un voyage inoubliable à travers l'un des pays les plus beaux et les plus délicieux d'Europe.",
    ],
    de: [
      "Erkunden Sie den Norden und Westen der Schweiz. Von Seeufern bis zu Berggipfeln, von Destillerien und Bäckereien bis zu Käsereien und Schokoladenfabriken.",
      "Entdecken Sie die Städte Zürich, Basel, Bern, Luzern, Interlaken, Montreux und Genf sowie die Städtchen Murten und Vevey.",
      "Genießen Sie Schweizer Spezialitäten wie Fondue, Raclette, Rösti, Läckerli, Nidlechueche, Kafi Lutz und natürlich Schokolade.",
      "Mit einer Mischung aus inkludierten Aktivitäten und freier Zeit bietet diese Tour die perfekte Balance.",
      "Begleiten Sie uns auf einer unvergesslichen Reise durch eines der schönsten Länder Europas.",
    ],
  },
  heroImages: [
    getImagePath("ch/Fumoir.jpg"),
    getImagePath("ch/Basel.jpeg"),
    getImagePath("ch/bern1.jpg"),
    getImagePath("ch/kambly.jpeg"),
  ],
  inclusions: {
    en: [
      "Services of an experienced tour leader born and raised in Switzerland, fluent in the main languages of Switzerland",
      "Insights and explanations from a baker and chef with more than 30 years experience in the food industry",
      "Hotel accommodation (twin share)",
      "Daily breakfasts",
      "4 dinners and a multitude of Swiss delicacies along the way",
      "Transportation in an air conditioned coach",
      "GoldenPass Express scenic train journey",
      "Interlaken Express train journey",
      "Läckerli tastings at Läckerlihuus and oldest biscuit manufacturer in Switzerland",
      "Fumoir Champoz smokehouse tasting",
      "Visit to Camille Bloch chocolate factory",
      "Slice of Nidlechueche in Murten",
      "Walking tour of Bern's Old Town",
      "Kambly biscuit factory visit",
      "Willisau distillery tour and Kafi Lutz class",
      "Bakery tour and tasting in Willisau",
      "Cultural dinner with traditional Swiss entertainment in Lucerne",
      "Glasi Hergiswil glass factory visit",
      "Reichenbach Falls visit (weather permitting)",
      "Lavaux vineyard walk and wine tasting",
      "Maison Cailler chocolate experience including making your own chocolate bar",
      "Farewell dinner with entertainment",
      "All applicable taxes",
      "Luggage transfers between hotels",
      "Advice and support prior to and during the tour",
      "Small group size (max 12)",
      "A few extra surprises and mementos along the way",
    ],
    fr: [
      "Services d'un guide expérimenté né et élevé en Suisse, parlant couramment les principales langues suisses",
      "Conseils et explications d'un boulanger et chef cuisinier avec plus de 30 ans d'expérience dans l'industrie alimentaire",
      "Hébergement en hôtel (chambre double)",
      "Petits-déjeuners quotidiens",
      "4 dîners et une multitude de spécialités suisses tout au long du voyage",
      "Transport en car climatisé",
      "Voyage en train panoramique GoldenPass Express",
      "Voyage en train Interlaken Express",
      "Dégustations de Läckerli chez Läckerlihuus et chez le plus ancien fabricant de biscuits de Suisse",
      "Dégustation au fumoir Champoz",
      "Visite de la fabrique de chocolat Camille Bloch",
      "Tranche de Nidlechueche à Morat",
      "Visite guidée de la vieille ville de Berne",
      "Visite de la fabrique de biscuits Kambly",
      "Visite de la distillerie de Willisau et cours Kafi Lutz",
      "Visite et dégustation en boulangerie à Willisau",
      "Dîner culturel avec spectacle traditionnel suisse à Lucerne",
      "Visite de la verrerie Glasi Hergiswil",
      "Visite des chutes de Reichenbach (selon météo)",
      "Promenade dans les vignobles de Lavaux et dégustation de vins",
      "Expérience Maison Cailler incluant la fabrication de votre propre tablette de chocolat",
      "Dîner d'adieu avec spectacle",
      "Toutes taxes applicables",
      "Transferts de bagages entre les hôtels",
      "Conseils et soutien avant et pendant le circuit",
      "Petit groupe (max 12)",
      "Quelques surprises supplémentaires et souvenirs en chemin",
    ],
    de: [
      "Leistungen eines erfahrenen Reiseleiters, geboren und aufgewachsen in der Schweiz",
      "Einblicke eines Bäckers und Kochs mit mehr als 30 Jahren Erfahrung",
      "Hotelunterkunft (Doppelzimmer)",
      "Tägliches Frühstück",
      "4 Abendessen und viele Schweizer Spezialitäten",
      "Transport im klimatisierten Reisebus",
      "GoldenPass Express Panoramazug",
      "Interlaken Express Zug",
      "Läckerli-Verkostungen",
      "Verkostung im Fumoir Champoz",
      "Besuch der Schokoladenfabrik Camille Bloch",
      "Stück Nidlechueche in Murten",
      "Stadtführung durch die Berner Altstadt",
      "Besuch der Kambly-Keksfabrik",
      "Destillerie-Tour Willisau und Kafi Lutz Kurs",
      "Bäckerei-Tour und Verkostung in Willisau",
      "Kulturdinner mit Schweizer Unterhaltung in Luzern",
      "Besuch der Glasi Hergiswil Glasfabrik",
      "Besuch der Reichenbachfälle (wetterabhängig)",
      "Weinbergspaziergang Lavaux und Weinprobe",
      "Maison Cailler Schokoladenerlebnis inkl. eigene Tafel",
      "Abschiedsdinner mit Unterhaltung",
      "Alle anfallenden Steuern",
      "Gepäcktransfer zwischen den Hotels",
      "Beratung und Unterstützung vor und während der Tour",
      "Kleine Gruppengröße (max. 12)",
      "Ein paar extra Überraschungen und Andenken",
    ],
  },
  itinerary: [
    {
      day: 1,
      title: {
        en: "Arrival in Zurich",
        fr: "Arrivée à Zurich",
        de: "Ankunft in Zürich",
      },
      description: {
        en: [
          "Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
          "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
          "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip.",
        ],
        fr: [
          "Grüezi mitenand! Bienvenue en Suisse. Votre aventure commence à 18h avec une réunion de bienvenue pour rencontrer vos compagnons de voyage et votre guide. Si vous arrivez tôt, vous pouvez visiter le Musée national suisse ou le Kunsthaus de Zurich.",
          "Ce soir, célébrez le début d'une nouvelle aventure avec un dîner de bienvenue et découvrez ce que les 12 prochains jours vous réservent.",
          "Il est très important d'assister à la réunion de bienvenue, car nous passerons en revue des informations essentielles pour profiter au maximum de votre voyage.",
        ],
        de: [
          "Grüezi mitenand! Willkommen in der Schweiz. Ihr Abenteuer beginnt um 18 Uhr mit einem Willkommenstreffen.",
          "Feiern Sie heute Abend den Beginn eines neuen Abenteuers mit einem Willkommensdinner.",
          "Es ist sehr wichtig, dass Sie am Willkommenstreffen teilnehmen.",
        ],
      },
      accommodation: {
        en: "Zurich",
        fr: "Zurich",
        de: "Zürich",
      },
      includedActivities: {
        en: ["Welcome dinner"],
        fr: ["Dîner de bienvenue"],
        de: ["Willkommensdinner"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Dinner"],
        fr: ["Dîner"],
        de: ["Abendessen"],
      },
      images: [
        getImagePath("ch/ragusa.jpg"),
        getImagePath("ch/niesen.jpeg"),
        getImagePath("ch/luzern.jpg"),
      ],
    },
    {
      day: 2,
      title: {
        en: "Zurich to Basel",
        fr: "Zurich à Bâle",
        de: "Zürich nach Basel",
      },
      description: {
        en: [
          "After enjoying breakfast at the hotel, board the bus as the journey begins. After our first crossing of the Aare river (we'll see her several more times) we travel through the Canton of Aargau and into the Jurapark Aargau – a regional nature park. After a few stops to soak up the view, we arrive at the doors of the Swiss icon – Läckerlihuus and your first taste of the most famous version of this biscuit specific to Switzerland.",
          "We then head into the medieval city of Basel but not before visiting the oldest biscuit manufacturer in Switzerland and a family business for over 270 years.",
          "After arriving at the hotel, we'll go for a walking tour of some of the highlights of the old town before having some free time to explore.",
          "Then, dinner at a restaurant that offers some local specialties.",
        ],
        fr: [
          "Après le petit-déjeuner à l'hôtel, montez dans le bus pour commencer le voyage. Après notre première traversée de l'Aar, nous traversons le canton d'Argovie et entrons dans le Jurapark Aargau. Après quelques arrêts pour profiter du paysage, nous arrivons chez Läckerlihuus pour votre première dégustation de ce biscuit emblématique.",
          "Nous nous dirigeons ensuite vers la ville médiévale de Bâle, en passant d'abord chez le plus ancien fabricant de biscuits de Suisse, une entreprise familiale depuis plus de 270 ans.",
          "Après l'arrivée à l'hôtel, nous ferons une visite guidée des points forts de la vieille ville avant d'avoir du temps libre.",
          "Puis, dîner dans un restaurant proposant des spécialités locales.",
        ],
        de: [
          "Nach dem Frühstück im Hotel geht die Reise los. Nach der ersten Überquerung der Aare fahren wir durch den Kanton Aargau in den Jurapark Aargau.",
          "Dann geht es in die mittelalterliche Stadt Basel, zunächst mit einem Besuch beim ältesten Kekshersteller der Schweiz.",
          "Nach der Ankunft im Hotel machen wir eine Stadtführung durch die Altstadt.",
          "Dann Abendessen in einem Restaurant mit lokalen Spezialitäten.",
        ],
      },
      accommodation: {
        en: "Basel",
        fr: "Bâle",
        de: "Basel",
      },
      includedActivities: {
        en: ["Bakery visits and läckerli tastings", "Walking tour of Basel's Old Town"],
        fr: ["Visites de boulangeries et dégustations de läckerli", "Visite guidée de la vieille ville de Bâle"],
        de: ["Bäckereibesuche und Läckerli-Verkostungen", "Stadtführung durch die Basler Altstadt"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/Basel.jpeg"),
        getImagePath("ch/BaselOldTown.jpg"),
        getImagePath("ch/Lackerli.jpeg"),
      ],
    },
    {
      day: 3,
      title: {
        en: "Basel Free Day",
        fr: "Journée libre à Bâle",
        de: "Freier Tag in Basel",
      },
      description: {
        en: [
          "Your opportunity to explore the city of Basel at your leisure. You can visit the Kunstmuseum, the Fondation Beyeler, or the Vitra Design Museum. If those don't interest you, then you can take a walk along the Rhine river or visit the Tinguely Fountain.",
          "You also have the opportunity to join us for a tour of some local wineries and farm shops.",
          "If you would like to join us on this excursion, please let us know as there is an extra charge associated with it.",
        ],
        fr: [
          "Votre occasion d'explorer la ville de Bâle à votre guise. Vous pouvez visiter le Kunstmuseum, la Fondation Beyeler ou le Vitra Design Museum, ou simplement vous promener le long du Rhin.",
          "Vous avez également la possibilité de nous rejoindre pour une visite de vignobles et de fermes locales.",
          "Si vous souhaitez participer à cette excursion, veuillez nous le faire savoir car des frais supplémentaires s'appliquent.",
        ],
        de: [
          "Ihre Gelegenheit, die Stadt Basel in aller Ruhe zu erkunden: Kunstmuseum, Fondation Beyeler oder Vitra Design Museum.",
          "Sie haben auch die Möglichkeit, uns auf einer Tour zu lokalen Weingütern und Hofläden zu begleiten.",
          "Wenn Sie an diesem Ausflug teilnehmen möchten, teilen Sie uns dies bitte mit, da ein Aufpreis anfällt.",
        ],
      },
      accommodation: {
        en: "Basel",
        fr: "Bâle",
        de: "Basel",
      },
      includedActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      optionalActivities: {
        en: ["Excursion to some of the wineries and farm shops in the Basel-Landschaft region"],
        fr: ["Excursion dans les vignobles et fermes de la région de Bâle-Campagne"],
        de: ["Ausflug zu Weingütern und Hofläden in der Region Basel-Landschaft"],
      },
      optionalActivitiesDetailed: [
        {
          name: "Basel-Landschaft Wine & Farm Experience",
          description: "Escape the city for a delightful journey through the rolling hills of Basel-Landschaft, where centuries-old winemaking traditions meet modern Swiss agriculture. This half-day excursion takes you to two carefully selected family-run estates. Begin at a boutique winery for a guided tasting of 4-5 wines, then visit a traditional farm shop bursting with local produce.",
          price: "NZ$255 per person",
          duration: "4-5 hours",
          included: [
            "Private coach transportation",
            "Guided winery tour with English-speaking guide",
            "Wine tasting of 4-5 regional wines",
            "Visit to traditional farm shop",
          ],
          images: [],
          bookingNote: "Minimum 4 participants required. Must be booked at least 7 days in advance. Not suitable for children under 18.",
        },
      ],
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/basel-landschaft.jpg"),
        getImagePath("ch/farmshop.jpg"),
        getImagePath("ch/Weinbau-Rebschule-Melbinger-12.jpg"),
      ],
    },
    {
      day: 4,
      title: {
        en: "Basel to Bern",
        fr: "Bâle à Berne",
        de: "Basel nach Bern",
      },
      description: {
        en: [
          "Today, we head to the UNESCO World Heritage Site of Bern. Considered Switzerland's capital, it is one of the most photographed cities in the world.",
          "On the way, we'll stop in on a smokehouse that has been operating a traditional-style operation for more than 300 years. Then, on towards our first chocolate stop – Camille Bloch – makers of chocolate creations such as Ragusa and Torino.",
          "Our final stop on the journey is Murten, an amazingly picturesque village and home of the Nidlechueche. Nobody makes it better than here.",
          "After we arrive at the hotel, there is a little time to relax and recharge before heading off to a restaurant where you can try iconic dishes like fondue and raclette, or regional ones like the rösti.",
        ],
        fr: [
          "Aujourd'hui, nous nous dirigeons vers le site du patrimoine mondial de l'UNESCO de Berne, considérée comme la capitale de la Suisse et l'une des villes les plus photographiées au monde.",
          "En chemin, nous nous arrêterons dans un fumoir en activité depuis plus de 300 ans, puis chez Camille Bloch, fabricant de créations chocolatées comme Ragusa et Torino.",
          "Notre dernier arrêt est Morat, un village pittoresque et maison du Nidlechueche. Personne ne le fait mieux qu'ici.",
          "À l'hôtel, un peu de temps pour se détendre avant le dîner dans un restaurant proposant fondue, raclette ou rösti.",
        ],
        de: [
          "Heute geht es zum UNESCO-Weltkulturerbe Bern, der Hauptstadt der Schweiz.",
          "Unterwegs besuchen wir ein Räucherhaus mit über 300 Jahren Tradition und die Schokoladenfabrik Camille Bloch.",
          "Unser letzter Halt ist Murten, ein malerisches Städtchen und Heimat des Nidlechueche.",
          "Im Hotel Zeit zum Entspannen vor dem Abendessen mit Fondue, Raclette oder Rösti.",
        ],
      },
      accommodation: {
        en: "Bern",
        fr: "Berne",
        de: "Bern",
      },
      includedActivities: {
        en: ["Fumoir Champoz tasting", "Visit to Camille Bloch chocolate factory", "Slice of Nidlechueche in Murten"],
        fr: ["Dégustation au Fumoir Champoz", "Visite de la fabrique de chocolat Camille Bloch", "Tranche de Nidlechueche à Morat"],
        de: ["Verkostung im Fumoir Champoz", "Besuch der Schokoladenfabrik Camille Bloch", "Stück Nidlechueche in Murten"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Lunch", "Dinner"],
        fr: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        de: ["Frühstück", "Mittagessen", "Abendessen"],
      },
      images: [
        getImagePath("ch/Fumoir.jpg"),
        getImagePath("ch/nidle.jpg"),
        getImagePath("ch/ragusa.jpg"),
      ],
    },
    {
      day: 5,
      title: {
        en: "Bern",
        fr: "Berne",
        de: "Bern",
      },
      description: {
        en: [
          "Start with breakfast overlooking the Aare River and the city before a walking tour of the highlights of the old city including seeing the bears that give the city its name.",
          "The rest of the day is for you to explore this picturesque city.",
        ],
        fr: [
          "Commencez par le petit-déjeuner avec vue sur l'Aar et la ville, suivi d'une visite guidée des points forts de la vieille ville, notamment les ours qui ont donné son nom à la ville.",
          "Le reste de la journée est à vous pour explorer cette ville pittoresque.",
        ],
        de: [
          "Frühstück mit Blick auf die Aare und die Stadt, dann Stadtführung durch die Altstadt mit den namensgebenden Bären.",
          "Der Rest des Tages gehört Ihnen zur Erkundung dieser malerischen Stadt.",
        ],
      },
      accommodation: {
        en: "Bern",
        fr: "Berne",
        de: "Bern",
      },
      includedActivities: {
        en: ["Walking tour of Bern's Old Town"],
        fr: ["Visite guidée de la vieille ville de Berne"],
        de: ["Stadtführung durch die Berner Altstadt"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/bern1.jpg"),
        getImagePath("ch/bern2.jpg"),
        getImagePath("ch/bern_munster.jpg"),
      ],
    },
    {
      day: 6,
      title: {
        en: "Bern to Lucerne",
        fr: "Berne à Lucerne",
        de: "Bern nach Luzern",
      },
      description: {
        en: [
          "Today, we head from the beautiful city of Bern to what is often described as one of the most attractive destinations in Europe – Luzern (Lucerne).",
          "Home to the subject of more photos than probably any other wooden bridge in the world (Chapel Bridge), the Lion Monument, and outstanding views from the Musegg Wall, Luzern is like a scene from a fairytale.",
          "On the way we'll explore more of the Swiss love for biscuits at the country's largest biscuit manufacturer – Kambly. Sample from their huge array of biscuits before heading off to discover the secrets behind the Willisauer Ringli, still being made the same way since 1848.",
          "Then we go in search of something to wash it down at the Willisau distillery where you will tour their facility, taste some of their wares, and learn how to make a Kafi Lutz – think of it as the Swiss version of an Irish coffee but with more rules.",
          "Our day finishes with a stroll along the lakefront on the way to dinner and a show of traditional Swiss entertainment.",
        ],
        fr: [
          "Aujourd'hui, nous quittons la belle ville de Berne pour rejoindre l'une des destinations les plus attrayantes d'Europe – Lucerne.",
          "Avec son célèbre Pont de la Chapelle, le Monument du Lion et les vues depuis le mur de Musegg, Lucerne ressemble à une scène de conte de fées.",
          "En chemin, nous explorons l'amour suisse pour les biscuits chez Kambly, le plus grand fabricant du pays, puis nous découvrons les secrets du Willisauer Ringli.",
          "Nous cherchons ensuite de quoi accompagner tout ça à la distillerie de Willisau, où vous apprendrez à préparer un Kafi Lutz – la version suisse du café irlandais mais avec plus de règles.",
          "La journée se termine par une promenade au bord du lac avant un dîner avec spectacle traditionnel suisse.",
        ],
        de: [
          "Heute fahren wir von Bern nach Luzern, einer der attraktivsten Destinationen Europas.",
          "Mit der Kapellbrücke, dem Löwendenkmal und dem Musegger Mauer ist Luzern wie aus einem Märchen.",
          "Unterwegs erkunden wir die Schweizer Biscuit-Liebe bei Kambly, dem größten Kekshersteller des Landes.",
          "Dann suchen wir etwas zum Runterspülen in der Destillerie Willisau, wo Sie den Kafi Lutz kennenlernen.",
          "Der Tag endet mit einem Spaziergang am Seeufer und einem Abendessen mit Schweizer Unterhaltung.",
        ],
      },
      accommodation: {
        en: "Luzern",
        fr: "Lucerne",
        de: "Luzern",
      },
      includedActivities: {
        en: ["Kambly biscuit factory visit", "Willisau distillery tour and class", "Bakery tour and tasting", "Cultural dinner with entertainment"],
        fr: ["Visite de la fabrique de biscuits Kambly", "Visite de la distillerie de Willisau et cours Kafi Lutz", "Visite et dégustation en boulangerie", "Dîner culturel avec spectacle"],
        de: ["Kambly-Keksfabrik", "Destillerie Willisau und Kafi Lutz Kurs", "Bäckerei-Tour und Verkostung", "Kulturdinner mit Unterhaltung"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [
        getImagePath("ch/kambly.jpeg"),
        getImagePath("ch/luzern.jpg"),
        getImagePath("ch/diwisa.png"),
      ],
    },
    {
      day: 7,
      title: {
        en: "Lucerne to Interlaken",
        fr: "Lucerne à Interlaken",
        de: "Luzern nach Interlaken",
      },
      description: {
        en: [
          "After leaving Luzern we first head for the glass manufacturer found in many a Swiss household – Glasi Hergiswil. Operating since 1817, Hergiswil offer a wide array of products in their outlet store as well as being able to view the masters at work.",
          "We then catch the Interlaken Express from Luzern. On the way, we'll make a quick detour to the Reichenbach Falls made famous in the Sherlock Holmes stories, and enjoy afternoon tea in the birthplace of meringues – Meiringen.",
          "After looking around the beautiful town of Meiringen we'll head towards our final stop for the night in Interlaken.",
        ],
        fr: [
          "En quittant Luzern, nous nous rendons d'abord chez Glasi Hergiswil, le fabricant de verre que l'on trouve dans de nombreux foyers suisses, en activité depuis 1817.",
          "Nous prenons ensuite l'Interlaken Express. En chemin, nous ferons un détour vers les chutes de Reichenbach, rendues célèbres par les histoires de Sherlock Holmes, et apprécierons un thé à Meiringen, berceau des meringues.",
          "Après avoir exploré le beau village de Meiringen, nous rejoindrons Interlaken pour la nuit.",
        ],
        de: [
          "Nach Luzern geht es zunächst zu Glasi Hergiswil, dem Glashersteller, der seit 1817 in Betrieb ist.",
          "Dann nehmen wir den Interlaken Express mit einem Abstecher zu den Reichenbachfällen und Tee in Meiringen, der Geburtsstadt der Meringues.",
          "Nach einem Rundgang durch Meiringen fahren wir nach Interlaken.",
        ],
      },
      accommodation: {
        en: "Interlaken",
        fr: "Interlaken",
        de: "Interlaken",
      },
      includedActivities: {
        en: ["Glasi Hergiswil glass factory visit", "Interlaken Express Train", "Reichenbach Falls visit (weather permitting)", "Dinner above Interlaken, at Harder Kulm"],
        fr: ["Visite de la verrerie Glasi Hergiswil", "Train Interlaken Express", "Visite des chutes de Reichenbach (selon météo)", "Dîner au-dessus d'Interlaken, au Harder Kulm"],
        de: ["Glasi Hergiswil Glasfabrik", "Interlaken Express", "Reichenbachfälle (wetterabhängig)", "Dinner über Interlaken, am Harder Kulm"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/hergiswil.jpg"),
        getImagePath("ch/meringue.jpg"),
        getImagePath("ch/meiringen.jpg"),
      ],
    },
    {
      day: 8,
      title: {
        en: "Interlaken Free Day",
        fr: "Journée libre à Interlaken",
        de: "Freier Tag in Interlaken",
      },
      description: {
        en: [
          "Your chance to explore the town of Interlaken in your own way and at your own pace. Maybe you want to head up Mount Pilatus or take a boat ride on Lake Thun or Lake Brienz. If you're feeling adventurous, then why not try paragliding or canyoning.",
          "If those aren't your thing, you can choose to join us on a day trip to enjoy breakfast at the top of the pyramid of Switzerland - Mount Niesen - with one of the steepest funiculars in Switzerland (68% incline), then a stop in Thun before heading to the St. Beatus caves.",
          "If you would like to join us on this excursion, please let us know as there is an extra charge associated with it.",
        ],
        fr: [
          "Votre chance d'explorer Interlaken à votre rythme. Peut-être vouloir monter sur le Pilatus ou faire une promenade en bateau sur le lac de Thoune ou de Brienz. Si vous vous sentez aventureux, pourquoi ne pas essayer le parapente ou le canyoning.",
          "Si ce n'est pas votre truc, vous pouvez nous rejoindre pour une excursion au sommet du Niesen – la pyramide suisse – avec l'un des funiculaires les plus raides de Suisse, puis un arrêt à Thoune et les grottes de St-Béat.",
          "Si vous souhaitez participer, veuillez nous le faire savoir car des frais supplémentaires s'appliquent.",
        ],
        de: [
          "Ihre Chance, Interlaken in Ihrem eigenen Tempo zu erkunden. Vielleicht auf den Pilatus oder eine Bootsfahrt auf dem Thuner- oder Brienzersee.",
          "Alternativ können Sie uns auf einem Ausflug zum Niesen begleiten – mit einer der steilsten Standseilbahnen der Schweiz – dann Thun und die Beatushöhlen.",
          "Wenn Sie mitmachen möchten, teilen Sie uns dies bitte mit, da ein Aufpreis anfällt.",
        ],
      },
      accommodation: {
        en: "Interlaken",
        fr: "Interlaken",
        de: "Interlaken",
      },
      includedActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      optionalActivities: {
        en: ["Mount Niesen funicular and breakfast excursion", "A visit to Thun", "St. Beatus caves visit"],
        fr: ["Excursion funiculaire du Niesen et petit-déjeuner", "Visite de Thoune", "Visite des grottes de St-Béat"],
        de: ["Niesen-Standseilbahn und Frühstücksausflug", "Besuch in Thun", "Beatushöhlen"],
      },
      optionalActivitiesDetailed: [
        {
          name: "Mount Niesen Pyramid Breakfast & Lake Thun Experience",
          description: "Embark on an unforgettable morning adventure to the 'Swiss Pyramid' – Mount Niesen. Board one of the world's steepest funiculars (68% gradient!) for a breathtaking ascent to the 2,362-meter summit. Enjoy a hearty Swiss breakfast with 360-degree views of the Bernese Alps. Then descend to the shores of Lake Thun and the charming medieval town of Thun, concluding with a visit to the mystical St. Beatus Caves.",
          price: "NZ$295 per person",
          duration: "Full day (8-9 hours)",
          included: [
            "Return funicular tickets to Mount Niesen summit",
            "Swiss breakfast at the summit restaurant",
            "Private coach transportation",
            "Entry to St. Beatus Caves",
            "Tour escort throughout the day",
          ],
          images: [],
          bookingNote: "Weather dependent. Funicular operates May-October. Warm jacket recommended. Not recommended for those with mobility issues or claustrophobia. Minimum 6 participants required.",
        },
      ],
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/niesen.jpeg"),
        getImagePath("ch/niesen_view.jpg"),
        getImagePath("ch/beatus.jpg"),
        getImagePath("ch/niesenbfast.jpg"),
      ],
    },
    {
      day: 9,
      title: {
        en: "Interlaken to Montreux",
        fr: "Interlaken à Montreux",
        de: "Interlaken nach Montreux",
      },
      description: {
        en: [
          "Board the GoldenPass Express, one of Switzerland's most picturesque train routes. The journey on the panoramic train takes you through the Bernese Oberland before arriving in Montreux. After wandering through Montreux, we take to the water and take the ferry to Lausanne.",
        ],
        fr: [
          "Montez à bord du GoldenPass Express, l'une des routes ferroviaires les plus pittoresques de Suisse. Le voyage en train panoramique vous emmène à travers l'Oberland bernois avant d'arriver à Montreux. Après une promenade à Montreux, nous prenons le ferry pour Lausanne.",
        ],
        de: [
          "Einsteigen in den GoldenPass Express, eine der landschaftlich schönsten Zugstrecken der Schweiz, durch das Berner Oberland nach Montreux. Dann Fähre nach Lausanne.",
        ],
      },
      accommodation: {
        en: "Lausanne",
        fr: "Lausanne",
        de: "Lausanne",
      },
      includedActivities: {
        en: ["GoldenPass Express scenic train journey"],
        fr: ["Voyage en train panoramique GoldenPass Express"],
        de: ["GoldenPass Express Panoramazug"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Lunch"],
        fr: ["Petit-déjeuner", "Déjeuner"],
        de: ["Frühstück", "Mittagessen"],
      },
      images: [
        getImagePath("ch/gpass.jpg"),
        getImagePath("ch/gpass2.jpeg"),
        getImagePath("ch/gpass3.jpeg"),
      ],
    },
    {
      day: 10,
      title: {
        en: "Vevey and Lavaux",
        fr: "Vevey et Lavaux",
        de: "Vevey und Lavaux",
      },
      description: {
        en: [
          "The morning is yours to explore the area. Maybe it's the Alimentarium (Food Museum) or the Charlie Chaplin museum - both nearby in Vevey - that takes your fancy. Or perhaps you just want to visit the Olympic Museum before finding a spot on the lakefront and enjoying the view. There is plenty to choose from.",
          "In the afternoon we head for the UNESCO World Heritage site of Lavaux. Here, we'll take a walk through the vineyards and learn about the history of wine production in the region before finishing up with a tasting of some of the local offerings.",
        ],
        fr: [
          "La matinée est à vous pour explorer la région. Peut-être l'Alimentarium (Musée de l'Alimentation) ou le musée Charlie Chaplin à Vevey, ou le Musée Olympique avec une vue sur le lac.",
          "L'après-midi, nous nous rendons au site du patrimoine mondial de l'UNESCO de Lavaux. Nous y ferons une promenade dans les vignobles, apprendrons l'histoire viticole de la région et terminerons par une dégustation des vins locaux.",
        ],
        de: [
          "Der Morgen gehört Ihnen zur Erkundung der Region – Alimentarium, Charlie Chaplin Museum oder Olympisches Museum in Vevey.",
          "Am Nachmittag geht es zum UNESCO-Weltkulturerbe Lavaux mit Weinbergspaziergang und Weinprobe.",
        ],
      },
      accommodation: {
        en: "Lausanne",
        fr: "Lausanne",
        de: "Lausanne",
      },
      includedActivities: {
        en: ["Lavaux vineyard walk", "Wine tasting session"],
        fr: ["Promenade dans les vignobles de Lavaux", "Session de dégustation de vins"],
        de: ["Weinbergspaziergang Lavaux", "Weinprobe"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/lavaux.jpeg"),
        getImagePath("ch/lavaux2.jpg"),
        getImagePath("ch/lavaux3.jpeg"),
      ],
    },
    {
      day: 11,
      title: {
        en: "Montreux and Maison Cailler",
        fr: "Montreux et Maison Cailler",
        de: "Montreux und Maison Cailler",
      },
      description: {
        en: [
          "Head to Montreux where you can choose to wander the lakefront, visit the Queen museum or have your photo taken with the band's singer - Freddie Mercury.",
          "We'll then head to Maison Cailler – Switzerland's oldest chocolate factory and the place that invented milk chocolate. Here, you'll learn about the history of chocolate in Switzerland and how it's made, before having the opportunity to make your own chocolate bar.",
          "Finally, we head back to Montreux for a farewell dinner with the group.",
        ],
        fr: [
          "Direction Montreux, où vous pouvez vous promener au bord du lac, visiter le musée Queen ou vous faire photographier avec la statue de Freddie Mercury.",
          "Nous nous rendrons ensuite à la Maison Cailler – la plus ancienne fabrique de chocolat de Suisse et le lieu où le chocolat au lait a été inventé. Vous apprendrez l'histoire du chocolat et fabriquerez votre propre tablette.",
          "Enfin, nous retournons à Montreux pour un dîner d'adieu en groupe.",
        ],
        de: [
          "Nach Montreux zum Spazieren am See, dem Queen-Museum oder einem Foto mit Freddie Mercury.",
          "Dann zur Maison Cailler, der ältesten Schokoladenfabrik der Schweiz, wo Sie Ihre eigene Tafel herstellen.",
          "Abschließend zurück nach Montreux für das Abschiedsdinner.",
        ],
      },
      accommodation: {
        en: "Lausanne",
        fr: "Lausanne",
        de: "Lausanne",
      },
      includedActivities: {
        en: ["Maison Cailler chocolate experience", "Make your own chocolate bar", "Farewell dinner with entertainment"],
        fr: ["Expérience Maison Cailler", "Fabrication de votre propre tablette de chocolat", "Dîner d'adieu avec spectacle"],
        de: ["Maison Cailler Schokoladenerlebnis", "Eigene Schokoladentafel herstellen", "Abschiedsdinner mit Unterhaltung"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [
        getImagePath("ch/freddie.jpeg"),
        getImagePath("ch/Cailler_3.jpg"),
        getImagePath("ch/cailler2.jpg"),
      ],
    },
    {
      day: 12,
      title: {
        en: "Geneva Departure",
        fr: "Départ de Genève",
        de: "Abreise ab Genf",
      },
      description: {
        en: [
          "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Geneva where the tour, sadly, ends.",
          "If you have time before your flight, then maybe visit the United Nations headquarters or the Red Cross museum.",
        ],
        fr: [
          "Après le dernier petit-déjeuner en groupe et l'occasion de dire au revoir à vos nouveaux amis, nous nous dirigeons vers Genève où le circuit, malheureusement, se termine.",
          "Si vous avez le temps avant votre vol, peut-être visiter le siège des Nations Unies ou le Musée de la Croix-Rouge.",
        ],
        de: [
          "Nach dem letzten Gruppenfrühstück und dem Abschied von neuen Freunden fahren wir nach Genf, wo die Tour endet.",
          "Falls Zeit bleibt, vielleicht das UNO-Hauptquartier oder das Rote-Kreuz-Museum besuchen.",
        ],
      },
      includedActivities: {
        en: ["Transfer to Geneva airport or train station"],
        fr: ["Transfert à l'aéroport ou à la gare de Genève"],
        de: ["Transfer zum Flughafen oder Bahnhof Genf"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [
        getImagePath("ch/geneva.jpeg"),
        getImagePath("ch/geneva2.jpeg"),
        getImagePath("ch/geneva3.jpeg"),
      ],
    },
  ],
};