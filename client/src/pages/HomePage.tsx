import { HeroSection } from '../components/home/HeroSection'
import { HiddenGems } from '../components/home/HiddenGems'
import { PhotoBanner, InstagramStrip, Testimonials } from '../components/home/HomeExtras'
import { InteractiveMap } from '../components/home/InteractiveMap'
import { WhyVisit } from '../components/home/WhyVisit'
import { WeatherWidget } from '../components/shared/WeatherWidget'
import { MarqueeStrip } from '../components/ui/MarqueeStrip'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip text="NATURE · HISTORY · OCEAN · MOUNTAINS · CULTURE · ADVENTURE · SUSTAINABLE TOURISM ·" />
      <InteractiveMap />
      <WhyVisit />
      <HiddenGems />
      <PhotoBanner />
      <WeatherWidget />
      <Testimonials />
      <InstagramStrip />
    </>
  )
}
