<template lang="pug">
.home.view
    .parallax.parallax-1(:class='parallaxClass')
    section.intro
        h2.title {{ t("home.img1-title")}}
        p.p(v-html='t("home.img1-p1")')
        p.p(v-html='t("home.img1-p2")')
        p.p(v-html='t("home.img1-p3")')
        p.p(v-html='t("home.img1-p4")')
        p.p(v-html='t("home.img1-p5")')
        p.p(v-html='t("home.img1-p6")')
        p.p(v-html='t("home.img1-p7")')
    .parallax.parallax-2(:class='parallaxClass')
    section.instagram
        h3.title {{t("home.title-ig")}}
        InstagramFeed
        //- p.p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    .parallax.parallax-3(:class='parallaxClass')
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { isMobile } from '@/utils/display'
const { t } = useI18n()
const isMobileDevice = isMobile()
import InstagramFeed from '@/components/common/InstagramFeed.vue'

const parallaxClass = computed(() => {
  return isMobileDevice ? 'mobile' : 'desktop'
})
</script>
