<script setup>
import badgeImage from '../assets/accessibility-aaa.png'

// 數位發展部無障礙標章:連至本站專屬的檢測紀錄頁(標章明細)
const badgeDetailUrl = 'https://accessibility.moda.gov.tw/Applications/Detail?category=20260611105731'
</script>

<template>
  <!-- 僅顯示標章圖,不加可見的「另開新視窗」字樣;
       另開新視窗的提示改由 aria-label / title 提供(WCAG 3.2.5) -->
  <a
    class="a11y-badge"
    :href="badgeDetailUrl"
    title="無障礙網站（另開新視窗）"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="通過AAA無障礙網頁檢測（另開新視窗）"
  >
    <!-- width/height 88x31 為標章核發辦法所訂規格,不可更動 -->
    <img :src="badgeImage" width="88" height="31" alt="通過AAA無障礙網頁檢測" />
  </a>
</template>
