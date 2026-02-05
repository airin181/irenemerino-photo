<template lang="pug">
NavHeader
RouterView
MainFooter
GoToTopButton
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from './components/header/NavHeader.vue'
import MainFooter from './components/MainFooter.vue'
import GoToTopButton from './components/common/GoToTopButton.vue'
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(() => {
  axios('/api/test')
    .then((response) => {
      console.log('API response:', response.data)
    })
    .catch((error) => {
      console.error('Error fetching API:', error)
    })
})
</script>
