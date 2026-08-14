import { defineComponent, type PropType } from 'vue'

import AccountItem from '@/modules/auth/components/AccountItem/Index.vue'
import type { BusinessLine } from '@/modules/businessLines/types'
import type { AccountSelection, UserRole } from '../../types'

export default defineComponent({
  name: 'AccountCard',

  components: {
    AccountItem,
  },

  props: {
    businessLines: {
      type: Array as PropType<BusinessLine[]>,
      required: true,
    },
  },

  emits: {
    login: (_account: AccountSelection) => true,
  },

  setup(_props, { emit }) {
    const handleLogin = (businessLineId: string, role: UserRole) => {
      emit('login', {
        businessLineId,
        role,
      })
    }

    return {
      handleLogin,
    }
  },
})
