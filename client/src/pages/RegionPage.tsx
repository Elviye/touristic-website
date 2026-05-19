import { CityCard } from '../components/region/CityCard'
import { GastronomyGrid } from '../components/region/GastronomyGrid'
import { RegionIntro } from '../components/region/RegionIntro'
import { Timeline } from '../components/region/Timeline'
import { places } from '../lib/data'

export function RegionPage() {
  const cities = places.filter((place) => place.type === 'city')

  return (
    <>
      <RegionIntro />
      <section className="bg-background pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-10">
          {cities.map((city, index) => (
            <CityCard key={city.slug} city={city} index={index} />
          ))}
        </div>
      </section>
      <Timeline />
      <GastronomyGrid />
    </>
  )
}
