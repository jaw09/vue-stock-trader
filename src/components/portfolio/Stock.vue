<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
    <div class="card mb-3">
      <div class="card-header  bg-info  text-white">
        <div>{{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity {{ stock.quantity }})</small>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <input type="number"
        class="form-control form-style"
        placeholder="Quantity"
        v-model="quantity">
        <button class="btn btn-info"
        @click="sellStock"
        :disabled="btnDisabled">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({ sellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellOrder(order);
      this.quantity = 0;
    }
  },
  computed: {
    btnDisabled() {
      return this.quantity <= 0 || !Number.isInteger(Number(this.quantity));
    }
  }
};
</script>


<style lang="scss">
.form-style {
  width: 70%;
}
</style>
