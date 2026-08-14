import { storeToRefs } from 'pinia'
import { toValue, watch, type MaybeRefOrGetter } from 'vue'

import { applyTheme } from '@/theme/applyTheme'
import { useColorModeStore } from '@/theme/stores/colorMode.store'
import type { Theme } from '@/theme/types'

export const useTheme = (theme: MaybeRefOrGetter<Theme | null | undefined>) => {
  const colorModeStore = useColorModeStore()
  const { mode } = storeToRefs(colorModeStore)

  watch(
    [() => toValue(theme), mode],
    ([currentTheme, currentMode]) => {
      if (!currentTheme) {
        return
      }

      applyTheme(currentTheme[currentMode])
    },
    { immediate: true },
  )
}
