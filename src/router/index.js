import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '/', component: () => import('@/views/Home') },
  {
    path: '/discord', redirect: (to) => {
      window.location.href = "https://discord.gg/wUtrrHH6qx"
      return null
    }
  },
  { path: '/legal', component: () => import('@/views/Legal') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router