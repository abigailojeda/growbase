import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { LOCALE_STORAGE_KEY, type AppLocale } from '@/lang'

export const useLocale = () => {
  const { locale } = useI18n()

  const currentLocale = computed(() => locale.value as AppLocale)

  const setLocale = (newLocale: AppLocale) => {
    locale.value = newLocale
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }

  return {
    currentLocale,
    setLocale,
  }
}
