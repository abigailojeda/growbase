import type { CropMeasurements, MeasurementRange, OptimalConditions } from '@/modules/crops/types'

export type CropHealth = 'good' | 'warning' | 'critical'

const CRITICAL_TOLERANCE = 0.2

const getMeasurementHealth = (value: number, range: MeasurementRange): CropHealth => {
  if (value >= range.min && value <= range.max) {
    return 'good'
  }

  const tolerance = (range.max - range.min) * CRITICAL_TOLERANCE
  const criticalMin = range.min - tolerance
  const criticalMax = range.max + tolerance

  if (value < criticalMin || value > criticalMax) {
    return 'critical'
  }

  return 'warning'
}

export const calculateCropHealth = (
  measurements: CropMeasurements,
  optimalConditions: OptimalConditions,
): CropHealth => {
  const healthStatuses = [
    getMeasurementHealth(measurements.temperature, optimalConditions.temperature),
    getMeasurementHealth(measurements.humidity, optimalConditions.humidity),
    getMeasurementHealth(measurements.soilMoisture, optimalConditions.soilMoisture),
    getMeasurementHealth(measurements.ph, optimalConditions.ph),
  ]

  if (healthStatuses.includes('critical')) {
    return 'critical'
  }

  if (healthStatuses.includes('warning')) {
    return 'warning'
  }

  return 'good'
}
