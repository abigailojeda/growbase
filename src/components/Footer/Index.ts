import { defineComponent } from 'vue'

import Logo from '@/components/Logo/Index.vue'

export default defineComponent({
  name: 'FooterApp',

  components: {
    Logo,
  },

  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear,
    }
  },
})
