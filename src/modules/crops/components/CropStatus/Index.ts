import { defineComponent, type PropType } from 'vue'

import GearIcon from '@/components/icons/GearIcon.vue'
import type { CropStatus } from '@/modules/crops/types'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'CropStatus',

  components: {
    GearIcon,
  },

  props: {
    status: {
      type: String as PropType<CropStatus>,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
