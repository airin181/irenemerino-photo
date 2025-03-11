<template lang="pug">
.header(ref='header')
    NavMenu
    .center
        RouterLink(:to="{ name: 'home'}")
          .logo-wrapper
            .logo
    RightSide
BurgerMenu(:style="{ top: `${headerHeight}px` }")
</template>
<script setup lang="ts">
import NavMenu from './NavMenu.vue';
import RightSide from './RightSide.vue';
import BurgerMenu from './BurgerMenu.vue';
import { onMounted, ref } from 'vue';

const headerHeight = ref(0);
const header = ref<HTMLDivElement | null>(null);

// Get header height when mounted
onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.getBoundingClientRect().height;
  }
});
</script>
