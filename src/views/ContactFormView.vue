<script setup>
import { reactive, ref } from 'vue'

const defaultGoogleFormAction = 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse'
const googleFormAction = (import.meta.env.VITE_GOOGLE_FORM_ACTION || defaultGoogleFormAction).trim()

const form = reactive({
  companyName: '',
  taxId: '',
  email: '',
  phone: '',
  feedback: '',
})

const errors = reactive({
  companyName: '',
  taxId: '',
  email: '',
  phone: '',
  feedback: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const submitError = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const taxIdPattern = /^\d{8}$/
const phonePattern = /^[0-9+\-()#\s]{8,20}$/

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

const validateForm = () => {
  clearErrors()

  if (!form.companyName.trim()) {
    errors.companyName = '請輸入企業名稱'
  }

  if (!taxIdPattern.test(form.taxId.trim())) {
    errors.taxId = '統一編號需為 8 碼數字'
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = '請輸入合法的聯絡信箱'
  }

  if (!phonePattern.test(form.phone.trim())) {
    errors.phone = '請輸入合法的聯絡電話'
  }

  if (!form.feedback.trim()) {
    errors.feedback = '請輸入意見回饋'
  }

  return !Object.values(errors).some(Boolean)
}

const resetForm = () => {
  form.companyName = ''
  form.taxId = ''
  form.email = ''
  form.phone = ''
  form.feedback = ''
}

const handleSubmit = async () => {
  isSuccess.value = false
  submitError.value = ''

  if (!validateForm()) {
    return
  }

  if (googleFormAction.includes('REPLACE_WITH_YOUR_FORM_ID')) {
    submitError.value = '尚未設定 Google 表單網址，請在 .env 新增 VITE_GOOGLE_FORM_ACTION。'
    return
  }

  isSubmitting.value = true

  try {
    const payload = new URLSearchParams({
      'entry.2115518797': form.companyName.trim(),
      'entry.499889024': form.taxId.trim(),
      'entry.1885658150': form.email.trim(),
      'entry.1033752376': form.phone.trim(),
      'entry.5417155': form.feedback.trim(),
    })

    await fetch(googleFormAction, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: payload.toString(),
    })

    resetForm()
    isSuccess.value = true
  } catch (error) {
    submitError.value = '送出失敗，請稍後再試。'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <h1>聯繫表單</h1>
        <p>填寫資料後，我們將盡快與您聯繫。</p>
      </div>

      <div class="contact-wrapper">
        <div class="contact-card">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <div class="field-group">
              <label class="field-label" for="companyName">企業名稱</label>
              <input
                id="companyName"
                v-model="form.companyName"
                class="field-input"
                type="text"
                autocomplete="organization"
                placeholder="請輸入企業名稱"
              />
              <p v-if="errors.companyName" class="field-error">{{ errors.companyName }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="taxId">統一編號</label>
              <input
                id="taxId"
                v-model="form.taxId"
                class="field-input"
                type="text"
                inputmode="numeric"
                maxlength="8"
                placeholder="請輸入 8 碼統一編號"
              />
              <p v-if="errors.taxId" class="field-error">{{ errors.taxId }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="email">聯絡信箱</label>
              <input
                id="email"
                v-model="form.email"
                class="field-input"
                type="text"
                autocomplete="email"
                placeholder="name@example.com"
              />
              <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="phone">聯絡電話</label>
              <input
                id="phone"
                v-model="form.phone"
                class="field-input"
                type="text"
                inputmode="tel"
                autocomplete="tel"
                placeholder="請輸入聯絡電話"
              />
              <p v-if="errors.phone" class="field-error">{{ errors.phone }}</p>
            </div>

            <div class="field-group field-group--full">
              <label class="field-label" for="feedback">意見回饋</label>
              <textarea
                id="feedback"
                v-model="form.feedback"
                class="field-textarea"
                rows="5"
                placeholder="請輸入您的意見回饋"
              ></textarea>
              <p v-if="errors.feedback" class="field-error">{{ errors.feedback }}</p>
            </div>

            <input type="hidden" name="entry.2115518797" :value="form.companyName" />
            <input type="hidden" name="entry.499889024" :value="form.taxId" />
            <input type="hidden" name="entry.1885658150" :value="form.email" />
            <input type="hidden" name="entry.1033752376" :value="form.phone" />
            <input type="hidden" name="entry.5417155" :value="form.feedback" />

            <div class="form-footer field-group--full">
              <button class="btn primary submit-btn" type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? '送出中...' : '送出表單' }}
              </button>
              <p v-if="isSuccess" class="status-message success">感謝您的回覆！</p>
              <p v-if="submitError" class="status-message error">{{ submitError }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  max-width: 920px;
}

.contact-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  box-shadow: var(--shadow);
  padding: 24px;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-group--full {
  grid-column: 1 / -1;
}

.field-label {
  font-weight: 600;
  color: var(--primary-dark);
}

.field-input,
.field-textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #ffffff;
  font: inherit;
  color: var(--text);
  padding: 12px 14px;
}

.field-textarea {
  resize: vertical;
  min-height: 132px;
}

.field-input:focus,
.field-textarea:focus {
  outline: 2px solid rgba(28, 30, 127, 0.22);
  border-color: rgba(28, 30, 127, 0.35);
}

.field-error {
  margin: 0;
  color: #ba1a1a;
  font-size: 0.9rem;
}

.form-footer {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  margin: 0;
  font-weight: 600;
}

.status-message.success {
  color: #0b7a3b;
}

.status-message.error {
  color: #ba1a1a;
}

@media (max-width: 720px) {
  .contact-card {
    padding: 18px;
  }

  .contact-form {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
