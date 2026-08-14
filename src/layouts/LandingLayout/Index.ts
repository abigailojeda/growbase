import { storeToRefs } from 'pinia'
import { defineComponent, watch } from 'vue'

import { applyTheme } from '@/theme/applyTheme'
import { growbaseTheme } from '@/theme/growbase.theme'
import { useColorModeStore } from '@/theme/stores/colorMode.store'
import Navbar from '@/components/Navbar/Index.vue'

export default defineComponent({
  name: 'LandingLayout',

  components: {
    Navbar,
  },

  setup() {
    const colorModeStore = useColorModeStore()
    const { mode } = storeToRefs(colorModeStore)

    watch(
      mode,
      (newMode) => {
        applyTheme(growbaseTheme[newMode])
      },
      { immediate: true },
    )
  },
})
