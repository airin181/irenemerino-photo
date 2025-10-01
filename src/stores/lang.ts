import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import Cookies from 'js-cookie'

export const useLangStore = defineStore('lang', () => {
  const { locale } = useI18n()

  const currentLang = computed(() => {
    Cookies.set('lang', locale.value)
    return locale.value
  })

  function changeLanguage(language: string) {
    locale.value = language
    localStorage.setItem('currentLang', locale.value)
    Cookies.set('lang', language)
  }

  return { changeLanguage, currentLang }
})
