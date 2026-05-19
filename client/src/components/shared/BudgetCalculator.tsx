import { useMemo, useState } from 'react'
import { activities, calculateBudget } from '../../lib/data'
import type { BudgetInput } from '../../types'
import { BracketButton } from '../ui/BracketButton'

export function BudgetCalculator() {
  const [input, setInput] = useState<BudgetInput>({
    travelers: 2,
    days: 1,
    transport: 'taxi',
    foodLevel: 'mid',
    activities: ['kayak', 'aghmat-guided'],
  })

  const result = useMemo(() => calculateBudget(input), [input])
  const max = Math.max(result.total, 1)

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Budget calculator</p>
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Estimate before you go.</h2>
          <div className="mt-8 grid gap-5">
            <label className="font-inter text-sm text-accent">
              Travelers
              <input
                min={1}
                type="number"
                value={input.travelers}
                onChange={(event) => setInput({ ...input, travelers: Number(event.target.value) })}
                className="mt-2 h-11 w-full border border-border bg-transparent px-3 text-foreground outline-none"
              />
            </label>
            <label className="font-inter text-sm text-accent">
              Days
              <input
                min={1}
                type="number"
                value={input.days}
                onChange={(event) => setInput({ ...input, days: Number(event.target.value) })}
                className="mt-2 h-11 w-full border border-border bg-transparent px-3 text-foreground outline-none"
              />
            </label>
            <select
              value={input.transport}
              onChange={(event) => setInput({ ...input, transport: event.target.value as BudgetInput['transport'] })}
              className="h-11 border border-border bg-background px-3 font-inter text-sm text-foreground outline-none"
            >
              <option value="taxi">Taxi</option>
              <option value="bus">Bus</option>
              <option value="rental_car">Rental car</option>
            </select>
            <select
              value={input.foodLevel}
              onChange={(event) => setInput({ ...input, foodLevel: event.target.value as BudgetInput['foodLevel'] })}
              className="h-11 border border-border bg-background px-3 font-inter text-sm text-foreground outline-none"
            >
              <option value="budget">Budget food</option>
              <option value="mid">Mid-range food</option>
              <option value="premium">Premium food</option>
            </select>
          </div>
        </div>

        <div className="border-t-2 border-foreground pt-8">
          {[
            ['Transport', result.transportCost],
            ['Food', result.foodCost],
            ['Activities', result.activityCost],
          ].map(([label, value]) => (
            <div key={label} className="mb-7">
              <div className="mb-2 flex justify-between font-inter text-sm">
                <span>{label}</span>
                <span className="text-accent">{value} MAD</span>
              </div>
              <div className="h-1 bg-border">
                <div className="h-full bg-accent" style={{ width: `${(Number(value) / max) * 100}%` }} />
              </div>
            </div>
          ))}
          <p className="mt-10 font-serif text-5xl italic">{result.total} MAD</p>
          <p className="mt-2 font-inter text-sm font-light text-accent">{result.perPerson} MAD per person</p>
          <div className="mt-8">
            <BracketButton>Save Estimate</BracketButton>
          </div>
          <p className="mt-6 font-inter text-xs font-light leading-relaxed text-accent">
            Activity catalog includes {activities.length} curated experiences; backend API mirrors this algorithm.
          </p>
        </div>
      </div>
    </section>
  )
}
