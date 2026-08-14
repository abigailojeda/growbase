import { storeToRefs } from 'pinia'
import { computed, defineComponent, ref, watch } from 'vue'

import { useTheme } from '@/composables/useTheme/useTheme'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { businessLineService } from '@/modules/businessLines/services/businessLine.service'
import type { BusinessLine } from '@/modules/businessLines/types'

export default defineComponent({
  name: 'AppLayout',

  setup() {
    const authStore = useAuthStore()
    const { currentUser } = storeToRefs(authStore)

    const activeBusinessLine = ref<BusinessLine | null>(null)

    const activeTheme = computed(() => activeBusinessLine.value?.theme)

    watch(
      () => currentUser.value?.businessLineId,
      async (businessLineId) => {
        if (!businessLineId) {
          activeBusinessLine.value = null
          return
        }

        activeBusinessLine.value = (await businessLineService.getById(businessLineId)) ?? null
      },
      { immediate: true },
    )

    useTheme(activeTheme)

    return {
      activeBusinessLine,
    }
  },
})
