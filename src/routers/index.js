import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/v1/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/active',
      component: () => import('@/views/v1/Active.vue'),
      name: 'active'
    },
    {
      path: '/calendar',
      component: () => import('@/views/v1/Calendar.vue'),
      name: 'calendar'
    },
    {
      path: '/chat',
      component: () => import('@/views/v1/Chat.vue'),
      name: 'chat'
    },
    {
      path: '/file',
      component: () => import('@/views/v1/File.vue'),
      name: 'file'
    },
    {
      path: '/team',
      component: () => import('@/views/v1/Team.vue'),
      name: 'team'
    },
    {
      path: '/hammer',
      component: () => import('@/views/v1/Hammer.vue'),
      name: 'hammer'
    }
  ]
})

export default router
