const transports = [
  ['Taxi', '350-500 MAD', '45 min', 'Flexible and direct, best for groups.'],
  ['Bus', '25-45 MAD', '70-90 min', 'Budget-friendly but less predictable.'],
  ['Rental Car', '350-500 MAD/day', '45 min', 'Best for combining lake, Aghmat and Ourika.'],
]

export function TransportTable() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Getting there.</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse font-inter text-sm">
            <thead>
              <tr className="border-y border-border text-left text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                <th className="py-4 font-medium">Transport</th>
                <th className="py-4 font-medium">Price</th>
                <th className="py-4 font-medium">Time</th>
                <th className="py-4 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody>
              {transports.map(([mode, price, time, best]) => (
                <tr key={mode} className="border-b border-border">
                  <td className="py-5 font-medium text-foreground">{mode}</td>
                  <td className="py-5 font-light text-accent">{price}</td>
                  <td className="py-5 font-light text-accent">{time}</td>
                  <td className="py-5 font-light text-accent">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
