import { defineComponent } from 'vue'

import LandingHeader from '@/pages/landing/components/LandingHeader/Index.vue'
import LandingBenefits from '@/pages/landing/components/LandingBenefits/Index.vue'
import BusinessLinesSection from '@/pages/landing/components/BusinessLinesSection/Index.vue'
import FeaturesSection from '@/pages/landing/components/FeaturesSection/Index.vue'

export default defineComponent({
  name: 'LandingPage',

  components: {
    LandingHeader,
    LandingBenefits,
    BusinessLinesSection,
    FeaturesSection,
  },
})
