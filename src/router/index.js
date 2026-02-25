import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ApplyView from '../views/ApplyView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import AICustomerServiceView from '../views/AICustomerServiceView.vue'
import CopyrightView from '../views/CopyrightView.vue'
import AccessibilityView from '../views/AccessibilityView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import ContactFormView from '../views/ContactFormView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/apply',
    name: 'apply',
    component: ApplyView,
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: SolutionsView,
  },
  {
    path: '/ai-service',
    name: 'ai-service',
    component: AICustomerServiceView,
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: CopyrightView,
  },
  {
    path: '/accessibility',
    name: 'accessibility',
    component: AccessibilityView,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
  },
  {
    path: '/contact-form',
    name: 'contact-form',
    component: ContactFormView,
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFoundView,
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: MaintenanceView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

const isMaintenanceMode = String(import.meta.env.VITE_MAINTENANCE_MODE || '').toLowerCase() === 'true'

router.beforeEach((to) => {
  if (to.path === '/maintenance') {
    return true
  }

  if (isMaintenanceMode) {
    return '/maintenance'
  }

  return true
})

export default router
