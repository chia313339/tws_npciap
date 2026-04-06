<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI創作內容'
const items = getCategoryCards(title)
</script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
