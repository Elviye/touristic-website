const tips = [
  'Carry a refillable bottle and limit water waste, especially near rural communities.',
  'Hire local certified guides for medinas, ruins and mountain routes.',
  'Buy pottery, textiles and food directly from cooperatives and family-run shops.',
  'Use shared taxis, buses or grouped transfers when possible.',
  'Respect prayer times, photography etiquette and rural dress codes.',
]

export function EcoTips() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Sustainable Tourism</p>
        <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,5rem)] italic leading-[1.05]">
          Travel lightly. Leave value behind.
        </h1>
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {tips.map((tip, index) => (
            <article key={tip} className="border-t-2 border-foreground pt-6">
              <p className="font-serif text-4xl italic text-border">0{index + 1}</p>
              <p className="mt-4 font-inter text-sm font-light leading-[1.75] text-accent">{tip}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
