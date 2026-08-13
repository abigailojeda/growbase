import { createRouter, createWebHistory } from 'vue-router'

import { landingRoutes } from './routes/landing.routes'
import { authRoutes } from './routes/auth.routes'
import { appRoutes } from './routes/app.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...landingRoutes, ...authRoutes, ...appRoutes],
})

export default router
