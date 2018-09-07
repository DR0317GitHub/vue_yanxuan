// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from "./router"
import './mock/mockServer' // 加载mockServer

import Grey from "./components/Grey/Grey.vue"

Vue.config.productionTip = false

// 注册全局组件标签
Vue.component("Grey",Grey);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
