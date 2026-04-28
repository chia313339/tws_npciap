<template>
  <div class="app-shell">
    <NavBar />
    <LeftTabs />
    <main id="main-content" class="main-content" aria-label="主要內容">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LeftTabs from './components/LeftTabs.vue'
</script>
