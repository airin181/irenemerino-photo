<template lang="pug">
.burger-menu(:class='{"pepe": menuOpen}')
    nav(v-if="menuOpen", class="menu")
        ul
            li
                a(href="#") Home
            li
                a(href="#") Shop
            li
                a(href="#") Galleries
            li
                a(href="#") Contact
</template>
<script setup lang="ts">
const props = defineProps({
  menuOpen: { type: Boolean },
})
</script>
