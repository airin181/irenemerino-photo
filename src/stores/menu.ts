import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useMenuStore = defineStore('menu', () => {
  const { t } = useI18n()
  const isOpen = ref<boolean>(false)
  const menuOptions = computed(() => {
    return [
      {
        pathName: 'home',
        text: t('nav.home'),
      },
      {
        pathName: 'shop',
        text: t('nav.shop'),
      },
      {
        pathName: 'projects',
        text: t('nav.projects'),
        subOptions: [
          {
            pathName: 'work',
            text: t('nav.projects-work'),
          },
          {
            pathName: 'archive',
            text: t('nav.projects-archive'),
          },
        ],
      },
      {
        pathName: 'contact',
        text: t('nav.contact'),
      },
    ]
  })

  function toggleMenu() {
    isOpen.value = !isOpen.value // Emitir el evento con el estado actual
  }

  return { isOpen, toggleMenu, menuOptions }
})
