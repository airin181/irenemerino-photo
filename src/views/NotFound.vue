<template lang="pug">
.not-found-view
    .wrapper
        .img-wrapper
            .overlay
            img(src='@images/photos/not-found.jpg')
        .content
            h1 {{t("not-found.error-type")}}
            h2 {{t("not-found.error-name")}}
            p {{t("not-found.error-exp")}}
            RouterLink(:to='{name:home}') {{t("not-found.button-text")}}

</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Reactive variables
const x = ref(0)
const y = ref(0)
const lFollowX = ref(0)
const lFollowY = ref(0)
const friction = 1 / 30

// Mouse move handler
const handleMouseMove = (e: MouseEvent) => {
  const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX))
  const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY))
  lFollowX.value = (20 * lMouseX) / 100
  lFollowY.value = (10 * lMouseY) / 100
}

// Animation loop
const animate = () => {
  x.value += (lFollowX.value - x.value) * friction
  y.value += (lFollowY.value - y.value) * friction

  const translate = `translate(${x.value}px, ${y.value}px) scale(1.1)`
  document.querySelector('img')!.style.transform = translate

  window.requestAnimationFrame(animate)
}

// Set up event listeners and start animation on mount
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('click', handleMouseMove)
  animate()
})

// Clean up event listeners on unmount
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('click', handleMouseMove)
})
</script>
