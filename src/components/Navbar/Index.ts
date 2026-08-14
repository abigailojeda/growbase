import { defineComponent } from 'vue'

import ColorModeToggle from '@/components/ColorModeToggle/Index.vue'
import Logo from '@/components/Logo/Index.vue'

export default defineComponent({
  name: 'AppNavbar',

  components: {
    ColorModeToggle,
    Logo,
  },
})
