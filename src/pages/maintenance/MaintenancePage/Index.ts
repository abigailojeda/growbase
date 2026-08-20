import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MaintenancePage',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backTo: {
      type: String,
      default: undefined,
    },
    backLabel: {
      type: String,
      default: 'Go back',
    },
  },
})
