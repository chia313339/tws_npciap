<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: '哪些企業可以申請本計畫？',
    answer: '凡符合新北市產業發展方向且具 AI 導入需求之企業，皆可依公告資格提出申請。',
  },
  {
    question: '本計畫補助金額是多少？需要自籌款嗎？',
    answer:
      '每家企業最高補助新臺幣 4 萬元，採實報實銷。企業須自籌至少 50% 以上經費，且需先完成支付 AI 服務費用後，再依流程申請補助款。',
  },
  {
    question: '補助是先撥款還是後核銷？',
    answer: '本計畫採後核銷方式，企業完成導入與付款後，檢附相關憑證辦理請款。',
  },
  {
    question: '如何聯繫計畫窗口？',
    answer: '可透過「聯繫表單」填寫需求，或於官方公告期間參與說明會取得協助。',
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
              <p>{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
