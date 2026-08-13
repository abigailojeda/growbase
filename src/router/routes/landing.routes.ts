import type { RouteRecordRaw } from 'vue-router'

export const landingRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/LandingLayout/Index.vue'),
    children: [
      {
        path: '',
        name: 'landing',
        component: () => import('@/pages/landing/LandingPage/Index.vue'),
      },
    ],
  },
]
