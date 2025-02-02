<template lang="pug">
    .desktop-menu
        ul.menu-list.desktop
            li(v-for='option in options')
                RouterLink(:to="{ name: option.pathName }") {{ option.text }}
    </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
//
const menu = useMenuStore()

const options = computed(() => {
  return menu.menuOptions
})
</script>
