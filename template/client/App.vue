<template>
  <div>
    <h1>\{{ msg }}</h1>
    <button class="button" v-on:click="helloCall()">Call API</button>
    <p>API says: \{{ api }}</p>
    <router-link :to="{ name: 'home-page' }">Home</router-link>
    <router-link :to="{ name: 'about-page' }">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store,
  data: function() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Welcome!',
      api: '',
      error: {}
    }
  },
  methods: {
    helloCall: function() {
      this.$http.get('/api/call').then((response) => {
        this.api = response.data.message
      }, (response) => {
        this.error = response.data
      })
    }
  }
}
</script>

<style lang="sass">
body {
  font-family: Open Sans, sans-serif;
}
</style>
