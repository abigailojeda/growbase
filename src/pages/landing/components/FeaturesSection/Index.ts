import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import CropIcon from '@/components/icons/CropIcon.vue'
import HealthIcon from '@/components/icons/HealthIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import ReportIcon from '@/components/icons/ReportIcon.vue'

const features = [
  {
    id: 'cropMonitoring',
    title: 'landing.features.cropMonitoring.title',
    description: 'landing.features.cropMonitoring.description',
    icon: HealthIcon,
  },
  {
    id: 'taskCoordination',
    title: 'landing.features.taskCoordination.title',
    description: 'landing.features.taskCoordination.description',
    icon: ListIcon,
  },
  {
    id: 'reportHistory',
    title: 'landing.features.reportHistory.title',
    description: 'landing.features.reportHistory.description',
    icon: ReportIcon,
  },
  {
    id: 'healthInsights',
    title: 'landing.features.healthInsights.title',
    description: 'landing.features.healthInsights.description',
    icon: CropIcon,
  },
]

export default defineComponent({
  name: 'FeaturesSection',

  setup() {
    const { t } = useI18n()

    return {
      features,
      t,
    }
  },
})
