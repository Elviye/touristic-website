import { places } from '../../lib/data'
import { BracketButton } from '../ui/BracketButton'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

const chapters = [
  ['Before Marrakech', 'Aghmat was a thriving medieval Amazigh town and a key place of commerce, politics and religion.'],
  ['The Ruins', 'Excavations reveal a hammam, a palace, mosque remains, ramparts and qanats that carried water.'],
  ['Al-Mu’tamid', 'The exiled poet-king of Seville is buried here, turning the site into a place of memory and poetry.'],
  ['Local Experience', 'Combine a guided archaeological walk with Ourika valley food, pottery, gardens and mountain air.'],
]

export function StorytellingPage() {
  const aghmat = places.find((place) => place.slug === 'aghmat')!

  return (
    <>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(54, 28, 13, 0.1) 0%, rgba(54, 28, 13, 0.58) 100%), url('${aghmat.images[0]}')`,
          }}
          role="img"
          aria-label="Aghmat ruins"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-10">
          <SectionLabel>Aghmat</SectionLabel>
          <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] italic leading-[1.05] text-white">
            The city before the city.
          </h1>
          <p className="mt-5 max-w-xl font-inter text-sm font-light leading-[1.8] text-white/70">{aghmat.description.en}</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          {chapters.map(([title, text], index) => (
            <ScrollReveal key={title} delay={index * 0.08}>
              <article className="grid gap-7 border-t border-border py-12 md:grid-cols-[120px_1fr]">
                <p className="font-serif text-5xl italic text-border">0{index + 1}</p>
                <div>
                  <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">{title}</h2>
                  <p className="mt-4 font-inter text-sm font-light leading-[1.85] text-accent">{text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
          <div className="mt-8">
            <BracketButton to="/contact">Ask For A Local Guide</BracketButton>
          </div>
        </div>
      </section>
    </>
  )
}
