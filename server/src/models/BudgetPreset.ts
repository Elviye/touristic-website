import { Schema, model } from 'mongoose'

const localizedText = {
  en: { type: String, required: true },
  fr: { type: String, required: true },
  ar: { type: String, required: true },
}

const budgetPresetSchema = new Schema(
  {
    category: { type: String, enum: ['transport', 'food', 'activity', 'accommodation'], required: true },
    name: localizedText,
    options: [
      {
        label: localizedText,
        pricePerUnit: Number,
        unit: { type: String, enum: ['trip', 'meal', 'session', 'night'] },
      },
    ],
  },
  { timestamps: true },
)

export const BudgetPreset = model('BudgetPreset', budgetPresetSchema)
