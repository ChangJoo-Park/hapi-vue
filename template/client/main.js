/* eslint-disable*/

import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import routes from './routes'

Vue.prototype.$http = axios // Web requests

// Import global styles
import './assets/styles/styles.scss'

// Router
Vue.use(Router, 'localhost:3000')
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  el: '#app',
  components: {
    App
  }
})
