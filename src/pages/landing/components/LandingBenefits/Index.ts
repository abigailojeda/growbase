import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import AccountsIcon from '@/components/icons/AccountsIcons.vue'
import HealthIcon from '@/components/icons/HealthIcon.vue'
import PlantIcon from '@/components/icons/PlantIcon.vue'
import ReportIcon from '@/components/icons/ReportIcon.vue'

const benefits = [
  {
    title: 'landing.benefits.saveTime.title',
    description: 'landing.benefits.saveTime.description',
    icon: ReportIcon,
  },
  {
    title: 'landing.benefits.productivity.title',
    description: 'landing.benefits.productivity.description',
    icon: PlantIcon,
  },
  {
    title: 'landing.benefits.team.title',
    description: 'landing.benefits.team.description',
    icon: AccountsIcon,
  },
  {
    title: 'landing.benefits.organization.title',
    description: 'landing.benefits.organization.description',
    icon: HealthIcon,
  },
]

export default defineComponent({
  name: 'LandingBenefits',

  setup() {
    const { t } = useI18n()

    return {
      benefits,
      t,
    }
  },
})
