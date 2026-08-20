import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import ImageGallery from '@/components/ImageGallery/Index.vue'
import CropMeasurements from '@/modules/crops/components/CropMeasurements/Index.vue'
import { useCropHealth } from '@/composables/useCropHealth/useCropHealth'
import type { User } from '@/modules/auth/types'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import CropHealthHeader from '@/modules/crops/components/CropHealthHeader/Index.vue'
import CropReportHistory from '@/modules/crops/components/CropReportHistory/Index.vue'
import CropStatus from '@/modules/crops/components/CropStatus/Index.vue'
import { cropMeasurementConfig } from '@/modules/crops/constants'
import { cropReportService } from '@/modules/crops/services/cropReport.service'
import { cropService } from '@/modules/crops/services/crop.service'
import type { Crop, CropReport } from '@/modules/crops/types'
import { userService } from '@/modules/auth/services/user.service'
import { calculateMeasurementHealth } from '@/utils/cropHealth/cropHealth'

export default defineComponent({
  name: 'CropDetailPage',

  components: {
    ArrowIcon,
    CropHealthHeader,
    CropReportHistory,
    CropStatus,
    ImageGallery,
    CropMeasurements,
  },

  setup() {
    const route = useRoute()
    const authStore = useAuthStore()

    const crop = ref<Crop>()
    const reports = ref<CropReport[]>([])
    const users = ref<User[]>([])

    const cropId = computed(() => route.params.id as string)

    const latestReport = computed(() => reports.value[0])

    const isAdmin = computed(() => authStore.currentUser?.role === 'admin')

    const { health } = useCropHealth(crop, latestReport)

    const measurements = computed(() => {
      const currentCrop = crop.value
      const currentReport = latestReport.value

      if (!currentCrop || !currentReport) {
        return []
      }

      return cropMeasurementConfig.map((config) => {
        const value = currentReport.measurements[config.key]
        const optimalRange = currentCrop.optimalConditions[config.key]

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

      if (!crop.value) {
        return
      }

      const [cropReports, businessLineUsers] = await Promise.all([
        cropReportService.getByCrop(cropId.value),
        userService.getWorkersByBusinessLine(crop.value.businessLineId),
      ])

      reports.value = cropReports
      users.value = businessLineUsers
    })

    return {
      crop,
      reports,
      users,
      latestReport,
      health,
      measurements,
      isAdmin,
      setCoverImage,
    }
  },
})
