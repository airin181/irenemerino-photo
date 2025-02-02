<template lang="pug">
.langs
    i.mdi.mdi-chevron-down(@click='handleLangDropdown') 
        p {{ lang.currentLang }}
    ul(v-if='langsOpen')
        li(v-if='lang.currentLang != "es"')
            button(@click="setLang('es')") Español
        li(v-if='lang.currentLang != "en"', )
            button(@click="setLang('en')") English
    </template>
<script setup lang="ts">
import { ref } from 'vue'
import { useLangStore } from '@/stores/lang'

const lang = useLangStore()
const langsOpen = ref<boolean>(false)

function handleLangDropdown() {
  langsOpen.value = !langsOpen.value
}
function setLang(newLang: string) {
  lang.changeLanguage(newLang)
  langsOpen.value = false
}
</script>
