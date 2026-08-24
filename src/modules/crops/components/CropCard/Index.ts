import { computed, defineComponent, toRef, type PropType } from 'vue'

import { useI18n } from 'vue-i18n'

import { useCropHealth } from '@/composables/useCropHealth/useCropHealth'
import type { Crop, CropReport } from '@/modules/crops/types'
import CropHealthHeader from '@/modules/crops/components/CropHealthHeader/Index.vue'
import CropStatus from '@/modules/crops/components/CropStatus/Index.vue'

export default defineComponent({
  name: 'CropCard',
  components: {
    CropHealthHeader,
    CropStatus,
  },

  props: {
    crop: {
      type: Object as PropType<Crop>,
      required: true,
    },
    report: {
      type: Object as PropType<CropReport>,
      default: undefined,
    },
  },

  setup(props) {
    const { health } = useCropHealth(toRef(props, 'crop'), toRef(props, 'report'))

    const { t } = useI18n()

    const coverImage = computed(
      () =>
        props.crop.images.find((image) => image.id === props.crop.coverImageId) ??
        props.crop.images[0],
    )

    return {
      coverImage,
      health,
      t,
    }
  },
})
