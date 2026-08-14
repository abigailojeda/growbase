import type { RouteRecordRaw } from 'vue-router'

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    component: () => import('@/layouts/AppLayout/Index.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/modules/dashboard/pages/DashboardPage/Index.vue'),
      },
    ],
  },
]
