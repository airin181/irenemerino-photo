import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory('/irenemerino-photo/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/ShopView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
  ],
})

// Unknown Routes
const unknown = {
  path: '/:pathMatch(.*)*',
  component: NotFound,
}
// Add Additional Routes
router.addRoute(unknown)

export default router
