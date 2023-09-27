import { createRouter, createWebHistory } from 'vue-router'

const routes = [{ path: '/', component: () => import('@/views/index/index.vue') }]
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
