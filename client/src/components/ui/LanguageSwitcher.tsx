import type { Locale } from '../../types'
import { useLanguage } from '../../hooks/useLanguage'

const locales: Locale[] = ['fr', 'en', 'ar']

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          type="button"
          key={locale}
          onClick={() => setLanguage(locale)}
          className={`font-inter text-[0.65rem] uppercase tracking-[0.18em] transition-colors ${
            language === locale ? 'text-white' : 'text-white/45 hover:text-white/80'
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  )
}
