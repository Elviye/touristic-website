import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../types'

export function useLanguage() {
  const { i18n } = useTranslation()
  const language = i18n.language as Locale

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return {
    language,
    setLanguage: (locale: Locale) => i18n.changeLanguage(locale),
  }
}
