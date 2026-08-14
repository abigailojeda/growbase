import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { useAuthSession } from '@/composables/useAuthSession/useAuthSession'
import { useColorMode } from '@/composables/useColorMode/useColorMode'
import router from '@/router'

import './styles/main.css'

const bootstrap = async () => {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)

  useColorMode()
  await useAuthSession()

  app.use(router)

  app.mount('#app')
}

void bootstrap()
