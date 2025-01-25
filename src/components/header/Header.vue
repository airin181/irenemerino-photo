<template lang="pug">
.header(ref='header')
    
    .left
        LeftMenu(@menu-toggle="handleMenuToggle")
    .center
        .logo Irene Merino Photography
    .right
        RightMenu(:menuOpen='menuOpen')
BurgerMenu(:menuOpen='menuOpen', :style="{ top: `${headerHeight}px` }")
</template>
<script setup lang="ts">
import LeftMenu from './LeftMenu.vue'
import RightMenu from './RightMenu.vue'
import BurgerMenu from './BurgerMenu.vue'
import { onMounted, ref } from 'vue'

const menuOpen = ref(false)
const headerHeight = ref(0) // Variable para almacenar la altura del header
const header = ref<HTMLElement | null>(null) // Referencia al header

function handleMenuToggle(isOpen: boolean) {
  menuOpen.value = isOpen
}

// Obtener la altura del header cuando el componente esté montado
onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.getBoundingClientRect().height
  }
})
</script>
