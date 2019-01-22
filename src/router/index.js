import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login.vue'
import layout from '@/views/layout/layout.vue'
import homepage from '@/views/homepage/homepage.vue'
import signin from '@/views/signin/signin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'BaseAdmin',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'adminHello',
          component: () => import('@/views/index/index.vue')
        },
        {
          path: 'collection',
          name: 'collection',
          component: () => import('@/views/shoucang/index.vue')
        },
        {
          path: 'like',
          name: 'like',
          component: () => import('@/views/like/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      children: [
        {
          path: 'mainpage',
          name: 'mainpage',
          component: () => import('@/views/homepage/mainpage.vue')
        },
        {
          path: 'photoAlbum',
          name: 'photoAlbum',
          component: () => import('@/views/homepage/photoAlbum.vue')
        }
      ]
    },
    {
      path: 'signin',
      name: 'signin',
      component: signin
    }
  ]
})
