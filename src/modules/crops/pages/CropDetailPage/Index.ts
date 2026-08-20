import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import ImageGallery from '@/components/ImageGallery/Index.vue'
import { useCropHealth } from '@/composables/useCropHealth/useCropHealth'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { cropMeasurementConfig } from '@/modules/crops/constants'
import { cropReportService } from '@/modules/crops/services/cropReport.service'
import { cropService } from '@/modules/crops/services/crop.service'
import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateMeasurementHealth } from '@/utils/cropHealth/cropHealth'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import CropHealthHeader from '@/modules/crops/components/CropHealthHeader/Index.vue'
import CropStatus from '@/modules/crops/components/CropStatus/Index.vue'

export default defineComponent({
  name: 'CropDetailPage',

  components: {
    ImageGallery,
    ArrowIcon,
    CropHealthHeader,
    CropStatus,
  },

  setup() {
    const route = useRoute()
    const authStore = useAuthStore()

    const crop = ref<Crop>()
    const latestReport = ref<CropReport>()

    const cropId = computed(() => route.params.id as string)

    const isAdmin = computed(() => authStore.currentUser?.role === 'admin')

    const { health } = useCropHealth(crop, latestReport)

    const measurements = computed(() => {
      if (!crop.value || !latestReport.value) {
        return []
      }

      return cropMeasurementConfig.map((config) => {
        const value = latestReport.value!.measurements[config.key]
        const optimalRange = crop.value!.optimalConditions[config.key]

        return {
          ...config,
          value,
          optimalRange,
          health: calculateMeasurementHealth(value, optimalRange),
        }
      })
    })

    const setCoverImage = async (imageId: string) => {
      if (!crop.value || !isAdmin.value) {
        return
      }

      const updatedCrop = await cropService.setCoverImage(crop.value.id, imageId)

      if (!updatedCrop) {
        return
      }

      crop.value = updatedCrop
    }

    onMounted(async () => {
      crop.value = await cropService.getById(cropId.value)
      latestReport.value = await cropReportService.getLatestByCrop(cropId.value)
    })

    return {
      crop,
      latestReport,
      health,
      measurements,
      isAdmin,
      setCoverImage,
    }
  },
})
