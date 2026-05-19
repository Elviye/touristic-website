import { Router } from 'express'
import { places } from '../data.js'

const router = Router()

router.get('/', (_req, res) => {
  res.json(places)
})

router.get('/:slug', (req, res) => {
  const place = places.find((item) => item.slug === req.params.slug)
  if (!place) {
    res.status(404).json({ message: 'Place not found' })
    return
  }
  res.json(place)
})

export default router
