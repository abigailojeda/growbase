import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar/Index.vue'

import { useTheme } from '@/composables/useTheme/useTheme'
import { growbaseTheme } from '@/theme/growbase.theme'

export default defineComponent({
  name: 'AuthLayout',

  components: {
    Navbar,
  },

  setup() {
    useTheme(growbaseTheme)
  },
})
