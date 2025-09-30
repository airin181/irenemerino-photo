<template lang="pug">
.home.view
    .parallax.parallax-1(:class='parallaxClass')
    section.intro
        h2.title {{ t("home.img1-title")}}
          p.p
            | {{ t('home.img1-p1-1') }}
            strong {{ t('home.img1-p1-2') }}
            | {{ t('home.img1-p1-3') }}
            strong {{ t('home.img1-p1-4') }}
            | {{ t('home.img1-p1-5') }}
            strong {{ t('home.img1-p1-6') }}
            | {{ t('home.img1-p1-7') }}
            strong {{ t('home.img1-p1-8') }}
            | {{ t('home.img1-p1-9') }}
            strong {{ t('home.img1-p1-10') }}
            | {{ t('home.img1-p1-11') }}
          p.p
            | {{ t('home.img1-p2-1') }}
            strong {{ t('home.img1-p2-2') }}
            | {{ t('home.img1-p2-3') }}
          p.p
            strong {{ t('home.img1-p3-2') }}
            | {{ t('home.img1-p3-3') }}
            strong {{ t('home.img1-p3-4') }}
            | {{ t('home.img1-p3-5') }}
            strong {{ t('home.img1-p3-6') }}
            | {{ t('home.img1-p3-7') }}
            strong {{ t('home.img1-p3-8') }}
          p.p
            | {{ t('home.img1-p4-1') }}
            strong {{ t('home.img1-p4-2') }}
            | {{ t('home.img1-p4-3') }}
            strong {{ t('home.img1-p4-4') }}
            | {{ t('home.img1-p4-5') }}
            strong {{ t('home.img1-p4-6') }}
            | {{ t('home.img1-p4-7') }}
            strong {{ t('home.img1-p4-8') }}
            | {{ t('home.img1-p4-9') }}
          p.p
            | {{ t('home.img1-p5-1') }}
            strong {{ t('home.img1-p5-2') }}
            | {{ t('home.img1-p5-3') }}
            strong {{ t('home.img1-p5-4') }}
            | {{ t('home.img1-p5-5') }}
          p.p
            strong {{ t('home.img1-p6-2') }}
            | {{ t('home.img1-p6-3') }}
            strong {{ t('home.img1-p6-4') }}
          p.p
            | {{ t('home.img1-p7-1') }}
            strong {{ t('home.img1-p7-2') }}
            | {{ t('home.img1-p7-3') }}
            strong {{ t('home.img1-p7-4') }}
            | {{ t('home.img1-p7-5') }}
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

const { t } = useI18n()
const isMobileDevice = isMobile()

const parallaxClass = computed(() => {
  return isMobileDevice ? 'mobile' : 'desktop'
})

// Removed DOMPurify and related computed properties
</script>
