/* eslint-disable*/

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios // Web requests

new Vue({
  el: '#app',
  components: {
    App
  }
})
