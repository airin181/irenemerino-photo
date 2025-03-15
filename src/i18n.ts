// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import es from '@/i18n/es.json'
import en from '@/i18n/en.json'
import Cookies from 'js-cookie'

// Tipo para las claves de traducción
export type I18nMessages = typeof es

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLang') || 'es', // Lang by default
  messages: {
    es,
    en,
  },
  warnHtmlInMessage: false,
})

export default i18n
