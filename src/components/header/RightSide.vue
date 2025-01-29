<template lang="pug">
    //- p(v-if='menu.isOpen') right MENU
    .right
      a(href="https://www.instagram.com/irenemerino_photo/", target="_blank") 
        i.mdi.mdi-instagram
    </template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>
