import { describe, expect, it } from 'vitest'

import type { Crop, CropReport } from '@/modules/crops/types'
import { useDashboardSummary } from './useDashboardSummary'

const crops: Crop[] = [
  {
    id: 'crop-good',
    businessLineId: 'vineyard',
    name: 'Good Crop',
    type: 'Grapes',
    location: 'North Field',
    images: [],
    status: 'active',
    assignedUserIds: [],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'crop-critical',
    businessLineId: 'vineyard',
    name: 'Critical Crop',
    type: 'Grapes',
    location: 'South Field',
    images: [],
    status: 'active',
    assignedUserIds: [],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'crop-no-data',
    businessLineId: 'vineyard',
    name: 'Crop Without Data',
    type: 'Grapes',
    location: 'West Field',
    images: [],
    status: 'inactive',
    assignedUserIds: [],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
]

const latestReports: Record<string, CropReport> = {
  'crop-good': {
    id: 'report-good',
    cropId: 'crop-good',
    measurements: {
      temperature: 24,
      humidity: 65,
      soilMoisture: 50,
      ph: 6,
    },
    notes: 'Everything looks good.',
    reportedBy: 'vineyard-worker',
    reportedAt: '2026-08-19T10:00:00.000Z',
  },

  'crop-critical': {
    id: 'report-critical',
    cropId: 'crop-critical',
    measurements: {
      temperature: 35,
      humidity: 65,
      soilMoisture: 50,
      ph: 6,
    },
    notes: 'Temperature is significantly above the optimal range.',
    reportedBy: 'vineyard-worker',
    reportedAt: '2026-08-19T11:00:00.000Z',
  },
}

describe('useDashboardSummary', () => {
  it('calculates crop summary', () => {
    const { totalCrops, activeCrops, cropsNeedingAttention, healthCounts } = useDashboardSummary(
      crops,
      latestReports,
    )

    expect(totalCrops.value).toBe(3)
    expect(activeCrops.value).toBe(2)
    expect(cropsNeedingAttention.value).toBe(1)

    expect(healthCounts.value).toEqual({
      good: 1,
      warning: 0,
      critical: 1,
      noData: 1,
    })
  })

  it('returns crops needing attention with their latest note', () => {
    const { cropsNeedingAttentionList } = useDashboardSummary(crops, latestReports)

    expect(cropsNeedingAttentionList.value).toEqual([
      {
        crop: crops[1],
        health: 'critical',
        note: 'Temperature is significantly above the optimal range.',
      },
    ])
  })
})
