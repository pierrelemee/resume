import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAgeStore = defineStore('counter', () => {
  const age = ref(Math.abs((new Date(Date.now() - (new Date('1986-04-02')).getTime()).getUTCFullYear()) - 1970))

  return { age }
})
