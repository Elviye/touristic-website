import type { Activity, ActivityCategory, BudgetInput, BudgetResult, DayPlan, Place, PlannerInput } from '../types'

export const imageFor = (query: string) =>
  `https://images.unsplash.com/${query}&auto=format&fit=crop&w=1400&q=82`

export const places: Place[] = [
  {
    slug: 'marrakech',
    name: { en: 'Marrakech', fr: 'Marrakech', ar: 'مراكش' },
    type: 'city',
    description: {
      en: 'The Red City blends imperial history, living souks, gardens, palaces, and night-time theatre around Jemaa el-Fnaa.',
      fr: 'La Ville Rouge mêle histoire impériale, souks vivants, jardins, palais et théâtre nocturne autour de Jemaa el-Fna.',
      ar: 'تجمع المدينة الحمراء بين التاريخ الإمبراطوري والأسواق والحدائق والقصور وحياة جامع الفنا.',
    },
    history: {
      en: 'Founded by the Almoravids around 1070, Marrakech became an imperial capital under the Almoravids, Almohads and Saadians.',
      fr: 'Fondée par les Almoravides vers 1070, Marrakech fut capitale impériale sous les Almoravides, les Almohades et les Saadiens.',
      ar: 'تأسست مراكش على يد المرابطين حوالي 1070 وأصبحت عاصمة إمبراطورية عبر عصور متعددة.',
    },
    funFacts: [
      { en: 'Its nickname comes from red sandstone walls.', fr: 'Son surnom vient de ses remparts rouges.', ar: 'لقبها مرتبط بلون أسوارها الحمراء.' },
      { en: 'Jemaa el-Fnaa changes character every evening.', fr: 'جامع الفنا يتغير كل مساء.', ar: 'تتغير ساحة جامع الفنا كل مساء.' },
    ],
    coordinates: { lat: 31.6295, lng: -7.9811 },
    highlights: ['Jemaa el-Fnaa', 'Koutoubia', 'Majorelle Garden', 'Medina'],
    images: ['/images/cities/kech.jpg'],
    weather: { avgTemp: 24, bestSeason: 'March-May / September-November' },
  },
  {
    slug: 'essaouira',
    name: { en: 'Essaouira', fr: 'Essaouira', ar: 'الصويرة' },
    type: 'city',
    description: {
      en: 'A breezy Atlantic port known for white-and-blue medina streets, Gnawa music, surf culture, and UNESCO heritage.',
      fr: 'Un port atlantique venteux connu pour sa médina blanche et bleue, la musique gnaoua, le surf et son patrimoine UNESCO.',
      ar: 'ميناء أطلسي معروف بمدينته البيضاء والزرقاء وموسيقى كناوة ورياضات البحر.',
    },
    history: {
      en: 'Modern Essaouira was planned in 1765 by Sultan Sidi Mohammed ben Abdallah as a fortified free-trade port.',
      fr: 'La ville moderne fut aménagée en 1765 par le sultan Sidi Mohammed ben Abdallah comme port fortifié de commerce.',
      ar: 'أعيد تخطيط الصويرة الحديثة سنة 1765 كميناء تجاري محصن.',
    },
    funFacts: [
      { en: 'Essaouira is a UNESCO Creative City of Music.', fr: 'Essaouira est une ville créative UNESCO de musique.', ar: 'الصويرة مدينة إبداعية للموسيقى لدى اليونسكو.' },
      { en: 'Its winds make it famous for kite and windsurfing.', fr: 'Ses vents en font une destination de kitesurf.', ar: 'رياحها تجعلها وجهة شهيرة لركوب الأمواج.' },
    ],
    coordinates: { lat: 31.5085, lng: -9.7595 },
    highlights: ['Skala', 'Gnawa Music', 'Medina', 'Surf Bay'],
    images: ['/images/cities/ess1.jpg'],
    weather: { avgTemp: 20, bestSeason: 'April-June / September-October' },
  },
  {
    slug: 'safi',
    name: { en: 'Safi', fr: 'Safi', ar: 'آسفي' },
    type: 'city',
    description: {
      en: 'A maritime city of pottery, Atlantic fortresses, sardine culture, and powerful surf breaks.',
      fr: 'Une ville maritime de poterie, de forteresses atlantiques, de culture sardinière et de vagues puissantes.',
      ar: 'مدينة بحرية تشتهر بالخزف والحصون الأطلسية وثقافة الصيد.',
    },
    history: {
      en: 'Occupied by the Portuguese from 1488 to 1541, Safi still preserves fortifications and a strong ceramic craft tradition.',
      fr: 'Occupée par les Portugais de 1488 à 1541, Safi conserve des fortifications et une forte tradition céramique.',
      ar: 'احتلها البرتغاليون بين 1488 و1541 وما زالت تحتفظ بتراث حصون وخزف.',
    },
    funFacts: [
      { en: 'Safi is one of Morocco’s ceramic capitals.', fr: 'Safi est une capitale marocaine de la céramique.', ar: 'آسفي من عواصم الخزف بالمغرب.' },
      { en: 'Its port is central to Morocco’s sardine economy.', fr: 'Son port est central dans l’économie de la sardine.', ar: 'ميناؤها مهم لصيد السردين.' },
    ],
    coordinates: { lat: 32.2994, lng: -9.2372 },
    highlights: ['Potter Hill', 'Kechla Fortress', 'Ksar El Bahr', 'Lalla Fatna'],
    images: ['/images/cities/safi2.webp'],
    weather: { avgTemp: 21, bestSeason: 'March-June / September-November' },
  },
  {
    slug: 'lalla-takerkoust',
    name: { en: 'Lalla Takerkoust', fr: 'Lalla Takerkoust', ar: 'لالة تاكركوست' },
    type: 'hidden_gem',
    description: {
      en: 'A calm artificial lake about 35 km from Marrakech, framed by Atlas foothills and adventure activities.',
      fr: 'Un lac artificiel paisible à environ 35 km de Marrakech, bordé par les contreforts de l’Atlas et les activités d’aventure.',
      ar: 'بحيرة اصطناعية هادئة قرب مراكش تحيط بها جبال الأطلس وأنشطة المغامرة.',
    },
    history: {
      en: 'Built around a dam, the lake became a local retreat for water sports, sunset views and mountain air.',
      fr: 'Né autour d’un barrage, le lac est devenu une escapade locale pour les sports nautiques et les couchers de soleil.',
      ar: 'تطورت حول السد كوجهة للرياضات المائية والمناظر الجبلية.',
    },
    funFacts: [{ en: 'The lake is more than 7 km long.', fr: 'Le lac dépasse 7 km de longueur.', ar: 'يتجاوز طول البحيرة 7 كيلومترات.' }],
    coordinates: { lat: 31.357, lng: -8.131 },
    highlights: ['Lake', 'Quad', 'Kayak', 'Atlas Views'],
    images: ['/images/gallery/lala takr.jpg'],
    weather: { avgTemp: 23, bestSeason: 'March-May / September-November' },
  },
  {
    slug: 'aghmat',
    name: { en: 'Aghmat', fr: 'Aghmat', ar: 'أغمات' },
    type: 'hidden_gem',
    description: {
      en: 'A medieval archaeological site near the Ourika Valley, once a major Berber commercial and political center.',
      fr: 'Un site archéologique médiéval près de la vallée de l’Ourika, ancien centre berbère commercial et politique.',
      ar: 'موقع أثري وسياسي وتجاري أمازيغي قديم قرب وادي أوريكا.',
    },
    history: {
      en: 'Aghmat flourished before Marrakech and contains remains of a hammam, palace, mosque, ramparts and the tomb of Al-Mu’tamid.',
      fr: 'Aghmat prospéra avant Marrakech et conserve hammam, palais, mosquée, remparts et tombe d’Al-Mu’tamid.',
      ar: 'ازدهرت أغمات قبل مراكش وتضم بقايا حمام وقصر ومسجد وضريح المعتمد.',
    },
    funFacts: [{ en: 'Al-Mu’tamid, exiled poet-king of Seville, is buried here.', fr: 'Al-Mu’tamid, roi-poète de Séville, y est enterré.', ar: 'دفن بها المعتمد بن عباد ملك وشاعر إشبيلية.' }],
    coordinates: { lat: 31.457, lng: -7.801 },
    highlights: ['Ruins', 'Hammam', 'Al-Mu’tamid Tomb', 'Ourika Valley'],
    images: ['/images/cities/aghmat.jpg'],
    weather: { avgTemp: 22, bestSeason: 'February-May / September-November' },
  },
]

export const activities: Activity[] = [
  {
    id: 'quad-lake',
    name: { en: 'Atlas Quad Ride', fr: 'Balade Quad Atlas', ar: 'جولة كواد الأطلس' },
    location: 'lalla-takerkoust',
    category: 'land',
    description: { en: 'Dusty foothill tracks with lake viewpoints.', fr: 'Pistes des contreforts avec vues sur le lac.', ar: 'مسارات ترابية بإطلالات على البحيرة.' },
    price: 520,
    duration: 180,
    difficulty: 'moderate',
    image: '/images/activities/quad.jpg',
    isEcoFriendly: false,
    rating: 4.7,
  },
  {
    id: 'jet-ski',
    name: { en: 'Jet Ski Session', fr: 'Session Jet Ski', ar: 'جيت سكي' },
    location: 'lalla-takerkoust',
    category: 'water',
    description: { en: 'Short adrenaline session on the lake.', fr: 'Courte session d’adrénaline sur le lac.', ar: 'جلسة حماسية قصيرة في البحيرة.' },
    price: 1180,
    duration: 15,
    difficulty: 'moderate',
    image: '/images/activities/jetski.jpg',
    isEcoFriendly: false,
    rating: 4.5,
  },
  {
    id: 'kayak',
    name: { en: 'Kayak & Paddle', fr: 'Kayak & Paddle', ar: 'كاياك وتجديف' },
    location: 'lalla-takerkoust',
    category: 'water',
    description: { en: 'Silent water activity for sunset and mountain reflections.', fr: 'Activité douce pour coucher de soleil et reflets montagneux.', ar: 'نشاط هادئ مع انعكاسات الجبال.' },
    price: 180,
    duration: 90,
    difficulty: 'easy',
    image: '/images/activities/kayak.jpg',
    isEcoFriendly: true,
    rating: 4.8,
  },
  {
    id: 'aghmat-guided',
    name: { en: 'Aghmat Heritage Walk', fr: 'Balade Patrimoine Aghmat', ar: 'جولة تراثية بأغمات' },
    location: 'aghmat',
    category: 'cultural',
    description: { en: 'Guided route through hammam, ramparts and Al-Mu’tamid’s story.', fr: 'Parcours guidé entre hammam, remparts et histoire d’Al-Mu’tamid.', ar: 'جولة بين الحمام والأسوار وقصة المعتمد.' },
    price: 220,
    duration: 120,
    difficulty: 'easy',
    image: imageFor('photo-1539650116574-75c0c6d73f6e?'),
    isEcoFriendly: true,
    rating: 4.9,
  },
  {
    id: 'ourika-local',
    name: { en: 'Local Lunch Experience', fr: 'Déjeuner Local', ar: 'غداء محلي' },
    location: 'aghmat',
    category: 'cultural',
    description: { en: 'Family-run meal with seasonal produce near Ourika.', fr: 'Repas familial avec produits saisonniers près de l’Ourika.', ar: 'وجبة عائلية بمنتجات موسمية قرب أوريكا.' },
    price: 170,
    duration: 90,
    difficulty: 'easy',
    image: imageFor('photo-1540189549336-e6e99c3679fe?'),
    isEcoFriendly: true,
    rating: 4.6,
  },
]

export const TRANSPORT_RATES = {
  taxi: 350,
  bus: 45,
  rental_car: 420,
}

export const FOOD_RATES = {
  budget: 90,
  mid: 170,
  premium: 360,
}

export function calculateBudget(input: BudgetInput, catalog = activities): BudgetResult {
  const selectedActivities = catalog.filter((activity) => input.activities.includes(activity.id))
  const transportCost = TRANSPORT_RATES[input.transport] * input.days
  const foodCost = FOOD_RATES[input.foodLevel] * input.days * input.travelers
  const activityCost = selectedActivities.reduce((sum, activity) => sum + activity.price, 0) * input.travelers
  const total = transportCost + foodCost + activityCost

  return {
    transportCost,
    foodCost,
    activityCost,
    total,
    perPerson: Math.round(total / Math.max(input.travelers, 1)),
  }
}

const paceLimit = {
  relaxed: 2,
  moderate: 3,
  intensive: 4,
}

export function generateItinerary(input: PlannerInput, catalog = activities): DayPlan[] {
  const interests = input.interests.length ? input.interests : (['water', 'land', 'cultural'] satisfies ActivityCategory[])
  const maxPerDay = paceLimit[input.pace]
  const dailyBudget = input.budget / input.days
  const candidates = catalog
    .filter((activity) => interests.includes(activity.category))
    .sort((a, b) => b.rating / b.price - a.rating / a.price)

  const used = new Set<string>()

  return Array.from({ length: input.days }, (_, index) => {
    let remaining = dailyBudget
    const dayActivities: Activity[] = []

    for (const activity of candidates) {
      if (used.has(activity.id) || dayActivities.length >= maxPerDay || activity.price > remaining) continue
      dayActivities.push(activity)
      used.add(activity.id)
      remaining -= activity.price
    }

    const totalCost = dayActivities.reduce((sum, activity) => sum + activity.price, 0)

    return {
      day: index + 1,
      activities: dayActivities,
      meals: totalCost > dailyBudget * 0.75 ? 'Light local lunch + mint tea' : 'Tanjia lunch + sunset tea stop',
      transport: dayActivities.some((activity) => activity.location === 'lalla-takerkoust')
        ? 'Private taxi or rental car from Marrakech'
        : 'Shared taxi toward Ourika/Aghmat',
      totalCost,
    }
  })
}
