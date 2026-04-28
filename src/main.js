import { createApp } from 'vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const enhanceWebchatAccessibility = () => {
  const chatIcon = document.getElementById('chat-icon')
  const chatPopup = document.getElementById('chat-popup')

  if (chatIcon) {
    const label = '開啟新北經發 AI 小幫手'
    chatIcon.setAttribute('aria-label', label)
    chatIcon.setAttribute('title', label)

    if (!['A', 'BUTTON'].includes(chatIcon.tagName)) {
      chatIcon.setAttribute('role', 'button')
      chatIcon.setAttribute('tabindex', '0')
    }

    if (!chatIcon.dataset.a11yKeydown) {
      chatIcon.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        chatIcon.click()
      })
      chatIcon.dataset.a11yKeydown = 'true'
    }
  }

  if (chatPopup) {
    chatPopup.setAttribute('role', 'dialog')
    chatPopup.setAttribute('aria-label', '新北經發 AI 小幫手對話視窗')
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', enhanceWebchatAccessibility)

  if ('MutationObserver' in window) {
    const observer = new window.MutationObserver(enhanceWebchatAccessibility)
    observer.observe(document.body, { childList: true, subtree: true })
  }
}

const redirectToHome = () => {
  if (router.currentRoute.value.path !== '/') {
    router.replace('/')
  }
}

router.onError(() => {
  redirectToHome()
})

app.config.errorHandler = () => {
  redirectToHome()
}

app.use(router).mount('#app')
