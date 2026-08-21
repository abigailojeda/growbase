import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocale } from '@/composables/useLocale/useLocale'
import type { AppLocale } from '@/lang'

const languages: { locale: AppLocale; label: string }[] = [
  {
    locale: 'en',
    label: 'English',
  },
  {
    locale: 'es',
    label: 'Español',
  },
]

export default defineComponent({
  name: 'LanguageSelector',

  setup() {
    const { t } = useI18n()
    const { currentLocale, setLocale } = useLocale()

    const isOpen = ref(false)
    const menuRef = ref<HTMLElement>()

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const selectLanguage = (locale: AppLocale) => {
      setLocale(locale)
      isOpen.value = false
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.value?.contains(event.target as Node)) {
        isOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('mousedown', handleClickOutside)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleClickOutside)
    })

    return {
      t,
      languages,
      currentLocale,
      isOpen,
      menuRef,
      toggleMenu,
      selectLanguage,
    }
  },
})
