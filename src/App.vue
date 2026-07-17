<template>
  <div class="app-shell">
    <!-- tabindex="-1":供程式化聚焦用(如關閉開場遮罩後),
         聚焦於此=把 Tab 起點重設到文件開頭,下一次 Tab 即為「跳到主要內容」(WCAG 2.4.3) -->
    <nav class="skip-links" aria-label="無障礙快速連結" tabindex="-1">
      <a href="#main-content" accesskey="C" @click="focusMainContent">跳到主要內容</a>
      <RouterLink to="/sitemap">網站導覽</RouterLink>
      <RouterLink to="/search" accesskey="S">站內搜尋</RouterLink>
    </nav>
    <!-- WCAG 2.4.3 焦點順序:Tab 需依視覺「由上至下、由左至右」移動。
         導覽列為 position:fixed,手機版貼齊頂部(DOM 放 main 之前)、
         桌機版貼齊底部(DOM 放 main 之後),DOM 順序即焦點順序,視覺不受影響。 -->
    <NavBar v-if="isMobileNav" />
    <LeftTabs />
    <main id="main-content" class="main-content" aria-label="主要內容" tabindex="-1">
      <Breadcrumb />
      <RouterView />
    </main>
    <NavBar v-if="!isMobileNav" />
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LeftTabs from './components/LeftTabs.vue'
import Breadcrumb from './components/Breadcrumb.vue'

// 與 style.css 導覽列切換頂/底的斷點(max-width: 900px)保持一致
const mobileNavQuery = window.matchMedia('(max-width: 900px)')
const isMobileNav = ref(mobileNavQuery.matches)
// resize 後備:部分環境(如視窗模擬)不觸發 MediaQueryList change 事件
const syncMobileNav = () => {
  isMobileNav.value = mobileNavQuery.matches
}

// 啟用「跳到主要內容」時明確把焦點移入 main,確保各瀏覽器行為一致(WCAG 2.4.1/2.4.3)
const focusMainContent = () => {
  document.getElementById('main-content')?.focus()
}

onMounted(() => {
  mobileNavQuery.addEventListener('change', syncMobileNav)
  window.addEventListener('resize', syncMobileNav)
})

onBeforeUnmount(() => {
  mobileNavQuery.removeEventListener('change', syncMobileNav)
  window.removeEventListener('resize', syncMobileNav)
})
</script>
