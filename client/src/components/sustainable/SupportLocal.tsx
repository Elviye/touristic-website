import { BracketButton } from '../ui/BracketButton'

export function SupportLocal() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <div className="aspect-[4/5] overflow-hidden md:-ml-8">
          <img
            src="/images/sustainable/localcommunity.jpg"
            alt="Moroccan artisan craft"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">
            Support local communities
          </p>
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic leading-tight">Make the trip circular.</h2>
          <p className="mt-6 max-w-md font-inter text-sm font-light leading-[1.8] text-accent">
            Choose family-owned guesthouses, eat in small restaurants, pay guides fairly and buy direct from workshops.
            Tourism becomes stronger when money stays close to the people preserving the culture.
          </p>
          <div className="mt-9">
            <BracketButton to="/contact">Build Responsible Trip</BracketButton>
          </div>
        </div>
      </div>
    </section>
  )
}
