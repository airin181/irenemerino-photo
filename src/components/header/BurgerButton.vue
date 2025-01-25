<template lang="pug">
.burger-button
    button.burger-btn(@click="toggleMenu")
        span.burger-icon(:class="{ 'open': isOpen }")
        span.burger-icon(:class="{ 'open': isOpen }")
        span.burger-icon(:class="{ 'open': isOpen }")
    </template>
<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['menu-toggle'])

// Estado reactivo para controlar si el menú está abierto o cerrado
const isOpen = ref(false)

// Función para alternar el estado del menú
function toggleMenu() {
  isOpen.value = !isOpen.value
  console.log(isOpen.value, 'isOpen')

  emit('menu-toggle', isOpen.value) // Emitir el evento con el estado actual
}
</script>
