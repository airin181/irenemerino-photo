<template lang="pug">
  .b-button-go-top(@click='scrollToTop', v-if="showButton")
    i.mdi.mdi-arrow-up-thin
  </template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const showButton = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollToTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
}

function handleScroll() {
  if (window.scrollY > 250) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}
</script>
