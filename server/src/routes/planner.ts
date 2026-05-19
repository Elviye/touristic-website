import { Router } from 'express'
import { z } from 'zod'
import { activities } from '../data.js'

const router = Router()

const plannerSchema = z.object({
  budget: z.number().min(1),
  days: z.number().min(1).max(5),
  interests: z.array(z.enum(['water', 'land', 'cultural'])),
  pace: z.enum(['relaxed', 'moderate', 'intensive']),
})

const paceLimit = { relaxed: 2, moderate: 3, intensive: 4 }

router.post('/generate', (req, res) => {
  const input = plannerSchema.parse(req.body)
  const interests = input.interests.length ? input.interests : ['water', 'land', 'cultural']
  const dailyBudget = input.budget / input.days
  const candidates = activities
    .filter((activity) => interests.includes(activity.category as 'water' | 'land' | 'cultural'))
    .sort((a, b) => b.rating / b.price - a.rating / a.price)
  const used = new Set<string>()

  const plan = Array.from({ length: input.days }, (_, index) => {
    let remaining = dailyBudget
    const dayActivities = []
    for (const activity of candidates) {
      if (used.has(activity.id) || dayActivities.length >= paceLimit[input.pace] || activity.price > remaining) continue
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

  res.json(plan)
})

export default router
