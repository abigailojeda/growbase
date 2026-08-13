import { defineComponent, type PropType } from 'vue'

export type LogoVariant = 'full' | 'symbol'

export default defineComponent({
  name: 'AppLogo',
  inheritAttrs: false,

  props: {
    variant: {
      type: String as PropType<LogoVariant>,
      default: 'full',
    },
  },

  setup(props) {
    return {
      props,
    }
  },
})
