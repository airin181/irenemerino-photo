<template lang="pug">
.menu
    //- mobile
    .burger-wrapper.show-mobile
        BurgerButton
    //- desktop
    DesktopMenu.hide-mobile
</template>
<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from 'vue'
import BurgerButton from './BurgerButton.vue'
import DesktopMenu from './DesktopMenu.vue'
import { useMenuStore } from '@/stores/menu'
//
const menu = useMenuStore()

const windowWidth = ref<number>(window.innerWidth)

function updateWindowWidth() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > 768) menu.isOpen = false
}
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})
onBeforeUnmount(() => {
  // Limpiar el evento al desmontar el componente
  window.removeEventListener('resize', updateWindowWidth)
})
</script>
