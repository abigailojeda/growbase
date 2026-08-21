import { defineComponent } from 'vue'

import HealthIcon from '@/components/icons/HealthIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import ReportIcon from '@/components/icons/ReportIcon.vue'
import CropIcon from '@/components/icons/CropIcon.vue'

const features = [
  {
    title: 'Crop monitoring',
    description: 'Track temperature, humidity, soil moisture, pH and more in real time.',
    icon: HealthIcon,
  },
  {
    title: 'Task coordination',
    description: 'Create tasks, assign them to your team and monitor progress effortlessly.',
    icon: ListIcon,
  },
  {
    title: 'Report history',
    description: 'Keep a complete history of measurements, observations and field reports.',
    icon: ReportIcon,
  },
  {
    title: 'Health insights',
    description: 'Identify crop health issues quickly and focus attention where it matters.',
    icon: CropIcon,
  },
]

export default defineComponent({
  name: 'FeaturesSection',

  setup() {
    return {
      features,
    }
  },
})
