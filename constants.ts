// constants.ts
import { getImagePath } from './utils/paths';

export interface SummaryLine {
  text: string;
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
  name: string;
  summary: SummaryLine[];
  heroImage: string;
  route: string;
  price?: string; // Optional - for displaying on cards
  departureDates: DepartureDate[]; // Changed from string[] to DepartureDate[]
  singleSupplement?: string;
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
    name: "Cheese, Chocolate and the Swiss Riviera",
    durationDays: 12,
    summary: [
      { text: "Explore the flavours of northern and western Switzerland on a journey through some of Switzerland's most iconic tastes — from fondue and raclette to Läckerli, Nidlechueche, and velvety Swiss chocolate." },
      { text: "From traditional smokehouses and biscuit manufacturers to distilleries, dairies and chocolate makers — meet the artisans behind some of Switzerland's most beloved culinary delights." },
      { text: "With a blend of curated experiences, scenic rail journeys and free time to explore, it’s a delicious way to discover one of Europe’s most beautiful regions." },
      { text: "From NZ$14,800", className: "text-lg font-semibold text-center text-alpine-green mt-4" },
      { text: "per person (twin share).", className: "text-md italic text-center text-alpine-green" },
    ],
    heroImage: getImagePath("ragusa.jpg"),
    route: "/tours/cheese-chocolate-trail",
    price: "From NZ$14,800",
    singleSupplement: "NZ$5,775",
    departureDates: [
      { date: "September 27, 2026", status: "available", year: 2026 },
      { date: "April 4, 2027", status: "available", year: 2027 },
      { date: "July 18, 2027", status: "available", year: 2027 },
      { date: "November 14, 2027", status: "available", year: 2027 },
      ],
  },
  {
    id: "waterfalls",
    name: "Waterfalls, Whiskey, and Walnuts",
    durationDays: 12,
    summary: [
      { text: "Journey through Eastern Switzerland and learn to craft liqueur-filled chocolates, bake a cake that unashamedly celebrates cherry brandy, and taste wines from the country’s easternmost vineyards." },
      { text: "Admire the Rhine Falls, wander UNESCO-listed sites, and stand on a summit where you can look across six countries at once." },
      { text: "Crossing into Germany, Austria and Liechtenstein, this tour offers plenty of chances to sample regional specialties and savour the culinary character of the region." },
      { text: "From NZ$14,800", className: "text-lg font-semibold text-center text-alpine-green mt-4" },
      { text: " per person (twin share).", className: "text-md italic text-center text-alpine-green" },
    ],
    heroImage: getImagePath("IMG20250720125834.jpg"),
    route: "/tours/waterfalls",
    price: "From NZ$14,800",
    singleSupplement: "NZ$5,775",
    departureDates: [
      { date: "September 13, 2026", status: "available", year: 2026 },
      { date: "March 14, 2027", status: "available", year: 2027 },
      { date: "July 4, 2027", status: "available", year: 2027 },
      { date: "October 31, 2027", status: "available", year: 2027 },
    ],
  },
  {
    id: "cake",
    name: "Cakes, Tortes, Gateaux and coffeehouses",
    durationDays: 17,
    summary: [
      { text: "This 17-day tour explores the sweet side of Europe in, what we like to call 'chasing the cake'. Giving you a taste of 5 countries. From discovering the Black Forest Gateaux in the actual Black Forest to tasting Sachertorte in Vienna's grand coffeehouses, and many more culinary discoveries along the way." },
       { text: "Drink wine from a royal estate in one of the world's smallest countries; Float along the Danube River, explore salt mines, visit beer gardens, reach the top of the highest mountain in Germany, learn at several hands-on workshops, and so much more." },
      { text: "Discover the cake that triggered one of the most famous culinary feuds in history and taste your way through some of Europe's best  - including what is thought of as the oldest cake recipe in the world." },
      { text: "From NZ$20,950", className: "text-lg font-semibold text-center text-alpine-green mt-4" },
      { text: " per person (twin share).", className: "text-md italic text-center text-alpine-green" },
    ],
    heroImage: getImagePath("black_forest_gat.jpg"),
    route: "/tours/cake",
    price: "From NZ$20,950",
    singleSupplement: "NZ$6,951",
    departureDates: [
      { date: "June 13, 2027", status: "available", year: 2027 },
    ],
  },
    {
    id: "christmas",
    name: "Christmas Markets",
    summary: [
      { text: "There is nothing quite like a European Christmas Market to get you in the festive spirit. Experience the magic of Christmas in Switzerland, Germany, Austria and France on this 16-day tour." },
        ],
    heroImage: getImagePath("christmas-banner.jpg"),
    route: "/tours/christmas",
    price: "Coming Soon",
    departureDates: [
      { date: "December 5, 2027", status: "available", year: 2027 },
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