import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useCropHealth } from '@/composables/useCropHealth/useCropHealth'
import { cropMeasurementConfig } from '@/modules/crops/constants'
import { cropReportService } from '@/modules/crops/services/cropReport.service'
import { cropService } from '@/modules/crops/services/crop.service'
import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateMeasurementHealth } from '@/utils/cropHealth/cropHealth'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

import CropGallery from '@/components/CropGallery/Index.vue'

export default defineComponent({
  name: 'CropDetailPage',

  components: {
    CropGallery,
  },

  setup() {
    const route = useRoute()

    const crop = ref<Crop>()
    const latestReport = ref<CropReport>()

    const cropId = computed(() => route.params.id as string)

    const authStore = useAuthStore()

    const isAdmin = computed(() => authStore.currentUser?.role === 'admin')

    const setCoverImage = async (imageId: string) => {
      if (!crop.value || !isAdmin.value) {
        return
      }

      const updatedCrop = await cropService.setCoverImage(crop.value.id, imageId)

      if (updatedCrop) {
        crop.value = updatedCrop
      }
    }

    const { health } = useCropHealth(crop, latestReport)

    const healthClass = computed(() =>
      health.value ? `crop-health-${health.value}` : 'crop-health-no-data',
    )

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

    onMounted(async () => {
      crop.value = await cropService.getById(cropId.value)
      latestReport.value = await cropReportService.getLatestByCrop(cropId.value)
    })

    return {
      crop,
      latestReport,
      health,
      healthClass,
      measurements,
      isAdmin,
      setCoverImage,
    }
  },
})
