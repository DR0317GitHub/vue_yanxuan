import Vue from 'vue'
import Router from 'vue-router'


import List from '../pages/List/List.vue'
import General from '../pages/General/General.vue'
import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping_Cart from '../pages/Shopping_Cart/Shopping_Cart.vue'
import Login from '../pages/Login/Login.vue'
import LoginPhone from '../pages/LoginPhone/LoginPhone.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list',
      component: List,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/general',
      component: General,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        ShowFooter:false
      }
    },
    {
      path: '/shopping_cart',
      component: Shopping_Cart,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/home',
      component: Home,
      meta:{
        ShowFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        ShowFooter:false
      }
    },
    {
      path: '/loginphone',
      component: LoginPhone,
      meta:{
        ShowFooter:false
      }
    },

    {
      path: '/',
      redirect:'/home'
    },
  ]
})

