import 'dotenv/config'
import express from 'express'
import { ZodError } from 'zod'
import { connectDatabase } from './config/db.js'
import { corsMiddleware } from './middleware/cors.js'
import activitiesRouter from './routes/activities.js'
import budgetRouter from './routes/budget.js'
import contactRouter from './routes/contact.js'
import placesRouter from './routes/places.js'
import plannerRouter from './routes/planner.js'
import weatherRouter from './routes/weather.js'

const app = express()
const port = process.env.PORT ?? 4000

app.use(corsMiddleware)
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/places', placesRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/budget', budgetRouter)
app.use('/api/planner', plannerRouter)
app.use('/api/weather', weatherRouter)
app.use('/api/contact', contactRouter)

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error instanceof ZodError) {
    res.status(400).json({ message: 'Validation failed', issues: error.issues })
    return
  }

  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
})

connectDatabase().finally(() => {
  app.listen(port, () => {
    console.log(`API ready on http://localhost:${port}`)
  })
})
