<template lang="pug">
.footer
    section.claimer
        h3.title {{ $t("footer.title")}}
        RouterLink.btn(:to="{ name: 'shop' }") {{$t("footer.button")}}
    section.rr-ss
        a(href="https://www.instagram.com/irenemerino_photo/", target="_blank") 
            i.mdi.mdi-instagram
    section.nav-menu
        DesktopMenu
    //- h1 let's collaborate
    //- p I have 10+ years of experience working with brands and I'm always interested in getting creative to bring a client’s vision to life. Get in touch at:
    //- h3 irenemerinophoto@gmail.com
</template>
<script setup lang="ts">
import DesktopMenu from '@/components/header/DesktopMenu.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
