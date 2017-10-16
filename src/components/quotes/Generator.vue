<template>
  <div class="wrapper">
    <ui-textbox
      enforce-maxlength
      floating-label
      label="Your new quote"
      help="Maximum 256 characters"
      :maxlength="256"
      v-model="textbox" 
      class="new-quote-input" />
    <ui-fab color="primary" icon="+" @click="generate"></ui-fab>
    <ui-modal
      dismiss-on="close-button esc"
      ref="empty-quote"
      title="Error"
      class="error-modal">
      Empty modal is too smart
    </ui-modal>
  </div>
</template>

<script>
export default {
  props: ['addQuote'],
  data() {
    return {
      textbox: ''
    }
  },
  methods: {
    generate() {
      if (!this.textbox) {
        this.$refs['empty-quote'].open();
        return; // TODO: handle it!
      }
      this.addQuote(this.textbox);
      this.textbox = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1000px;
    margin-bottom: 2em;

    .new-quote-input {
      width: 60%;
    } 
  }
</style>
