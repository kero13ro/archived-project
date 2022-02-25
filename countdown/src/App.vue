<template>
  <div id="app">
    <FlipClock/>
  </div>
</template>

<script>
import FlipClock from './components/FlipClock.vue'

export default {
  name: 'App',
  components: {
    FlipClock
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
