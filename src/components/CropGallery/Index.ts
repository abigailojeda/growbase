import { computed, defineComponent, type PropType } from 'vue'

import type { CropImage } from '@/modules/crops/types'

export default defineComponent({
  name: 'CropGallery',

  props: {
    images: {
      type: Array as PropType<CropImage[]>,
      required: true,
    },
    coverImageId: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    setCover: (imageId: string) => Boolean(imageId),
  },

  setup(props, { emit }) {
    const effectiveCoverImageId = computed(() => props.coverImageId ?? props.images[0]?.id)

    const handleImageClick = (imageId: string) => {
      if (!props.editable || imageId === effectiveCoverImageId.value) {
        return
      }

      emit('setCover', imageId)
    }

    return {
      effectiveCoverImageId,
      handleImageClick,
    }
  },
})
