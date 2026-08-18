import { computed, toValue, type MaybeRefOrGetter } from 'vue'

import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateCropHealth, type CropHealth } from '@/utils/cropHealth/cropHealth'

export const useCropHealth = (
  crop: MaybeRefOrGetter<Crop | undefined>,
  report: MaybeRefOrGetter<CropReport | undefined>,
) => {
  const health = computed<CropHealth | undefined>(() => {
    const currentCrop = toValue(crop)
    const currentReport = toValue(report)

    if (!currentCrop || !currentReport) {
      return undefined
    }

    return calculateCropHealth(currentReport.measurements, currentCrop.optimalConditions)
  })

  return {
    health,
  }
}
