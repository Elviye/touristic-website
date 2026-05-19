import { Schema, model } from 'mongoose'

const localizedText = {
  en: { type: String, required: true },
  fr: { type: String, required: true },
  ar: { type: String, required: true },
}

const activitySchema = new Schema(
  {
    id: { type: String, unique: true, required: true },
    name: localizedText,
    location: { type: String, enum: ['lalla-takerkoust', 'aghmat'], required: true },
    category: { type: String, enum: ['water', 'land', 'cultural'], required: true },
    description: localizedText,
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    difficulty: { type: String, enum: ['easy', 'moderate', 'hard'], required: true },
    image: String,
    isEcoFriendly: Boolean,
    rating: Number,
  },
  { timestamps: true },
)

export const Activity = model('Activity', activitySchema)
