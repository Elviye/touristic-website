import { places } from '../../lib/data'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function LakeIntro() {
  const lake = places.find((place) => place.slug === 'lalla-takerkoust')!

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <ScrollReveal>
          <SectionLabel>Lalla Takerkoust</SectionLabel>
          <h1 className="font-serif text-[clamp(2.8rem,5vw,5rem)] italic leading-[1.05]">Lake air, Atlas light.</h1>
          <p className="mt-6 max-w-xl font-inter text-[1rem] font-light leading-[1.85] text-accent">{lake.description.en}</p>
          <div className="mt-9 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">Distance</p>
              <p className="mt-2 font-serif text-2xl italic">35 km</p>
            </div>
            <div>
              <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">Avg weather</p>
              <p className="mt-2 font-serif text-2xl italic">{lake.weather.avgTemp}°C</p>
            </div>
            <div>
              <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">Best season</p>
              <p className="mt-2 font-serif text-xl italic">{lake.weather.bestSeason}</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <div className="aspect-[4/5] overflow-hidden md:-mr-16">
            <img src={lake.images[0]} alt="Lalla Takerkoust lake" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
