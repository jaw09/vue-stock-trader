import axios from 'axios';

export const loadData = function ({
  commit
}) {
  axios.get('https://vue-stock-trader-4ebbd.firebaseio.com/data.json').then((res) => {
    if (res.status === 200) {
      const stocks = res.data.stocks;
      const portfolioStocks = res.data.portfolioStocks;
      const funds = res.data.fund;
      const portfolio = {
        portfolioStocks,
        funds
      };
      commit('SET_STOCKS', stocks);
      commit('SET_PORTFOLIO', portfolio);
    }
  }).catch(err => {
    console.log(err);
  })
}
