// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import es from '@/i18n/es.json'
import en from '@/i18n/en.json'

// Tipo para las claves de traducción
export type I18nMessages = typeof es

const i18n = createI18n({
  legacy: false, // Usamos la API de Composition de Vue 3
  locale: 'es', // Idioma por defecto
  messages: {
    es,
    en,
  },
})

export default i18n
