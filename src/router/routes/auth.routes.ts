import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/layouts/AuthLayout/Index.vue'),
    meta: {
      guestOnly: true,
    },
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/modules/auth/pages/LoginPage/Index.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        redirect: { name: 'login' },
      },
    ],
  },
]
