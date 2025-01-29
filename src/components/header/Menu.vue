<template lang="pug">
.menu
    //- mobile
    .burger-wrapper.show-mobile
        BurgerButton
    //- desktop
    .desktop-menu.hide-mobile
        ul.menu-list.desktop
            li(v-for='option in options')
                RouterLink(:to="{ name: option.pathName }") {{ option.text }}
</template>
<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from 'vue'
import BurgerButton from './BurgerButton.vue'
import { useMenuStore } from '@/stores/menu'
//
const menu = useMenuStore()

const windowWidth = ref<number>(window.innerWidth)

const options = computed(() => {
  return menu.menuOptions
})

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
