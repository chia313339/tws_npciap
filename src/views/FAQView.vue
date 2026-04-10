<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: '哪些企業可以申請本計畫？',
    answer: `需同時符合以下條件：
• 依法完成公司或商業登記
• 公司、分公司或工廠登記於新北市轄內
• 非陸資企業或外國營利事業在臺分公司
• 非政府機關及其附屬單位
• 最近3年內無重大違法或欠稅情形`,
  },
  {
    question: '本計畫補助金額是多少？需要自籌款嗎？',
    answer: `• 每家企業最高補助 新臺幣4萬元
• 採實報實銷
• 企業需自籌至少 50%以上經費
• 須先全額支付AI服務費用後，始得申請補助款`,
  },
  {
    question: '補助是先撥款還是後核銷？',
    answer:
      '採「先購置、後核銷」方式。企業須先完成與AI服務供應商簽約並支付費用，於規定期限內檢附發票、合約等文件辦理請款。',
  },
  {
    question: '如果公司已申請其他政府AI數位轉型補助，還可以申請本計畫嗎？',
    answer:
      '若所購買之AI應用服務方案與其他政府補助計畫屬「同一或相同性質項目」，則不得重複補助。\n不同補助項目且未重疊者，須由審查單位認定。',
  },
  {
    question: '申請截止時間是什麼時候？',
    answer: `• 依公告日期申請
• 並依徵件情況適時召開審查會議`,
  },
  {
    question: '審查重點是什麼？如何提高通過率？',
    answer: `審查配分如下：
• 需求描述（60%）：痛點明確性、方案與需求契合度、內部資源匹配度
• 預期效益（40%）：是否具體量化、是否可驗證

建議：
• 清楚描述現況問題
• 說明選擇該AI方案的原因
• 提出具體KPI（如降低成本%、提升產能%、增加營收等）`,
  },
  {
    question: '一定要從指定AI服務供應商中選擇方案嗎？',
    answer: '是。本計畫僅限選擇經公開遴選通過並公告之AI服務供應商方案。',
  },
  {
    question: '入選後一定要配合哪些事項？',
    answer: `入選企業需：
• 與AI服務供應商完成簽約
• 配合顧問訪視與輔導
• 配合計畫宣傳（如公關稿、活動參與、案例分享等）`,
  },
  {
    question: '申請需要繳交哪些文件？',
    answer: `1. 受輔導企業申請表（Word檔＋用印PDF檔）
2. 個資同意書（需簽署）
3. 其他審查所需資料
4. 切結書

請於期限內 Email 寄送至：ntpcai@twcloud.ai`,
  },
  {
    question: '是否只能購買一項方案？',
    answer: '否。企業可依需求選擇多項AI應用服務方案。',
  },
]

const openIndexes = ref([])

const toggleFaq = (index) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((item) => item !== index)
    return
  }

  openIndexes.value = [...openIndexes.value, index]
}

const isOpen = (index) => openIndexes.value.includes(index)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>FAQ</h1>
          <span class="title-line"></span>
        </header>

        <div class="faq-list">
          <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item">
            <button
              class="faq-trigger"
              type="button"
              :aria-expanded="isOpen(index).toString()"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="faq-index">{{ index + 1 }}</span>
              <span class="faq-question">{{ faq.question }}</span>
              <span class="faq-chevron" :class="{ open: isOpen(index) }" aria-hidden="true">⌄</span>
            </button>

            <div v-show="isOpen(index)" :id="`faq-answer-${index}`" class="faq-answer">
              <p class="faq-answer-text">{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-answer-text {
  white-space: pre-line;
}
</style>
