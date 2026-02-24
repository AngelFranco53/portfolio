import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/PersonalView.vue'),
    },
    {
      path: '/profesional',
      name: 'profesional',
      component: () => import('../views/ProfesionalView.vue'),
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('../views/ProjectsView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
