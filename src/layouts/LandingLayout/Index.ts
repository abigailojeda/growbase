import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import Navbar from '@/components/Navbar/Index.vue'
import { useTheme } from '@/composables/useTheme/useTheme'
import { growbaseTheme } from '@/theme/growbase.theme'

import { useColorModeStore } from '@/theme/stores/colorMode.store'

export default defineComponent({
  name: 'LandingLayout',

  components: {
    Navbar,
  },

  setup() {
    const colorModeStore = useColorModeStore()
    const { mode } = storeToRefs(colorModeStore)

    useTheme(growbaseTheme)
  },
})
