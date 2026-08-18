import { computed, toValue, type MaybeRefOrGetter } from 'vue'

import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateCropHealth, type CropHealth } from '@/utils/cropHealth/cropHealth'

export const useCropHealth = (
  crop: MaybeRefOrGetter<Crop>,
  report: MaybeRefOrGetter<CropReport | undefined>,
) => {
  const health = computed<CropHealth | undefined>(() => {
    const currentReport = toValue(report)

    if (!currentReport) {
      return undefined
    }

    return calculateCropHealth(currentReport.measurements, toValue(crop).optimalConditions)
  })

  return {
    health,
  }
}
