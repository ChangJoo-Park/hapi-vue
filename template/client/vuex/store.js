import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)
console.log('Vuex')
export default new Vuex.Store({
  actions,
  getters,
  modules,
  strict: true
})
