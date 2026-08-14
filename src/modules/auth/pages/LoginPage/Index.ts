import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import AccountCard from '@/modules/auth/components/AccountCard/Index.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import type { AccountSelection } from '@/modules/auth/types'
import { businessLineService } from '@/modules/businessLines/services/businessLine.service'
import type { BusinessLine } from '@/modules/businessLines/types'

export default defineComponent({
  name: 'LoginPage',

  components: {
    AccountCard,
  },

  setup() {
    const router = useRouter()
    const authStore = useAuthStore()

    const businessLines = ref<BusinessLine[]>([])

    onMounted(async () => {
      businessLines.value = await businessLineService.getAll()
    })

    const handleLogin = async ({ businessLineId, role }: AccountSelection) => {
      const loggedIn = await authStore.loginDemo(businessLineId, role)

      if (loggedIn) {
        await router.replace('/app')
      }
    }

    return {
      businessLines,
      handleLogin,
    }
  },
})
