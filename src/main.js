import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'

const app = createApp(App)

// State
app.use(createPinia())

// Router
app.use(router)

if (import.meta.env.MODE === 'production') {
  app.use(VueGtag, {
    config: { id: 'G-BZ8NP8PVMB' }
  }, router);
}

// i18n
import { messages } from '@/translations/index.js'

const i18n = createI18n({
  locale: null,
  fallbackLocale: null,
  messages
})

app.use(i18n)

app.mount(document.body)
