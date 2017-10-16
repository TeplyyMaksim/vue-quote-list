<template>
  <div class="quote" @click="onDelete">{{quote}}</div>
</template>

<script>
export default {
  props: ['quote', 'onDelete']
}
</script>

<style scoped lang="scss">
  @import "src/styles/variables";
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script');

  .quote {
    font-family: 'Dancing Script', cursive;
    border-radius: 5px;
    color: $darker-font-color;
    border: 2.5px solid $darker-font-color;
    background: $quote-background;
    font-size: 2em;
    white-space: nowrap;
    padding: 1em;
    margin: 0.5em;
    cursor: pointer;

    &:hover{
      background: $quote-remove-background;
    }
  }
</style>
