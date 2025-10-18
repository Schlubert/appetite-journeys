// constants.ts
import { getImagePath } from './utils/paths';
export interface SummaryLine {
  text: string;
  className?: string; // optional so defaults can apply
}

export interface Tour {
  id: string;
  name: string;
  summary: SummaryLine[];
  heroImage: string;
  route: string;
  departureDates: string[]; 
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
  summary:[
    { text:"Explore the north and west of Switzerland. From lake front to mountain tops, distilleries and bakeries to cheesemakers and chocolate factories."},
    { text:"From NZ$13,800", className: "text-lg font-semibold text-center text-alpine-green mt-4"},
    { text:"per person (twin share).", className: "text-md italic text-center text-alpine-green" },
    { text:"Availability: September 2026/May 2027", className: "text-md italic text-center text-alpine-green" },
  ],
  heroImage: getImagePath("ragusa.jpg"),
  route: "/tours/cheese-chocolate-trail",
  departureDates: ["April 5, 2025", "June 10, 2025", "Sept 8, 2025"],
},
  {
    id: "waterfalls",
    name: "Waterfalls, Whiskey, and Walnuts",
    summary: [
      { text:"Visit 3 countries and explore the East of Switzerland. From the Rhine Falls to the vineyards of Appenzell and the historic abbey in St Gallen."},
    { text:"From NZ$13,800", className: "text-lg font-semibold text-center text-alpine-green mt-4"},
    { text:" per person (twin share).", className: "text-md italic text-center text-alpine-green" },
    { text:"Availability: September 2026/May 2027", className: "text-md italic text-center text-alpine-green" },
  ],
    heroImage: getImagePath("IMG20250720125834.jpg"),
    route: "/tours/waterfalls",
    departureDates: ["May 12, 2025", "June 23, 2025", "Sept 14, 2025"],
  },
  {
  id: "cake",
  name: "Cakes, Tortes, Gateaux and coffeehouses",
  summary:[
    { text:"Covering 4 countries, this 16-day tour explores the sweet side of Europe. From Vienna to Strasbourg and the Black Forest to the lakes of Switzerland."},
    { text:"Discover the cake that triggered one of the most famous culinary feuds in history and taste your way through some of Europe's best patisseries - including what is thought of as the oldest cake recipe in the world."},
    { text:"Coming Soon", className: "text-lg font-semibold text-center text-alpine-green mt-4"},
    { text:"Dates in May/June 2027",
     className: "text-lg font-semibold text-center text-alpine-green mt-4"},
    ],
  heroImage: getImagePath("black_forest_gat.jpg"),
  route: "/tours/cake",
  departureDates: ["COMING May/June 2027"],
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
    { label: 'Facebook', href: 'https://www.facebook.com/schlubert1' },
    { label: 'Instagram', href: 'https://www.instagram.com/your-profile' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
];