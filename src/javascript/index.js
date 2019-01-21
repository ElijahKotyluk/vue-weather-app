// Import libraries and root vue component.
import "@babel/polyfill";
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
