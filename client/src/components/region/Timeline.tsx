import { ScrollReveal } from '../ui/ScrollReveal'

const events = [
  ['Neolithic', 'Amazigh farming communities shape the Haouz and foothills.'],
  ['828', 'Aghmat becomes a major political and commercial center in the Souss orbit.'],
  ['1070', 'The Almoravids found Marrakech and shift power from Aghmat to the Red City.'],
  ['1147', 'The Almohads make Marrakech an imperial capital and leave major architectural traces.'],
  ['1488-1541', 'Portuguese occupation gives Safi Atlantic fortifications and maritime identity.'],
  ['1765', 'Essaouira is redesigned as a fortified free-trade port.'],
  ['2001', 'Essaouira medina enters UNESCO World Heritage recognition.'],
  ['2015', 'Modern Marrakech-Safi region is formed.'],
]

export function Timeline() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-[clamp(2rem,3vw,3rem)] italic">Timeline of a layered region.</h2>
        </ScrollReveal>
        <div className="mt-14 space-y-8">
          {events.map(([year, text], index) => (
            <ScrollReveal key={year} delay={index * 0.04}>
              <div className="grid gap-5 border-t border-border pt-6 md:grid-cols-[160px_1fr]">
                <p className="font-serif text-3xl italic text-accent">{year}</p>
                <p className="font-inter text-sm font-light leading-[1.75] text-foreground">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
