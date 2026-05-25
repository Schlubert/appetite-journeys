// data/dineEdin.ts
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
  title: { en: string; fr: string; de: string };
  description: { en: string[]; fr: string[]; de: string[] };
  optionalActivities?: { en: string[]; fr: string[]; de: string[] };
  meals?: { en: string[]; fr: string[]; de: string[] };
  images?: string[];
  optionalActivitiesDetailed?: OptionalActivity[];
};

export type DepartureDate = {
  date: string;
  status?: "sold-out" | "limited" | "available";
};

export type Tour = {
  name: string;
  title: { en: string; fr: string; de: string };
  subtitle: { en: string; fr: string; de: string };
  durationDays: number;
  price?: string[];
  singleSupplement?: string;
  departureDates?: DepartureDate[];
  summary: { en: string[]; fr: string[]; de: string[] };
  heroImages: string[];
  itinerary: ItineraryStop[];
  whatsIncluded?: { en: string[]; fr: string[]; de: string[] };
  mapImage?: string;
};

export const dineEdin: Tour = {
  name: "Dine-Edin",
  title: {
    en: "Dine-Edin",
    fr: "Dine-Edin",
    de: "Dine-Edin",
  },
  subtitle: {
    en: "Exploring New Zealand's city of 'firsts'",
    fr: "À la découverte de la ville des 'premières' de Nouvelle-Zélande",
    de: "Erkundung von Neuseelands Stadt der 'Ersten'",
  },
  durationDays: 1,
  price: ["From NZ$14,990", "per person (twin share)"],
  departureDates: [{ date: "September 13th, 2026", status: "limited" }],
  mapImage: getImagePath('ch/East.png'),
  summary: {
    en: [
      "Explore the vibrant culinary scene of Dunedin, New Zealand's city of 'firsts'. From iconic eateries to hidden gems, experience a day filled with diverse flavors, local culture, and unforgettable dining experiences.",
      "A mixture of iconic views and hidden gems, this tour offers a unique blend of culinary delights and cultural experiences, showcasing the best of Dunedin's food scene in one unforgettable day.",
      ""
    ],
    fr: [
      "Découvrez la scène culinaire dynamique de Dunedin, la ville de 'premières' de la Nouvelle-Zélande. Des restaurants emblématiques aux trésors cachés, vivez une journée pleine de saveurs variées, de culture locale et d'expériences culinaires inoubliables.",
      "Un mélange de vues emblématiques et de trésors cachés, ce tour propose un mélange unique de délices culinaires et d'expériences culturelles, mettant en valeur le meilleur de la scène alimentaire de Dunedin lors d'une journée inoubliable.",
      ""
    ],
    de: [
      "Entdecken Sie die lebendige kulinarische Szene von Dunedin, der Stadt der 'Ersten' Neuseelands. Von ikonischen Restaurants bis hin zu verborgenen Schätzen - erleben Sie einen Tag voller abwechslungsreicher Geschmäcker, lokaler Kultur und unvergesslicher Essenserlebnisse.",
      "Eine Mischung aus ikonischen Aussichten und verborgenen Schätzen bietet dieser Trip einen einzigartigen Mix aus kulinarischen Köstlichkeiten und kulturellen Erlebnissen und zeigt das Beste der Essensszene von Dunedin in einem unvergesslichen Tag.",
      ""
    ]
  },
  heroImages: [
    getImagePath("nz/nz-hero.jpg"),
    getImagePath("nz/station.jpg"),
    getImagePath("nz/queenstown.jpg"),
  ],
  itinerary: [
    {
      day: 1,
      title: {
        en: "Arrival in Christchurch and welcome dinner",
        fr: "Arrivée à Christchurch et dîner de bienvenue",
        de: "Ankunft in Christchurch und Begrüßungsdiner"
      },
      description: {
        en: [
        
    "Depending on the day you choose to book, your tour will include:",
    "- A visit to Signal Hill for panoramic views of the city and harbor.",
    "- A stop at Ocho chocolate factory.",
    "- A visit to the University of Otago campus, including a visit to the Otago Museum.",
    "- A visit to the Otago Farmers Market.",
    "- A tour of the historic Dunedin Train Station.",
    "- A tasting session at Dunedin Craft Distillers.",
    "- A visit to Princes Street Butchery for a behind-the-scenes look at their artisanal meat products.",
    "- A gourmet lunch at Augustines, known for its innovative cuisine and local ingredients.",
    "- An afternoon excursion to Taiaroa Head, where you can enjoy stunning coastal views and keep your eyes peeled for wildlife such as albatrosses and seals.",
    "There will be other stops along the way, and the itinerary is subject to change based on local events, seasonal offerings, and the weather. This tour is designed to provide a comprehensive and immersive experience of Dunedin's culinary scene, combining food, culture, and stunning scenery in one unforgettable day."
      ],
        fr: [
  "Selon le jour choisi pour votre réservation, votre excursion comprendra :",
  "- Une visite de Signal Hill pour profiter d’une vue panoramique sur la ville et le port.",
  "- Un arrêt à la chocolaterie Ocho.",
  "- Une visite du campus de l’Université d’Otago, y compris le musée Otago.",
  "- Une visite du marché fermier d’Otago.",
  "- Une visite de la gare historique de Dunedin.",
  "- Une séance de dégustation chez Dunedin Craft Distillers.",
  "- Une visite de Princes Street Butchery avec un aperçu des coulisses de leurs produits artisanaux à base de viande.",
  "- Un déjeuner gastronomique chez Augustines, réputé pour sa cuisine innovante et ses ingrédients locaux.",
  "- Une excursion l’après-midi à Taiaroa Head, où vous pourrez admirer des vues côtières spectaculaires et observer la faune locale, notamment les albatros et les phoques.",
  "D’autres arrêts pourront être ajoutés en cours de route et l’itinéraire peut être modifié en fonction des événements locaux, des produits de saison et des conditions météorologiques. Cette excursion est conçue pour offrir une expérience complète et immersive de la scène culinaire de Dunedin, mêlant gastronomie, culture et paysages spectaculaires en une journée inoubliable."
],

de: [
  "Je nach gewähltem Reisetag beinhaltet Ihre Tour:",
  "- Einen Besuch auf Signal Hill mit Panoramablick über die Stadt und den Hafen.",
  "- Einen Halt bei der Ocho-Schokoladenfabrik.",
  "- Einen Besuch des Campus der University of Otago einschließlich des Otago Museums.",
  "- Einen Besuch des Otago Farmers Market.",
  "- Eine Führung durch den historischen Bahnhof von Dunedin.",
  "- Eine Verkostung bei Dunedin Craft Distillers.",
  "- Einen Besuch der Princes Street Butchery mit einem Blick hinter die Kulissen ihrer handwerklich hergestellten Fleischspezialitäten.",
  "- Ein Gourmet-Mittagessen im Augustines, bekannt für innovative Küche und regionale Zutaten.",
  "- Einen Nachmittagsausflug nach Taiaroa Head, wo Sie beeindruckende Küstenlandschaften genießen und mit etwas Glück Albatrosse und Robben beobachten können.",
  "Unterwegs können weitere Stopps eingelegt werden, und die Reiseroute kann je nach lokalen Veranstaltungen, saisonalen Angeboten und Wetterbedingungen angepasst werden. Diese Tour wurde entwickelt, um ein umfassendes und intensives Erlebnis der kulinarischen Szene Dunedins zu bieten und Gastronomie, Kultur und beeindruckende Landschaften in einem unvergesslichen Tag zu verbinden."
],
      },
      images: [getImagePath('nz/OFM.jpg'), getImagePath('nz/craft_distillers.jpg'), getImagePath('nz/station.jpg') ],
    },
  ],
    whatsIncluded: {
  en: [
    "Services of an experienced local tour leader fluent in English, German, and French",
    "Insights and explanations from a kiwi baker and chef with more than 30 years experience in the food industry",
    "Transportation in an air conditioned vehicle",
    "Behind the scenes access",
    "Local producers explaining their products and processes",
    "Entry into The Royal Albatross Centre",
    "Tours and tastings at distilleries, breweries, and craft producers",
    "Advice and support prior to and during the tour including travel tips, plus foodie and insider recommendations",
    "Small group size (max 12)",
    "A few extra surprises and mementos along the way",
  ],
  fr: [
    "Services d'un guide local expérimenté, parlant couramment l'anglais, l'allemand et le français",
    "Conseils et explications d'un cuisinier et boulanger néo-zélandais avec plus de 30 ans d'expérience dans l'industrie alimentaire",
    "Transport dans un véhicule climatisé",
    "Accès aux coulisses",
    "Producteurs locaux expliquant leurs produits et procédés",
    "Entrée au Centre Royal des Albatros",
    "Visites et dégustations dans des distilleries, brasseries et producteurs artisanaux",
    "Conseils et soutien avant et pendant le circuit, y compris des conseils de voyage et des recommandations gastronomiques",
    "Petit groupe (max 12)",
    "Quelques surprises et souvenirs en chemin",
  ],
  de: [
    "Leistungen eines erfahrenen lokalen Reiseleiters, der fließend Englisch, Deutsch und Französisch spricht",
    "Einblicke eines neuseeländischen Bäckers und Kochs mit mehr als 30 Jahren Erfahrung in der Lebensmittelbranche",
    "Transport in einem klimatisierten Fahrzeug",
    "Zugang hinter die Kulissen",
    "okale Produzenten erklären ihre Produkte und Prozesse",
    "Eintritt in das Royal Albatross Centre",
    "Touren und Verkostungen in Destillerien, Brauereien und Handwerksbetrieben",
    "Beratung und Unterstützung vor und während der Tour",
    "Kleine Gruppengröße (max. 12)",
    "Ein paar extra Überraschungen und Andenken unterwegs",
  ],
},
};
