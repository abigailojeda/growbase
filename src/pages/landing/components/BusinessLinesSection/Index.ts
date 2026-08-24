import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import fieldsIconUrl from '@/assets/images/business-lines/tree-alt.svg'
import greenhouseIconUrl from '@/assets/images/business-lines/plant-pot.svg'
import vineyardIconUrl from '@/assets/images/business-lines/cherry.svg'

const businessLines = [
  {
    id: 'vineyard',
    name: 'landing.businessLines.vineyard.name',
    description: 'landing.businessLines.vineyard.description',
    icon: vineyardIconUrl,
  },
  {
    id: 'greenhouse',
    name: 'landing.businessLines.greenhouse.name',
    description: 'landing.businessLines.greenhouse.description',
    icon: greenhouseIconUrl,
  },
  {
    id: 'openFields',
    name: 'landing.businessLines.openFields.name',
    description: 'landing.businessLines.openFields.description',
    icon: fieldsIconUrl,
  },
]

export default defineComponent({
  name: 'BusinessLinesSection',

  setup() {
    const { t } = useI18n()

    return {
      businessLines,
      t,
    }
  },
})
