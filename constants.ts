// constants.ts
import { getImagePath } from './utils/paths';

export interface SummaryLine {
  text: { en: string; fr: string; de: string };
  className?: string;
}

// New interface for departure dates with status
export interface DepartureDate {
  date: string;
  status?: 'sold-out' | 'limited' | 'available';
  year?: number;
}

export interface Tour {
  id: string;
  region: 'switzerland' | 'new-zealand' | 'france' | 'germany' | 'europe';
  name: { en: string; fr: string; de: string };
  summary: SummaryLine[];
  heroImage: string;
  route: string;
  price?: { en: string; fr: string; de: string };
  departureDates: DepartureDate[];
  singleSupplement?: { en: string; fr: string; de: string };
  durationDays?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const TOURS_DATA: Tour[] = [
  {
    id: "cheese-chocolate-trail",
    region: "switzerland",
    name: {
      en: "Cheese, Chocolate and the Swiss Riviera",
      fr: "Fromage, chocolat et riviera suisse",
      de: "Käse, Schokolade und die Schweizer Riviera"
    },
    durationDays: 12,
    summary: [
      {
        text: {
          en: "Explore the flavours of northern and western Switzerland on a journey through some of Switzerland's most iconic tastesfrom fondue and raclette to Läckerli, Nidlechueche, and velvety Swiss chocolate.",
          fr: "Explorez les saveurs du nord et de l'ouest de la Suisse à travers certains de ses goûts les plus emblématiquesde la fondue et la raclette au Läckerli, Nidlechueche et au velouté chocolat suisse.",
          de: "Erkunden Sie die Aromen der Nord- und Westschweiz auf einer Reise durch einige der ikonischsten Geschmäcker der Schweiz.",
        }
      },
      {
        text: {
          en: "From traditional smokehouses and biscuit manufacturers to distilleries, dairies and chocolate makersmeet the artisans behind some of Switzerland's most beloved culinary delights.",
          fr: "Des fumoirs traditionnels et fabricants de biscuits aux distilleries, laiteries et chocolatiersrencontrez les artisans derrière certaines des spécialités culinaires les plus appréciées de Suisse.",
          de: "Von traditionellen Räuchereien und Kekshersteller bis hin zu Destillerien, Molkereien und Schokoladenherstellern.",
        }
      },
      {
        text: {
          en: "With a blend of curated experiences, scenic rail journeys and free time to explore, it's a delicious way to discover one of Europe's most beautiful regions.",
          fr: "Avec un mélange d'expériences soigneusement sélectionnées, de voyages en train panoramiques et de temps libre pour explorer, c'est une façon délicieuse de découvrir l'une des plus belles régions d'Europe.",
          de: "Mit einer Mischung aus kuratierten Erlebnissen, malerischen Zugreisen und freier Zeit zum Erkunden.",
        }
      },
      {
        text: {
          en: "From NZ$15,200",
          fr: "À partir de NZ$15,200",
          de: "Ab NZ$15,200",
        },
        className: "text-lg font-semibold text-center text-alpine-green mt-4"
      },
      {
        text: {
          en: "per person (twin share).",
          fr: "par personne (chambre double).",
          de: "pro Person (Doppelzimmer).",
        },
        className: "text-md italic text-center text-alpine-green"
      },
    ],
    heroImage: getImagePath("ch/ragusa.jpg"),
    route: "/tours/cheese-chocolate-trail",
    price: {
      en: "From NZ$15,200",
      fr: "À partir de NZ$15,200",
      de: "Ab NZ$15,200",
    },
    singleSupplement: {
      en: "NZ$5,775",
      fr: "NZ$5,775",
      de: "NZ$5,775",
    },
    departureDates: [
      { date: "2026-09-27", status: "available", year: 2026 },
      { date: "2027-04-04", status: "available", year: 2027 },
      { date: "2027-07-18", status: "available", year: 2027 },
      { date: "2027-11-14", status: "available", year: 2027 },
    ],
  },
  {
    id: "waterfalls",
    region: "switzerland",
    name: {
      en: "Waterfalls, Whiskey, and Walnuts",
      fr: "Chutes d'eau, whisky et noix",
      de: "Wasserfälle, Whiskey und Walnüsse"
    },
    durationDays: 12,
    summary: [
      {
        text: {
          en: "Journey through Eastern Switzerland and learn to craft liqueur-filled chocolates, bake a cake that unashamedly celebrates cherry brandy, and taste wines from the country's easternmost vineyards.",
          fr: "Voyagez à travers l'est de la Suisse et apprenez à fabriquer des chocolats remplis de liqueur, à cuire un gâteau qui célèbre sans vergogne le kirsch, et à déguster des vins des vignobles les plus orientaux du pays.",
          de: "Reisen Sie durch die Ostschweiz und lernen Sie, liqueurgefüllte Schokoladen herzustellen.",
        }
      },
      {
        text: {
          en: "Admire the Rhine Falls, wander UNESCO-listed sites, and stand on a summit where you can look across six countries at once.",
          fr: "Admirez les chutes du Rhin, déambulez dans des sites classés à l'UNESCO et tenez-vous au sommet d'où vous pouvez voir six pays à la fois.",
          de: "Bewundern Sie die Rheinfälle, wandern Sie durch UNESCO-Stätten.",
        }
      },
      {
        text: {
          en: "Crossing into Germany, Austria and Liechtenstein, this tour offers plenty of chances to sample regional specialties and savour the culinary character of the region.",
          fr: "En traversant l'Allemagne, l'Autriche et le Liechtenstein, ce circuit offre de nombreuses occasions de goûter aux spécialités régionales.",
          de: "Mit Grenzübertritten nach Deutschland, Österreich und Liechtenstein.",
        }
      },
      {
        text: {
          en: "From NZ$15,200",
          fr: "À partir de NZ$15,200",
          de: "Ab NZ$15,200",
        },
        className: "text-lg font-semibold text-center text-alpine-green mt-4"
      },
      {
        text: {
          en: "per person (twin share).",
          fr: "par personne (chambre double).",
          de: "pro Person (Doppelzimmer).",
        },
        className: "text-md italic text-center text-alpine-green"
      },
    ],
    heroImage: getImagePath("IMG20250720125834.jpg"),
    route: "/tours/waterfalls",
    price: {
      en: "From NZ$15,200",
      fr: "À partir de NZ$15,200",
      de: "Ab NZ$15,200",
    },
    singleSupplement: {
      en: "NZ$5,775",
      fr: "NZ$5,775",
      de: "NZ$5,775",
    },
    departureDates: [
      { date: "2026-09-13", status: "available", year: 2026 },
      { date: "2027-03-14", status: "available", year: 2027 },
      { date: "2027-07-04", status: "available", year: 2027 },
      { date: "2027-10-31", status: "available", year: 2027 },
    ],
  },
  {
    id: "cake",
    region: "europe",
    name: {
      en: "Cakes, Tortes, Gateaux and coffeehouses",
      fr: "Gâteaux, tartes, pâtisseries et cafés",
      de: "Kuchen, Torten, Kuchen und Kaffeehäuser"
    },
    durationDays: 17,
    summary: [
      {
        text: {
          en: "This 17-day tour explores the sweet side of Europe in, what we like to call 'chasing the cake'. Giving you a taste of 5 countries. From discovering the Black Forest Gateaux in the actual Black Forest to tasting Sachertorte in Vienna's grand coffeehouses, and many more culinary discoveries along the way.",
          fr: "Ce circuit de 17 jours explore le côté sucré de l'Europe dans ce que nous aimons appeler 'la chasse au gâteau'. Vous faisant découvrir 5 pays. De la découverte de la Forêt-Noire dans la vraie Forêt-Noire à la dégustation de la Sachertorte dans les grands cafés de Vienne.",
          de: "Diese 17-tägige Tour erkundet die süße Seite Europas in dem, was wir gerne 'die Kuchenjagd' nennen.",
        }
      },
      {
        text: {
          en: "Drink wine from a royal estate in one of the world's smallest countries; Float along the Danube River, explore salt mines, visit beer gardens, reach the top of the highest mountain in Germany, learn at several hands-on workshops, and so much more.",
          fr: "Dégustez du vin d'un domaine royal dans l'un des plus petits pays du monde ; flottez sur le Danube, explorez des mines de sel, visitez des jardins de bière, atteignez le sommet de la plus haute montagne d'Allemagne.",
          de: "Trinken Sie Wein von einem königlichen Weingut in einem der kleinsten Länder der Welt.",
        }
      },
      {
        text: {
          en: "Discover the cake that triggered one of the most famous culinary feuds in history and taste your way through some of Europe's best - including what is thought of as the oldest cake recipe in the world.",
          fr: "Découvrez le gâteau qui a déclenché l'une des querelles culinaires les plus célèbres de l'histoire et dégustez certains des meilleurs gâteaux d'Europe.",
          de: "Entdecken Sie den Kuchen, der eine der berühmtesten kulinarischen Fehden der Geschichte ausgelöst hat.",
        }
      },
      {
        text: {
          en: "From NZ$20,990",
          fr: "À partir de NZ$20,990",
          de: "Ab NZ$20,990",
        },
        className: "text-lg font-semibold text-center text-alpine-green mt-4"
      },
      {
        text: {
          en: "per person (twin share).",
          fr: "par personne (chambre double).",
          de: "pro Person (Doppelzimmer).",
        },
        className: "text-md italic text-center text-alpine-green"
      },
    ],
    heroImage: getImagePath("black_forest_gat.jpg"),
    route: "/tours/cake",
    price: {
      en: "From NZ$20,990",
      fr: "À partir de NZ$20,990",
      de: "Ab NZ$20,990",
    },
    singleSupplement: {
      en: "NZ$6,951",
      fr: "NZ$6,951",
      de: "NZ$6,951",
    },
    departureDates: [
      { date: "2027-06-13", status: "available", year: 2027 },
    ],
  },
  {
    id: "christmas",
    region: "europe",
    name: {
      en: "Christmas Markets",
      fr: "Marchés de Noël",
      de: "Weihnachtsmärkte"
    },
    summary: [
      {
        text: {
          en: "There is nothing quite like a European Christmas Market to get you in the festive spirit. Experience the magic of Christmas in Switzerland, Germany, Austria and France on this 16-day tour.",
          fr: "Rien ne vaut un marché de Noël européen pour vous mettre dans l'esprit des fêtes. Vivez la magie de Noël en Suisse, en Allemagne, en Autriche et en France lors de ce circuit de 16 jours.",
          de: "Nichts kommt einem europäischen Weihnachtsmarkt gleich, um Sie in festliche Stimmung zu versetzen.",
        }
      },
    ],
    heroImage: getImagePath("christmas-banner.jpg"),
    route: "/tours/christmas",
    price: {
      en: "Coming Soon",
      fr: "À venir",
      de: "Kommt bald"
    },
    departureDates: [
      { date: "2027-12-05", status: "available", year: 2027 },
    ],
  },
  {
    id: "Dine-edin",
    region: "new-zealand",
    name: {
      en: "Dine-Edin",
      fr: "Dine-Edin",
      de: "Dine-Edin"
    },
    summary: [
      {
        text: {
          en: "Discover the natural beauty and rich culture of Aotearoa - New Zealand. From the stunning landscapes of the South Island to the vibrant cities of the North Island, this tour offers an immersive experience.",
          fr: "Découvrez la beauté naturelle et la riche culture d'Aotearoa - Nouvelle-Zélande. Des paysages époustouflants de l'île du Sud aux villes animées de l'île du Nord.",
          de: "Entdecken Sie die natürliche Schönheit und reiche Kultur von Aotearoa - Neuseeland.",
        }
      },
    ],
    heroImage: getImagePath("nz/station.jpg"),
    route: "/tours/dine-edin",
    price: {
      en: "Coming Soon",
      fr: "À venir",
      de: "Kommt bald"
    },
    singleSupplement: {
      en: "Coming Soon",
      fr: "À venir",
      de: "Kommt bald"
    },
    departureDates: [
      { date: "", status: "available", year: 2027 },
    ],
  },
  {
    id: "southern-delights",
    region: "new-zealand",
    name: {
      en: "Southern Delights",
      fr: "Délices du Sud",
      de: "Südlliche Köstlichkeiten"
    },
    summary: [
      {
        text: {
          en: "Spend 11 days exploring the culinary delights of New Zealand's South Island. From the rugged coastlines and majestic fjords to the vibrant cities and charming towns, this tour offers an unforgettable journey through the mainland of Aotearoa.",
          fr: "Passez 11 jours à explorer les délices culinaires de l'île du Sud de la Nouvelle-Zélande. Des côtes accidentées et des fjords majestueux aux villes animées et aux charmantes bourgades.",
          de: "Verbringen Sie 11 Tage damit, die kulinarischen Köstlichkeiten der Südinsel Neuseelands zu erkunden.",
        }
      },
    ],
    heroImage: getImagePath("nz/mtCook.jpg"),
    route: "/tours/southern-delights",
    price: {
      en: "Coming Soon",
      fr: "À venir",
      de: "Kommt bald"
    },
    departureDates: [
      { date: "", status: "available", year: 2027 },
    ],
  },
  {
    id: "slow-road",
    region: "new-zealand",
    name: {
      en: "Slow road to Queenstown",
      fr: "Route lente vers Queenstown",
      de: "Langsame Route nach Queenstown"
    },
    summary: [
      {
        text: {
          en: "Spend some time exploring the scenic routes and charming towns between New Zealand's wildlife capital and heritage city of Dunedin and the adventurous city of Queenstown.",
          fr: "Prenez le temps d'explorer les routes pittoresques et les charmantes villes entre Dunedin, la capitale faunique et ville du patrimoine de Nouvelle-Zélande, et la ville aventureuse de Queenstown.",
          de: "Erkunden Sie die malerischen Routen und charmanten Städte zwischen Dunedin und Queenstown.",
        }
      },
    ],
    heroImage: getImagePath("nz/queenstown.jpg"),
    route: "/tours/slow-road",
    price: {
      en: "Coming Soon",
      fr: "À venir",
      de: "Kommt bald"
    },
    departureDates: [
      { date: "", status: "available", year: 2027 },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Tours', href: '/tours' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/appetite_journeys' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevingilbertnzl/' },
];