<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import openingVideo from '../assets/opening.mp4'
import openingImage from '../assets/opening.png'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

const banners = [
  { id: 1, title: '首頁輪播 1', src: banner1 },
  { id: 2, title: '首頁輪播 2', src: banner2 },
  { id: 3, title: '首頁輪播 3', src: banner3 },
]

const stage = ref('video')
const activeIndex = ref(0)
const selectedBanner = ref(null)
const touchStartX = ref(0)
const touchDeltaX = ref(0)
const isTouching = ref(false)
const suppressModalClick = ref(false)
let timerId
let suppressTimerId

const isOverlayVisible = computed(() => stage.value !== 'home')
const isVideoStage = computed(() => stage.value === 'video')
const isReadyStage = computed(() => stage.value === 'ready')

const toReadyStage = () => {
  stage.value = 'ready'
}

const onVideoEnded = () => {
  toReadyStage()
}

const onVideoError = () => {
  toReadyStage()
}

const skipOpening = () => {
  toReadyStage()
}

const enterHome = () => {
  stage.value = 'home'
}

const openModal = (banner) => {
  selectedBanner.value = banner
}

const onSlideClick = (banner) => {
  if (suppressModalClick.value) {
    suppressModalClick.value = false
    return
  }

  openModal(banner)
}

const closeModal = () => {
  selectedBanner.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

const goTo = (index) => {
  activeIndex.value = index
  if (!isOverlayVisible.value) {
    restartAutoPlay()
  }
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % banners.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + banners.length) % banners.length
}

const markSuppressModalClick = () => {
  suppressModalClick.value = true

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
  }

  suppressTimerId = window.setTimeout(() => {
    suppressModalClick.value = false
    suppressTimerId = undefined
  }, 250)
}

const onTouchStart = (event) => {
  if (event.touches.length !== 1) {
    return
  }

  isTouching.value = true
  touchStartX.value = event.touches[0].clientX
  touchDeltaX.value = 0
}

const onTouchMove = (event) => {
  if (!isTouching.value || event.touches.length !== 1) {
    return
  }

  touchDeltaX.value = event.touches[0].clientX - touchStartX.value
}

const onTouchEnd = () => {
  if (!isTouching.value) {
    return
  }

  const swipeThreshold = 45
  const delta = touchDeltaX.value

  if (Math.abs(delta) >= swipeThreshold) {
    if (delta < 0) {
      nextSlide()
    } else {
      prevSlide()
    }

    restartAutoPlay()
    markSuppressModalClick()
  }

  isTouching.value = false
  touchDeltaX.value = 0
}

const onTouchCancel = () => {
  isTouching.value = false
  touchDeltaX.value = 0
}

const startAutoPlay = () => {
  if (timerId || isOverlayVisible.value) {
    return
  }

  timerId = window.setInterval(nextSlide, 60000)
}

const stopAutoPlay = () => {
  if (!timerId) {
    return
  }

  window.clearInterval(timerId)
  timerId = undefined
}

const restartAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const setPreHomeState = (enabled) => {
  document.body.style.overflow = enabled ? 'hidden' : ''
  document.body.classList.toggle('pre-home-stage', enabled)
}

watch(
  isOverlayVisible,
  (visible) => {
    setPreHomeState(visible)
    if (visible) {
      stopAutoPlay()
      return
    }

    startAutoPlay()
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  stopAutoPlay()
  setPreHomeState(false)
  document.removeEventListener('keydown', handleKeydown)

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
    suppressTimerId = undefined
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section class="opening-home">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>首頁</h1>
          <span class="title-line"></span>
        </header>

        <section
          class="home-carousel"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
          @focusin="stopAutoPlay"
          @focusout="startAutoPlay"
        >
          <div
            class="home-carousel-viewport"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchCancel"
          >
            <div class="home-carousel-track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
              <figure v-for="banner in banners" :key="banner.id" class="home-carousel-slide">
                <button
                  type="button"
                  class="home-slide-trigger"
                  :aria-label="`放大檢視 ${banner.title}`"
                  @click="onSlideClick(banner)"
                >
                  <img :src="banner.src" :alt="banner.title" />
                </button>
              </figure>
            </div>
          </div>
          <div class="home-carousel-indicators" aria-label="首頁輪播指示器">
            <button
              v-for="(banner, index) in banners"
              :key="banner.id"
              type="button"
              class="home-indicator"
              :class="{ active: index === activeIndex }"
              :aria-label="`切換到第 ${index + 1} 張圖片`"
              @click="goTo(index)"
            ></button>
          </div>
        </section>
      </div>
    </div>

    <div v-if="isOverlayVisible" class="opening-overlay">
      <div class="opening-backdrop">
        <video
          v-if="isVideoStage"
          class="opening-backdrop-media opening-backdrop-video"
          :src="openingVideo"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        ></video>
        <img v-else class="opening-backdrop-media opening-backdrop-image" :src="openingImage" alt="開場背景" />
      </div>

      <div v-if="isVideoStage" class="opening-frost"></div>

      <div class="opening-stage">
        <div v-if="isVideoStage" class="opening-video-shell">
          <video
            class="opening-main-video"
            :src="openingVideo"
            autoplay
            muted
            playsinline
            preload="auto"
            @ended="onVideoEnded"
            @error="onVideoError"
          ></video>
          <button type="button" class="skip-btn" @click="skipOpening">SKIP</button>
        </div>

        <div v-else-if="isReadyStage" class="ready-content">
          <h2 class="ready-title">新北產業AI化輔導計畫</h2>
          <p class="ready-subtitle">New Taipei City Industrial AI Mentoring Program</p>
          <button type="button" class="enter-home-btn pulse-glow" @click="enterHome">開始探索</button>
        </div>
      </div>
    </div>

    <div v-if="selectedBanner" class="banner-modal" @click.self="closeModal">
      <div class="banner-modal-content">
        <button type="button" class="banner-modal-close" aria-label="關閉圖片放大" @click="closeModal">
          ×
        </button>
        <img :src="selectedBanner.src" :alt="selectedBanner.title" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.opening-home {
  height: calc(100dvh - var(--nav-height) - 68px);
  padding: 8px 0 0;
  overflow: hidden;
}

.opening-home .container {
  height: 100%;
}

.opening-home .content-panel {
  height: 100%;
  padding: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.opening-home .title-row {
  margin-bottom: 8px;
}

.opening-home .title-row h1 {
  font-size: clamp(1.8rem, 2.4vw, 2.4rem);
}

.home-carousel {
  display: grid;
  gap: 12px;
  height: 100%;
  max-width: min(1020px, 100%);
  margin: 0 auto;
  align-content: center;
  justify-items: center;
  padding-bottom: 6px;
}

.home-carousel-viewport {
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  box-shadow: 0 20px 34px rgba(17, 26, 82, 0.24);
  width: min(100%, 76dvh);
  aspect-ratio: 4 / 3;
  touch-action: pan-y;
}

.home-carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
}

.home-carousel-slide {
  margin: 0;
  min-width: 100%;
}

.home-slide-trigger {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  transform: none;
}

.home-slide-trigger:hover {
  transform: none;
}

.home-carousel-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: zoom-in;
}

.home-carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.home-indicator {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  background: rgba(33, 54, 150, 0.34);
}

.home-indicator.active {
  width: 34px;
  background: #2038a9;
}

.opening-overlay {
  position: fixed;
  inset: 0;
  z-index: 2100;
  overflow: hidden;
}

.opening-backdrop {
  position: absolute;
  inset: 0;
}

.opening-backdrop-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.opening-backdrop-video {
  transform: scale(1.08);
  filter: blur(28px) saturate(1.08) brightness(0.72);
}

.opening-backdrop-image {
  transform: none;
  filter: none;
}

.opening-frost {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 56%),
    linear-gradient(180deg, rgba(6, 8, 28, 0.24) 0%, rgba(6, 8, 28, 0.44) 100%);
  backdrop-filter: blur(2px);
}

.opening-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opening-video-shell {
  position: relative;
  display: inline-flex;
  line-height: 0;
}

.opening-main-video {
  display: block;
  width: auto;
  height: auto;
  max-width: 100vw;
  max-height: 100dvh;
  object-fit: contain;
  border-radius: clamp(0px, 1vw, 14px);
  box-shadow: 0 20px 52px rgba(5, 9, 38, 0.42);
}

.skip-btn {
  position: absolute;
  top: clamp(10px, 1.8vh, 18px);
  right: clamp(10px, 1.5vw, 18px);
  padding: 20px 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(17, 27, 80, 0.58);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  backdrop-filter: blur(8px);
}

.skip-btn:hover {
  background: rgba(27, 42, 120, 0.75);
}

.ready-content {
  width: min(94vw, 1320px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2vh 2vw;
  transform: translateY(-5%);
}

.ready-title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(2rem, 6.2vw, 7.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-shadow:
    4px 4px 0 rgba(72, 102, 226, 0.75),
    0 10px 24px rgba(4, 11, 55, 0.5);
}

.ready-subtitle {
  margin: clamp(16px, 2vh, 28px) 0 clamp(28px, 3vh, 40px);
  color: rgba(255, 255, 255, 0.96);
  font-size: clamp(1.02rem, 2.2vw, 3rem);
  line-height: 1.3;
  text-shadow: 0 3px 12px rgba(3, 8, 42, 0.55);
}

.enter-home-btn {
  position: relative;
  margin-top: 50px;
  min-width: 160px;
  padding: clamp(12px, 1.3vh, 18px) clamp(26px, 2.8vw, 50px);
  border-radius: 16px;
  background: rgba(92, 116, 214, 0.42);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.74);
  font-size: clamp(1.1rem, 2.1vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12) inset,
    0 12px 28px rgba(7, 15, 58, 0.34);
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0% {
    transform: scale(1);
    opacity: 0.92;
    box-shadow:
      0 0 0 1px rgba(7, 15, 58, 0.34) inset,
      0 12px 28px rgba(7, 15, 58, 0.34);
  }

  50% {
    transform: scale(1.07);
    opacity: 1;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.18) inset,
      0 0 24px rgba(171, 195, 255, 0.6),
      0 16px 34px rgba(7, 15, 58, 0.42);
  }

  100% {
    transform: scale(1);
    opacity: 0.92;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.12) inset,
      0 12px 28px rgba(7, 15, 58, 0.34);
  }
}

.enter-home-btn:hover {
  background: rgba(107, 132, 230, 0.56);
  animation-play-state: paused;
  transform: scale(1.04);
}

.banner-modal {
  position: fixed;
  inset: 0;
  z-index: 2300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(8, 12, 34, 0.82);
  backdrop-filter: blur(8px);
}

.banner-modal-content {
  position: relative;
  width: min(1200px, 94vw);
  max-height: 88dvh;
  display: grid;
  place-items: center;
}

.banner-modal-content img {
  max-width: 100%;
  max-height: 88dvh;
  object-fit: contain;
  border-radius: 10px;
}

.banner-modal-close {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgba(14, 23, 68, 0.86);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-size: 1.6rem;
  line-height: 1;
}

.banner-modal-close:hover {
  background: rgba(27, 42, 120, 0.9);
}

@media (max-width: 900px) {
  .opening-home {
    height: calc(100dvh - var(--nav-height) - 52px);
    padding-top: 4px;
  }

  .home-carousel-viewport {
    width: min(100%, 70dvh);
  }
}

@media (max-width: 720px) {
  .opening-home .title-row {
    margin-bottom: 6px;
  }

  .ready-content {
    transform: translateY(-2%);
    padding: 0 4vw;
  }

  .ready-title {
    font-size: clamp(1.68rem, 10.2vw, 3.2rem);
  }

  .ready-subtitle {
    margin-top: 14px;
    margin-bottom: 24px;
    font-size: clamp(0.92rem, 4.6vw, 1.2rem);
  }

  .enter-home-btn {
    padding: 12px 26px;
    border-radius: 14px;
    font-size: clamp(1.25rem, 7.2vw, 1.75rem);
  }

  .skip-btn {
    padding: 10px 15px;
    font-size: 0.95rem;
  }

  .home-carousel-viewport {
    width: min(100%, 92vw);
  }

  .banner-modal {
    padding: 16px;
  }

  .banner-modal-close {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
  }
}
</style>
