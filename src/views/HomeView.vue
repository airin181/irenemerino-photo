<template lang="pug">
.home HOME VIEW
    h1 {{ $t('welcome') }}
    p {{ $t('hello') }}
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
