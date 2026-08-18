import { describe, expect, it } from 'vitest'

import type { Crop, CropReport } from '@/modules/crops/types'
import { useCropHealth } from './useCropHealth'

const crop: Crop = {
  id: 'vineyard-north',
  businessLineId: 'vineyard',
  name: 'North Vineyard',
  type: 'Grapes',
  location: 'North Field',
  imageUrl: '',
  status: 'active',
  assignedUserIds: ['vineyard-worker'],
  optimalConditions: {
    temperature: { min: 18, max: 28 },
    humidity: { min: 55, max: 75 },
    soilMoisture: { min: 40, max: 65 },
    ph: { min: 5.5, max: 6.5 },
  },
}

describe('useCropHealth', () => {
  it('returns undefined when there is no report', () => {
    const { health } = useCropHealth(crop, undefined)

    expect(health.value).toBeUndefined()
  })

  it('calculates the crop health from the latest report', () => {
    const report: CropReport = {
      id: 'report-1',
      cropId: crop.id,
      measurements: {
        temperature: 24,
        humidity: 65,
        soilMoisture: 55,
        ph: 6,
      },
      notes: '',
      reportedBy: 'vineyard-worker',
      reportedAt: '2026-08-18T10:00:00.000Z',
    }

    const { health } = useCropHealth(crop, report)

    expect(health.value).toBe('good')
  })
})
