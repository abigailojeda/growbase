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
      {
        path: 'crops',
        component: () => import('@/modules/crops/pages/CropsPage/Index.vue'),
      },
      {
        path: 'crops/:id',
        name: 'crop-detail',
        component: () => import('@/modules/crops/pages/CropDetailPage/Index.vue'),
      },
    ],
  },
]
