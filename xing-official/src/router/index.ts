import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/page/PageHome.vue'
import PageAbout from '@/page/PageAbout.vue'
import PageService from '@/page/PageService.vue'
import PageCareer from '@/page/PageCareer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
      meta: {
        xl: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout,
    },
    {
      path: '/service',
      name: 'service',
      component: PageService,
    },
    {
      path: '/career',
      name: 'career',
      component: PageCareer,
    },
  ],
})
// router.beforeEach(async (to, from) => {
//   await new Promise((res) => {
//     return setTimeout(() => {
//       return res(true)
//     }, 600)
//   })
//   return true
// })

export default router
