<script setup>
import { RouterLink } from 'vue-router'
import { categoryNavItems } from '../data/catalogData'

const sections = [
  {
    heading: '計畫資訊',
    links: [
      { label: '關於計畫', to: '/about' },
      { label: '計畫時程', to: '/schedule' },
      { label: '常見問題 FAQ', to: '/faq' },
    ],
  },
  {
    heading: '方案分類',
    links: [
      { label: '方案分類總覽', to: '/categories' },
      ...categoryNavItems.map((item) => ({ label: item.label, to: `/categories/${item.slug}` })),
    ],
  },
  {
    heading: '供應商與服務',
    links: [
      { label: 'AI服務供應商', to: '/vendors' },
      { label: '聯絡我們', to: '/contact-us' },
      { label: '站內搜尋', to: '/search' },
    ],
  },
  {
    heading: '其他',
    links: [{ label: '首頁', to: '/' }],
  },
]
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>網站導覽</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <p class="sitemap-intro">本頁彙整網站所有單元連結,方便您快速前往各區內容。</p>

      <div class="sitemap-grid">
        <section v-for="group in sections" :key="group.heading" class="sitemap-group">
          <h2 class="sitemap-heading">{{ group.heading }}</h2>
          <ul class="sitemap-list">
            <li v-for="link in group.links" :key="link.to">
              <RouterLink :to="link.to" class="sitemap-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sitemap-intro {
  margin: 6px 0 18px;
  color: var(--muted);
  font-size: 1.05rem;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.sitemap-group {
  background: #ffffff;
  border: 1px solid rgba(28, 30, 127, 0.14);
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 10px 24px rgba(28, 30, 127, 0.08);
}

.sitemap-heading {
  margin: 0 0 12px;
  color: #1d2f8f;
  font-size: 1.2rem;
  border-bottom: 2px solid rgba(28, 30, 127, 0.12);
  padding-bottom: 8px;
}

.sitemap-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.sitemap-link {
  display: inline-block;
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 1.05rem;
}

.sitemap-link::before {
  content: '›';
  margin-right: 8px;
  color: #5a78d6;
}

.sitemap-link:hover,
.sitemap-link:focus-visible {
  text-decoration: underline;
}
</style>
