import { Router } from 'express'
import { z } from 'zod'
import { Contact } from '../models/Contact.js'

const router = Router()

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(5),
})

router.post('/', async (req, res) => {
  const payload = contactSchema.parse(req.body)

  if (process.env.MONGO_URI) {
    await Contact.create(payload)
  }

  res.status(201).json({ ok: true })
})

export default router
