<template>
  <div class="app-shell">
    <nav class="skip-links" aria-label="無障礙快速連結">
      <a href="#main-content" accesskey="C">跳到主要內容</a>
      <RouterLink to="/sitemap">網站導覽</RouterLink>
      <RouterLink to="/search" accesskey="S">站內搜尋</RouterLink>
    </nav>
    <NavBar />
    <LeftTabs />
    <main id="main-content" class="main-content" aria-label="主要內容" tabindex="-1">
      <Breadcrumb />
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LeftTabs from './components/LeftTabs.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>
