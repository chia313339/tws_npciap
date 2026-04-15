<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { categoryNavItems } from '../data/catalogData'

const isOpen = ref(false)
const isMobileCategoryOpen = ref(false)
const navRoot = ref(null)
const route = useRoute()

const sideLinks = [
  { label: '關於計畫', to: '/about' },
  { label: '計畫時程', to: '/schedule' },
  { label: 'FAQ', to: '/faq' },
]

const categoryLinks = categoryNavItems.map((item) => ({
  label: item.label,
  to: `/categories/${item.slug}`,
}))

const mainLinks = [
  { label: '方案分類', to: '/categories/ai-market-insight', children: categoryLinks },
  { label: 'AI服務供應商', to: '/vendors' },
  { label: '新北經發局', href: 'https://www.economic.ntpc.gov.tw/' },
  { label: '聯絡我們', to: '/contact-us' },
  { label: '即刻申請', to: '/about' },
  { label: '搜尋', to: '/search' },
]

const mobileLinks = computed(() => [...sideLinks, ...mainLinks])

const isCategoryRoute = computed(() => route.path === '/categories' || route.path.startsWith('/categories/'))

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    isMobileCategoryOpen.value = false
  }
}

const toggleMobileCategory = () => {
  isMobileCategoryOpen.value = !isMobileCategoryOpen.value
}

const closeMobileMenu = () => {
  isOpen.value = false
  isMobileCategoryOpen.value = false
}

const handleOutsidePointer = (event) => {
  if (!isOpen.value || !navRoot.value) {
    return
  }

  if (event.target instanceof Node && !navRoot.value.contains(event.target)) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsidePointer)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer)
})

watch(
  () => route.path,
  () => {
    closeMobileMenu()
  }
)
</script>

<template>
  <header ref="navRoot" class="site-nav">
    <div class="container nav-inner">
      <RouterLink class="brand hover-scale" to="/">
        <span class="brand-title">
          <span class="brand-line brand-line--small">新北產業</span>
          <span class="brand-line">AI化輔導計畫</span>
        </span>
      </RouterLink>

      <nav class="nav-links nav-links--desktop">
        <template v-for="(link, index) in mainLinks" :key="link.to || link.href">
          <span v-if="index > 0" class="nav-separator">|</span>

          <div v-if="link.children" class="nav-dropdown">
            <RouterLink
              class="nav-link nav-link--dropdown hover-scale"
              :class="{ 'router-link-active': isCategoryRoute }"
              :to="link.to"
            >
              {{ link.label }}
            </RouterLink>
            <div class="nav-submenu" role="menu" aria-label="方案分類子選單">
              <RouterLink
                v-for="child in link.children"
                :key="child.to"
                class="nav-submenu-link"
                :to="child.to"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>

          <a
            v-else-if="link.href"
            class="nav-link hover-scale"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>

          <RouterLink v-else class="nav-link hover-scale" :to="link.to">
            {{ link.label }}
          </RouterLink>
        </template>
      </nav>

      <button
        class="menu-toggle hover-scale"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="primary-nav"
        :aria-expanded="isOpen.toString()"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav id="primary-nav" class="nav-links nav-links--mobile" :class="{ open: isOpen }">
        <template v-for="link in mobileLinks" :key="link.to || link.href">
          <div v-if="link.children" class="mobile-dropdown">
            <div class="mobile-dropdown-head">
              <RouterLink
                class="nav-link hover-scale"
                :class="{ 'router-link-active': isCategoryRoute }"
                :to="link.to"
              >
                {{ link.label }}
              </RouterLink>
              <button
                class="mobile-submenu-toggle"
                type="button"
                :aria-expanded="isMobileCategoryOpen.toString()"
                @click="toggleMobileCategory"
              >
                <span class="sr-only">展開方案分類子選單</span>
                <i class="fa-solid fa-chevron-down mobile-submenu-caret" :class="{ open: isMobileCategoryOpen }"></i>
              </button>
            </div>
            <div class="mobile-submenu" :class="{ open: isMobileCategoryOpen }">
              <RouterLink
                v-for="child in link.children"
                :key="child.to"
                class="mobile-submenu-link"
                :to="child.to"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>

          <a
            v-else-if="link.href"
            class="nav-link hover-scale"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>

          <RouterLink v-else class="nav-link hover-scale" :to="link.to">
            {{ link.label }}
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
