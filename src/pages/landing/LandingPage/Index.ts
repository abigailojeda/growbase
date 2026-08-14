import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar/Index.vue'
import LandingHeader from '@/pages/landing/components/LandingHeader/Index.vue'

export default defineComponent({
  name: 'LandingPage',

  components: {
    Navbar,
    LandingHeader,
  },
})
