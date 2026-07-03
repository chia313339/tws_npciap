import { createApp } from 'vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const enhanceWebchatAccessibility = () => {
  const chatIcon = document.getElementById('chat-icon')
  const chatPopup = document.getElementById('chat-popup')

  const isPopupOpen = () =>
    !!chatPopup &&
    chatPopup.offsetWidth > 0 &&
    chatPopup.offsetHeight > 0 &&
    getComputedStyle(chatPopup).display !== 'none' &&
    getComputedStyle(chatPopup).visibility !== 'hidden'

  if (chatIcon) {
    // WCAG 4.1.2：名稱、角色、值——按鈕需暴露開啟/關閉狀態
    const open = isPopupOpen()
    const label = open ? '關閉新北經發 AI 小幫手對話視窗' : '開啟新北經發 AI 小幫手對話視窗'
    chatIcon.setAttribute('aria-label', label)
    chatIcon.setAttribute('title', label)
    chatIcon.setAttribute('aria-expanded', String(open))
    chatIcon.setAttribute('aria-haspopup', 'dialog')

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

    // 監看對話視窗開/關，即時更新按鈕的 aria-expanded 與名稱（WCAG 4.1.2 值變更通知）
    if (!chatPopup.dataset.a11yStateObserved && 'MutationObserver' in window) {
      const stateObserver = new window.MutationObserver(() => {
        const icon = document.getElementById('chat-icon')
        if (!icon) return
        const isOpen = isPopupOpen()
        const lbl = isOpen ? '關閉新北經發 AI 小幫手對話視窗' : '開啟新北經發 AI 小幫手對話視窗'
        icon.setAttribute('aria-expanded', String(isOpen))
        icon.setAttribute('aria-label', lbl)
        icon.setAttribute('title', lbl)
      })
      stateObserver.observe(chatPopup, { attributes: true, attributeFilter: ['style', 'class'] })
      chatPopup.dataset.a11yStateObserved = 'true'
    }
  }

  // WCAG 4.1.3：對話訊息區標記 role=log，讓語音軟體依序報讀新訊息（外部元件，盡力比對容器）
  const chatLog =
    document.querySelector('#chat-box') ||
    document.querySelector('#chat-popup .chatgpt-messages') ||
    document.querySelector('#chat-messages') ||
    document.querySelector('#chat-popup [class*="messages"]')

  if (chatLog && chatLog.getAttribute('role') !== 'log') {
    chatLog.setAttribute('role', 'log')
    chatLog.setAttribute('aria-live', 'polite')
    chatLog.setAttribute('aria-label', '對話訊息')
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
