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
    path: '/projects',
    redirect: { name: 'coming-soon' },
    // name: 'projects',
    // component: () => import('@/views/ProjectsView.vue'),
    // children: [
    //   {
    //     path: 'archive',
    //     name: 'archive',
    //     component: () => import('@/views/GalleryView.vue'),
    //   },
    //   {
    //     path: 'work',
    //     name: 'work',
    //     component: () => import('@/views/GalleryView.vue'),
    //   },
    // ],
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
  history: createWebHistory(import.meta.env.BASE_URL),
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
