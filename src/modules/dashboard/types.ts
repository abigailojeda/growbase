import type { Crop } from '@/modules/crops/types'

export interface CropNeedingAttention {
  crop: Crop
  health: 'warning' | 'critical'
  note: string
}
