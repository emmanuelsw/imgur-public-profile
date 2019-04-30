import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/:username/albums',
      name: 'albums',
      component: () => import('./views/Albums.vue')
    }
  ]
})
