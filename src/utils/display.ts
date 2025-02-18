export function checkDisplay() {
  const isMobile = window.matchMedia('(pointer: coarse)').matches

  if (isMobile) {
    // Estás en un dispositivo móvil
    window.addEventListener('touchmove', handleTouchMove)
  } else {
    // Estás en un dispositivo de escritorio
    window.addEventListener('scroll', handleScroll)
  }
}
