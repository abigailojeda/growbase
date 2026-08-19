import { defineComponent, type PropType } from 'vue'

export interface CropHealthCounts {
  good: number
  warning: number
  critical: number
  noData: number
}

export default defineComponent({
  name: 'CropHealthOverview',

  props: {
    counts: {
      type: Object as PropType<CropHealthCounts>,
      required: true,
    },
  },
})
