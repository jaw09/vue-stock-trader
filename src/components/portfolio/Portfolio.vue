<template>
  <div class="row mt-3">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" ></app-stock>
    <div v-if="stocks.length === 0" class="col-md-6 offset-md-3">
      <p class="h3">You haven't bought stocks yet.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "portfolioStocks"
    })
  },
  components: {
    AppStock: stock
  }
};
</script>

