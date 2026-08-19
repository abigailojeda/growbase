import type { CropReport } from '@/modules/crops/types'

export const cropReports: CropReport[] = [
  {
    id: 'report-vineyard-north-1',
    cropId: 'vineyard-north',
    measurements: {
      temperature: 23,
      humidity: 64,
      soilMoisture: 52,
      ph: 6.1,
    },
    notes: 'Crop conditions are stable.',
    reportedBy: 'vineyard-worker',
    reportedAt: '2026-08-15T08:30:00.000Z',
  },
  {
    id: 'report-vineyard-north-2',
    cropId: 'vineyard-north',
    measurements: {
      temperature: 26,
      humidity: 61,
      soilMoisture: 48,
      ph: 6.2,
    },
    notes: 'Soil moisture has decreased slightly.',
    reportedBy: 'vineyard-worker',
    reportedAt: '2026-08-18T07:45:00.000Z',
  },
  {
    id: 'report-greenhouse-tomatoes-1',
    cropId: 'greenhouse-tomatoes',
    measurements: {
      temperature: 28,
      humidity: 68,
      soilMoisture: 72,
      ph: 6.3,
    },
    notes: 'Temperature is above the optimal range.',
    reportedBy: 'greenhouse-worker',
    reportedAt: '2026-08-18T06:20:00.000Z',
  },
  {
    id: 'report-fields-potatoes-1',
    cropId: 'fields-potatoes',
    measurements: {
      temperature: 19,
      humidity: 71,
      soilMoisture: 61,
      ph: 5.8,
    },
    notes: 'No issues detected.',
    reportedBy: 'fields-worker',
    reportedAt: '2026-08-17T09:10:00.000Z',
  },
]
