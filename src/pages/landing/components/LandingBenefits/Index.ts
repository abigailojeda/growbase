import { defineComponent } from 'vue'

import HealthIcon from '@/components/icons/HealthIcon.vue'
import ReportIcon from '@/components/icons/ReportIcon.vue'
import PlantIcon from '@/components/icons/PlantIcon.vue'
import AccountsIcon from '@/components/icons/AccountsIcons.vue'

const benefits = [
  {
    title: 'Save time',
    description: 'Simplify daily operations and reduce manual work.',
    icon: ReportIcon,
  },
  {
    title: 'Increase productivity',
    description: 'Use real-time insights to make better decisions, faster.',
    icon: PlantIcon,
  },
  {
    title: 'Empower your team',
    description: 'Assign tasks, track progress and keep everyone aligned.',
    icon: AccountsIcon,
  },
  {
    title: 'Stay organized',
    description: 'Keep crops, tasks and reports together in one place.',
    icon: HealthIcon,
  },
]

export default defineComponent({
  name: 'LandingBenefits',

  setup() {
    return {
      benefits,
    }
  },
})
