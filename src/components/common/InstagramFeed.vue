<template lang="pug">
.instagram-wrapper
  h1(v-if="isLoading") LOADING...
  h1(v-else-if="hasError") Ooops, something went wrong.
  .instagram-gallery(v-else)
    .instagram-gallery-item(v-for="image in instagramData.data" :key="image.id")
      a(:href="image.permalink" :key="image.id" target="_blank" rel="noreferrer")
        img.instagram-gallery-image(
          v-if="image.media_type === 'IMAGE' || image.media_type === 'CAROUSEL_ALBUM'"
          :src="image.media_url"
          :alt="image.caption"
          :key="image.id"

        )
        video.instagram-gallery-image(v-else :key="image.id" )
          source(:src="image.media_url" type="video/mp4")
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const apiUrl = ref<string>(`${import.meta.env.VITE_APP_API_URL}/get-instagram-feed`)

const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const instagramData = ref(null)

// Function to fetch Instagram feed
const getInstagramFeed = async () => {
  try {
    const response = await axios.get(apiUrl.value) // Solicita datos al backend
    instagramData.value = response.data // Asigna los datos recibidos al estado
  } catch (err) {
    console.error('Error al obtener el feed:', err)
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

// Fetch Instagram feed when the component is mounted
onMounted(() => {
  getInstagramFeed()
})
</script>
