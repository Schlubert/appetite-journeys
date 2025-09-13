// constants.ts
export interface Tour {
  id: string;
  name: string;
  summary: string;
  heroImage: string;
  theme: string;
  durationDays: number;
  route: string;
  price: string; 
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
    summary:
      "12 days exploring the north and west of Switzerland. From lake front to mountain tops, distilleries and bakeries to cheesemakers and chocolate factories.",
    heroImage: "/images/IMG20250705153206.jpg",
    theme: "Food & Scenery",
    durationDays: 12,
    route: "/tours/cheese-chocolate-trail",
    price: "From CHF 3,100 per person",
    departureDates: ["April 5, 2025", "June 10, 2025", "Sept 8, 2025"],
  },
  {
    id: "waterfalls",
    name: "Waterfalls, Whiskey, and Walnuts",
    summary:
      "Visit 3 countries and explore the East of Switzerland. From the Rhine Falls to the vineyards of Appenzell and the historic abbey in St Gallen.",
    heroImage: "/images/IMG20250720125834.jpg",
    theme: "Adventure & Culture",
    durationDays: 10,
    route: "/tours/waterfalls",
    price: "From CHF 3,250 per person",
    departureDates: ["May 12, 2025", "June 23, 2025", "Sept 14, 2025"],
  },
  {
    id: "christmas-trail",
    name: "The Christmas Trail",
    summary:
      "Get yourself in the festive spirit with this 14-day tour of Switzerland. From Christmas markets in Zurich to the festive lights in Lucerne.",
    heroImage: "/images/Basel-Switzerland-Happy-to-Wander-0278.jpg",
    theme: "Festive",
    durationDays: 14,
    route: "/tours/christmas-trail",
    price: "From CHF 3,270 per person",
    departureDates: ["Dec 1, 2025", "Dec 8, 2025", "Dec 15, 2025"],
  },
  {
  id: "cake",
  name: "The Cake Trail",
  summary:
    "14 days celebrating cakes across Switzerland. From Zurich’s cake markets to the original Black Forest Gateau.",
  heroImage: "images/black_forest_gat.jpg",
  theme: "Festive Tour",
  durationDays: 14,
  route: "/tours/cake", // matches App.tsx
      price: "COMING SOON",
    departureDates: ["COMING SOON"],
},
];
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Tours', href: '/tours' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
export const SOCIAL_LINKS: SocialLink[] = [
    { label: 'Facebook', href: 'https://www.facebook.com/your-page' },
    { label: 'Instagram', href: 'https://www.instagram.com/your-profile' },
    { label: 'Twitter', href: 'https://www.twitter.com/your-handle' },
];