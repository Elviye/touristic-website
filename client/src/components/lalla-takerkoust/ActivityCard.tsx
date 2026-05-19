import type { Activity } from '../../types'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article>
      <div className="aspect-square overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name.en}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>
      <p className="mt-5 font-inter text-[0.6rem] uppercase tracking-[0.25em] text-accent">{activity.category}</p>
      <h3 className="mt-2 font-serif text-xl italic">{activity.name.en}</h3>
      <p className="mt-1 font-inter text-[0.78rem] font-light text-accent">
        {activity.price} MAD · {activity.duration} min · {activity.difficulty}
      </p>
      <p className="mt-3 font-inter text-sm font-light leading-[1.7] text-accent">{activity.description.en}</p>
    </article>
  )
}
