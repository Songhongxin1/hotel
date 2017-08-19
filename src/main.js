import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.$http = axios;

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './router.config.js'
const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
