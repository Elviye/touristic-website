import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { places } from '../../lib/data'
import { BracketButton } from '../ui/BracketButton'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

const markerPosition: Record<string, { x: string; y: string }> = {
  marrakech: { x: '52%', y: '50%' },
  essaouira: { x: '17%', y: '43%' },
  safi: { x: '26%', y: '22%' },
  'lalla-takerkoust': { x: '47%', y: '62%' },
  aghmat: { x: '62%', y: '67%' },
}

export function InteractiveMap() {
  const [selected, setSelected] = useState(places[0])

  return (
    <section className="overflow-hidden bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <ScrollReveal>
          <SectionLabel>Interactive Map</SectionLabel>
          <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.6rem)] italic leading-[1.1] text-foreground">
            Explore the region by rhythm, coast and mountain.
          </h2>
          <p className="mt-5 max-w-md font-inter text-[0.95rem] font-light leading-[1.75] text-accent">
            Click each destination to reveal the story: imperial medinas, blue Atlantic lanes, pottery workshops, lake
            adventures and medieval ruins.
          </p>
          <div className="mt-9">
            <BracketButton to="/region">Open Region Guide</BracketButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative min-h-[520px] border border-border bg-muted p-6">
            <div className="absolute inset-8 border border-border/70" />
            <div className="absolute left-10 top-10 font-serif text-7xl italic text-border/70">MS</div>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500" aria-hidden="true">
              <path
                d="M150 80 C90 140 80 250 130 335 C185 430 320 430 386 322 C440 235 398 110 292 72 C238 52 190 50 150 80Z"
                fill="none"
                stroke="currentColor"
                className="text-accent/40"
                strokeWidth="2"
              />
              <path d="M80 120 C100 210 95 315 70 390" fill="none" stroke="currentColor" className="text-essaouira-blue" />
            </svg>

            {places.map((place) => (
              <button
                key={place.slug}
                type="button"
                onClick={() => setSelected(place)}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-accent transition-transform hover:scale-110"
                style={{ left: markerPosition[place.slug].x, top: markerPosition[place.slug].y }}
                aria-label={`Show ${place.name.en}`}
              >
                <MapPin className={selected.slug === place.slug ? 'fill-accent' : ''} />
              </button>
            ))}

            <div className="absolute bottom-6 left-6 right-6 bg-background p-5">
              <div className="grid gap-4 md:grid-cols-[120px_1fr]">
                <img src={selected.images[0]} alt={selected.name.en} className="h-28 w-full object-cover" />
                <div>
                  <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">{selected.type}</p>
                  <h3 className="mt-2 font-serif text-2xl italic">{selected.name.en}</h3>
                  <p className="mt-2 font-inter text-sm font-light leading-relaxed text-accent">{selected.description.en}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
