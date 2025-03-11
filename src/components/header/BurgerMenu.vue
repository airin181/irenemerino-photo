<template lang="pug">
.burger-menu
  Transition(name="slide-left")
    nav.nav-menu(v-if='menu.isOpen')
        ul.menu-list.mobile
          NavOptions(:isMobile=true)
</template>
<script setup lang="ts">
import LangSetter from './LangSetter.vue';
import { useMenuStore } from '@/stores/menu';
import NavOptions from '@/components/header/NavOptions.vue';

const menu = useMenuStore();
</script>
