import { defineComponent, type PropType } from 'vue'
import type { TeamWorkerTaskSummary } from '../../types'

export default defineComponent({
  name: 'TeamOverview',

  props: {
    workers: {
      type: Array as PropType<TeamWorkerTaskSummary[]>,
      required: true,
    },
  },
})
