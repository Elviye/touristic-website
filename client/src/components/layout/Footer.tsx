import { Link } from 'react-router-dom'
import { BracketButton } from '../ui/BracketButton'

export function Footer() {
  const navLinks = ['Region', 'Lalla Takerkoust', 'Aghmat', 'Sustainable Tourism', 'Gallery', 'Contact']

  return (
    <footer className="bg-navbar px-5 py-14 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="font-serif text-xl italic tracking-[0.22em] text-white">
            ATLAS ATLANTIC
          </Link>
          <p className="mt-2 font-inter text-xs font-light tracking-[0.15em] text-white/40">
            Marrakech-Safi · Morocco
          </p>
          <p className="mt-1 font-inter text-xs font-light tracking-[0.15em] text-white/40">Est. 2026</p>
        </div>

        <div className="md:text-center">
          <p className="mb-5 font-inter text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/30">
            Navigate
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link} href="#" className="font-inter text-sm font-light text-white/55 transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-inter text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/30">
            Stay in touch
          </p>
          <form className="flex gap-3">
            <input
              className="h-10 flex-1 border-b border-white/25 bg-transparent font-inter text-sm font-light text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60"
              placeholder="Your email"
              type="email"
            />
            <BracketButton variant="light" className="px-4">
              →
            </BracketButton>
          </form>
          <div className="mt-6 flex gap-6">
            <a href="#" className="font-inter text-xs font-light tracking-[0.15em] text-white/40 hover:text-white/80">
              Instagram
            </a>
            <a href="#" className="font-inter text-xs font-light tracking-[0.15em] text-white/40 hover:text-white/80">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
        <p className="font-inter text-xs font-light text-white/30">© 2026 Atlas Atlantic. All rights reserved.</p>
        <p className="font-serif text-sm italic text-white/25">Crafted with care.</p>
      </div>
    </footer>
  )
}
