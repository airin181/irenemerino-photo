<template lang="pug">
.header(ref='header')
    Menu
    .center
        RouterLink(:to="{ name: 'home'}") 
          .logo
            span Irene 
            i.mdi.mdi-camera-iris
            span Merino
    RightSide
BurgerMenu(:style="{ top: `${headerHeight}px` }")
</template>
<script setup lang="ts">
import Menu from './Menu.vue'
import RightSide from './RightSide.vue'
import BurgerMenu from './BurgerMenu.vue'
import { onMounted, ref } from 'vue'

const headerHeight = ref(0) // Altura del header
const header = ref<HTMLDivElement | null>(null) // Referencia al header

// Obtener la altura del header cuando el componente esté montado
onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.getBoundingClientRect().height
  }
})
</script>
