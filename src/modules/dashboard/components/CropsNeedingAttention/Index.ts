import { defineComponent, type PropType } from 'vue'
import type { CropImage } from '@/modules/crops/types'
import type { CropNeedingAttention } from '@/modules/dashboard/types'
import CropIcon from '@/components/icons/CropIcon.vue'
import CropHealthHeader from '@/modules/crops/components/CropHealthHeader/Index.vue'

export default defineComponent({
  name: 'CropsNeedingAttention',
  components: {
    CropIcon,
    CropHealthHeader,
  },

  props: {
    crops: {
      type: Array as PropType<CropNeedingAttention[]>,
      required: true,
    },
  },

  setup() {
    const getCoverImage = (item: CropNeedingAttention): CropImage | undefined => {
      const { crop } = item

      return (
        crop.images.find((image: CropImage) => image.id === crop.coverImageId) ?? crop.images[0]
      )
    }

    return {
      getCoverImage,
    }
  },
})
