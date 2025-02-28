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
    section
        h3.title De Finibus Bonorum et Malorum
        p.p "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    .parallax.parallax-2(:class='parallaxClass')
    section
        h3.title Featured posts
        p.p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    .parallax.parallax-3(:class='parallaxClass')
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { isMobile } from '@/utils/display'
const { t } = useI18n()
const isMobileDevice = isMobile()

const parallaxClass = computed(() => {
  return isMobileDevice ? 'mobile' : 'desktop'
})
</script>
