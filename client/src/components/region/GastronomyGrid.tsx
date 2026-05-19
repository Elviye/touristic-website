import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

const dishes = [
  ['Tajine', 'Slow-cooked meat or vegetables with preserved lemon, olives and aromatic spices.', '/images/food/tajine-dagneau.jpg'],
  ['Couscous', 'Steamed semolina with vegetables and lamb or chicken, traditionally shared on Fridays.', '/images/food/Couscous-Blog-photo-Post.png'],
  ['Tanjia', 'Marrakech’s symbolic lamb or veal dish, cooked slowly in a terracotta jar.', '/images/food/tanjia.jpeg'],
  ['Atlantic Fish', 'Safi and Essaouira bring grilled sardines, seafood tajines and coastal freshness.', '/images/food/fish.jpg'],
]

export function GastronomyGrid() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ScrollReveal>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] italic">Taste the route.</h2>
        </ScrollReveal>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {dishes.map(([name, text, image], index) => (
            <ScrollReveal key={name} delay={index * 0.06}>
              <article>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={
                      image.startsWith('/')
                        ? image
                        : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=82`
                    }
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-5 font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">Specialty</p>
                <h3 className="mt-2 font-serif text-xl italic">{name}</h3>
                <p className="mt-2 font-inter text-[0.78rem] font-light leading-[1.7] text-accent">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
