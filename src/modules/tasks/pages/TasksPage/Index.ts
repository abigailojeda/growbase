import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import Maintenance from '@/components/Maintenance/Index.vue'

export default defineComponent({
  name: 'TasksPage',

  components: {
    Maintenance,
  },

  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
