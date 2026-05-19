import mongoose from 'mongoose'

export async function connectDatabase() {
  const uri = process.env.MONGO_URI

  if (!uri) {
    console.warn('MONGO_URI is not set. API will use in-memory seed data where available.')
    return
  }

  await mongoose.connect(uri)
  console.log('MongoDB connected')
}
