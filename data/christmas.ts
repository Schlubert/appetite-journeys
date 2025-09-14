import { getImagePath } from '../utils/paths';

export type ItineraryStop = {
  day: number
  title: string
  description: string[]
  accommodation?: string
  includedActivities?: string[]
  optionalActivities?: string[]
  meals?: string[]
  images?: string[]
}

export const christmas = {
  name: "The Christmas Trail",
  heroImage: getImagePath('christmas-banner.jpg'),
  theme: "Festive Tour",
  durationDays: 14,
  price: "From CHF 3,260 per person",
   departureDates: [
  { date: "May 12, 2025", status: "sold-out" },
  { date: "June 23, 2025", status: "limited" },
  { date: "Sept 14, 2025" },
],
  summary:[
    'Get yourself in the festive spirit with this 14-day tour of Switzerland. From Zurich’s Christmas markets to Lucerne’s twinkling lights, this tour is a magical experience.'
      ],
  itinerary: <ItineraryStop[]>[
    {
      day: 1,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 2,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 3,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 4,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 5,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 6,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 7,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 8,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 9,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 10,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 11,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 12,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 13,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
        {
      day: 14,
      title: "Arrival in Zurich",
      description: [
        "Arrive in Zurich and settle into your boutique hotel.",
        "Explore the famous Zurich Christmas markets in the evening."
      ],
      accommodation: "Boutique hotel in Zurich city center",
      includedActivities: ["Welcome dinner", "Guided market visit"],
      meals: ["Dinner"],
      images: [
        getImagePath('Basel.jpeg'), 
        getImagePath('bern1.jpg')
    ]
    },
    // ➕ add more days as needed
  ]
}
