import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Crop } from '../types'

export const useCropStore = defineStore('crop', () => {
  const crops = ref<Crop[]>([])

  const setCrops = (newCrops: Crop[]) => {
    crops.value = newCrops
  }

  const clearCrops = () => {
    crops.value = []
  }

  return {
    crops,
    setCrops,
    clearCrops,
  }
})
