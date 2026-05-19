import { CloudSun } from 'lucide-react'
import { useWeather } from '../../hooks/useWeather'
import { ScrollReveal } from '../ui/ScrollReveal'

function WeatherCard({ city }: { city: string }) {
  const { weather, isLoading, error } = useWeather(city)

  return (
    <article className="border-t-2 border-foreground pt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">Live weather</p>
          <h3 className="mt-2 font-serif text-2xl italic">{city}</h3>
        </div>
        <CloudSun className="text-accent" />
      </div>
      <p className="mt-5 font-serif text-5xl italic">{isLoading && !weather ? '--' : Math.round(weather?.temperature ?? 0)}°</p>
      <p className="mt-3 font-inter text-sm font-light capitalize text-accent">{error ?? weather?.description}</p>
      <p className="mt-2 font-inter text-xs font-light text-accent/75">
        Humidity {weather?.humidity ?? '--'}% · Wind {weather?.windSpeed ?? '--'} m/s
      </p>
    </article>
  )
}

export function WeatherWidget() {
  return (
    <section className="border-y border-border bg-muted py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-serif text-[clamp(2rem,3vw,3rem)] italic text-foreground">
            Weather, before the road.
          </h2>
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-3">
          {['Marrakech', 'Essaouira', 'Safi'].map((city) => (
            <WeatherCard key={city} city={city} />
          ))}
        </div>
      </div>
    </section>
  )
}
