import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('../views/WorkshopView.vue')
    },

    
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    },

    {
      path: '/user',
      name: 'user',
      component: () => import('../views/Account/HomePage.vue')
    },

    {
      path: '/user/gpa-calculator',
      name: 'gpa',
      component: () => import('../views/Account/Gpa/index.vue')
    },

    {
      path: '/user/ai-writer',
      name: 'write',
      component: () => import('../views/Account/AiWriter/index.vue')
    },

    {
      path: '/user/notes',
      name: 'notes',
      component: () => import('../views/Account/Notes/index.vue')
    },


    {
      path: '/user/payments',
      name: 'notes',
      component: () => import('../views/Account/Payments/index.vue')
    },

    {
      path: '/user/learning',
      name: 'learning',
      component: () => import('../views/Account/Courses/index.vue')
    },

    {
      path: '/user/learning/:title',
      name: 'learning-details',
      component: () => import('../views/Account/Courses/courseDetails.vue')
    },

    {
      path: '/user/tools',
      name: 'tools',
      component: () => import('../views/Account/Tools/index.vue')
    },

    {
      path: '/user/task',
      name: 'task',
      component: () => import('../views/Account/Task/index.vue')
    },


  ]
})

export default router
