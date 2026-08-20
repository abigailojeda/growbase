import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import PlantIcon from '@/components/icons/PlantIcon.vue'

export default defineComponent({
  name: 'AppMaintenance',

  components: {
    PlantIcon,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  setup() {
    const router = useRouter()

    const goBack = () => {
      router.back()
    }

    return {
      goBack,
    }
  },
})
