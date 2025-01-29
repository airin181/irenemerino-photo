<template lang="pug">
.burger-menu
    Transition(name="slide-left")
        nav.nav-menu(v-if='menu.isOpen')
            ul.menu-list.mobile
                li(v-for='menuOption in menu.menuOptions')
                    RouterLink(:to="{ name: menuOption.pathName }", @click='menu.toggleMenu') {{ menuOption.text }}
</template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>
