<template lang="pug">
.contact.view
  .contact-header
    .img-container
      img(:src='image1path')
  .contact-body
    section
      h3.title {{ $t("contact.title") }}
      p.p {{ $t("contact.subtitle") }}
    section
      ContactForm
    section.other-ways
      p.p {{ $t("contact.other-way-1") }}
      h3.title.email irenemerinophoto@gmail.com
      div
        a.p(href="https://www.instagram.com/irenemerino_photo/", target="_blank") {{ $t("contact.other-way-2") }}
        i.mdi.mdi-instagram
    section
  </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from '@/components/views/contact/ContactForm.vue'

const { t } = useI18n()

const image1path = computed(() => 'src/assets/images/photos/img-parallax-1.jpg')
</script>
