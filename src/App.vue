<template>
  <div class="app-shell">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
