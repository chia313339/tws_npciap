<script setup>
import { computed, ref } from 'vue'
import Fuse from 'fuse.js'
import metadataRows from '../data/metadata.generated.json'
import vendorCompanies from '../data/vendorCompanies.generated.json'
import { faqs } from '../data/faqData'
import { categoryNavItems } from '../data/catalogData'

const searchQuery = ref('')

const pageMetaMap = {
  OpeningHomeView: { title: '首頁', path: '/', keywords: '開始探索 開頭影片 skip 跑馬燈 輪播' },
  AboutView: { title: '關於計畫', path: '/about', keywords: '即刻申請 申請 計畫說明' },
  ScheduleView: { title: '計畫時程', path: '/schedule', keywords: '時程 報名 申請截止' },
  FAQView: { title: 'FAQ', path: '/faq', keywords: '常見問題 補助 申請條件' },
  CategoriesIndexView: { title: '方案分類', path: '/categories', keywords: 'AI方案分類 方案總覽' },
  AIMarketInsightView: { title: 'AI市場洞察', path: '/categories/ai-market-insight' },
  AIEnterpriseOperationsView: {
    title: 'AI企業營運管理',
    path: '/categories/ai-enterprise-operations',
  },
  AIAssistantView: { title: 'AI助理', path: '/categories/ai-assistant' },
  AIVerticalIntegrationView: {
    title: 'AI垂直整合方案',
    path: '/categories/ai-vertical-integration',
  },
  AIHomeCareView: { title: 'AI居家照護', path: '/categories/ai-home-care' },
  AIContentCreationView: { title: 'AI創作內容', path: '/categories/ai-content-creation' },
  AIIntelligentCustomerServiceView: {
    title: 'AI智能客服',
    path: '/categories/ai-intelligent-customer-service',
  },
  AISmartManufacturingView: { title: 'AI智慧製造', path: '/categories/ai-smart-manufacturing' },
  AIInformationSecurityView: { title: 'AI資訊安全', path: '/categories/ai-information-security' },
  AIOperationAutomationView: { title: 'AI營運流程自動化', path: '/categories/ai-operation-automation' },
  AIServiceSuppliersView: {
    title: 'AI服務供應商',
    path: '/vendors',
    keywords: '供應商 企業 官網 logo',
  },
  ContactUsView: { title: '聯絡我們', path: '/contact-us', keywords: '聯絡 電話 信箱' },
  SearchView: { title: '搜尋', path: '/search', keywords: '站內搜尋 關鍵字查詢' },
}

const rawViewModules = import.meta.glob('./**/*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const extractTemplateContent = (rawSfc) => {
  const matched = rawSfc.match(/<template>([\s\S]*?)<\/template>/i)
  return matched ? matched[1] : rawSfc
}

const extractScriptContent = (rawSfc) => {
  const blocks = [...rawSfc.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)].map((match) => match[1] || '')
  return blocks.join(' ')
}

const extractStringLiterals = (source) => {
  const strings = []
  const regexp = /(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g
  let match = regexp.exec(source)

  while (match) {
    const raw = match[2] || ''
    const normalized = raw
      .replace(/\\n/g, ' ')
      .replace(/\\r/g, ' ')
      .replace(/\\t/g, ' ')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\s+/g, ' ')
      .trim()

    if (normalized.length >= 2) {
      strings.push(normalized)
    }

    match = regexp.exec(source)
  }

  return strings.join(' ')
}

const stripHtmlToText = (content) =>
  content
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/{{[\s\S]*?}}/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const viewFileToName = (filePath) => filePath.split('/').pop().replace('.vue', '')

const categoriesKeywordText = categoryNavItems.map((item) => item.label).join(' ')

const vendorKeywordText = vendorCompanies
  .map((item) =>
    [item.companyName, item.companyShortName, item.companyIntro, item.websiteUrl, ...(item.solutionNames || [])]
      .filter(Boolean)
      .join(' ')
  )
  .join(' ')

const faqKeywordText = faqs.map((item) => [item.question, item.answer].filter(Boolean).join(' ')).join(' ')

const getCategorySpecificText = (categoryLabel) =>
  metadataRows
    .filter((row) => row.category === categoryLabel)
    .map((row) => [row.companyShortName, row.solutionName, row.solutionIntro, row.specialPrice].filter(Boolean).join(' '))
    .join(' ')

const getPageScopeText = (meta) => {
  if (meta.path === '/vendors') {
    return vendorKeywordText
  }

  if (meta.path === '/categories') {
    return categoriesKeywordText
  }

  if (meta.path === '/faq') {
    return faqKeywordText
  }

  if (meta.path.startsWith('/categories/')) {
    return getCategorySpecificText(meta.title)
  }

  return ''
}

const indexedPages = Object.entries(rawViewModules)
  .map(([filePath, rawContent]) => {
    const viewName = viewFileToName(filePath)
    const meta = pageMetaMap[viewName]
    if (!meta) {
      return null
    }

    const templateContent = extractTemplateContent(rawContent)
    const scriptContent = extractScriptContent(rawContent)
    const plainText = stripHtmlToText(templateContent)
    const scriptStringText = extractStringLiterals(scriptContent)
    const pageScopeText = getPageScopeText(meta)
    const fullText = `${plainText} ${scriptStringText} ${meta.keywords || ''} ${pageScopeText}`.trim()

    return {
      ...meta,
      content: fullText,
      normalized: `${meta.title} ${fullText}`.toLowerCase(),
    }
  })
  .filter(Boolean)

const fuse = new Fuse(indexedPages, {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: [
    { name: 'title', weight: 0.45 },
    { name: 'content', weight: 0.55 },
  ],
})

const normalizedQuery = computed(() => searchQuery.value.trim())

const createExcerpt = (fullText, keyword) => {
  const source = fullText || ''
  const key = keyword.trim().toLowerCase()
  if (!source) {
    return ''
  }

  const lowerSource = source.toLowerCase()
  const hitIndex = lowerSource.indexOf(key)
  if (hitIndex < 0) {
    return source.slice(0, 96) + (source.length > 96 ? '...' : '')
  }

  const start = Math.max(0, hitIndex - 28)
  const end = Math.min(source.length, hitIndex + key.length + 52)
  const prefix = start > 0 ? '...' : ''
  const suffix = end < source.length ? '...' : ''
  return `${prefix}${source.slice(start, end)}${suffix}`
}

const searchResults = computed(() => {
  if (!normalizedQuery.value) {
    return []
  }

  const keyword = normalizedQuery.value.toLowerCase()
  const directMatches = indexedPages.filter((page) => page.normalized.includes(keyword))
  const fuzzyMatches = fuse.search(normalizedQuery.value).map((result) => result.item)
  const merged = [...directMatches, ...fuzzyMatches]

  const uniqueByPath = new Map()
  merged.forEach((item) => {
    if (!uniqueByPath.has(item.path)) {
      uniqueByPath.set(item.path, item)
    }
  })

  return [...uniqueByPath.values()].map((item) => ({
    ...item,
    excerpt: createExcerpt(item.content, normalizedQuery.value),
  }))
})
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>搜尋</h1>
          <span class="title-line"></span>
        </header>
      </div>
      <br>
      <br>

      <div class="search-area">
        <input
          v-model="searchQuery"
          class="search-input"
          type="search"
          placeholder="請輸入關鍵字開始搜尋..."
          aria-label="搜尋網站頁面"
        />
      </div>

      <div class="search-results">
        <p v-if="!normalizedQuery" class="search-hint"></p>
        <p v-else-if="searchResults.length === 0" class="search-hint">查無符合頁面，請嘗試其他關鍵字。</p>

        <ul v-else class="result-list">
          <li v-for="item in searchResults" :key="item.path" class="result-item">
            <RouterLink :to="item.path" class="result-link">{{ item.title }}</RouterLink>
            <p class="result-summary">{{ item.excerpt }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search-results {
  margin-top: 18px;
}

.search-hint {
  margin: 0;
  color: var(--muted);
  font-size: 1.02rem;
}

.result-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.result-item {
  background: #ffffff;
  border: 1px solid rgba(28, 30, 127, 0.12);
  border-radius: 14px;
  padding: 14px 16px;
}

.result-link {
  color: var(--primary-dark);
  font-size: 1.1rem;
  font-weight: 700;
}

.result-summary {
  margin: 6px 0 0;
  color: var(--muted);
}
</style>
