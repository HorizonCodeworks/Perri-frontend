import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'services/:id',
        component: () => import('pages/ServicePage.vue'),
      },
      {
        path: 'services',
        component: () => import('pages/AllServicesPage.vue'),
      },
      {
        path: 'about',
        component: () => import('pages/AboutUsPage.vue')
      },
      {
        path: 'contact',
        component: () => import('pages/ContactPage.vue')
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
