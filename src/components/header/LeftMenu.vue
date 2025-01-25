<template lang="pug">
.burger-wrapper
    BurgerButton(@menu-toggle="handleMenuToggle")
    </template>
<script setup lang="ts">
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'

const emit = defineEmits(['menu-toggle'])

function handleMenuToggle(isOpen: boolean) {
  emit('menu-toggle', isOpen)
}
</script>
