import { computed, defineComponent, type PropType } from 'vue'

import HealthIcon from '@/components/icons/HealthIcon.vue'

type CropHealth = 'good' | 'warning' | 'critical'

export default defineComponent({
  name: 'CropHealthHeader',

  components: {
    HealthIcon,
  },

  props: {
    health: {
      type: String as PropType<CropHealth | null>,
      default: null,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const healthKey = computed(() => props.health ?? 'no-data')

    const healthLabel = computed(() => {
      if (!props.health) return 'No health data'

      return props.health
    })

    return {
      healthKey,
      healthLabel,
    }
  },
})
