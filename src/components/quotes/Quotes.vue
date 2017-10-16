<template>
  <div class="container">
    <status-bar :quotes-count="quotes.length" :max-quotes-count="maxQuotesCount" />
    <generator :add-quote="addQuote"/>
    <div class="quotes-wrapper">
      <quote v-for="(quote, index) in quotes" :key="index" :quote="quote" :onDelete="deleteQuote.bind(this, index)" />
    </div>
    <ui-modal
      dismiss-on="close-button esc"
      ref="too-many-quotes"
      title="Error"
      class="error-modal">
      Too much smart quotes
    </ui-modal>
  </div>
</template>

<script>
import StatusBar from './StatusBar.vue';
import Generator from './Generator.vue';
import Quote from './Quote.vue';

export default {
  components: {
    StatusBar,
    Generator,
    Quote
  },
  data() {
    return {
      maxQuotesCount: 4,
      quotes: [
        'Fucking awesome',
        'Very wonderful'
      ]
    }
  },
  methods: {
    addQuote(quoteText) {
      if (this.quotes.length === this.maxQuotesCount) {
        this.$refs['too-many-quotes'].open();
        return;
      }
      this.quotes.push(quoteText);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
}
</script>

<style>
  .quotes-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
