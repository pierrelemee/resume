import { createI18n } from 'vue-i18n'

// i18n
import { messages } from './index.ts'

const i18n = createI18n({
  legacy: false,
  locale: null,
  fallbackLocale: null,
	globalInjection: true,
  messages
});

export {i18n};