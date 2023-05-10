import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: ({ redirect: string; path: string } | { path: string; component: () => Promise<{}>; name: string } | { path: string; component: () => Promise<{}>; name: string } | { path: string; component: () => Promise<any>; name: string } | { path: string; component: () => Promise<any>; name: string } | { path: string; component: () => Promise<any>; name: string } | { path: string; component: () => Promise<any>; name: string })[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/HomePage/Index.vue'),
  },
  {
    name: 'activation',
    path: '/activation',
    component: () => import('@/pages/SoftwareActivation/Index.vue'),
  },
  {
    name: 'download',
    path: '/download',
    component: () => import('@/pages/SoftwareDownload.vue'),
  },
  {
    name: 'help',
    path: '/help',
    component: () => import('@/pages/HelpCenter.vue'),
  },
  {
    name: 'service',
    path: '/service',
    component: () => import('@/pages/ServiceMonitor.vue'),
  },
  {
    name: 'movie',
    path: '/movie',
    component: () => import('@/pages/Movie.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
