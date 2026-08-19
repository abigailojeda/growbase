import { defineComponent, type PropType } from 'vue'

import CloseIcon from '@/components/icons/CloseIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import Logo from '@/components/Logo/Index.vue'
import type { BusinessLine } from '@/modules/businessLines/types'

export default defineComponent({
  name: 'AppSidebar',

  components: {
    CloseIcon,
    Logo,
    MenuIcon,
  },

  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
    mobileOpen: {
      type: Boolean,
      required: true,
    },
    businessLine: {
      type: Object as PropType<BusinessLine>,
      required: true,
    },
  },

  emits: ['update:collapsed', 'update:mobileOpen'],

  setup(props, { emit }) {
    const toggleCollapsed = () => {
      emit('update:collapsed', !props.collapsed)
    }

    const openMobile = () => {
      emit('update:mobileOpen', true)
    }

    const closeMobile = () => {
      emit('update:mobileOpen', false)
    }

    return {
      toggleCollapsed,
      openMobile,
      closeMobile,
    }
  },
})
