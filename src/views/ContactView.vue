<template lang="pug">
.contact.view
  .contact-header
    .img-container
      img(:src='imageHeader')
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
        a.p(href="https://www.instagram.com/irenemerino_photo/", target="_blank")
          p.p {{ $t("contact.other-way-2") }}
          i.mdi.mdi-instagram
    section.map
      iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120461.81286225634!2d-3.7522037218404156!3d40.44101591537091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1740425142112!5m2!1sen!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade")
  </template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from '@/components/views/contact/ContactForm.vue'
import imageHeader from '@images/photos/img-parallax-2.jpg'

const { t } = useI18n()

const image1path = computed(() => 'imageHeader')
</script>
