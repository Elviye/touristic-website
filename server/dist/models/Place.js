import { Schema, model } from 'mongoose';
const localizedText = {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    ar: { type: String, required: true },
};
const placeSchema = new Schema({
    name: localizedText,
    slug: { type: String, unique: true, required: true },
    type: { type: String, enum: ['city', 'hidden_gem'], required: true },
    description: localizedText,
    history: localizedText,
    funFacts: [localizedText],
    coordinates: {
        lat: Number,
        lng: Number,
    },
    highlights: [String],
    images: [String],
    weather: {
        avgTemp: Number,
        bestSeason: String,
    },
}, { timestamps: true });
export const Place = model('Place', placeSchema);
