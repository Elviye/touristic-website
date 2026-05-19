import { places } from '../../lib/data'
import { BracketButton } from '../ui/BracketButton'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

const gems = places.filter((place) => place.type === 'hidden_gem')

export function HiddenGems() {
  return (
    <section className="overflow-hidden bg-muted py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2 md:px-10">
        <ScrollReveal className="md:-ml-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/images/home/maskot.jpg"
              alt="Moroccan musician mascot"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionLabel>Hidden Gems</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic leading-tight text-foreground">
            Untouched. Timeless. Waiting for you.
          </h2>
          <p className="mt-6 max-w-sm font-inter text-[0.95rem] font-light leading-[1.8] text-accent">
            Beyond the medina, discover a quieter side of Marrakech-Safi: cool lake air, terracotta villages and
            archaeological memory.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {gems.map((gem, index) => (
              <div key={gem.slug} className="flex items-start gap-5">
                <span className="w-12 shrink-0 font-serif text-4xl italic leading-none text-border">0{index + 1}</span>
                <div>
                  <h3 className="font-inter text-sm font-medium text-foreground">{gem.name.en}</h3>
                  <p className="mt-1 font-inter text-sm font-light leading-relaxed text-accent">{gem.description.en}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <BracketButton to="/lalla-takerkoust">Plan Hidden Gems</BracketButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
