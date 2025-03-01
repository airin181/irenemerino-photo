<template lang="pug">
.home.view
    .parallax.parallax-1(:class='parallaxClass')
    section.intro
        h2.title {{ t("home.img1-title")}}
        p.p(v-html="txt1")
        p.p(v-html="txt2")
        p.p(v-html="txt3")
        p.p(v-html="txt4")
        p.p(v-html="txt5")
        p.p(v-html="txt6")
        p.p(v-html="txt7")
    .parallax.parallax-2(:class='parallaxClass')
    section.instagram
        h3.title {{t("home.title-ig")}}
        InstagramFeed
        //- p.p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    .parallax.parallax-3(:class='parallaxClass')
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted } from 'vue'
import { isMobile } from '@/utils/display'
import InstagramFeed from '@/components/common/InstagramFeed.vue'
import DOMPurify from 'dompurify'

const { t } = useI18n()
const isMobileDevice = isMobile()

const parallaxClass = computed(() => {
  return isMobileDevice ? 'mobile' : 'desktop'
})

const txt1 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p1'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt2 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p2'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt3 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p3'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt4 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p4'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt5 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p5'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt6 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p6'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
const txt7 = computed(() => {
  return DOMPurify.sanitize(t('home.img1-p7'), { ALLOWED_TAGS: ['strong', 'b', 'i', 'em'] })
})
</script>
