import { computed, defineComponent, type PropType } from 'vue'

import DownArrowIcon from '@/components/icons/DownArrowIcon.vue'
import CropHealthHeader from '@/modules/crops/components/CropHealthHeader/Index.vue'
import CropMeasurements from '@/modules/crops/components/CropMeasurements/Index.vue'
import { cropMeasurementConfig } from '@/modules/crops/constants'
import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateCropHealth, calculateMeasurementHealth } from '@/utils/cropHealth/cropHealth'
import { formatDate, formatTime } from '@/utils/date/date'

export default defineComponent({
  name: 'CropReportItem',

  components: {
    CropHealthHeader,
    CropMeasurements,
    DownArrowIcon,
  },

  props: {
    report: {
      type: Object as PropType<CropReport>,
      required: true,
    },
    crop: {
      type: Object as PropType<Crop>,
      required: true,
    },
    reporterName: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['toggle'],

  setup(props) {
    const health = computed(() =>
      calculateCropHealth(props.report.measurements, props.crop.optimalConditions),
    )

    const formattedDate = computed(() => formatDate(props.report.reportedAt))

    const formattedTime = computed(() => formatTime(props.report.reportedAt))

    const measurements = computed(() =>
      cropMeasurementConfig.map((config) => {
        const value = props.report.measurements[config.key]
        const optimalRange = props.crop.optimalConditions[config.key]

        return {
          ...config,
          value,
          optimalRange,
          health: calculateMeasurementHealth(value, optimalRange),
        }
      }),
    )

    return {
      health,
      formattedDate,
      formattedTime,
      measurements,
    }
  },
})
