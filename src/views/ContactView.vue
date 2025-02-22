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
    section
      p.p {{ $t("contact.other-contact") }}
      h3.title.email irenemerinophoto@gmail.com
    section
  </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from '@/components/views/contact/ContactForm.vue'

const { t } = useI18n()

const image1path = computed(() => 'src/assets/images/photos/img-parallax-1.jpg')
</script>
