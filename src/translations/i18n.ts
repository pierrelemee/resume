import { createI18n } from 'vue-i18n'

// i18n
import { messages } from './index.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  // Expose $t etc. in templates from the global Composer instance
  globalInjection: true,
  messages
});

export {i18n};
