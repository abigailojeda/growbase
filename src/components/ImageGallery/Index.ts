import { computed, defineComponent, ref, type PropType } from 'vue'

import ConfirmModal from '@/components/ConfirmModal/Index.vue'
import ImageModal from '@/components/ImageModal/Index.vue'
import StarIcon from '@/components/icons/StarIcon.vue'

export interface GalleryImage {
  id: string
  url: string
}

export default defineComponent({
  name: 'ImageGallery',

  components: {
    ConfirmModal,
    ImageModal,
    StarIcon,
  },

  props: {
    images: {
      type: Array as PropType<GalleryImage[]>,
      required: true,
    },
    featuredImageId: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      default: '',
    },
    editable: {
      type: Boolean,
      default: false,
    },
    featuredTexts: {
      type: Object as PropType<{
        current: string
        setAs: string
        title: string
        message: string
        confirm: string
        cancel: string
        noImages: string
      }>,
      required: true,
    },
    onSetFeatured: {
      type: Function as PropType<(imageId: string) => void | Promise<void>>,
      default: undefined,
    },
  },

  setup(props) {
    const selectedImage = ref<GalleryImage>()
    const pendingFeaturedImageId = ref<string>()

    const effectiveFeaturedImageId = computed(() => props.featuredImageId ?? props.images[0]?.id)

    const isConfirmModalOpen = computed(() => pendingFeaturedImageId.value !== undefined)

    const orderedImages = computed(() => {
      const featuredId = effectiveFeaturedImageId.value

      if (!featuredId) {
        return props.images
      }

      return [
        ...props.images.filter((image) => image.id === featuredId),
        ...props.images.filter((image) => image.id !== featuredId),
      ]
    })

    const openImage = (image: GalleryImage) => {
      selectedImage.value = image
    }

    const closeImage = () => {
      selectedImage.value = undefined
    }

    const requestSetFeatured = (imageId: string) => {
      if (!props.editable || imageId === effectiveFeaturedImageId.value) {
        return
      }

      pendingFeaturedImageId.value = imageId
    }

    const cancelSetFeatured = () => {
      pendingFeaturedImageId.value = undefined
    }

    const confirmSetFeatured = async () => {
      if (!pendingFeaturedImageId.value) {
        return
      }

      await props.onSetFeatured?.(pendingFeaturedImageId.value)

      pendingFeaturedImageId.value = undefined
    }

    return {
      selectedImage,
      effectiveFeaturedImageId,
      isConfirmModalOpen,
      orderedImages,
      openImage,
      closeImage,
      requestSetFeatured,
      cancelSetFeatured,
      confirmSetFeatured,
    }
  },
})
