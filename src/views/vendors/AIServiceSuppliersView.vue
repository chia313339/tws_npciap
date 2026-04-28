<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import vendorCompanies from '../../data/vendorCompanies.generated.json'
import metadataRows from '../../data/metadata.generated.json'
import { categoryNavItems } from '../../data/catalogData'

const PAGE_SIZE = 15

const logoModules = import.meta.glob('/src/assets/solutions/logo/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

const normalizeUrl = (value) => {
  const text = String(value || '').trim()
  if (!text) return ''
  if (/^https?:\/\//i.test(text)) return text
  return `https://${text}`
}

const toText = (value) => String(value ?? '').trim()

const categorySlugMap = new Map(categoryNavItems.map((item) => [item.label, item.slug]))

const solutionCategoryMap = new Map()
metadataRows.forEach((row) => {
  const solutionName = toText(row.solutionName)
  const category = toText(row.category)
  const companyName = toText(row.companyName)
  const companyShortName = toText(row.companyShortName)
  const slug = categorySlugMap.get(category)

  if (!solutionName || !slug) {
    return
  }

  const routePath = `/categories/${slug}`
  if (companyName) {
    solutionCategoryMap.set(`${companyName}::${solutionName}`, routePath)
  }
  if (companyShortName) {
    solutionCategoryMap.set(`${companyShortName}::${solutionName}`, routePath)
  }
  if (!solutionCategoryMap.has(solutionName)) {
    solutionCategoryMap.set(solutionName, routePath)
  }
})

const suppliers = vendorCompanies.map((item) => ({
  ...item,
  websiteUrl: normalizeUrl(item.websiteUrl),
  solutionLinks: (item.solutionNames || []).map((solutionName) => {
    const normalizedName = toText(solutionName)
    const routePath =
      solutionCategoryMap.get(`${toText(item.companyName)}::${normalizedName}`) ||
      solutionCategoryMap.get(`${toText(item.companyShortName)}::${normalizedName}`) ||
      solutionCategoryMap.get(normalizedName) ||
      ''

    return {
      label: normalizedName,
      to: routePath,
    }
  }),
  logo:
    item.logoFileName && logoModules[`/src/assets/solutions/logo/${item.logoFileName}`]
      ? logoModules[`/src/assets/solutions/logo/${item.logoFileName}`]
      : '',
}))

const currentPage = ref(0)
const selectedSupplier = ref(null)

const pageCount = computed(() => Math.max(1, Math.ceil(suppliers.length / PAGE_SIZE)))
const pageItems = computed(() =>
  suppliers.slice(currentPage.value * PAGE_SIZE, currentPage.value * PAGE_SIZE + PAGE_SIZE)
)

const changePage = (index) => {
  if (index < 0 || index >= pageCount.value) return
  currentPage.value = index
}

const openSupplierModal = (supplier) => {
  selectedSupplier.value = supplier
}

const closeSupplierModal = () => {
  selectedSupplier.value = null
}

const getSupplierName = (supplier) => supplier.companyName || supplier.companyShortName || 'AI服務供應商'

const getSupplierCardLabel = (supplier) => `查看 ${getSupplierName(supplier)} 供應商詳細資訊`

const getSupplierWebsiteLabel = (supplier) => `前往 ${getSupplierName(supplier)} 官網（另開新視窗）`
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>AI服務供應商</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <h2 class="sr-only">AI服務供應商清單</h2>

      <div class="vendors-grid">
        <button
          v-for="supplier in pageItems"
          :key="supplier.companyShortName"
          class="vendor-card"
          type="button"
          :aria-label="getSupplierCardLabel(supplier)"
          :title="getSupplierCardLabel(supplier)"
          @click="openSupplierModal(supplier)"
        >
          <span class="vendor-logo-wrap">
            <img
              v-if="supplier.logo"
              :src="supplier.logo"
              :alt="`${supplier.companyShortName} 公司標誌`"
            />
            <span v-else class="vendor-logo-placeholder">LOGO</span>
          </span>
          <span class="vendor-name">{{ supplier.companyShortName }}</span>
        </button>
      </div>

      <nav class="vendors-pagination" aria-label="供應商頁面切換">
        <button
          v-for="index in pageCount"
          :key="index"
          class="vendors-page-dot"
          :class="{ active: currentPage === index - 1 }"
          type="button"
          :aria-label="`切換到第 ${index} 頁`"
          :title="`切換到第 ${index} 頁`"
          :aria-current="currentPage === index - 1 ? 'page' : undefined"
          :aria-pressed="(currentPage === index - 1).toString()"
          @click="changePage(index - 1)"
        >
          <span class="sr-only">第 {{ index }} 頁</span>
        </button>
      </nav>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selectedSupplier" class="supplier-modal-backdrop" @click.self="closeSupplierModal">
      <article
        class="supplier-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="supplier-modal-title"
        aria-describedby="supplier-modal-intro"
      >
        <button class="supplier-modal-close" type="button" aria-label="關閉供應商詳細資訊" title="關閉供應商詳細資訊" @click="closeSupplierModal">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <div class="supplier-modal-layout">
          <aside class="supplier-modal-side">
            <div class="supplier-modal-logo">
              <img
                v-if="selectedSupplier.logo"
                :src="selectedSupplier.logo"
                :alt="`${selectedSupplier.companyShortName} 公司標誌`"
              />
              <span v-else class="vendor-logo-placeholder">LOGO</span>
            </div>

            <a
              v-if="selectedSupplier.websiteUrl"
              :href="selectedSupplier.websiteUrl"
              class="supplier-website-btn"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="getSupplierWebsiteLabel(selectedSupplier)"
              :title="getSupplierWebsiteLabel(selectedSupplier)"
            >
              官網
            </a>
          </aside>

          <section class="supplier-modal-main">
            <h2 id="supplier-modal-title" class="supplier-modal-title">{{ selectedSupplier.companyName || selectedSupplier.companyShortName }}</h2>
            <p id="supplier-modal-intro" class="supplier-modal-intro">{{ selectedSupplier.companyIntro || '暫無公司簡介。' }}</p>

            <div class="supplier-modal-tags">
              <template v-for="solution in selectedSupplier.solutionLinks" :key="solution.label">
                <RouterLink
                  v-if="solution.to"
                  :to="solution.to"
                  class="supplier-solution-tag supplier-solution-tag--link"
                  :aria-label="`查看 ${solution.label} 方案分類`"
                  :title="`查看 ${solution.label} 方案分類`"
                  @click="closeSupplierModal"
                >
                  {{ solution.label }}
                </RouterLink>
                <span v-else class="supplier-solution-tag">
                  {{ solution.label }}
                </span>
              </template>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Teleport>
</template>

<style scoped>
.vendors-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px 20px;
  margin-top: 10px;
}

.vendor-card {
  border: 0;
  background: transparent;
  display: grid;
  gap: 10px;
  justify-items: center;
  padding: 0;
}

.vendor-logo-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  border: 0;
  border-radius: 26px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  box-shadow: 0 12px 22px rgba(27, 39, 119, 0.08);
}

.vendor-logo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.vendor-logo-placeholder {
  color: #93a0cb;
  font-weight: 700;
}

.vendor-name {
  color: #203a9f;
  font-size: clamp(1.02rem, 0.93rem + 0.24vw, 1.24rem);
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
}

.vendors-pagination {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.vendors-page-dot {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid #3b56b2;
  background: #ffffff;
  padding: 0;
}

.vendors-page-dot.active {
  background: #3b56b2;
}

.supplier-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(11, 18, 48, 0.65);
  z-index: 1700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.supplier-modal {
  width: min(980px, 92vw);
  max-height: min(760px, 90vh);
  overflow: auto;
  background: #ffffff;
  border-radius: 14px;
  padding: 26px 26px 28px;
  position: relative;
}

.supplier-modal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 0;
  color: #3248aa;
  font-size: 2rem;
  background: transparent;
  padding: 0;
}

.supplier-modal-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 24px;
}

.supplier-modal-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.supplier-modal-logo {
  width: 208px;
  height: 208px;
  border-radius: 999px;
  border: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: none;
}

.supplier-modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.supplier-website-btn {
  min-width: 162px;
  min-height: 64px;
  border-radius: 20px;
  background: #324ab0;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.supplier-modal-main {
  min-width: 0;
  min-height: auto;
  display: block;
}

.supplier-modal-title {
  margin: 0 0 14px;
  color: #000000;
  font-size: clamp(2rem, 1.68rem + 1.1vw, 4.2rem);
  line-height: 1.15;
  font-weight: 800;
}

.supplier-modal-intro {
  margin: 0;
  color: #101522;
  font-size: clamp(1.1rem, 1rem + 0.54vw, 2.05rem);
  line-height: 1.68;
  white-space: pre-line;
  overflow: visible;
  padding-right: 0;
}

.supplier-modal-tags {
  margin-top: 18px;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  align-content: flex-start;
}

.supplier-solution-tag {
  background: #334cb0;
  color: #ffffff;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: clamp(1rem, 0.96rem + 0.24vw, 1.28rem);
  font-weight: 700;
  line-height: 1.25;
}

.supplier-solution-tag--link {
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.supplier-solution-tag--link:hover,
.supplier-solution-tag--link:focus-visible {
  background: #243a98;
  box-shadow: 0 10px 20px rgba(36, 58, 152, 0.22);
  transform: translateY(-1px);
}

@media (max-width: 1200px) {
  .vendors-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .vendors-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .supplier-modal-layout {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .supplier-modal-side {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .supplier-modal-logo {
    width: 148px;
    height: 148px;
    border-width: 4px;
    padding: 14px;
  }

  .supplier-website-btn {
    min-height: 52px;
    font-size: 1.5rem;
    border-radius: 14px;
  }

  .supplier-modal {
    max-height: min(880px, 92vh);
    overflow: auto;
  }

  .supplier-modal-main {
    display: block;
  }

  .supplier-modal-intro {
    overflow: visible;
    padding-right: 0;
  }

  .supplier-modal-tags {
    margin-top: 18px;
    padding-top: 0;
  }
}

@media (max-width: 720px) {
  .vendors-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .vendor-logo-wrap {
    border-radius: 18px;
    border-width: 3px;
    padding: 10px;
  }

  .vendor-name {
    font-size: 0.98rem;
  }

  .vendors-page-dot {
    width: 18px;
    height: 18px;
  }

  .supplier-modal {
    padding: 20px 16px 18px;
  }

  .supplier-modal-close {
    top: 6px;
    right: 8px;
    width: 34px;
    height: 34px;
    font-size: 1.7rem;
  }

  .supplier-modal-side {
    flex-direction: column;
    align-items: center;
  }

  .supplier-modal-logo {
    width: 132px;
    height: 132px;
  }

  .supplier-website-btn {
    min-width: 138px;
    min-height: 46px;
    font-size: 1.28rem;
  }

  .supplier-modal-intro {
    font-size: 1.05rem;
  }

  .supplier-solution-tag {
    font-size: 0.94rem;
    padding: 8px 12px;
  }
}
</style>
