<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const crumbs = computed(() => route.meta?.breadcrumb || [])
</script>

<template>
  <nav v-if="crumbs.length" class="breadcrumb" aria-label="您目前的位置">
    <div class="container">
      <ol class="breadcrumb-list">
        <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item">
          <RouterLink
            v-if="crumb.to && index < crumbs.length - 1"
            :to="crumb.to"
            class="breadcrumb-link"
          >{{ crumb.label }}</RouterLink>
          <span v-else class="breadcrumb-current" aria-current="page">{{ crumb.label }}</span>
          <span v-if="index < crumbs.length - 1" class="breadcrumb-sep" aria-hidden="true">›</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-top: 10px;
}

.breadcrumb-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  font-size: 0.98rem;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-link {
  color: #3550b8;
  font-weight: 600;
}

.breadcrumb-link:hover,
.breadcrumb-link:focus-visible {
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--muted);
  font-weight: 600;
}

.breadcrumb-sep {
  color: #9aa3c7;
}
</style>
