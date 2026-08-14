import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useColorModeStore } from './colorMode.store'

describe('colorModeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('uses light mode by default', () => {
    const store = useColorModeStore()

    expect(store.mode).toBe('light')
  })

  it('sets the color mode', () => {
    const store = useColorModeStore()

    store.setMode('dark')

    expect(store.mode).toBe('dark')
  })

  it('toggles from light to dark mode', () => {
    const store = useColorModeStore()

    store.toggleMode()

    expect(store.mode).toBe('dark')
  })

  it('toggles from dark to light mode', () => {
    const store = useColorModeStore()

    store.setMode('dark')
    store.toggleMode()

    expect(store.mode).toBe('light')
  })
})
