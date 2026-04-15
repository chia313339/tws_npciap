<script setup>
import { ref } from 'vue'
import { faqs } from '../data/faqData'

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
          <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item" :class="{ open: isOpen(index) }">
            <button
              class="faq-trigger"
              type="button"
              :aria-expanded="isOpen(index).toString()"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="faq-index">{{ index + 1 }}</span>
              <span class="faq-main">
                <span class="faq-question">{{ faq.question }}</span>
                <span class="faq-divider" aria-hidden="true"></span>
              </span>
              <i class="fa-solid fa-chevron-down faq-chevron" :class="{ open: isOpen(index) }" aria-hidden="true"></i>
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
.faq-list {
  --faq-accent: #173ca8;
  --faq-index-size: clamp(56px, 4.8vw, 78px);
  --faq-gap: clamp(14px, 1.8vw, 18px);
  display: grid;
  gap: clamp(28px, 3vw, 38px);
}

.faq-item {
  border: 0;
  background: transparent;
}

.faq-trigger {
  width: 100%;
  display: grid;
  grid-template-columns: var(--faq-index-size) minmax(0, 1fr) 32px;
  align-items: center;
  column-gap: var(--faq-gap);
  padding: 0;
  text-align: left;
  background: transparent;
  color: var(--faq-accent);
}

.faq-trigger:hover,
.faq-trigger:focus-visible {
  transform: none;
}

.faq-main {
  min-width: 0;
  display: grid;
  align-items: center;
}

.faq-index {
  width: var(--faq-index-size);
  height: var(--faq-index-size);
  min-width: var(--faq-index-size);
  min-height: var(--faq-index-size);
  max-width: var(--faq-index-size);
  max-height: var(--faq-index-size);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 var(--faq-index-size);
  overflow: hidden;
  border-radius: 999px;
  background: var(--faq-accent);
  color: #ffffff;
  font-size: clamp(1.8rem, 2.2vw, 3rem);
  font-weight: 800;
  line-height: 1;
}

.faq-question {
  display: block;
  color: var(--faq-accent);
  font-size: clamp(1.3rem, 1rem + 1vw, 2.3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.faq-divider {
  display: block;
  width: 100%;
  height: 3px;
  margin-top: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--faq-accent) 0%, var(--faq-accent) 88%, rgba(23, 60, 168, 0.18) 100%);
}

.faq-chevron {
  justify-self: end;
  color: var(--faq-accent);
  font-size: 1.5rem;
  line-height: 1;
  transition: transform 0.22s ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
}

.faq-answer {
  margin-left: calc(var(--faq-index-size) + var(--faq-gap));
  margin-top: 14px;
  padding: 2px 0 0;
  background: transparent;
  color: #24314f;
}

.faq-answer-text {
  margin: 0;
  white-space: pre-line;
  font-size: clamp(1rem, 0.95rem + 0.18vw, 1.12rem);
  line-height: 1.9;
  font-weight: 500;
}

@media (max-width: 768px) {
  .faq-list {
    --faq-index-size: 50px;
    --faq-gap: 12px;
    gap: 24px;
  }

  .faq-trigger {
    grid-template-columns: var(--faq-index-size) minmax(0, 1fr) 24px;
  }

  .faq-question {
    font-size: clamp(1.05rem, 0.96rem + 0.65vw, 1.3rem);
  }

  .faq-divider {
    margin-top: 10px;
    height: 2px;
  }

  .faq-chevron {
    font-size: 1.15rem;
  }

  .faq-answer {
    margin-left: 0;
    padding-left: 0;
  }
}
</style>
