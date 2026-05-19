import { ActivityCard } from '../components/lalla-takerkoust/ActivityCard'
import { InstaSpots } from '../components/lalla-takerkoust/InstaSpots'
import { LakeIntro } from '../components/lalla-takerkoust/LakeIntro'
import { TransportTable } from '../components/lalla-takerkoust/TransportTable'
import { TripPlanner } from '../components/lalla-takerkoust/TripPlanner'
import { BudgetCalculator } from '../components/shared/BudgetCalculator'
import { activities } from '../lib/data'

export function LallaTakerkoust() {
  const lakeActivities = activities.filter((activity) => activity.location === 'lalla-takerkoust')

  return (
    <>
      <LakeIntro />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] italic">Activities.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {lakeActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>
      <TransportTable />
      <BudgetCalculator />
      <TripPlanner />
      <InstaSpots />
    </>
  )
}
