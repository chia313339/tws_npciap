import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const redirectToNotFound = () => {
  if (router.currentRoute.value.path !== '/404') {
    router.replace('/404')
  }
}

const redirectToMaintenance = () => {
  if (router.currentRoute.value.path !== '/maintenance') {
    router.replace('/maintenance')
  }
}

router.onError(() => {
  redirectToNotFound()
})

app.config.errorHandler = () => {
  redirectToNotFound()
}

const autoMaintenance = String(import.meta.env.VITE_AUTO_MAINTENANCE || '').toLowerCase() === 'true'
const healthcheckUrl = (import.meta.env.VITE_HEALTHCHECK_URL || '').trim()
const healthcheckIntervalMs = Number(import.meta.env.VITE_HEALTHCHECK_INTERVAL_MS || 15000)

if (autoMaintenance && healthcheckUrl) {
  let failedCount = 0
  const maxFailedCount = 2

  const checkHealth = async () => {
    try {
      const response = await fetch(healthcheckUrl, {
        method: 'GET',
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error('healthcheck not ok')
      }

      failedCount = 0
    } catch (error) {
      failedCount += 1
      if (failedCount >= maxFailedCount) {
        redirectToMaintenance()
      }
    }
  }

  checkHealth()
  window.setInterval(checkHealth, healthcheckIntervalMs)
}

app.use(router).mount('#app')
