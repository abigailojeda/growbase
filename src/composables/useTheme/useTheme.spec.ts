import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick, ref } from 'vue'

import { applyTheme } from '@/theme/applyTheme'
import { useColorModeStore } from '@/theme/stores/colorMode.store'
import type { Theme } from '@/theme/types'
import { useTheme } from './useTheme'

import type { ThemeColors } from '@/theme/types'

vi.mock('@/theme/applyTheme', () => ({
  applyTheme: vi.fn<(theme: ThemeColors) => void>(),
}))

const theme: Theme = {
  light: {
    primary: '#111111',
    secondary: '#222222',
    background: '#333333',
    surface: '#FFFFFF',
    text: '#555555',
  },
  dark: {
    primary: '#AAAAAA',
    secondary: '#BBBBBB',
    background: '#CCCCCC',
    surface: '#DDDDDD',
    text: '#EEEEEE',
  },
}

describe('useTheme', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('applies the current color mode immediately', () => {
    useTheme(theme)

    expect(applyTheme).toHaveBeenCalledWith(theme.light)
  })

  it('reapplies the theme when the color mode changes', async () => {
    const colorModeStore = useColorModeStore()

    useTheme(theme)

    colorModeStore.setMode('dark')
    await nextTick()

    expect(applyTheme).toHaveBeenLastCalledWith(theme.dark)
  })

  it('applies a new theme when the active theme changes', async () => {
    const activeTheme = ref<Theme>(theme)

    useTheme(activeTheme)

    const newTheme: Theme = {
      light: {
        primary: '#123456',
        secondary: '#234567',
        background: '#345678',
        surface: '#456789',
        text: '#567890',
      },
      dark: {
        primary: '#654321',
        secondary: '#765432',
        background: '#876543',
        surface: '#987654',
        text: '#ABCDEF',
      },
    }

    activeTheme.value = newTheme
    await nextTick()

    expect(applyTheme).toHaveBeenLastCalledWith(newTheme.light)
  })
})
