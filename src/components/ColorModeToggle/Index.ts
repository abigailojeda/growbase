import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'

import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import { useColorModeStore } from '@/theme/stores/colorMode.store'

export default defineComponent({
  name: 'ColorModeToggle',

  components: {
    MoonIcon,
    SunIcon,
  },

  setup() {
    const colorModeStore = useColorModeStore()
    const { mode } = storeToRefs(colorModeStore)

    return {
      mode,
      toggleMode: colorModeStore.toggleMode,
    }
  },
})
