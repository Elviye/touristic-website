import { Router } from 'express'
import { activities } from '../data.js'

const router = Router()

router.get('/', (req, res) => {
  const location = req.query.location
  res.json(location ? activities.filter((activity) => activity.location === location) : activities)
})

router.get('/:id', (req, res) => {
  const activity = activities.find((item) => item.id === req.params.id)
  if (!activity) {
    res.status(404).json({ message: 'Activity not found' })
    return
  }
  res.json(activity)
})

export default router
