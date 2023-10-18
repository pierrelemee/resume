import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

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

// State
app.use(createPinia())

// Router
app.use(router)

// i18n
import { messages } from '@/translations/index.js'

const i18n = createI18n({
  locale: null,
  fallbackLocale: null,
  messages
})

app.use(i18n)

app.mount(document.body)
