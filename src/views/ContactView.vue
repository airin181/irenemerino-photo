<template lang="pug">
.contact.view
  .contact-header
    .img-container
      img(:src='image1path')
  .contact-body
    section.email-side
      h3.title LET'S TALK
      p.p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:
      h3.title.email irenemerinophoto@gmail.com
    section.map-side
      h3.title YOU CAN FIND ME HERE
  </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const image1path = computed(() => 'src/assets/images/photos/img-parallax-1.jpg')
</script>
