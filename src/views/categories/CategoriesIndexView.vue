<script setup>
import { categoryNavItems } from '../../data/catalogData'
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>方案分類</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <nav class="category-nav-grid" aria-labelledby="category-nav-heading">
        <h2 id="category-nav-heading" class="sr-only">方案分類清單</h2>
        <RouterLink
          v-for="item in categoryNavItems"
          :key="item.slug"
          class="category-nav-item"
          :to="`/categories/${item.slug}`"
          :title="item.label"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.category-nav-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.category-nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 86px;
  text-align: center;
  font-size: clamp(1rem, 0.94rem + 0.22vw, 1.2rem);
  font-weight: 700;
  color: #1d2f8f;
  border: 1px solid rgba(30, 50, 150, 0.22);
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(28, 30, 127, 0.1);
  padding: 10px;
}

@media (max-width: 720px) {
  .category-nav-grid {
    grid-template-columns: 1fr;
  }
}
</style>
