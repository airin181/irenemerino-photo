<template lang="pug">
.home HOME VIEW
    h1 {{ $t('welcome') }}
    p {{ $t('hello') }}
    button(@click="changeLanguage('es')") Español
    button(@click="changeLanguage('en')") English
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function changeLanguage(language: string) {
  locale.value = language
}
</script>
