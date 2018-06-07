<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-rounded">
  <router-link to="/" class="navbar-brand">Stcok Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link  tag="li"
                    to="/portfolio"
                    active-class="active"
                    class="nav-item">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link  tag="li"
                    to="/stocks"
                    active-class="active"
                    class="nav-item">
        <a class="nav-link">Stocks</a>
      </router-link>
    </ul>
    <ul class="navbar-nav my-2 my-lg-0">
      <li class="nav-item">
        <a  href="#"
            class="nav-link"
            @click.prevent="endDay">
            End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
          <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
        </div>
      </li>
      <li class="navbar-text">Funds: {{ getFunds | currency }}</li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    getFunds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      fetchData: "loadData"
    }),
    endDay() {
      this.$store.dispatch("randomizeStocks");
    },
    saveData() {
      const data = {
        stocks: this.$store.getters.stocks,
        portfolioStocks: this.$store.getters.portfolioStocks,
        fund: this.$store.getters.funds
      };
      this.$http
        .put("https://vue-stock-trader-4ebbd.firebaseio.com/data.json", data)
        .then(res => {
          if (res.status === 200) {
            this.$emit("notify");
          }
        });
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>


<style lang="scss">
.navbar-rounded {
  border-radius: 10px;
}
</style>

