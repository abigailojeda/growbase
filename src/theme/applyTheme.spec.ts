import { describe, expect, it } from 'vitest'

import { applyTheme } from './applyTheme'

describe('applyTheme', () => {
  it('applies theme colors as CSS variables', () => {
    applyTheme({
      primary: '#111111',
      secondary: '#222222',
      background: '#333333',
      surface: '#444444',
      text: '#555555',
    })

    const rootStyle = document.documentElement.style

    expect(rootStyle.getPropertyValue('--theme-primary')).toBe('#111111')
    expect(rootStyle.getPropertyValue('--theme-secondary')).toBe('#222222')
    expect(rootStyle.getPropertyValue('--theme-background')).toBe('#333333')
    expect(rootStyle.getPropertyValue('--theme-surface')).toBe('#444444')
    expect(rootStyle.getPropertyValue('--theme-text')).toBe('#555555')
  })
})
