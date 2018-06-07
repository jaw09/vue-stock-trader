import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import {
  loadData
} from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  actions: {
    loadData
  },
  modules: {
    stocks,
    portfolio
  }
});

export default store
