import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', () => {
  const { t, locale } = useI18n()

  const currentLang = computed(() => {
    return locale.value
  })

  function changeLanguage(language: string) {
    locale.value = language
  }

  return { changeLanguage, currentLang }
})
