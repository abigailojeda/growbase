import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import type { Crop } from '../types'
import { useCropStore } from './crop.store'

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

describe('cropStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores crops', () => {
    const store = useCropStore()

    store.setCrops([crop])

    expect(store.crops).toEqual([crop])
  })

  it('clears crops', () => {
    const store = useCropStore()

    store.setCrops([crop])
    store.clearCrops()

    expect(store.crops).toEqual([])
  })
})
