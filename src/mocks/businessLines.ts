import type { BusinessLine } from '@/modules/businessLines/types'

export const businessLines = [
  {
    id: 'vineyard',
    name: 'Vineyard',
    theme: {
      light: {
        primary: '#7C3F58',
        secondary: '#C99AA8',
        background: '#FAF7F8',
        surface: '#FFFFFF',
        text: '#271F22',
      },
      dark: {
        primary: '#D89AAF',
        secondary: '#8D5267',
        background: '#181214',
        surface: '#231A1D',
        text: '#F8F3F5',
      },
    },
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    theme: {
      light: {
        primary: '#3D7A57',
        secondary: '#A8CCB5',
        background: '#F5F9F6',
        surface: '#FFFFFF',
        text: '#1E2922',
      },
      dark: {
        primary: '#82BF96',
        secondary: '#456E53',
        background: '#111713',
        surface: '#19211C',
        text: '#F1F6F2',
      },
    },
  },
  {
    id: 'fields',
    name: 'Open Fields',
    theme: {
      light: {
        primary: '#71834A',
        secondary: '#C7CF9C',
        background: '#F8F9F2',
        surface: '#FFFFFF',
        text: '#292B20',
      },
      dark: {
        primary: '#AEBF78',
        secondary: '#667044',
        background: '#161811',
        surface: '#202319',
        text: '#F5F6EF',
      },
    },
  },
] satisfies BusinessLine[]
