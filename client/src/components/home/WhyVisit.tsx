import { Compass, Landmark, Mountain, Palette, TreePine, Waves } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const reasons = [
  { title: 'Nature', icon: TreePine, text: 'Atlas foothills, lake landscapes and palm groves.' },
  { title: 'History', icon: Landmark, text: 'Almoravid, Almohad, Saadian and Portuguese traces.' },
  { title: 'Ocean', icon: Waves, text: 'Atlantic wind, surf culture and Safi seafood.' },
  { title: 'Mountains', icon: Mountain, text: 'Day trips into Ourika, Aghmat and Lalla Takerkoust.' },
  { title: 'Culture', icon: Palette, text: 'Gnawa music, pottery, souks and artisan craft.' },
  { title: 'Adventure', icon: Compass, text: 'Quad biking, kayaking, heritage walks and local food.' },
]

export function WhyVisit() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal>
            <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Why visit</p>
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,3.5vw,3.2rem)] italic text-foreground">
              A region that moves from silence to spectacle.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.05}>
              <article className="border-t-2 border-foreground pt-7">
                <reason.icon className="mb-6 text-accent transition-transform duration-700 hover:scale-110" size={30} />
                <h3 className="font-serif text-2xl italic text-foreground">{reason.title}</h3>
                <p className="mt-3 font-inter text-sm font-light leading-[1.75] text-accent">{reason.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
