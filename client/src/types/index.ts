export type Locale = 'en' | 'fr' | 'ar'

export type LocalizedText = Record<Locale, string>

export type PlaceType = 'city' | 'hidden_gem'

export interface Place {
  slug: string
  name: LocalizedText
  type: PlaceType
  description: LocalizedText
  history: LocalizedText
  funFacts: LocalizedText[]
  coordinates: {
    lat: number
    lng: number
  }
  highlights: string[]
  images: string[]
  weather: {
    avgTemp: number
    bestSeason: string
  }
}

export type ActivityCategory = 'water' | 'land' | 'cultural'
export type Difficulty = 'easy' | 'moderate' | 'hard'

export interface Activity {
  id: string
  name: LocalizedText
  location: 'lalla-takerkoust' | 'aghmat'
  category: ActivityCategory
  description: LocalizedText
  price: number
  duration: number
  difficulty: Difficulty
  image: string
  isEcoFriendly: boolean
  rating: number
}

export interface BudgetInput {
  travelers: number
  days: number
  transport: 'taxi' | 'bus' | 'rental_car'
  foodLevel: 'budget' | 'mid' | 'premium'
  activities: string[]
}

export interface BudgetResult {
  transportCost: number
  foodCost: number
  activityCost: number
  total: number
  perPerson: number
}

export interface PlannerInput {
  budget: number
  days: number
  interests: ActivityCategory[]
  pace: 'relaxed' | 'moderate' | 'intensive'
}

export interface DayPlan {
  day: number
  activities: Activity[]
  meals: string
  transport: string
  totalCost: number
}

export interface WeatherData {
  city: string
  temperature: number
  description: string
  humidity: number
  windSpeed: number
  icon: string
}
