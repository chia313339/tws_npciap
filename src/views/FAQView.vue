<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: '哪些企業可以申請本計畫？',
    answer: `須同時符合以下條件：
1.依中華民國法律於本市完成登記之公司、商業或工廠。
2.公司、分公司或工廠登記於新北市轄內。
3.非陸資企業或外國營利事業在臺分公司。
4.非政府機關及附屬單位。
5.最近3年內無欠繳應納稅捐，且無違反環境保護、勞工、食品安全衛生或身心障礙者權益保障之相關法律規定且經各目的事業主管機關認定情節重大之情事。`,
  },
  {
    question: '本計畫補助金額是多少？需要自籌款嗎？',
    answer: `· 每家企業最高補助 新臺幣4萬元
· 採實報實銷
· 新北企業須自籌至少50%以上經費
· 須先全額支付AI服務費用後，始得申請補助款`,
  },
  {
    question: '補助是先撥款還是後核銷？',
    answer:
      '採「先購置、後核銷」方式。企業須先完成與AI服務供應商簽約並支付費用，於規定期限前檢附發票、合約等文件辦理請款。',
  },
  {
    question: '如果公司已申請其他政府AI數位轉型補助，還可以申請本計畫嗎？',
    answer:
      '若所購買之AI應用服務方案與其他政府補助計畫屬「同一或相同性質項目」，則不得重複補助。\n不同補助項目且未重疊者，須由審查單位認定。',
  },
  {
    question: '申請截止時間是什麼時候？',
    answer: `· 受理至 115年5月29日止
· 採分批審查機制
· 若補助經費提前用罄，將提前截止(建議儘早送件)`,
  },
  {
    question: '審查重點是什麼？如何提高通過率？',
    answer: `審查項目如下：
· 需求描述：營運瓶頸、申請動機關聯性、資源匹配度等。
· 預期效益：評估導入方案後，對企業未來經營可能產生之優化程度，訂定具體之質、量化績效指標，且成效須具備可驗證性。
建議：清楚描述現況問題、說明為何選擇該AI方案、提出具體KPI（如降低成本%、提升產能%、增加營收等如產能提升率、營收增長、降低成本、不良率降低等）`,
  },
  {
    question: '一定要從指定AI服務供應商中選擇方案嗎？',
    answer: '是。本計畫僅限選擇經公開遴選通過並公告之AI服務供應商方案。',
  },
  {
    question: '入選後一定要配合哪些事項？',
    answer: `入選企業須：
· 與AI服務供應商簽約
· 配合顧問訪視與輔導
· 配合計畫宣傳（如公關稿、活動參與、案例分享等）`,
  },
  {
    question: '申請需要繳交哪些文件？',
    answer: `1.「附件一、受輔導企業申請表」，並提供word檔及用印掃描pdf檔。
2.申請聯絡人簽署之「附件二、蒐集個人資料告知事項暨個人資料提供同意書」。
3.請簽署「附件三、新北產業AI化輔導計畫切結書」。
4.其他審查所需資料
請於期限內Email寄送至指定信箱(ntpcai@twcloud.ai)。`,
  },
  {
    question: '如果審查未通過，可以再申請嗎？',
    answer:
      '可以。但須於受理期間內重新送件，並建議依審查建議補強內容。若補助經費已額滿，則無法再受理。',
  },
  {
    question: '是否只能購買一項方案?',
    answer: '否。可以根據企業需求選擇多種AI應用服務方案。',
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
