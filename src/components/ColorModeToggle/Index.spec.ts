import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import { useColorModeStore } from '@/theme/stores/colorMode.store'

import ColorModeToggle from './Index.vue'

describe('ColorModeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('toggles the color mode when clicked', async () => {
    const wrapper = mount(ColorModeToggle)
    const store = useColorModeStore()

    expect(store.mode).toBe('light')

    await wrapper.get('button').trigger('click')

    expect(store.mode).toBe('dark')
  })
})
