<template lang="pug">
.burger-menu
    Transition(name="slide-left")
        nav.menu(v-if='burger.isOpen')
            ul
                li(v-for='menuOption in menuOptions')
                    RouterLink(:to="{ name: menuOption.pathName }", @click='burger.toggleMenu') {{ menuOption.text }}
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useBurgerStore } from '@/stores/burger'

const burger = useBurgerStore()
const { t } = useI18n()

const menuOptions = computed(() => {
  return [
    {
      pathName: 'home',
      text: t('nav.home'),
    },
    {
      pathName: 'shop',
      text: t('nav.shop'),
    },
    {
      pathName: 'gallery',
      text: t('nav.gallery'),
    },
    {
      pathName: 'contact',
      text: t('nav.contact'),
    },
  ]
})
</script>
