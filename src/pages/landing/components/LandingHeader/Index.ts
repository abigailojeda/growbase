import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import { useColorMode } from '@/composables/useColorMode/useColorMode'

import landingLight01 from '@/assets/images/landing/landing-light-01.svg'
import landingLight02 from '@/assets/images/landing/landing-light-02.svg'
import landingDark01 from '@/assets/images/landing/landing-dark-01.svg'
import landingDark02 from '@/assets/images/landing/landing-dark-02.svg'

import { useColorModeStore } from '@/theme/stores/colorMode.store'
const landingImages = {
  light: {
    primary: landingLight01,
    secondary: landingLight02,
  },
  dark: {
    primary: landingDark01,
    secondary: landingDark02,
  },
} as const

export default defineComponent({
  name: 'LandingHeader',

  setup() {
    useColorMode()

    const colorModeStore = useColorModeStore()
    const { mode } = storeToRefs(colorModeStore)

    const images = computed(() => landingImages[mode.value])

    return {
      images,
    }
  },
})
