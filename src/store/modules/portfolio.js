const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK' (state, {
    stockId,
    quantity,
    stockPrice
  }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity = Number(record.quantity) + Number(quantity);
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= quantity * stockPrice;
  },
  'SELL_STOCKS' (state, {
    stockId,
    quantity,
    stockPrice
  }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (Number(record.quantity) > Number(quantity)) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * stockPrice;
  },
  'SET_PORTFOLIO' (state, payload) {
    state.funds = payload.funds;
    state.stocks = payload.portfolioStocks;
  }
}

const actions = {
  sellStock({
    commit
  }, order) {
    commit('SELL_STOCKS', order);
  }
}

const getters = {
  portfolioStocks(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price,
        name: record.name
      }
    });
  },
  funds(state) {
    return state.funds;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
