<template lang="pug">
.instagram-wrapper
  PulseLoader(v-if="isLoading")
  .instagram-gallery.instagram-alternative(v-else-if="hasError")
    .instagram-gallery-item(v-for="image in noInstagramImages")
      img.instagram-gallery-image(:src='image.path')

  .instagram-gallery(v-else)
    .instagram-gallery-item(v-for="image in instagramData.data" :key="image.id")
      a(:href="image.permalink" :key="image.id" target="_blank" rel="noreferrer")
        img.instagram-gallery-image(
          v-if="image.media_type === 'IMAGE' || image.media_type === 'CAROUSEL_ALBUM'"
          :src="image.media_url"
          :alt="image.caption"
          :key="image.id"

        )
        video.instagram-gallery-image(v-else :key="image.id")
          source(:src="image.media_url" type="video/mp4")
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import img1 from '@/assets/images/photos/not-found.jpg';
import img2 from '@/assets/images/photos/img-parallax-2.jpg';
import img3 from '@/assets/images/photos/img-parallax-3.jpg';

const apiUrl = ref<string>(`${import.meta.env.VITE_API_URL}/api/get-instagram-feed`);

const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const instagramData = ref(null);

const noInstagramImages = computed(() => {
    return [
        {
            path: img1,
            id: 'not-found',
        },
        {
            path: img2,
            id: 'img-parallax-2',
        },
        {
            path: img3,
            id: 'img-parallax-3',
        },
    ];
});

// Function to fetch Instagram feed
const getInstagramFeed = async () => {
    try {
        isLoading.value = true;
        const response = await axios.get(apiUrl.value); // Solicita datos al backend
        instagramData.value = response.data; // Asigna los datos recibidos al estado
        console.log(import.meta.env.VITE_API_URL, apiUrl.value);
    } catch (err) {
        console.error('Error al obtener el feed:', err);
        hasError.value = true;
    } finally {
        isLoading.value = false;
    }
};

// Fetch Instagram feed when the component is mounted
onMounted(() => {
    getInstagramFeed();
});
</script>
