import { createRouter, createWebHistory } from 'vue-router'
import { MainLayout } from '@/layouts'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },

    {
      path: '/',
      name: 'base',
      component: MainLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
  ],
})

export default router
