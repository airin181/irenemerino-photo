<template lang="pug">
.contact.view
  .contact-header
    .img-container
      img(:src='image1path')
  .contact-body
    section
      h3.title {{ $t("contact.title") }}
      p.p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:
    section
      ContactForm
    section
      h3.title.email irenemerinophoto@gmail.com
    //- section.map-side
    //-   h3.title  {{ $t("contact.map") }}
    //-   p.p mapa
    section
  </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from '@/components/views/contact/ContactForm.vue'

const { t } = useI18n()

const image1path = computed(() => 'src/assets/images/photos/img-parallax-1.jpg')
</script>
