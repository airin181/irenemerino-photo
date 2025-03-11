<template lang="pug">
li(v-for='option in options', :key='option.pathName', @click='handleSubOptions(option.pathName)')
  RouterLink(v-if='!option.subOptions', :to="{ name: option.pathName }") {{ option.text }}
  p(v-else) {{ option.text }}
  ul.submenu-list(v-if='option.subOptions && projectsOpen')
    li(v-for='opt in option.subOptions')
      RouterLink(:to="{ name: opt.pathName }") {{ opt.text }}
li.show-mobile
    LangSetter
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import LangSetter from './LangSetter.vue';
import { useMenuStore } from '@/stores/menu';

const menu = useMenuStore();

const props = defineProps({
  isMobile: { type: Boolean, default: false },
});

const projectsOpen = ref<boolean>(false);

const options = computed(() => {
  return menu.menuOptions;
});

function handleSubOptions(option: string) {
  if (props.isMobile) menu.toggleMenu();
  if (option !== 'projects') projectsOpen.value = false;
  else projectsOpen.value = !projectsOpen.value;
}
</script>
