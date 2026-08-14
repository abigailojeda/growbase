import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { ColorMode } from '../types'

export const useColorModeStore = defineStore('colorMode', () => {
  const mode = ref<ColorMode>('light')

  const setMode = (newMode: ColorMode) => {
    mode.value = newMode
  }

  const toggleMode = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
  }

  return {
    mode,
    setMode,
    toggleMode,
  }
})
