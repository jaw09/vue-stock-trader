// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios';

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return value.toLocaleString('en', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0
  });
})

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
