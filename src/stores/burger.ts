import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('burger', () => {
  const isOpen = ref(false)

  function toggleMenu() {
    isOpen.value = !isOpen.value // Emitir el evento con el estado actual
  }

  return { isOpen, toggleMenu }
})
