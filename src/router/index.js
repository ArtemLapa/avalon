import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage/AboutPage')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contacts" */ '@/views/ContactsPage/ContactsPage')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "contacts" */ '@/views/ServicesPages/ServicesPage')
  },
  {
    path: '/services/web-development',
    name: 'web-development',
    component: () => import(/* webpackChunkName: "web-development" */ '@/views/ServicesPages/WebDevelopmentPage')
  },
  {
    path: '/services/design',
    name: 'design',
    component: () => import(/* webpackChunkName: "design" */ '@/views/ServicesPages/DesignPage')
  },
  {
    path: '/services/custom-software-development',
    name: 'custom-software-development',
    component: () => import(/* webpackChunkName: "custom-software-development" */ '@/views/ServicesPages/SoftwareDevelopmentPage')
  },
  {
    path: '/services/mobile-development',
    name: 'mobile-development',
    component: () => import(/* webpackChunkName: "mobile-development" */ '@/views/ServicesPages/MobileDevelopmentPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to,from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}

      if (to.hash) {
        position.selector = to.hash

        if (document.querySelector(to.hash)) return position

        return false
      }

      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
