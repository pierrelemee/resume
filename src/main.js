import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueAnalytics from 'vue-analytics'

import App from './App.vue'
import router from './router'

const app = createApp(App)

if (import.meta.env.GOOGLE_ANALYTICS_ID) {
  app.use(VueAnalytics, {
    id: import.meta.env.GOOGLE_ANALYTICS_ID,
    checkDuplicatedScript: true
  })
}

app.use(createPinia())
app.use(router)

app.mount(document.body)
