import { defineComponent, onMounted, onUnmounted } from 'vue'

import CloseIcon from '@/components/icons/CloseIcon.vue'

export default defineComponent({
  name: 'ImageModal',

  components: {
    CloseIcon,
  },

  props: {
    open: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },

  emits: ['close'],

  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (props.open && event.key === 'Escape') {
        close()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
    })

    return {
      close,
    }
  },
})
