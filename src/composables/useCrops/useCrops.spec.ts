import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { useCropStore } from '@/modules/crops/stores/crop.store'
import { useCrops } from './useCrops'

describe('useCrops', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('loads all crops from the business line for an admin', async () => {
    const authStore = useAuthStore()
    const cropStore = useCropStore()

    await authStore.loginDemo('vineyard', 'admin')

    const { loadCrops } = useCrops()

    await loadCrops()

    expect(cropStore.crops).toHaveLength(2)
    expect(cropStore.crops.every((crop) => crop.businessLineId === 'vineyard')).toBe(true)
  })

  it('loads only assigned crops for a worker', async () => {
    const authStore = useAuthStore()
    const cropStore = useCropStore()

    await authStore.loginDemo('vineyard', 'worker')

    const { loadCrops } = useCrops()

    await loadCrops()

    expect(cropStore.crops).toHaveLength(1)
    expect(cropStore.crops[0]?.id).toBe('vineyard-north')
  })
})
