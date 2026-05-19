const media = [
  ['Marrakech rooftops', 'photo-1597212618440-806262de4f6b'],
  ['Essaouira blue lanes', '/images/cities/ess1.jpg'],
  ['Atlas lake', '/images/gallery/la takr2.jpg'],
  ['Safi craft', '/images/gallery/safi craft.jpg'],
  ['Aghmat ruins', '/images/gallery/aghmar ruins.JPG'],
  ['Moroccan table', '/images/gallery/table.jpg'],
]

export function GalleryGrid() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="mb-5 font-inter text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent">Gallery</p>
        <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,5rem)] italic leading-[1.05]">Postcards in motion.</h1>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {media.map(([title, photo], index) => (
            <article key={title} className={`${index % 3 === 0 ? 'md:row-span-2' : ''}`}>
              <div className={`${index % 3 === 0 ? 'aspect-[9/14]' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={
                    photo.startsWith('/')
                      ? photo
                      : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=900&q=82`
                  }
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
              <p className="mt-3 font-inter text-[0.68rem] uppercase tracking-[0.2em] text-accent">{title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
