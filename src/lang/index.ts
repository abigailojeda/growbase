import { createI18n } from 'vue-i18n'

import en from './locale/en.json'
import es from './locale/es.json'

export const supportedLocales = ['en', 'es'] as const

export type AppLocale = (typeof supportedLocales)[number]

export const DEFAULT_LOCALE: AppLocale = 'en'
export const LOCALE_STORAGE_KEY = 'growbase-locale'

type MessageSchema = typeof en

const isSupportedLocale = (locale: string | null): locale is AppLocale =>
  supportedLocales.includes(locale as AppLocale)

const getInitialLocale = (): AppLocale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)

  return isSupportedLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE
}

const initialLocale = getInitialLocale()

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export const i18n = createI18n<[MessageSchema], AppLocale>({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    es,
  },
})
