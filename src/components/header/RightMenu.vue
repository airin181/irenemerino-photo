<template lang="pug">
    //- p(v-if='burger.isOpen') right MENU
    a(href="https://www.instagram.com/irenemerino_photo/", target="_blank") 
      i.mdi.mdi-instagram
    </template>
<script setup lang="ts">
import { useBurgerStore } from '@/stores/burger'

const burger = useBurgerStore()
</script>
