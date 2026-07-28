<script setup>
import AccessibilityBadge from './AccessibilityBadge.vue'
</script>

<template>
  <!-- 行動版專用:桌機的標章放在導覽列(見 NavBar.vue),此頁尾僅於行動版掛載 -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <AccessibilityBadge />
    </div>
  </footer>
</template>
