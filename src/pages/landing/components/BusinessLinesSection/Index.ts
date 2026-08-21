import { defineComponent } from 'vue'

import fieldsIconUrl from '@/assets/images/business-lines/tree-alt.svg'
import greenhouseIconUrl from '@/assets/images/business-lines/plant-pot.svg'
import vineyardIconUrl from '@/assets/images/business-lines/cherry.svg'

const businessLines = [
  {
    name: 'Vineyard',
    description: 'Manage rows, monitor vines and maintain quality from bud to harvest.',
    icon: vineyardIconUrl,
  },
  {
    name: 'Greenhouse',
    description: 'Control growing conditions and optimize year-round production.',
    icon: greenhouseIconUrl,
  },
  {
    name: 'Open Fields',
    description: 'Oversee large areas, plan operations and maximize field performance.',
    icon: fieldsIconUrl,
  },
]

export default defineComponent({
  name: 'BusinessLinesSection',

  setup() {
    return {
      businessLines,
    }
  },
})
