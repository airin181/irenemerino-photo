<template lang="pug">
.home.view
    .parallax.parallax-1(ref='parallaxSection')
    section
        h2.title The standard Lorem Ipsum passage
        p.p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    section
        h3.title De Finibus Bonorum et Malorum
        p.p "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    .parallax.parallax-2(ref='parallaxSection')
    section
        h3.title Featured posts
        p.p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    .parallax.parallax-3(ref='parallaxSection')
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { isMobile } from '@/utils/display'
const { t } = useI18n()
const isMobileDevice = isMobile()

const parallaxSection = ref<HTMLDivElement | null>(null)

onMounted(() => {
  console.log(isMobileDevice)

  if (window.innerWidth > 768 && isMobileDevice) {
    window.onscroll = (event: Event) => {
      if (parallaxSection.value) {
        const scrollY = window.scrollY
        parallaxSection.value.style.backgroundPosition = `center ${scrollY * 0.3}px`
      }
    }
  } else {
    window.ontouchmove = (event: TouchEvent) => {
      if (parallaxSection.value && event.touches.length > 0) {
        const touchY = event.touches[0].clientY
        parallaxSection.value.style.backgroundPosition = `center ${touchY * 0.3}px`
      }
    }
  }
})

onBeforeUnmount(() => {
  // Limpiamos los eventos cuando el componente se destruye
  window.onscroll = null
  window.ontouchmove = null
})
</script>
