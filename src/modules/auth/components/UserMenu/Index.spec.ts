import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'

import { useAuthStore } from '@/modules/auth/stores/auth.store'
import UserMenu from './Index.vue'

const mocks = vi.hoisted(() => ({
  replace: vi.fn<(path: string) => Promise<void>>().mockResolvedValue(undefined),
}))

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-router')>()

  return {
    ...actual,
    useRouter: () => ({
      replace: mocks.replace,
    }),
  }
})

enableAutoUnmount(afterEach)

describe('UserMenu', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    mocks.replace.mockClear()
  })

  it('shows the login option when there is no authenticated user', async () => {
    const wrapper = mount(UserMenu)

    await wrapper.get('[aria-label="Open user menu"]').trigger('click')

    const menu = wrapper.get('[role="menu"]')

    expect(menu.text()).toContain('Login')
    expect(menu.text()).not.toContain('Logout')
  })

  it('opens the menu and displays the current user', async () => {
    const authStore = useAuthStore()

    await authStore.loginDemo('vineyard', 'admin')

    const wrapper = mount(UserMenu)

    expect(wrapper.find('[role="menu"]').exists()).toBe(false)

    await wrapper.get('[aria-label="Open user menu"]').trigger('click')

    const menu = wrapper.get('[role="menu"]')

    expect(menu.text()).toContain('Vineyard Admin')
    expect(menu.text()).toContain('admin')
    expect(menu.text()).toContain('Logout')
  })

  it('closes the menu when Escape is pressed', async () => {
    const authStore = useAuthStore()

    await authStore.loginDemo('vineyard', 'admin')

    const wrapper = mount(UserMenu)

    await wrapper.get('[aria-label="Open user menu"]').trigger('click')

    expect(wrapper.find('[role="menu"]').exists()).toBe(true)

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()

    expect(wrapper.find('[role="menu"]').exists()).toBe(false)
  })

  it('logs out the current user and navigates to login', async () => {
    const authStore = useAuthStore()

    await authStore.loginDemo('vineyard', 'admin')

    const wrapper = mount(UserMenu)

    await wrapper.get('[aria-label="Open user menu"]').trigger('click')
    await wrapper.get('[role="menuitem"]').trigger('click')

    expect(authStore.currentUser).toBeNull()
    expect(authStore.isAuthenticated).toBe(false)
    expect(mocks.replace).toHaveBeenCalledWith('/login')
  })
})
