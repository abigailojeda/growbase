import { createRouter, createWebHistory } from 'vue-router'

import { landingRoutes } from './routes/landing.routes'
import { authRoutes } from './routes/auth.routes'
import { appRoutes } from './routes/app.routes'
import { authGuard } from './guards/auth.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...landingRoutes,
    ...authRoutes,
    ...appRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'landing' },
    },
  ],
})

router.beforeEach(authGuard)

export default router
