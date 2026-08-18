import { describe, expect, it } from 'vitest'

import type { CropMeasurements, OptimalConditions } from '@/modules/crops/types'
import { calculateCropHealth } from './cropHealth'

const optimalConditions: OptimalConditions = {
  temperature: { min: 18, max: 28 },
  humidity: { min: 55, max: 75 },
  soilMoisture: { min: 40, max: 65 },
  ph: { min: 5.5, max: 6.5 },
}

describe('calculateCropHealth', () => {
  it('returns good when all measurements are within their optimal ranges', () => {
    const measurements: CropMeasurements = {
      temperature: 24,
      humidity: 65,
      soilMoisture: 55,
      ph: 6,
    }

    expect(calculateCropHealth(measurements, optimalConditions)).toBe('good')
  })

  it('returns warning when a measurement is slightly outside its optimal range', () => {
    const measurements: CropMeasurements = {
      temperature: 29,
      humidity: 65,
      soilMoisture: 55,
      ph: 6,
    }

    expect(calculateCropHealth(measurements, optimalConditions)).toBe('warning')
  })

  it('returns critical when a measurement is far outside its optimal range', () => {
    const measurements: CropMeasurements = {
      temperature: 31,
      humidity: 65,
      soilMoisture: 55,
      ph: 6,
    }

    expect(calculateCropHealth(measurements, optimalConditions)).toBe('critical')
  })
})
