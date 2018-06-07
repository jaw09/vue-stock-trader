import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RAND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      const rate = Math.abs(Math.random() - Math.random()) + 0.7
      stock.price = Math.round(stock.price * rate);
    });
  }
};

const actions = {
  buyStock: ({
    commit
  }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({
    commit
  }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({
    commit
  }) => {
    commit('RAND_STOCKS');
  }
};

const getters = {
  stocks(state) {
    return state.stocks
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
