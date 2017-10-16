import Vue from 'vue'
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import App from './App.vue'

Vue.use(KeenUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
