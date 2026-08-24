import { computed, defineComponent, type PropType } from 'vue'

import { useI18n } from 'vue-i18n'

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
    const { t } = useI18n()

    const healthKey = computed(() => props.health ?? 'no-data')

    const healthLabel = computed(() => {
      if (!props.health) return t('health.noData')

      return t(`health.${props.health}`)
    })

    return {
      healthKey,
      healthLabel,
      t,
    }
  },
})
