<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import heroOne from '../assets/hero-1.svg'
import heroTwo from '../assets/hero-2.svg'
import heroThree from '../assets/hero-3.svg'

const slides = [
  { id: 1, title: 'Demo 01', src: heroOne },
  { id: 2, title: 'Demo 02', src: heroTwo },
  { id: 3, title: 'Demo 03', src: heroThree },
]

const activeIndex = ref(0)
let timerId

const goTo = (index) => {
  activeIndex.value = index
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

const startAutoPlay = () => {
  timerId = window.setInterval(nextSlide, 4500)
}

const stopAutoPlay = () => {
  if (timerId) {
    window.clearInterval(timerId)
    timerId = undefined
  }
}

onMounted(startAutoPlay)
onBeforeUnmount(stopAutoPlay)
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <h1>新北產業AI化輔導計劃</h1>
        <p class="subtitle">New Taipei City Industrial AI Mentoring Program</p>
        <p class="pending">等待開發中</p>
        <p class="lead">
          以企業需求為核心，串聯顧問與方案資源，協助產業加速 AI 導入與轉型。
        </p>
        <div class="hero-actions">
          <RouterLink to="/apply" class="btn primary">申請須知</RouterLink>
          <RouterLink to="/solutions" class="btn ghost">解決方案</RouterLink>
        </div>
      </div>
      <div class="hero-carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="carousel-viewport">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div v-for="slide in slides" :key="slide.id" class="carousel-slide">
              <img :src="slide.src" :alt="slide.title" />
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-arrow" type="button" aria-label="上一張" @click="prevSlide">
            &#8592;
          </button>
          <div class="carousel-dots">
            <button
              v-for="(slide, index) in slides"
              :key="slide.id"
              class="carousel-dot"
              :class="{ active: index === activeIndex }"
              type="button"
              :aria-label="`切換至第 ${index + 1} 張`"
              @click="goTo(index)"
            ></button>
          </div>
          <button class="carousel-arrow" type="button" aria-label="下一張" @click="nextSlide">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
