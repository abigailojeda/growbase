import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useColorModeStore } from '@/theme/stores/colorMode.store'

import { useColorMode } from './useColorMode'

describe('useColorMode', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.classList.remove('dark')

    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({
        matches: false,
      }),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses the persisted color mode when available', () => {
    localStorage.setItem('growbase-color-mode', 'dark')

    useColorMode()

    const store = useColorModeStore()

    expect(store.mode).toBe('dark')
  })

  it('uses the system color mode when no preference is persisted', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({
        matches: true,
      }),
    )

    useColorMode()

    const store = useColorModeStore()

    expect(store.mode).toBe('dark')
  })

  it('adds the dark class to the document when dark mode is active', () => {
    localStorage.setItem('growbase-color-mode', 'dark')

    useColorMode()

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class from the document when light mode is active', () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('growbase-color-mode', 'light')

    useColorMode()

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists the color mode when it changes', async () => {
    useColorMode()

    const store = useColorModeStore()

    store.setMode('dark')

    await nextTick()

    expect(localStorage.getItem('growbase-color-mode')).toBe('dark')
  })
})
