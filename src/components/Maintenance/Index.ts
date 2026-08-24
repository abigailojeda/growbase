import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

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
    const { t } = useI18n()

    const goBack = () => {
      router.back()
    }

    return {
      goBack,
      t,
    }
  },
})
