<script setup>
import { computed, ref } from 'vue'
import Fuse from 'fuse.js'
import { solutionsSearchText } from '../data/solutionsData'

const searchQuery = ref('')

const pageMetaMap = {
  OpeningHomeView: { title: '首頁', path: '/' },
  AboutView: { title: '關於計畫', path: '/about' },
  ScheduleView: { title: '計畫時程', path: '/schedule' },
  FAQView: { title: 'FAQ', path: '/faq' },
  ApplyView: { title: '申請須知', path: '/apply' },
  SolutionsView: { title: '方案分類與供應商', path: '/solutions' },
  ContactUsView: { title: '聯絡我們', path: '/contact-us' },
  ContactFormView: { title: '聯繫表單', path: '/contact-form' },
  AICustomerServiceView: { title: 'AI客服', path: '/ai-service' },
  CopyrightView: { title: '版權聲明', path: '/copyright' },
  AccessibilityView: { title: '無障礙標章', path: '/accessibility' },
  PrivacyView: { title: '隱私權條款', path: '/privacy' },
}

const rawViewModules = import.meta.glob('./*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const extractTemplateContent = (rawSfc) => {
  const matched = rawSfc.match(/<template>([\s\S]*?)<\/template>/i)
  return matched ? matched[1] : rawSfc
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

const indexedPages = Object.entries(rawViewModules)
  .map(([filePath, rawContent]) => {
    const viewName = viewFileToName(filePath)
    const meta = pageMetaMap[viewName]
    if (!meta) {
      return null
    }

    const templateContent = extractTemplateContent(rawContent)
    const plainText = stripHtmlToText(templateContent)
    const extraText = viewName === 'SolutionsView' ? solutionsSearchText : ''
    const fullText = `${plainText} ${extraText}`.trim()

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
