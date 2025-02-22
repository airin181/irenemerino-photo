<template lang="pug">
RouterLink.c-link(:to="path", :class="customClass") {{ text }}
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  customClass: { type: String, required: true },
  namePath: { type: String, required: true },
})

const path = computed(() => {
  return { name: props.namePath }
})
</script>
