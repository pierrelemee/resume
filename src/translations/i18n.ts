import { createI18n } from 'vue-i18n'

// i18n
import { messages } from './index.ts'

const i18n = createI18n({
  locale: null,
  fallbackLocale: null,
    //legacy: false,
    // Refer a global scope Composer instance of i18n
	globalInjection: true,
  messages
});

export {i18n};