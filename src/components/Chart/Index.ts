import {
  Chart as ChartJS,
  registerables,
  type ChartData,
  type ChartOptions,
  type ChartType,
} from 'chart.js'
import { defineComponent, type PropType } from 'vue'
import { Chart as VueChart } from 'vue-chartjs'

ChartJS.register(...registerables)

export default defineComponent({
  name: 'AppChart',

  components: {
    VueChart,
  },

  props: {
    type: {
      type: String as PropType<ChartType>,
      required: true,
    },
    data: {
      type: Object as PropType<ChartData>,
      required: true,
    },
    options: {
      type: Object as PropType<ChartOptions>,
      default: () => ({}),
    },
    ariaLabel: {
      type: String,
      required: true,
    },
  },
})
