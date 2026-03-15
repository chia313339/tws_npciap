<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const navRoot = ref(null)
const route = useRoute()

const sideLinks = [
  { label: '關於計畫', to: '/about' },
  { label: '計畫時程', to: '/schedule' },
  { label: 'FAQ', to: '/faq' },
]

const mainLinks = [
  { label: '方案分類與供應商', to: '/solutions' },
  { label: '聯絡我們', to: '/contact-us' },
  { label: '新北市政府', href: 'https://www.ntpc.gov.tw/ch/index.jsp' },
  { label: '經濟發展局', href: 'https://www.economic.ntpc.gov.tw/' },
  { label: '台智雲TWAI', href: 'https://www.twcloud.ai/' },
  { label: '搜尋', to: '/search' },
]

const mobileLinks = computed(() => [...sideLinks, ...mainLinks])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleOutsidePointer = (event) => {
  if (!isOpen.value || !navRoot.value) {
    return
  }

  if (event.target instanceof Node && !navRoot.value.contains(event.target)) {
    isOpen.value = false
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
    isOpen.value = false
  }
)
</script>

<template>
  <header ref="navRoot" class="site-nav">
    <div class="container nav-inner">
      <RouterLink class="brand hover-scale" to="/">
        <span class="brand-title">
          <span class="brand-line brand-line--small">新北產業</span>
          <span class="brand-line">AI化輔導計劃</span>
        </span>
      </RouterLink>

      <nav class="nav-links nav-links--desktop">
        <template v-for="(link, index) in mainLinks" :key="link.to || link.href">
          <span v-if="index > 0" class="nav-separator">|</span>
          <a
            v-if="link.href"
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
          <a
            v-if="link.href"
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
