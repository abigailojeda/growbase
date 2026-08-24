import type { CropMeasurements } from './types'

interface CropMeasurementConfig {
  key: keyof CropMeasurements
  label: string
  unit: string
}

export const cropMeasurementConfig: CropMeasurementConfig[] = [
  {
    key: 'temperature',
    label: 'Temperature',
    unit: '°C',
  },
  {
    key: 'humidity',
    label: 'Humidity',
    unit: '%',
  },
  {
    key: 'soilMoisture',
    label: 'Soil moisture',
    unit: '%',
  },
  {
    key: 'ph',
    label: 'pH',
    unit: '',
  },
]
