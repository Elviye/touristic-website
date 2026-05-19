export const activities = [
  { id: 'quad-lake', location: 'lalla-takerkoust', category: 'land', price: 520, duration: 180, difficulty: 'moderate', rating: 4.7, name: { en: 'Atlas Quad Ride', fr: 'Balade Quad Atlas', ar: 'جولة كواد الأطلس' } },
  { id: 'jet-ski', location: 'lalla-takerkoust', category: 'water', price: 1180, duration: 15, difficulty: 'moderate', rating: 4.5, name: { en: 'Jet Ski Session', fr: 'Session Jet Ski', ar: 'جيت سكي' } },
  { id: 'kayak', location: 'lalla-takerkoust', category: 'water', price: 180, duration: 90, difficulty: 'easy', rating: 4.8, name: { en: 'Kayak & Paddle', fr: 'Kayak & Paddle', ar: 'كاياك وتجديف' } },
  { id: 'aghmat-guided', location: 'aghmat', category: 'cultural', price: 220, duration: 120, difficulty: 'easy', rating: 4.9, name: { en: 'Aghmat Heritage Walk', fr: 'Balade Patrimoine Aghmat', ar: 'جولة تراثية بأغمات' } },
  { id: 'ourika-local', location: 'aghmat', category: 'cultural', price: 170, duration: 90, difficulty: 'easy', rating: 4.6, name: { en: 'Local Lunch Experience', fr: 'Déjeuner Local', ar: 'غداء محلي' } },
]

export const places = [
  { slug: 'marrakech', type: 'city', coordinates: { lat: 31.6295, lng: -7.9811 }, name: { en: 'Marrakech', fr: 'Marrakech', ar: 'مراكش' } },
  { slug: 'essaouira', type: 'city', coordinates: { lat: 31.5085, lng: -9.7595 }, name: { en: 'Essaouira', fr: 'Essaouira', ar: 'الصويرة' } },
  { slug: 'safi', type: 'city', coordinates: { lat: 32.2994, lng: -9.2372 }, name: { en: 'Safi', fr: 'Safi', ar: 'آسفي' } },
  { slug: 'lalla-takerkoust', type: 'hidden_gem', coordinates: { lat: 31.357, lng: -8.131 }, name: { en: 'Lalla Takerkoust', fr: 'Lalla Takerkoust', ar: 'لالة تاكركوست' } },
  { slug: 'aghmat', type: 'hidden_gem', coordinates: { lat: 31.457, lng: -7.801 }, name: { en: 'Aghmat', fr: 'Aghmat', ar: 'أغمات' } },
]

export const TRANSPORT_RATES = { taxi: 350, bus: 45, rental_car: 420 }
export const FOOD_RATES = { budget: 90, mid: 170, premium: 360 }
