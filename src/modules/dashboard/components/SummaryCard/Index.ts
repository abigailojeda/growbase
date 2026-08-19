import { defineComponent, type PropType } from 'vue'

export type SummaryCardVariant = 'default' | 'primary' | 'warning'

export default defineComponent({
  name: 'SummaryCard',

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    variant: {
      type: String as PropType<SummaryCardVariant>,
      default: 'default',
    },
  },
})
