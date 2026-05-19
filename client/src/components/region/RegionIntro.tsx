import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function RegionIntro() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <ScrollReveal>
          <SectionLabel>The Region</SectionLabel>
          <h1 className="font-serif text-[clamp(2.8rem,5vw,5rem)] italic leading-[1.05]">
            Marrakech-Safi, from empire to ocean.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="font-inter text-[1rem] font-light leading-[1.85] text-accent">
            Marrakech-Safi was formed in 2015 by joining the inland Marrakech-Tensift-El Haouz area with Safi and
            Youssoufia. Its story reaches much deeper: Amazigh communities, Almoravid foundations, Almohad architecture,
            Saadian refinement, Portuguese Atlantic fortifications, Gnawa music, ceramic craft and modern tourism all
            overlap here.
          </p>
          <p className="mt-6 font-inter text-[1rem] font-light leading-[1.85] text-accent">
            The region is not one mood. Marrakech is red, theatrical and imperial. Essaouira is blue, windy and musical.
            Safi is clay, ocean and fortress stone.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
