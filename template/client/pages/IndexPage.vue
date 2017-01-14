<template lang="html">
  <div class="">
    Home
    <h1>Counter</h1>
    <div class="number-counter">
      \{{counter}}
    </div>
    <button class="counter-button" v-on:click="incrementCounter">+</button>
    <button class="counter-button" v-on:click="decrementCounter">-</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.mainCounter
    }
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch('incrementMain')
    },
    decrementCounter() {
      this.$store.dispatch('decrementMain')
    }
  }
}
</script>

<style lang="css">
</style>
