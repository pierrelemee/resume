import { createRouter, createWebHistory } from 'vue-router'

import ResumeView from '@/views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => {
        const browserLocale =
            navigator.language ?? navigator.languages?.at(0) ?? 'en'

        if (browserLocale === 'fr') {
          return { path: '/fr' }
        }

        return { path: '/en' }
      }
    },
    {
      path: '/fr',
      name: 'resume-french',
      component: ResumeView,
      props: {
        locale: 'fr'
      }
    },
    {
      path: '/en',
      name: 'resume-english',
      component: ResumeView,
      props: {
        locale: 'en'
      }
    }
  ]
})

export default router
