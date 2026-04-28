<script setup>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import schedulePlaceholder from '../assets/schedule-placeholder.png'

const openScheduleImage = () => {
  Swal.fire({
    imageUrl: schedulePlaceholder,
    imageAlt: '計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。',
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonAriaLabel: '關閉計畫時程圖',
    customClass: {
      popup: 'schedule-image-swal-popup',
      closeButton: 'solution-swal-close',
    },
    width: 'min(1200px, 96vw)',
    padding: '1rem',
    background: '#ffffff',
  })
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>計畫時程</h1>
          <span class="title-line"></span>
        </header>

        <div class="schedule-layout">
          <article class="schedule-text">
            <section class="schedule-phase">
              <h2>公開徵選 AI 服務供應商</h2>
              <p>完成 AI 應用方案遴選，公告合作供應商名單。</p>
            </section>

            <section class="schedule-phase">
              <h2>受輔導企業申請受理期間</h2>
              <ul>
                <li>申請作業：受理具 AI 導入需求之新北企業依公告日期申請</li>
                <li>審查作業：依徵件情況適時召開審查會議</li>
              </ul>
            </section>

            <section class="schedule-phase">
              <h2>實體媒合會與需求對接</h2>
              <p>舉辦企業 × AI供應商實體媒合活動，協助精準配對。</p>
            </section>

            <section class="schedule-phase">
              <h2>專業顧問輔導與AI方案導入使用協助</h2>
              <ul>
                <li>顧問訪視與需求確認</li>
                <li>協助企業完成方案簽約與導入</li>
              </ul>
            </section>

            <section class="schedule-phase">
              <h2>完成購置並申請補助核銷</h2>
              <ul>
                <li>企業須先完成購置並支付費用</li>
                <li>檢附發票及合約辦理請款</li>
              </ul>
            </section>
          </article>

          <figure class="schedule-visual">
            <button type="button" class="schedule-image-trigger" aria-label="放大檢視計畫時程圖" title="放大檢視計畫時程圖" @click="openScheduleImage">
              <img :src="schedulePlaceholder" alt="計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。" width="1024" height="768" />
            </button>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.schedule-image-trigger {
  display: inline-flex;
  width: auto;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
  transform: none !important;
}

.schedule-image-trigger:hover,
.schedule-image-trigger:focus-visible {
  transform: none !important;
}

.schedule-visual {
  display: flex;
  justify-content: flex-start;
}

.schedule-visual img {
  width: min(1024px, 100%);
  height: auto;
  max-width: 100%;
  aspect-ratio: auto;
  display: block;
}
</style>
