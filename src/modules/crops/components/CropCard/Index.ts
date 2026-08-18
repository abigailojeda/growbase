import { computed, defineComponent, toRef, type PropType } from 'vue'

import { useCropHealth } from '@/composables/useCropHealth/useCropHealth'
import type { Crop, CropReport } from '@/modules/crops/types'

export default defineComponent({
  name: 'CropCard',

  props: {
    crop: {
      type: Object as PropType<Crop>,
      required: true,
    },
    report: {
      type: Object as PropType<CropReport>,
      default: undefined,
    },
  },

  setup(props) {
    const { health } = useCropHealth(toRef(props, 'crop'), toRef(props, 'report'))

    const healthLabel = computed(() => {
      if (!health.value) {
        return 'No data'
      }

      return {
        good: 'Good',
        warning: 'Warning',
        critical: 'Critical',
      }[health.value]
    })

    const healthClass = computed(() =>
      health.value ? `crop-health-${health.value}` : 'crop-health-no-data',
    )

    return {
      healthLabel,
      healthClass,
    }
  },
})
