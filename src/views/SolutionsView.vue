<script setup>
import { computed, ref } from 'vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { solutions, tagOptions } from '../data/solutionsData'

const selectedTag = ref('全部')
const searchQuery = ref('')

const filteredSolutions = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return solutions.filter((solution) => {
    const matchesTag = selectedTag.value === '全部' || solution.tag === selectedTag.value
    const matchesKeyword =
      !keyword ||
      solution.name.toLowerCase().includes(keyword) ||
      solution.company.toLowerCase().includes(keyword) ||
      solution.tag.toLowerCase().includes(keyword)
    return matchesTag && matchesKeyword
  })
})

const selectTag = (tag) => {
  selectedTag.value = tag
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const openSolutionModal = (solution) => {
  const manualButton = solution.manualUrl
    ? `<a class="solution-modal-manual-btn" href="${escapeHtml(solution.manualUrl)}" target="_blank" rel="noopener noreferrer">點擊看「操作說明」</a>`
    : '<span class="solution-modal-manual-btn solution-modal-manual-btn--disabled">點擊看「操作說明」</span>'

  const modalHtml = `
    <div class="solution-modal">
      <section class="solution-modal-top">
        <div class="solution-modal-info">
          <p class="solution-modal-tag">${escapeHtml(solution.tag)}</p>
          <p class="solution-modal-company">${escapeHtml(solution.company)}</p>
          <h2 class="solution-modal-title">${escapeHtml(solution.name)}</h2>
          <p class="solution-modal-manual">${manualButton}</p>
        </div>
        <figure class="solution-modal-figure">
          <img src="${solution.detailImage}" alt="${escapeHtml(solution.name)} 示意圖" />
        </figure>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-bottom">
        <h3 class="solution-modal-badge">方案介紹</h3>
        <p class="solution-modal-text">${escapeHtml(solution.solutionIntro)}</p>
        <h3 class="solution-modal-badge">供應商介紹</h3>
        <p class="solution-modal-text">${escapeHtml(solution.vendorIntro)}</p>
      </section>
    </div>
  `

  Swal.fire({
    html: modalHtml,
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      popup: 'solution-swal-popup',
      closeButton: 'solution-swal-close',
    },
    width: 'min(1120px, 96vw)',
    background: '#ffffff',
    padding: '1.6rem 1.8rem 2rem',
  })
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>方案分類與供應商</h1>
          <span class="title-line"></span>
        </header>
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
        <article
          v-for="solution in filteredSolutions"
          :key="solution.id"
          class="solution-card"
          role="button"
          tabindex="0"
          @click="openSolutionModal(solution)"
          @keydown.enter.prevent="openSolutionModal(solution)"
          @keydown.space.prevent="openSolutionModal(solution)"
        >
          <div class="solution-image">
            <img :src="solution.image" :alt="solution.name" />
          </div>
          <div class="solution-body">
            <h3>{{ solution.name }}</h3>
            <p class="solution-company">{{ solution.company }}</p>
            <div class="tag-list">
              <span class="tag">{{ solution.tag }}</span>
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
