import { computed, toValue, type MaybeRefOrGetter } from 'vue'

import type { Crop, CropReport } from '@/modules/crops/types'
import { calculateCropHealth } from '@/utils/cropHealth/cropHealth'
import type { CropNeedingAttention } from '@/modules/dashboard/types'

export const useDashboardSummary = (
  crops: MaybeRefOrGetter<Crop[]>,
  latestReports: MaybeRefOrGetter<Record<string, CropReport>>,
) => {
  const getCropHealth = (crop: Crop, reports: Record<string, CropReport>) => {
    const report = reports[crop.id]

    if (!report) {
      return undefined
    }

    return calculateCropHealth(report.measurements, crop.optimalConditions)
  }

  const healthCounts = computed(() => {
    const counts = {
      good: 0,
      warning: 0,
      critical: 0,
      noData: 0,
    }

    const reports = toValue(latestReports)

    toValue(crops).forEach((crop) => {
      const health = getCropHealth(crop, reports)

      if (!health) {
        counts.noData++
        return
      }

      counts[health]++
    })

    return counts
  })

  const totalCrops = computed(() => toValue(crops).length)

  const activeCrops = computed(
    () => toValue(crops).filter((crop) => crop.status === 'active').length,
  )

  const cropsNeedingAttention = computed(
    () => healthCounts.value.warning + healthCounts.value.critical,
  )

  const cropsNeedingAttentionList = computed<CropNeedingAttention[]>(() => {
    const reports = toValue(latestReports)

    return toValue(crops).reduce<CropNeedingAttention[]>((result, crop) => {
      const report = reports[crop.id]

      if (!report) {
        return result
      }

      const health = getCropHealth(crop, reports)

      if (health === 'warning' || health === 'critical') {
        result.push({
          crop,
          health,
          note: report.notes,
        })
      }

      return result
    }, [])
  })

  return {
    totalCrops,
    activeCrops,
    cropsNeedingAttention,
    cropsNeedingAttentionList,
    healthCounts,
  }
}
