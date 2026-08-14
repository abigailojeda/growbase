import { defineComponent, type PropType } from 'vue'

import ColorModeToggle from '@/components/ColorModeToggle/Index.vue'
import Logo from '@/components/Logo/Index.vue'

type NavbarVariant = 'glass' | 'plain'

export default defineComponent({
  name: 'AppNavbar',

  components: {
    Logo,
    ColorModeToggle,
  },

  props: {
    variant: {
      type: String as PropType<NavbarVariant>,
      default: 'plain',
    },
  },
})
