import Vue from 'vue'
import Router from 'vue-router'


import List from '../pages/List/List.vue'
import General from '../pages/General/General.vue'
import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping_Cart from '../pages/Shopping_Cart/Shopping_Cart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list',
      component: List
    },
    {
      path: '/general',
      component: General
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/shopping_cart',
      component: Shopping_Cart
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect:'/home'
    },
  ]
})

