import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'


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
      path: '/user/join-the-tech-team',
      name: 'Tech-team',
      component: () => import('../views/Account/team.vue')
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
      path: '/verify-email',
      name: 'verify-email',
      component: () => import('../views/Verification/verifyEmail.vue')
    },

    {
      path: '/unverified-email',
      name: 'unverified-email',
      component: () => import('../views/Verification/unverifiedEmail.vue')
    },

    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/HomePage.vue')
    },

    {
      path: '/user/gpa-calculator',
      name: 'gpa',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Gpa/index.vue')
    },

    {
      path: '/user/ai-writer',
      name: 'write',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/AiWriter/index.vue')
    },

    {
      path: '/user/notes',
      name: 'notes',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Notes/index.vue')
    },


    {
      path: '/user/payments',
      name: 'payments',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Payments/index.vue')
    },

    {
      path: '/user/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/User/profile.vue')
    },

    {
      path: '/user/learning',
      name: 'learning',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Courses/index.vue')
    },

    {
      path: '/user/learning/:title',
      name: 'learning-details',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Courses/courseDetails.vue')
    },

    // {
    //   path: '/user/tools',
    //   name: 'tools',
    //   meta: { requiresAuth: true },
    //   component: () => import('../views/Account/Tools/index.vue')
    // },

    {
      path: '/user/task',
      name: 'task',
      meta: { requiresAuth: true },
      component: () => import('../views/Account/Task/index.vue')
    },


  ]
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Wait for the user's authentication status to be rehydrated
    auth.onAuthStateChanged(user => {
      if (user) {
        // Check if the user's email is verified
        if (user.emailVerified) {
          // User is authenticated and email is verified, proceed with navigation
          next();
        } else {
          // User is authenticated but email is not verified, redirect to a verification page
          next({ path: '/unverified-email' });
        }
      } else {
        // User is not authenticated, redirect to login
        next({ path: "/signin" });
      }
    });
  } else {
    // Route doesn't require authentication, proceed with navigation
    next();
  }
});

export default router
