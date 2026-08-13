import { defineComponent, onMounted } from 'vue'

import { applyTheme } from '@/theme/applyTheme'
import { growbaseTheme } from '@/theme/growbase.theme'

export default defineComponent({
  name: 'LandingLayout',

  setup() {
    onMounted(() => {
      applyTheme(growbaseTheme.light)
    })
  },
})
