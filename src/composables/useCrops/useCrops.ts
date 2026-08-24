import { ref } from 'vue'

import { useAuthStore } from '@/modules/auth/stores/auth.store'
import type { CropReport } from '@/modules/crops/types'
import { useCropStore } from '@/modules/crops/stores/crop.store'
import { cropService } from '@/modules/crops/services/crop.service'
import { cropReportService } from '@/modules/crops/services/cropReport.service'

export const useCrops = () => {
  const authStore = useAuthStore()
  const cropStore = useCropStore()

  const latestReports = ref<Record<string, CropReport>>({})

  const loadCrops = async () => {
    const user = authStore.currentUser

    if (!user) {
      cropStore.clearCrops()
      latestReports.value = {}
      return
    }

    const crops =
      user.role === 'admin'
        ? await cropService.getByBusinessLine(user.businessLineId)
        : await cropService.getAssignedToUser(user.id)

    cropStore.setCrops(crops)

    latestReports.value = await cropReportService.getLatestByCrops(crops.map((crop) => crop.id))
  }

  return {
    loadCrops,
    latestReports,
  }
}
