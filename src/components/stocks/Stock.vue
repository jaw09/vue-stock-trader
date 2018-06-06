<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
    <div class="card mb-3">
      <div class="card-header  bg-success  text-white">
        <div>{{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <input type="number"
        class="form-control form-style"
        placeholder="Quantity"
        v-model="quantity">
        <button class="btn btn-success"
        @click="buyStock"
        :disabled="btnDisabled">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
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
