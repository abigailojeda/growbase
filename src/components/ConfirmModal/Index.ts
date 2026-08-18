import { defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'ConfirmModal',

  props: {
    open: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    confirmLabel: {
      type: String,
      default: 'Confirm',
    },
    cancelLabel: {
      type: String,
      default: 'Cancel',
    },
  },

  emits: ['confirm', 'cancel'],

  setup(props, { emit }) {
    const confirm = () => {
      emit('confirm')
    }

    const cancel = () => {
      emit('cancel')
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (props.open && event.key === 'Escape') {
        cancel()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
    })

    return {
      confirm,
      cancel,
    }
  },
})
