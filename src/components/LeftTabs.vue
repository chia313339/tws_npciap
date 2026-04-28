<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabLinks = [
  { label: '關於計畫', to: '/about' },
  { label: '計畫時程', to: '/schedule' },
  { label: 'FAQ', to: '/faq' },
]

const anyTabActive = computed(() => tabLinks.some((link) => route.path === link.to))

const tabClasses = (link, index) => ({
  'left-tab--stack-1': index === 0,
  'left-tab--stack-2': index === 1,
  'left-tab--stack-3': index === 2,
  'left-tab--palette-1': index === 0,
  'left-tab--palette-2': index === 1,
  'left-tab--palette-3': index === 2,
  'left-tab--muted': anyTabActive.value && route.path !== link.to,
})
</script>

<template>
  <nav class="left-tabs" aria-label="頁面導覽">
    <RouterLink
      v-for="(link, index) in tabLinks"
      :key="link.to"
      class="left-tab hover-scale"
      :class="tabClasses(link, index)"
      :to="link.to"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>
