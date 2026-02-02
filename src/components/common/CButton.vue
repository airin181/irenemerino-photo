<template lang="pug">
button.btn(type='submit', :class='customClass')
  PulseLoader(v-if="isLoading")
  span(v-else) {{ text }}
</template>
<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const props = defineProps({
    text: { type: String, required: true },
    customClass: { type: String, required: true },
    isLoading: { type: Boolean, required: true },
});
</script>
