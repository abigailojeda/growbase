import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar/Index.vue'
import { useTheme } from '@/composables/useTheme/useTheme'
import { growbaseTheme } from '@/theme/growbase.theme'

export default defineComponent({
  name: 'LandingLayout',

  components: {
    Navbar,
  },

  setup() {
    useTheme(growbaseTheme)
  },
})
