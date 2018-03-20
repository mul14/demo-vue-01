import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ItemList from './views/ItemList.vue'
import Fetch from './views/Fetch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/fetch',
      name: 'Fetch',
      component: Fetch
    }
  ]
})
