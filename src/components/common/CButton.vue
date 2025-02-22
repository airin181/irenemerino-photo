<template lang="pug">
button.btn(type='submit', :class='customClass') {{ text }}
</template>
<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  customClass: { type: String, required: true },
})
</script>
