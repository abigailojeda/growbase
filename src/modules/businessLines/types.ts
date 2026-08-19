import type { Theme } from '@/theme/types'

export interface BusinessLine {
  id: string
  name: string
  iconUrl?: string
  logoUrl?: string
  theme: Theme
}
