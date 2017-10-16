<template>
  <div id="app">
    <quotes />
  </div>
</template>

<script>
import Quotes from './components/quotes/Quotes.vue';

export default {
  name: 'app',
  components: {
    Quotes
  }
}
</script>

<style lang="scss">
@import "src/styles/global";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $default-font-color;
  font-size: 16px;
}
</style>
