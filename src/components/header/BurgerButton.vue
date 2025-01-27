<template lang="pug">
.burger-button
    button.burger-btn(@click="burger.toggleMenu")
        span.burger-icon(:class="{ 'open': burger.isOpen }")
        span.burger-icon(:class="{ 'open': burger.isOpen }")
        span.burger-icon(:class="{ 'open': burger.isOpen }")
    </template>
<script setup lang="ts">
import { useBurgerStore } from '@/stores/burger'

const burger = useBurgerStore()
</script>
