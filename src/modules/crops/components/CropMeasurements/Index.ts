import { defineComponent, type PropType } from 'vue'

import type { MeasurementRange } from '@/modules/crops/types'

import { useI18n } from 'vue-i18n'

interface CropMeasurement {
  key: string
  label: string
  value: number
  unit: string
  optimalRange: MeasurementRange
  health: 'good' | 'warning' | 'critical'
}

export default defineComponent({
  name: 'CropMeasurements',

  props: {
    measurements: {
      type: Array as PropType<CropMeasurement[]>,
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
