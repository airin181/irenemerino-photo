<template lang="pug">
.header(ref='header')
    .left
        LeftMenu
    .center
        RouterLink(:to="{ name: 'home'}") 
          .logo Irene Merino Photography
    .right
        RightMenu
BurgerMenu(:style="{ top: `${headerHeight}px` }")
</template>
<script setup lang="ts">
import LeftMenu from './LeftMenu.vue'
import RightMenu from './RightMenu.vue'
import BurgerMenu from './BurgerMenu.vue'
import { onMounted, ref } from 'vue'

const headerHeight = ref(0) // Variable para almacenar la altura del header
const header = ref<HTMLDivElement | null>(null) // Referencia al header

// Obtener la altura del header cuando el componente esté montado
onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.getBoundingClientRect().height
  }
})
</script>
