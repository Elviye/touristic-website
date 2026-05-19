import { Router } from 'express';
import { z } from 'zod';
import { activities, FOOD_RATES, TRANSPORT_RATES } from '../data.js';
const router = Router();
const budgetSchema = z.object({
    travelers: z.number().min(1),
    days: z.number().min(1),
    transport: z.enum(['taxi', 'bus', 'rental_car']),
    foodLevel: z.enum(['budget', 'mid', 'premium']),
    activities: z.array(z.string()),
});
router.get('/presets', (_req, res) => {
    res.json({ transport: TRANSPORT_RATES, food: FOOD_RATES });
});
router.post('/calculate', (req, res) => {
    const input = budgetSchema.parse(req.body);
    const selectedActivities = activities.filter((activity) => input.activities.includes(activity.id));
    const transportCost = TRANSPORT_RATES[input.transport] * input.days;
    const foodCost = FOOD_RATES[input.foodLevel] * input.days * input.travelers;
    const activityCost = selectedActivities.reduce((sum, activity) => sum + activity.price, 0) * input.travelers;
    const total = transportCost + foodCost + activityCost;
    res.json({ transportCost, foodCost, activityCost, total, perPerson: Math.round(total / input.travelers) });
});
export default router;
