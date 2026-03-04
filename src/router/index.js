import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import FAQView from '../views/FAQView.vue'
import ApplyView from '../views/ApplyView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import AICustomerServiceView from '../views/AICustomerServiceView.vue'
import CopyrightView from '../views/CopyrightView.vue'
import AccessibilityView from '../views/AccessibilityView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import ContactFormView from '../views/ContactFormView.vue'
import SearchView from '../views/SearchView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'

const routes = [
  {
    path: '/',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
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
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView,
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
    path: '/search',
    name: 'search',
    component: SearchView,
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
