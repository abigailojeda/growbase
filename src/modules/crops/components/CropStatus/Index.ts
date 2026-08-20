import { defineComponent, type PropType } from 'vue'

import GearIcon from '@/components/icons/GearIcon.vue'
import type { CropStatus } from '@/modules/crops/types'

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
})
