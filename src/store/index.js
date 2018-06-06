import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    stocks: stocks
  }
});

export default store
