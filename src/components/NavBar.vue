<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const navLinks = [
  { label: '關於計畫', to: '/about' },
  { label: '申請須知', to: '/apply' },
  { label: '解決方案', to: '/solutions' },
  { label: '聯繫表單', to: '/contact-form' },
  { label: 'AI客服', to: '/ai-service' },
  { label: '版權聲明', to: '/copyright' },
  { label: '無障礙標章', to: '/accessibility' },
  { label: '隱私權條款', to: '/privacy' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="site-nav">
    <div class="container nav-inner">
      <RouterLink class="brand hover-scale" to="/">
        <span class="brand-title">
          <span class="brand-line brand-line--small">新北產業</span>
          <span class="brand-line">AI化輔導計劃</span>
        </span>
      </RouterLink>

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

      <nav id="primary-nav" class="nav-links" :class="{ open: isOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          class="nav-link hover-scale"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
