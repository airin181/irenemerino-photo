<template lang="pug">
.home.view
    h1 HOME VIEW
    p {{ $t('welcome') }}
    p {{ $t('hello') }}
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
