import type { ThemeColors } from './types'

export const applyTheme = (theme: ThemeColors) => {
  const root = document.documentElement

  root.style.setProperty('--theme-primary', theme.primary)
  root.style.setProperty('--theme-secondary', theme.secondary)
  root.style.setProperty('--theme-background', theme.background)
  root.style.setProperty('--theme-surface', theme.surface)
  root.style.setProperty('--theme-text', theme.text)
}
