import { createRouter, createWebHistory } from 'vue-router'

import OpeningHomeView from '../views/OpeningHomeView.vue'
import AboutView from '../views/AboutView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import FAQView from '../views/FAQView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SearchView from '../views/SearchView.vue'
import SiteMapView from '../views/SiteMapView.vue'
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

const SITE_NAME = '新北市政府經濟發展局新北企業與AI應用方案供應商媒合系統'
const HOME = { label: '首頁', to: '/' }
const top = (label) => [HOME, { label }]
const cat = (label) => [HOME, { label: '方案分類', to: '/categories' }, { label }]

const routes = [
  { path: '/', name: 'home', component: OpeningHomeView, meta: { title: '' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: '關於計畫', breadcrumb: top('關於計畫') } },
  { path: '/schedule', name: 'schedule', component: ScheduleView, meta: { title: '計畫時程', breadcrumb: top('計畫時程') } },
  { path: '/faq', name: 'faq', component: FAQView, meta: { title: 'FAQ', breadcrumb: top('FAQ') } },
  { path: '/categories', name: 'categories', component: CategoriesIndexView, meta: { title: '方案分類', breadcrumb: top('方案分類') } },
  { path: '/categories/ai-market-insight', name: 'category-ai-market-insight', component: AIMarketInsightView, meta: { title: 'AI市場洞察', breadcrumb: cat('AI市場洞察') } },
  { path: '/categories/ai-enterprise-operations', name: 'category-ai-enterprise-operations', component: AIEnterpriseOperationsView, meta: { title: 'AI企業營運管理', breadcrumb: cat('AI企業營運管理') } },
  { path: '/categories/ai-assistant', name: 'category-ai-assistant', component: AIAssistantView, meta: { title: 'AI助理', breadcrumb: cat('AI助理') } },
  { path: '/categories/ai-vertical-integration', name: 'category-ai-vertical-integration', component: AIVerticalIntegrationView, meta: { title: 'AI垂直整合方案', breadcrumb: cat('AI垂直整合方案') } },
  { path: '/categories/ai-home-care', name: 'category-ai-home-care', component: AIHomeCareView, meta: { title: 'AI居家照護', breadcrumb: cat('AI居家照護') } },
  { path: '/categories/ai-content-creation', name: 'category-ai-content-creation', component: AIContentCreationView, meta: { title: 'AI創作內容', breadcrumb: cat('AI創作內容') } },
  { path: '/categories/ai-intelligent-customer-service', name: 'category-ai-intelligent-customer-service', component: AIIntelligentCustomerServiceView, meta: { title: 'AI智能客服', breadcrumb: cat('AI智能客服') } },
  { path: '/categories/ai-smart-manufacturing', name: 'category-ai-smart-manufacturing', component: AISmartManufacturingView, meta: { title: 'AI智慧製造', breadcrumb: cat('AI智慧製造') } },
  { path: '/categories/ai-information-security', name: 'category-ai-information-security', component: AIInformationSecurityView, meta: { title: 'AI資訊安全', breadcrumb: cat('AI資訊安全') } },
  { path: '/categories/ai-operation-automation', name: 'category-ai-operation-automation', component: AIOperationAutomationView, meta: { title: 'AI營運流程自動化', breadcrumb: cat('AI營運流程自動化') } },
  { path: '/vendors', name: 'vendors', component: AIServiceSuppliersView, meta: { title: 'AI服務供應商', breadcrumb: top('AI服務供應商') } },
  { path: '/contact-us', name: 'contact-us', component: ContactUsView, meta: { title: '聯絡我們', breadcrumb: top('聯絡我們') } },
  { path: '/search', name: 'search', component: SearchView, meta: { title: '搜尋', breadcrumb: top('搜尋') } },
  { path: '/sitemap', name: 'sitemap', component: SiteMapView, meta: { title: '網站導覽', breadcrumb: top('網站導覽') } },
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

// 每頁標題(WCAG 2.4.2 網頁標題)+ GA4 SPA 頁面瀏覽追蹤
router.afterEach((to) => {
  const pageTitle = to.meta?.title
  document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME

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
