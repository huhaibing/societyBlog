import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login.vue'
import layout from '@/views/layout/layout.vue'

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
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
