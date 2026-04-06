<script setup>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: 'category',
  },
  emptyText: {
    type: String,
    default: '目前尚無資料。',
  },
})

const escapeHtml = (value) =>
  String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const normalizeExternalUrl = (value) => {
  const text = String(value || '').trim()
  if (!text) return ''
  if (/^https?:\/\//i.test(text)) return text
  return `https://${text}`
}

const multilineToHtml = (value) => escapeHtml(String(value || '')).replaceAll('\n', '<br />')

const buildContactRow = ({ label, value, href = '' }) => {
  const text = String(value || '').trim()
  if (!text) return ''

  const content = href
    ? `<a class="solution-modal-contact-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text)}</a>`
    : `<span class="solution-modal-contact-value">${escapeHtml(text)}</span>`

  return `
    <p class="solution-modal-contact-item">
      <span class="solution-modal-contact-label">${escapeHtml(label)}</span>
      <span class="solution-modal-contact-sep" aria-hidden="true">|</span>
      ${content}
    </p>
  `
}

const openSolutionModal = (card) => {
  const solution = card.modalData || card
  const manualUrl = normalizeExternalUrl(solution.manualUrl)
  const websiteUrl = normalizeExternalUrl(solution.websiteUrl)
  const imageUrl = solution.detailImage || solution.image || card.logo || ''
  const imageAlt = `${solution.name || card.solutionName || card.companyName || card.vendorName || '方案'} 示意圖`
  const manualButton = manualUrl
    ? `<a class="solution-modal-manual-btn" href="${escapeHtml(manualUrl)}" target="_blank" rel="noopener noreferrer">點擊看「操作說明」<i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i></a>`
    : '<span class="solution-modal-manual-btn solution-modal-manual-btn--disabled">點擊看「操作說明」<i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i></span>'

  const contactRowsHtml = [
    buildContactRow({ label: '聯絡人', value: solution.contactPerson }),
    buildContactRow({ label: '公司聯絡電話', value: solution.companyPhone }),
    buildContactRow({ label: '聯絡信箱', value: solution.contactEmail }),
    buildContactRow({ label: '公司官網網址', value: solution.websiteUrl, href: websiteUrl }),
  ]
    .filter(Boolean)
    .join('')

  const modalHtml = `
    <div class="solution-modal">
      <section class="solution-modal-section solution-modal-section--top">
        <div class="solution-modal-top">
          <div class="solution-modal-info">
            <p class="solution-modal-tag">${escapeHtml(solution.tag || '')}</p>
            <p class="solution-modal-company">${escapeHtml(solution.company || card.vendorName || card.companyName || '')}</p>
            <h2 class="solution-modal-title">${escapeHtml(solution.name || card.solutionName || card.companyName || card.cardTitle || card.vendorName || '')}</h2>
            <p class="solution-modal-manual">${manualButton}</p>
          </div>
          <figure class="solution-modal-figure">
            ${
              imageUrl
                ? `<button type="button" class="solution-modal-image-trigger" data-modal-image-trigger aria-label="查看方案大圖"><img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(imageAlt)}" /></button>`
                : '<div class="solution-modal-image-placeholder">尚無圖片</div>'
            }
          </figure>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--middle">
        <h3 class="solution-modal-badge">方案介紹</h3>
        <p class="solution-modal-text">${multilineToHtml(solution.solutionIntro || '')}</p>
        <h3 class="solution-modal-badge">新北專屬優惠價</h3>
        <div class="solution-modal-price-box">
          <p class="solution-modal-price-text">${multilineToHtml(solution.specialPrice || '')}</p>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--bottom">
        <h3 class="solution-modal-badge">洽詢聯絡資訊</h3>
        <div class="solution-modal-contact-list">
          ${contactRowsHtml}
        </div>
      </section>
      ${
        imageUrl
          ? `<div class="solution-modal-lightbox" data-modal-lightbox hidden>
              <button type="button" class="solution-modal-lightbox-close" data-modal-lightbox-close aria-label="關閉圖片預覽">&times;</button>
              <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(imageAlt)}" />
            </div>`
          : ''
      }
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
    padding: '1.4rem 1.4rem 1.8rem',
    didOpen: (popup) => {
      const imageTrigger = popup.querySelector('[data-modal-image-trigger]')
      const lightbox = popup.querySelector('[data-modal-lightbox]')
      const lightboxCloseBtn = popup.querySelector('[data-modal-lightbox-close]')

      if (imageTrigger && lightbox && imageUrl) {
        imageTrigger.addEventListener('click', () => {
          lightbox.removeAttribute('hidden')
        })

        lightbox.addEventListener('click', (event) => {
          if (event.target === lightbox) {
            lightbox.setAttribute('hidden', '')
          }
        })

        lightboxCloseBtn?.addEventListener('click', () => {
          lightbox.setAttribute('hidden', '')
        })
      }
    },
  })
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>{{ title }}</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <div class="solutions-grid" :class="{ 'solutions-grid--category': mode === 'category' }">
        <article
          v-for="card in items"
          :key="card.id"
          class="solution-card"
          :class="{
            'solution-card--category-only': mode === 'category',
            'solution-card--vendor-only': mode === 'vendor',
          }"
          role="button"
          tabindex="0"
          @click="openSolutionModal(card)"
          @keydown.enter.prevent="openSolutionModal(card)"
          @keydown.space.prevent="openSolutionModal(card)"
        >
          <div v-if="mode === 'vendor'" class="solution-image">
            <img :src="card.logo" :alt="card.vendorName" />
          </div>

          <div class="solution-body" :class="{ 'solution-body--category-only': mode === 'category' }">
            <p v-if="mode === 'category'" class="category-company">{{ card.companyName || card.cardTitle }}</p>
            <p v-if="mode === 'category'" class="category-solution">{{ card.solutionName }}</p>
            <h3 v-if="mode === 'vendor'">{{ card.vendorName }}</h3>
          </div>
        </article>

        <div v-if="items.length === 0" class="empty-state">
          <p>{{ emptyText }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-grid--category {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.solution-card--category-only {
  grid-template-rows: 1fr;
  min-height: 190px;
  border: 3px solid #2337a7;
  border-radius: 24px;
  box-shadow: 0 10px 24px rgba(28, 30, 127, 0.12);
}

.solution-body--category-only {
  grid-template-rows: auto auto;
  align-content: stretch;
  text-align: center;
  gap: 0;
  height: 100%;
  padding: 0;
}

.category-company {
  margin: 0;
  min-height: 0;
  color: #ffffff;
  background: #2337a7;
  font-size: 1.24rem;
  font-weight: 800;
  line-height: 1.35;
  min-height: 82px;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.category-solution {
  margin: 0;
  min-height: 0;
  color: #2337a7;
  background: #ffffff;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.45;
  flex: 1;
  min-height: 98px;
  padding: 14px 14px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.solution-card--vendor-only .solution-body {
  grid-template-rows: auto;
  align-content: center;
}

.solution-card--vendor-only .solution-body h3 {
  min-height: 0;
  text-align: center;
}

@media (max-width: 980px) {
  .solutions-grid--category {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .solutions-grid--category {
    grid-template-columns: 1fr;
  }

  .solution-card--category-only {
    min-height: 172px;
    border-radius: 20px;
  }

  .solution-body--category-only {
    padding: 0;
  }

  .category-company {
    min-height: 72px;
    font-size: 1.12rem;
    padding: 12px 10px;
  }

  .category-solution {
    min-height: 90px;
    font-size: 1rem;
    padding: 12px 12px 14px;
  }
}
</style>
