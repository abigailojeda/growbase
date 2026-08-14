import type { RouteRecordRaw } from 'vue-router'

export const landingRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/LandingLayout/Index.vue'),
    meta: {
      guestOnly: true,
    },
    children: [
      {
        path: '',
        name: 'landing',
        component: () => import('@/pages/landing/LandingPage/Index.vue'),
      },
    ],
  },
]
