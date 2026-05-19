const spots = ['Dam viewpoint', 'Atlas sunset ridge', 'Lakeside restaurant decks', 'Quiet kayak reflections', 'Desert tracks above the lake']

export function InstaSpots() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Instagrammable spots.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {spots.map((spot, index) => (
            <article key={spot} className="border-t-2 border-foreground pt-6">
              <p className="font-serif text-4xl italic text-border">0{index + 1}</p>
              <p className="mt-4 font-inter text-sm font-light leading-relaxed text-accent">{spot}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
