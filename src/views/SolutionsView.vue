<script setup>
import { computed, ref } from 'vue'

const placeholderImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#f2f4ff" />
    <text x="300" y="310" text-anchor="middle" font-size="34" fill="#1c1e7f" font-family="'Noto Sans TC', sans-serif">等待上傳</text>
  </svg>`
)}` 

const tagOptions = ['全部', 'AAA', 'BBB', 'CCC', 'DDD']
const selectedTag = ref('全部')
const searchQuery = ref('')

const solutions = [
  { id: 1, name: '智慧製造排程優化', tags: ['AAA', 'CCC'], image: placeholderImage },
  { id: 2, name: '設備預兆維護分析', tags: ['BBB', 'DDD'], image: placeholderImage },
  { id: 3, name: '能源管理儀表板', tags: ['AAA', 'DDD'], image: placeholderImage },
  { id: 4, name: '品質檢測影像辨識', tags: ['CCC'], image: placeholderImage },
  { id: 5, name: '供應鏈風險預警', tags: ['BBB', 'CCC'], image: placeholderImage },
  { id: 6, name: '智慧客服對話平台', tags: ['AAA', 'BBB'], image: placeholderImage },
  { id: 7, name: '倉儲物流路線最佳化', tags: ['DDD'], image: placeholderImage },
  { id: 8, name: '市場需求預測模型', tags: ['BBB', 'CCC'], image: placeholderImage },
  { id: 9, name: '安全合規監測系統', tags: ['AAA', 'DDD'], image: placeholderImage },
  { id: 10, name: '跨部門績效洞察', tags: ['CCC', 'DDD'], image: placeholderImage },
]

const filteredSolutions = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return solutions.filter((solution) => {
    const matchesTag = selectedTag.value === '全部' || solution.tags.includes(selectedTag.value)
    const matchesKeyword =
      !keyword ||
      solution.name.toLowerCase().includes(keyword) ||
      solution.tags.some((tag) => tag.toLowerCase().includes(keyword))
    return matchesTag && matchesKeyword
  })
})

const selectTag = (tag) => {
  selectedTag.value = tag
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <h1>解決方案</h1>
        <p class="pending">等待開發中</p>
      </div>

      <div class="solutions-controls">
        <div class="search-area">
          <input
            v-model="searchQuery"
            class="search-input"
            type="search"
            placeholder="搜尋關鍵字"
            aria-label="搜尋解決方案"
          />
        </div>

        <div class="quick-tags">
          <button
            v-for="tag in tagOptions"
            :key="tag"
            class="tag-chip"
            :class="{ active: selectedTag === tag }"
            type="button"
            @click="selectTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="solutions-grid">
        <article v-for="solution in filteredSolutions" :key="solution.id" class="solution-card">
          <div class="solution-image">
            <img :src="solution.image" alt="等待上傳" />
          </div>
          <div class="solution-body">
            <h3>{{ solution.name }}</h3>
            <div class="tag-list">
              <span v-for="tag in solution.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>

        <div v-if="filteredSolutions.length === 0" class="empty-state">
          <p>查無結果，請調整關鍵字或標籤。</p>
        </div>
      </div>
    </div>
  </section>
</template>
