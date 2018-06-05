import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
  import ('../components/Home.vue');
const Portfolio = () =>
  import ('../components/portfolio/Portfolio.vue');
const Stocks = () =>
  import ('../components/stocks/Stocks.vue');

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'portfolio',
      path: '/portfolio',
      component: Portfolio
    },
    {
      name: 'stocks',
      path: '/stocks',
      component: Stocks
    }
  ]
})
