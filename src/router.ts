import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./components/table/c-table.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test/test.vue')
    }
  ]
})
