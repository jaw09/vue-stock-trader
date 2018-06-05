<template>
  <div class="mt-3 row">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Amazon", price: 1670 },
        { id: 2, name: "Apple", price: 192 },
        { id: 3, name: "Microsoft", price: 102 },
        { id: 4, name: "Alphabet", price: 1137 }
      ]
    };
  },
  components: {
    AppStock: Stock
  }
};
</script>
