import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import Logo from '@/components/Logo/Index.vue'

export default defineComponent({
  name: 'FooterApp',

  components: {
    Logo,
  },

  setup() {
    const { t } = useI18n()

    const currentYear = new Date().getFullYear()

    return {
      currentYear,
      t,
    }
  },
})
