import { defineComponent } from 'vue'

import { useTheme } from '@/composables/useTheme/useTheme'
import { growbaseTheme } from '@/theme/growbase.theme'
import Navbar from '@/components/Navbar/Index.vue'
import UserMenu from '@/modules/auth/components/UserMenu/Index.vue'
import Footer from '@/components/Footer/Index.vue'

export default defineComponent({
  name: 'LandingLayout',

  components: {
    Navbar,
    UserMenu,
    Footer,
  },

  setup() {
    useTheme(growbaseTheme)
  },
})
