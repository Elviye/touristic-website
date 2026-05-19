const activities = [
  ['Kayak at Lalla Takerkoust', 'A low-noise way to experience the lake and Atlas reflection.'],
  ['Aghmat heritage walk', 'Supports conservation awareness and local storytelling.'],
  ['Pottery cooperative in Safi', 'Buy direct and learn traditional ceramic techniques.'],
  ['Gnawa evening in Essaouira', 'Cultural spending that supports musicians and venues.'],
]

export function GreenActivities() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Green activities</p>
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Experiences with lower impact.</h2>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {activities.map(([title, text]) => (
            <article key={title} className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl italic">{title}</h3>
              <p className="mt-3 font-inter text-sm font-light leading-[1.75] text-accent">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
