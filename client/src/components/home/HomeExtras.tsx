import { BracketButton } from '../ui/BracketButton'
import { ScrollReveal } from '../ui/ScrollReveal'

export function PhotoBanner() {
  return (
    <section className="relative h-[380px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=82"
        alt="Atlas mountains at sunset"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="photo-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 text-center md:px-10">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] italic leading-tight text-white">
          Where the Atlas meets the Atlantic.
        </h2>
        <p className="mt-4 font-inter text-sm font-light text-white/65">One region. Five rhythms. A journey shaped by contrast.</p>
        <div className="mt-8">
          <BracketButton variant="light" to="/contact">
            Start Your Journey
          </BracketButton>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const testimonials = [
    ['A beautiful way to understand why Marrakech-Safi is more than one city.', 'Nadia B., Casablanca'],
    ['The Lalla Takerkoust planner made our day trip feel effortless and cinematic.', 'Thomas R., Lyon'],
    ['Essaouira, Safi and Aghmat finally felt connected in one coherent story.', 'Meriem A., Rabat'],
  ]

  return (
    <section className="border-y border-border bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-[clamp(2rem,3vw,3rem)] italic text-foreground">What travelers say.</h2>
        </ScrollReveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {testimonials.map(([quote, author]) => (
            <article key={author}>
              <p className="mb-4 text-xs tracking-[0.2em] text-accent">★★★★★</p>
              <p className="font-serif text-[1.05rem] italic leading-[1.7] text-foreground">“{quote}”</p>
              <p className="mt-4 font-inter text-[0.72rem] font-light uppercase tracking-[0.1em] text-accent">— {author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InstagramStrip() {
  const photos = [
    'photo-1597212618440-806262de4f6b',
    '/images/cities/ess2.jpg',
    '/images/gallery/kech2.jpg',
    '/images/cities/safi.jpg',
    '/images/food/tajine.jpg',
  ]

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-8 flex items-center justify-between">
          <p className="font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">@atlasatlantic</p>
          <BracketButton>Follow Us</BracketButton>
        </div>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          {photos.map((photo, index) => (
            <div key={photo} className={`aspect-square overflow-hidden ${index > 2 ? 'hidden md:block' : ''}`}>
              <img
                src={
                  photo.startsWith('/')
                    ? photo
                    : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=600&q=80`
                }
                alt="Marrakech-Safi visual story"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
