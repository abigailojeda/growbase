import { defineComponent, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import type { BusinessLine } from '@/modules/businessLines/types'
import type { UserRole } from '../../types'

export default defineComponent({
  name: 'AccountItem',

  props: {
    businessLine: {
      type: Object as PropType<BusinessLine>,
      required: true,
    },
  },

  emits: {
    login: (_role: UserRole) => true,
  },

  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
