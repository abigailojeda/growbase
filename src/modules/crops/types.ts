export type CropStatus = 'active' | 'inactive'

export interface MeasurementRange {
  min: number
  max: number
}

export interface OptimalConditions {
  temperature: MeasurementRange
  humidity: MeasurementRange
  soilMoisture: MeasurementRange
  ph: MeasurementRange
}

export interface Crop {
  id: string
  businessLineId: string
  name: string
  type: string
  location: string
  imageUrl: string
  status: CropStatus
  assignedUserIds: string[]
  optimalConditions: OptimalConditions
}

export interface CropMeasurements {
  temperature: number
  humidity: number
  soilMoisture: number
  ph: number
}

export interface CropReport {
  id: string
  cropId: string
  measurements: CropMeasurements
  notes: string
  reportedBy: string
  reportedAt: string
}
