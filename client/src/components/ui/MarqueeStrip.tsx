export function MarqueeStrip({ text }: { text: string }) {
  const repeated = `${text} ${text} ${text}`

  return (
    <section className="overflow-hidden border-y border-border bg-muted py-3">
      <div className="marquee-track flex w-max">
        <p className="whitespace-nowrap font-inter text-[0.7rem] font-light uppercase tracking-[0.3em] text-accent">
          {repeated}
        </p>
        <p className="whitespace-nowrap font-inter text-[0.7rem] font-light uppercase tracking-[0.3em] text-accent">
          {repeated}
        </p>
      </div>
    </section>
  )
}
