<template>
  <div class="wrapper">
    <div class="title">Quotes Added:</div>
    <div class="progress">
      <ui-progress-linear
      color="black"
      type="determinate"

      :progress="progress"/>
      <div class="progress-counter">{{quotesCount}}/{{maxQuotesCount}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotesCount', 'maxQuotesCount'],
  data() {
    return {

    }
  },

  computed: {
    progress() {
      return this.quotesCount * 100 / this.maxQuotesCount;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/variables";

  .wrapper {
    width: 500px;

    .title {
      font-size: 1.5em;
      font-weight: bold;
      margin: 1em;
      color: $default-title-color;
    }
    .progress {
      display: flex;
      align-items: center;
      
      .progress-counter {
        font-size: 1.5em;
        font-weight: bold;
        margin: 1em;
        color: $default-title-color;
      }
    }
  }
</style>
