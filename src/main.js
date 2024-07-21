import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'
import { i18n } from './translations/i18n.ts'

const app = createApp(App)

// State
app.use(createPinia())

// Router
app.use(router)

// Meta
const head = createHead()
app.use(head)

if (import.meta.env.MODE === 'production') {
  app.use(VueGtag, {
    config: { id: 'G-BZ8NP8PVMB' }
  }, router);
}

app.use(i18n)

app.mount(document.body)
