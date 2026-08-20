import { defineComponent, type PropType } from 'vue'

import ColorModeToggle from '@/components/ColorModeToggle/Index.vue'
import Logo from '@/components/Logo/Index.vue'

export type NavbarVariant = 'glass' | 'surface'

export default defineComponent({
  name: 'AppNavbar',

  components: {
    ColorModeToggle,
    Logo,
  },

  props: {
    variant: {
      type: String as PropType<NavbarVariant>,
      default: 'plain',
    },
    logoTo: {
      type: String,
      default: undefined,
    },
    showLogo: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
  },
})
