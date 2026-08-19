import type { BusinessLine } from '@/modules/businessLines/types'

import fieldsIconUrl from '@/assets/images/business-lines/tree-alt.svg'
import greenhouseIconUrl from '@/assets/images/business-lines/plant-pot.svg'
import vineyardIconUrl from '@/assets/images/business-lines/cherry.svg'
import vineyardLogo from '@/assets/images/business-lines/vineyard-logo.svg'
import greenhouseLogo from '@/assets/images/business-lines/greenhouse-logo.svg'
import openFieldsLogo from '@/assets/images/business-lines/open-fields-logo.svg'

export const businessLines = [
  {
    id: 'vineyard',
    name: 'Vineyard',
    iconUrl: vineyardIconUrl,
    logoUrl: vineyardLogo,
    theme: {
      light: {
        primary: '#7C3F58',
        secondary: '#C99AA8',
        background: '#e0d7da',
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
    iconUrl: greenhouseIconUrl,
    logoUrl: greenhouseLogo,
    theme: {
      light: {
        primary: '#3D7A57',
        secondary: '#A8CCB5',
        background: '#cfd5d1',
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
    iconUrl: fieldsIconUrl,
    logoUrl: openFieldsLogo,
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
