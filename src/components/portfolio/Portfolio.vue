<template>
  <div class="row mt-3">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" ></app-stock>
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

