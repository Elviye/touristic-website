import { useMemo, useState } from 'react'
import { generateItinerary } from '../../lib/data'
import type { ActivityCategory, PlannerInput } from '../../types'
import { BracketButton } from '../ui/BracketButton'

const categories: ActivityCategory[] = ['water', 'land', 'cultural']

export function TripPlanner() {
  const [input, setInput] = useState<PlannerInput>({
    budget: 1800,
    days: 2,
    interests: ['water', 'cultural'],
    pace: 'moderate',
  })

  const plan = useMemo(() => generateItinerary(input), [input])

  function toggleInterest(category: ActivityCategory) {
    setInput((current) => ({
      ...current,
      interests: current.interests.includes(category)
        ? current.interests.filter((interest) => interest !== category)
        : [...current.interests, category],
    }))
  }

  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Trip Planner</p>
            <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Generate your lake day.</h2>
            <div className="mt-8 grid gap-5">
              <input
                type="number"
                value={input.budget}
                onChange={(event) => setInput({ ...input, budget: Number(event.target.value) })}
                className="h-11 border border-border bg-background px-3 font-inter text-sm outline-none"
                aria-label="Budget"
              />
              <input
                type="number"
                min={1}
                max={5}
                value={input.days}
                onChange={(event) => setInput({ ...input, days: Number(event.target.value) })}
                className="h-11 border border-border bg-background px-3 font-inter text-sm outline-none"
                aria-label="Days"
              />
              <select
                value={input.pace}
                onChange={(event) => setInput({ ...input, pace: event.target.value as PlannerInput['pace'] })}
                className="h-11 border border-border bg-background px-3 font-inter text-sm outline-none"
              >
                <option value="relaxed">Relaxed</option>
                <option value="moderate">Moderate</option>
                <option value="intensive">Intensive</option>
              </select>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleInterest(category)}
                    className={`border px-4 py-2 font-inter text-[0.7rem] uppercase tracking-[0.15em] ${
                      input.interests.includes(category) ? 'border-foreground text-foreground' : 'border-border text-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <BracketButton>Generate</BracketButton>
            </div>
          </div>

          <div className="space-y-7">
            {plan.map((day) => (
              <article key={day.day} className="border-t border-border pt-6">
                <p className="font-serif text-4xl italic text-border">0{day.day}</p>
                <h3 className="mt-2 font-inter text-sm font-medium">Day {day.day}</h3>
                <div className="mt-4 space-y-2">
                  {day.activities.length ? (
                    day.activities.map((activity) => (
                      <p key={activity.id} className="font-inter text-sm font-light text-accent">
                        {activity.name.en} · {activity.price} MAD
                      </p>
                    ))
                  ) : (
                    <p className="font-inter text-sm font-light text-accent">Free lake walk and sunset viewpoint.</p>
                  )}
                </div>
                <p className="mt-4 font-inter text-xs font-light text-accent">
                  {day.transport} · {day.meals} · {day.totalCost} MAD
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
