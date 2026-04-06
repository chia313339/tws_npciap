import { createApp } from 'vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

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
