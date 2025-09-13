
export interface Tour {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
export type LatLng = [number, number]

export type ItineraryStop = {
  day: number
  city: string
  coords: LatLng
  details: string[]
  images?: string[] // optional gallery images for that stop
}

export type Itinerary = {
  id: string
  name: string
  region: string
  summary: string
  durationDays: number
  theme: string
  heroImage?: string
  stops: ItineraryStop[]
}