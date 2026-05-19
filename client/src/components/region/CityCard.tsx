import type { Place } from '../../types'
import { ScrollReveal } from '../ui/ScrollReveal'

export function CityCard({ city, index }: { city: Place; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <article className="grid gap-8 border-t-2 border-foreground pt-8 md:grid-cols-[0.85fr_1.15fr]">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={city.images[0]}
            alt={city.name.en}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
          />
        </div>
        <div>
          <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">{city.type}</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,3vw,3rem)] italic">{city.name.en}</h2>
          <p className="mt-5 font-inter text-sm font-light leading-[1.8] text-accent">{city.history.en}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {city.highlights.map((highlight) => (
              <span key={highlight} className="border border-border px-3 py-2 font-inter text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-7 space-y-3">
            {city.funFacts.map((fact) => (
              <p key={fact.en} className="font-inter text-sm font-light leading-relaxed text-foreground">
                <span className="text-accent">Fact · </span>
                {fact.en}
              </p>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
