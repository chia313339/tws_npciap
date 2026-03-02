<template>
  <div class="app-shell">
    <NavBar />
    <LeftTabs />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LeftTabs from './components/LeftTabs.vue'
</script>
