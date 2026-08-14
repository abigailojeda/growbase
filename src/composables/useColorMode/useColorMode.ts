import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useColorModeStore } from '@/theme/stores/colorMode.store'
import type { ColorMode } from '@/theme/types'

const STORAGE_KEY = 'growbase-color-mode'

// GETS THE STORED COLOR MODE IF IT IS VALID
const getStoredColorMode = (): ColorMode | null => {
  const storedMode = localStorage.getItem(STORAGE_KEY)

  if (storedMode === 'light' || storedMode === 'dark') {
    return storedMode
  }

  return null
}

// GETS THE INITIAL COLOR MODE FROM STORAGE OR SYSTEM PREFERENCE
const getInitialColorMode = (): ColorMode => {
  const storedMode = getStoredColorMode()

  if (storedMode) {
    return storedMode
  }

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return prefersDarkMode ? 'dark' : 'light'
}

// SYNCHRONIZES THE COLOR MODE WITH THE DOCUMENT
const applyColorMode = (mode: ColorMode): void => {
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

// INITIALIZES THE GLOBAL COLOR MODE
export const useColorMode = () => {
  const colorModeStore = useColorModeStore()
  const { mode } = storeToRefs(colorModeStore)

  const initialMode = getInitialColorMode()

  colorModeStore.setMode(initialMode)
  applyColorMode(initialMode)

  watch(mode, (newMode) => {
    localStorage.setItem(STORAGE_KEY, newMode)
    applyColorMode(newMode)
  })
}
