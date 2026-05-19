import cors from 'cors'

export const corsMiddleware = cors({
  origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
})
