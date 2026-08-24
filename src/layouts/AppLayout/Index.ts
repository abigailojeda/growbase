import { storeToRefs } from 'pinia'
import { computed, defineComponent, ref, watch } from 'vue'

import { useTheme } from '@/composables/useTheme/useTheme'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { businessLineService } from '@/modules/businessLines/services/businessLine.service'
import type { BusinessLine } from '@/modules/businessLines/types'

import Navbar from '@/components/Navbar/Index.vue'
import UserMenu from '@/modules/auth/components/UserMenu/Index.vue'
import Sidebar from '@/components/Sidebar/Index.vue'

export default defineComponent({
  name: 'AppLayout',

  components: {
    Navbar,
    UserMenu,
    Sidebar,
  },

  setup() {
    const authStore = useAuthStore()
    const { currentUser } = storeToRefs(authStore)

    const activeBusinessLine = ref<BusinessLine | null>(null)

    const activeTheme = computed(() => activeBusinessLine.value?.theme)
    const SIDEBAR_COLLAPSED_KEY = 'growbase-sidebar-collapsed'

    const isSidebarCollapsed = ref(localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true')

    const isSidebarMobileOpen = ref(false)

    watch(isSidebarCollapsed, (collapsed) => {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(collapsed))
    })

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
      isSidebarCollapsed,
      isSidebarMobileOpen,
    }
  },
})
