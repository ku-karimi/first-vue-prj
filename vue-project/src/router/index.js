import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import helpPage from '../views/helpPage.vue'
import profilePage from '../views/profilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/Help',
      component: helpPage
    },
    {
      path: '/Profile',
      component: profilePage
    }
  ],
})

export default router
