<script setup>
import schedulePlaceholder from '../assets/schedule-placeholder.png'
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
                <li>受理具 AI 導入需求之新北企業申請</li>
                <li>依申請順序分批審核</li>
                <li>補助經費用罄將提前截止</li>
              </ul>
            </section>

            <section class="schedule-phase">
              <h2>實體媒合會與需求對接</h2>
              <p>舉辦企業 × AI 供應商實體媒合活動，協助精準配對。</p>
            </section>

            <section class="schedule-phase">
              <h2>專業顧問輔導與 AI 方案導入</h2>
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
            <img :src="schedulePlaceholder" alt="計畫時程表暫時示意圖（1024x768）" width="1024" height="768" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
