import { createRouter, createWebHistory } from 'vue-router'

import OpeningHomeView from '../views/OpeningHomeView.vue'
import AboutView from '../views/AboutView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import FAQView from '../views/FAQView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SearchView from '../views/SearchView.vue'
import CategoriesIndexView from '../views/categories/CategoriesIndexView.vue'
import AIMarketInsightView from '../views/categories/AIMarketInsightView.vue'
import AIEnterpriseOperationsView from '../views/categories/AIEnterpriseOperationsView.vue'
import AIAssistantView from '../views/categories/AIAssistantView.vue'
import AIVerticalIntegrationView from '../views/categories/AIVerticalIntegrationView.vue'
import AIHomeCareView from '../views/categories/AIHomeCareView.vue'
import AIContentCreationView from '../views/categories/AIContentCreationView.vue'
import AIIntelligentCustomerServiceView from '../views/categories/AIIntelligentCustomerServiceView.vue'
import AISmartManufacturingView from '../views/categories/AISmartManufacturingView.vue'
import AIInformationSecurityView from '../views/categories/AIInformationSecurityView.vue'
import AIOperationAutomationView from '../views/categories/AIOperationAutomationView.vue'
import AIServiceSuppliersView from '../views/vendors/AIServiceSuppliersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: OpeningHomeView,
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
    path: '/categories',
    name: 'categories',
    component: CategoriesIndexView,
  },
  {
    path: '/categories/ai-market-insight',
    name: 'category-ai-market-insight',
    component: AIMarketInsightView,
  },
  {
    path: '/categories/ai-enterprise-operations',
    name: 'category-ai-enterprise-operations',
    component: AIEnterpriseOperationsView,
  },
  {
    path: '/categories/ai-assistant',
    name: 'category-ai-assistant',
    component: AIAssistantView,
  },
  {
    path: '/categories/ai-vertical-integration',
    name: 'category-ai-vertical-integration',
    component: AIVerticalIntegrationView,
  },
  {
    path: '/categories/ai-home-care',
    name: 'category-ai-home-care',
    component: AIHomeCareView,
  },
  {
    path: '/categories/ai-content-creation',
    name: 'category-ai-content-creation',
    component: AIContentCreationView,
  },
  {
    path: '/categories/ai-intelligent-customer-service',
    name: 'category-ai-intelligent-customer-service',
    component: AIIntelligentCustomerServiceView,
  },
  {
    path: '/categories/ai-smart-manufacturing',
    name: 'category-ai-smart-manufacturing',
    component: AISmartManufacturingView,
  },
  {
    path: '/categories/ai-information-security',
    name: 'category-ai-information-security',
    component: AIInformationSecurityView,
  },
  {
    path: '/categories/ai-operation-automation',
    name: 'category-ai-operation-automation',
    component: AIOperationAutomationView,
  },
  {
    path: '/vendors',
    name: 'vendors',
    component: AIServiceSuppliersView,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// GA4 SPA 頁面瀏覽追蹤：每次路由切換後送 page_view 事件
router.afterEach((to) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }
  window.gtag('event', 'page_view', {
    page_path: to.fullPath,
    page_title: document.title,
    page_location: window.location.href,
  })
})

export default router
