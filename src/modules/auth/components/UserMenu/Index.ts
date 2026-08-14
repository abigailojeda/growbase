import { storeToRefs } from 'pinia'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

export default defineComponent({
  name: 'UserMenu',

  components: {
    LogoutIcon,
    UserIcon,
  },

  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    const { currentUser } = storeToRefs(authStore)

    const isOpen = ref(false)
    const menuRef = ref<HTMLElement | null>(null)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const closeMenu = () => {
      isOpen.value = false
    }

    const handleLogout = async () => {
      authStore.logout()
      await router.replace('/login')
    }

    const handleDocumentClick = (event: MouseEvent) => {
      if (!menuRef.value?.contains(event.target as Node)) {
        closeMenu()
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleDocumentClick)
      document.addEventListener('keydown', handleKeydown)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeydown)
    })

    return {
      currentUser,
      isOpen,
      menuRef,
      toggleMenu,
      handleLogout,
    }
  },
})
