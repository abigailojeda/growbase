import { defineComponent, type Component, type PropType } from 'vue'

export default defineComponent({
  name: 'EmptyMessage',

  props: {
    message: {
      type: String,
      required: true,
    },

    link: {
      type: Object as PropType<{
        label: string
        to: string
      }>,
      required: false,
    },

    icon: {
      type: Object as PropType<Component>,
      required: false,
    },

    iconClass: {
      type: String,
      default: 'text-primary h-20 w-20',
    },
  },
})
