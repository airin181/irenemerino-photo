import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    redirect: { name: 'coming-soon' },
    component: () => import('@/views/GalleryView.vue'),
    children: [],
  },
  {
    path: '/shop',
    name: 'shop',
    redirect: { name: 'coming-soon' },
    component: () => import('@/views/ShopView.vue'),
    children: [],
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/ComingSoon.vue'),
  },
]
const router = createRouter({
  history: createWebHistory('/irenemerino-photo/'),
  routes,
})

// Unknown Routes
const unknown = {
  path: '/:pathMatch(.*)*',
  component: NotFound,
}
// Add Additional Routes
router.addRoute(unknown)

export default router
