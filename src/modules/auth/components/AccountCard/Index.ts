import { defineComponent, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import AccountsIcons from '@/components/icons/AccountsIcons.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import AccountItem from '@/modules/auth/components/AccountItem/Index.vue'
import type { BusinessLine } from '@/modules/businessLines/types'
import type { AccountSelection, UserRole } from '../../types'

export default defineComponent({
  name: 'AccountCard',

  components: {
    AccountItem,
    AccountsIcons,
    InfoIcon,
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
    const { t } = useI18n()

    const handleLogin = (businessLineId: string, role: UserRole) => {
      emit('login', {
        businessLineId,
        role,
      })
    }

    return {
      t,
      handleLogin,
    }
  },
})
