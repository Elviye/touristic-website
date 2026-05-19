import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  { to: '/region', key: 'region' },
  { to: '/lalla-takerkoust', key: 'lake' },
  { to: '/aghmat', key: 'aghmat' },
  { to: '/sustainable-tourism', key: 'sustainable' },
  { to: '/gallery', key: 'gallery' },
  { to: '/contact', key: 'contact' },
]

function NavItems({ onClick }: { onClick?: () => void }) {
  const { t } = useTranslation()

  return links.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      onClick={onClick}
      className={({ isActive }) =>
        `font-inter text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
          isActive ? 'text-white' : 'text-white/55 hover:text-white'
        }`
      }
    >
      {t(`nav.${link.key}`)}
    </NavLink>
  ))
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 bg-navbar px-5 py-5 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="hidden items-center gap-7 md:flex">
          <NavItems />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>

        <Link to="/" className="font-serif text-xl italic tracking-[0.22em] text-white">
          {t('brand')}
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-navbar px-8 py-7 md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-xl italic tracking-[0.22em] text-white" onClick={() => setIsOpen(false)}>
              {t('brand')}
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-7">
            <NavItems onClick={() => setIsOpen(false)} />
            <div className="pt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
