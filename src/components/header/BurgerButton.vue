<template lang="pug">
.burger-button
    button.burger-btn(@click="menu.toggleMenu")
        span.burger-icon(:class="{ 'open': menu.isOpen }")
        span.burger-icon(:class="{ 'open': menu.isOpen }")
        span.burger-icon(:class="{ 'open': menu.isOpen }")
    </template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>
